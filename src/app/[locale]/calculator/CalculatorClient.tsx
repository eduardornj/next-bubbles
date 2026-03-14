"use client";

import { useSearchParams } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { Suspense, useState, useEffect, useRef } from 'react';
import {
    Calculator, ArrowRight, Sparkles,
    CheckCircle2, AlertTriangle, Home,
    Settings, Camera, Image as ImageIcon,
    Ruler, CornerDownRight, Hash, X
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

// ─────────────────────────────────────────────
// MCP PRICING ENGINE — pricing.md v2.3
// Exposed as pure functions for WebMCP / URL-param invocation.
// OverhangRate: Aluminum $4/$5/$7 | Vinyl $3.50/$4.50/$6.50
// LaborRate:    New Construction $4 | R&R 1-story $6 | R&R 2-story $7
// ─────────────────────────────────────────────

export type JobType = 'new' | 'replace_1' | 'replace_2';
export type Material = 'aluminum' | 'vinyl';

/** Returns the per-LF overhang rate or -1 if blocked (>36"). */
export function getOverhangRate(overhangInches: number, material: Material): number {
    if (overhangInches <= 12) return material === 'vinyl' ? 3.50 : 4.00;
    if (overhangInches <= 24) return material === 'vinyl' ? 4.50 : 5.00;
    if (overhangInches <= 36) return material === 'vinyl' ? 6.50 : 7.00;
    return -1; // >36" → requires on-site structural review
}

/** Returns the per-LF labor rate for the job type. */
export function getLaborRate(jobType: JobType): number {
    if (jobType === 'new') return 4;
    if (jobType === 'replace_2') return 7;
    return 6; // replace_1
}

/** Core formula: LF × (overhangRate + laborRate). Returns -1 if blocked. */
export function calculateTotal(lf: number, overhang: number, jobType: JobType, material: Material): number {
    const overhangRate = getOverhangRate(overhang, material);
    if (overhangRate === -1) return -1;
    return lf * (overhangRate + getLaborRate(jobType));
}

/** Deposit schedule per pricing.md §PASSO 7. */
export function calculateDeposit(total: number): number {
    if (total <= 2500) return total * 0.20;
    if (total <= 4000) return 500;
    return total * 0.30;
}

/** Parses URL search params into calculator inputs (for MCP / direct linking). */
export function parseUrlParams(params: URLSearchParams): {
    lf: number; overhang: number; jobType: JobType | null; material: Material;
} {
    const lf = Math.min(600, Math.max(50, Number(params.get('lf')) || 100));
    const overhang = Math.min(48, Math.max(6, Number(params.get('overhang')) || 16));
    const rawType = params.get('type') as JobType | null;
    const jobType = (['new', 'replace_1', 'replace_2'] as JobType[]).includes(rawType as JobType)
        ? rawType as JobType
        : null;
    const rawMat = params.get('material') as Material | null;
    const material = rawMat === 'vinyl' ? 'vinyl' : 'aluminum';
    return { lf, overhang, jobType, material };
}

// ─────────────────────────────────────────────
// IMAGE GUIDE MODAL
// ─────────────────────────────────────────────

type GuideImage = { src: string; alt: string; caption: string };

function ImageModal({ img, onClose }: { img: GuideImage; onClose: () => void }) {
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [onClose]);

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in duration-200"
            onClick={onClose}
        >
            <div
                className="relative max-w-2xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200"
                onClick={e => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 w-9 h-9 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
                >
                    <X className="w-5 h-5" />
                </button>
                <Image src={img.src} alt={img.alt} width={700} height={450} className="w-full object-contain" />
                <p className="px-6 py-4 text-sm font-medium text-gray-600 text-center border-t border-gray-100">{img.caption}</p>
            </div>
        </div>
    );
}

// ─────────────────────────────────────────────
// MEASUREMENT GUIDE (COLLAPSIBLE)
// ─────────────────────────────────────────────

function MeasurementGuide({ t }: { t: (key: string) => string }) {
    const [open, setOpen] = useState(false);
    const [modalImg, setModalImg] = useState<GuideImage | null>(null);

    const steps = [
        {
            icon: Ruler,
            color: 'text-blue-600',
            bg: 'bg-blue-50',
            title: t('guideStep1Title'),
            desc: t('guideStep1Desc'),
            img: { src: '/images/guide_linear_feet.webp', alt: t('guideStep1ImgAlt'), caption: t('guideStep1Caption') }
        },
        {
            icon: CornerDownRight,
            color: 'text-purple-600',
            bg: 'bg-purple-50',
            title: t('guideStep2Title'),
            desc: t('guideStep2Desc'),
            img: { src: '/images/guide_overhang.webp', alt: t('guideStep2ImgAlt'), caption: t('guideStep2Caption') }
        },
        {
            icon: Hash,
            color: 'text-emerald-600',
            bg: 'bg-emerald-50',
            title: t('guideStep3Title'),
            desc: t('guideStep3Desc'),
            img: { src: '/images/guide_corners.webp', alt: t('guideStep3ImgAlt'), caption: t('guideStep3Caption') }
        },
    ];

    return (
        <>
            {modalImg && <ImageModal img={modalImg} onClose={() => setModalImg(null)} />}

            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl border border-slate-200 overflow-hidden">
                {/* Header */}
                <button
                    onClick={() => setOpen(o => !o)}
                    className="w-full flex items-center justify-between px-6 py-4 hover:bg-slate-100/60 transition-colors"
                >
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                            <Ruler className="w-4 h-4" />
                        </div>
                        <div className="text-left">
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block leading-none mb-0.5">{t('guideLabel')}</span>
                            <span className="text-sm font-bold text-slate-700">{t('guideTitle')}</span>
                        </div>
                    </div>
                    <svg
                        className={cn('w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300', open && 'rotate-180')}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

                {/* Expandable body */}
                <div className={cn(
                    'grid transition-all duration-300 ease-in-out',
                    open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                )}>
                    <div className="overflow-hidden">
                        <div className="px-6 pb-6 space-y-4 border-t border-slate-200 pt-4">
                            {steps.map((step, i) => (
                                <div key={i} className="flex gap-4 items-start">
                                    <div className={cn('w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5', step.bg, step.color)}>
                                        <step.icon className="w-5 h-5" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-bold text-sm text-slate-800 mb-0.5">{step.title}</p>
                                        <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
                                        <button
                                            onClick={() => setModalImg(step.img)}
                                            className="mt-2 inline-flex items-center gap-1.5 text-[11px] font-bold text-blue-600 hover:text-blue-800 transition-colors"
                                        >
                                            <ImageIcon className="w-3.5 h-3.5" />
                                            {t('viewDiagram')}
                                        </button>
                                    </div>
                                </div>
                            ))}
                            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex gap-3 items-start">
                                <span className="text-amber-500 text-lg leading-none mt-0.5">💡</span>
                                <p className="text-xs text-amber-800 font-medium leading-relaxed">
                                    <strong>{t('guideTipBold')}</strong> {t('guideTipText')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

// ─────────────────────────────────────────────
// MAIN CALCULATOR APP
// ─────────────────────────────────────────────

function SmartCalculatorApp() {
    const t = useTranslations('calculator');
    const locale = useLocale();
    const lp = (path: string) => locale === 'en' ? path : `/${locale}${path}`;
    const searchParams = useSearchParams();

    // --- MCP: parse URL params on mount ---
    const urlParsed = parseUrlParams(searchParams);

    const [view, setView] = useState<'intro' | 'type_select' | 'measurements' | 'ai_repair' | 'repair_contact' | 'result'>(
        urlParsed.jobType ? 'result' : 'intro'
    );
    const [projectType, setProjectType] = useState<JobType | 'repair' | null>(urlParsed.jobType);
    const [material, setMaterial] = useState<Material>(urlParsed.material);
    const [linearFeet, setLinearFeet] = useState<number>(urlParsed.lf);
    const [overhang, setOverhang] = useState<number>(urlParsed.overhang);

    // Repair photo state — accumulate up to 5 File objects
    const [repairFiles, setRepairFiles] = useState<File[]>([]);
    const repairPickerRef = useRef<HTMLInputElement>(null);
    const [repairStatus, setRepairStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const addPhotos = (e: React.ChangeEvent<HTMLInputElement>) => {
        const incoming = Array.from(e.target.files ?? []);
        if (!incoming.length) return;
        setRepairFiles(prev => [...prev, ...incoming].slice(0, 5));
        e.target.value = ''; // reset so same file can be picked again
    };

    const [repairPreviews, setRepairPreviews] = useState<string[]>([]);
    useEffect(() => {
        const urls = repairFiles.map(f => URL.createObjectURL(f));
        setRepairPreviews(urls);
        return () => urls.forEach(u => URL.revokeObjectURL(u));
    }, [repairFiles]);

    const handleRepairSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setRepairStatus('sending');
        try {
            const form = e.currentTarget;

            // Get reCAPTCHA token
            const recaptchaToken = await (window as Window & { grecaptcha?: { execute: (key: string, options: { action: string }) => Promise<string> } }).grecaptcha?.execute(
                "6LfcYYosAAAAAFuEjO8kGDIqOjwsXMoKmWgBGyuh",
                { action: "repair_form_submit" }
            ) ?? "";

            const fd = new FormData();
            fd.append('name', (form.elements.namedItem('name') as HTMLInputElement).value);
            fd.append('phone', (form.elements.namedItem('phone') as HTMLInputElement).value);
            fd.append('address', (form.elements.namedItem('address') as HTMLInputElement).value);
            fd.append('description', (form.elements.namedItem('description') as HTMLTextAreaElement).value ?? '');
            repairFiles.forEach(f => fd.append('photos', f));
            fd.append('recaptcha_token', recaptchaToken);

            const res = await fetch('/api/repair-quote', { method: 'POST', body: fd });
            if (!res.ok) throw new Error('server error');
            setRepairStatus('success');
            if (typeof window !== "undefined") {
                if (typeof (window as Window & { gtag?: (...args: unknown[]) => void }).gtag === "function") {
                    (window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.("event", "qualify_lead");
                }
                if (typeof (window as Window & { fbq?: (...args: unknown[]) => void }).fbq === "function") {
                    (window as Window & { fbq?: (...args: unknown[]) => void }).fbq?.("track", "Lead");
                }
            }
        } catch {
            setRepairStatus('error');
        }
    };

    const handleTypeSelect = (type: JobType | 'repair') => {
        setProjectType(type);
        setView(type === 'repair' ? 'ai_repair' : 'measurements');
    };

    // Calculate
    const isBlocked = overhang > 36;
    const jobType = projectType !== 'repair' ? projectType as JobType : null;
    const baseTotal = (view === 'result' && jobType && !isBlocked)
        ? calculateTotal(linearFeet, overhang, jobType, material)
        : 0;
    const finalTotal = baseTotal > 0 ? baseTotal : 0;
    const deposit = finalTotal > 0 ? calculateDeposit(finalTotal) : 0;

    const jobLabel = projectType === 'new' ? t('jobLabelNew')
        : projectType === 'replace_1' ? t('jobLabelR1')
            : projectType === 'replace_2' ? t('jobLabelR2')
                : '';

    return (
        <>
            {/* ── WebMCP Structured Data ── */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "SoftwareApplication",
                        "name": "Bubbles Enterprise Soffit & Fascia Estimator",
                        "applicationCategory": "BusinessApplication",
                        "description": "Calculates soffit and fascia installation prices based on linear feet, overhang depth, job type, and material.",
                        "dateModified": "2026-03-05",
                        "url": "https://bubblesenterprise.com/calculator",
                        "featureList": [
                            "URL parameter driven: ?lf=200&overhang=16&type=replace_1&material=aluminum",
                            "MCP pricing engine: getOverhangRate, getLaborRate, calculateTotal, calculateDeposit",
                            "Supports: new | replace_1 | replace_2 | repair",
                            "Materials: aluminum | vinyl",
                            "Overhang ranges: ≤12in ($4/$3.50) | 13-24in ($5/$4.50) | 25-36in ($7/$6.50) | >36in blocked"
                        ],
                        "potentialAction": {
                            "@type": "SearchAction",
                            "target": {
                                "@type": "EntryPoint",
                                "urlTemplate": "https://bubblesenterprise.com/calculator?lf={lf}&overhang={overhang}&type={type}&material={material}",
                                "actionPlatform": "http://schema.org/DesktopWebPlatform"
                            },
                            "query-input": "required name=lf required name=overhang name=type name=material"
                        }
                    })
                }}
            />

            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            {/* @ts-ignore — toolname/tooldescription are WebMCP W3C Draft attributes */}
            <div
                className="w-full max-w-4xl mx-auto min-h-[600px] flex flex-col bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100 relative"
                // @ts-expect-error — WebMCP W3C Draft attributes
                toolname="calculateSoffitEstimate"
                tooldescription="Interactive soffit and fascia cost calculator. Input linear feet, overhang depth (inches), job type (new/replace_1/replace_2/repair), and material (aluminum/vinyl). Returns total project cost, deposit, and overhang rate."
            >

                {/* Nav Bar */}
                <div className="h-16 bg-gray-50 border-b border-gray-100 flex items-center px-8 justify-between relative z-20">
                    <div className="flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-bubble-primary" />
                        <span className="font-bold text-bubble-navy tracking-tight">Bubbles<span className="text-bubble-primary">AI</span> {t('estimator')}</span>
                    </div>
                    {view !== 'intro' && (
                        <button
                            onClick={() => { setView('intro'); setRepairFiles([]); }}
                            className="text-xs font-bold text-gray-500 hover:text-bubble-primary uppercase tracking-wider"
                        >
                            {t('restart')}
                        </button>
                    )}
                </div>

                {/* ── INTRO ── */}
                {view === 'intro' && (
                    <div className="flex-1 p-10 md:p-16 flex flex-col items-center justify-center text-center animate-in fade-in zoom-in-95 duration-500">
                        <div className="w-24 h-24 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/30 mb-8 transform hover:scale-105 transition-transform">
                            <Calculator className="w-12 h-12 text-white" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-bubble-navy mb-4 tracking-tight">
                            {t('introTitle')}
                        </h1>
                        <p className="text-xl text-gray-500 max-w-lg mb-12">
                            {t('introSubtitle')}
                        </p>
                        <button
                            onClick={() => setView('type_select')}
                            className="group relative inline-flex items-center justify-center gap-3 bg-gray-900 text-white font-bold text-lg py-5 px-10 rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-gray-900/30"
                        >
                            <span className="relative z-10">{t('startEstimate')}</span>
                            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                            <div className="absolute inset-0 bg-gradient-to-r from-bubble-primary to-bubble-dark opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </button>
                    </div>
                )}

                {/* ── TYPE SELECT ── */}
                {view === 'type_select' && (
                    <div className="flex-1 p-8 md:p-12 flex flex-col animate-in slide-in-from-right-8 duration-500">
                        <h2 className="text-3xl font-extrabold text-center text-bubble-navy mb-2">{t('typeSelectTitle')}</h2>
                        <p className="text-center text-gray-500 mb-10">{t('typeSelectSubtitle')}</p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto w-full">
                            {[
                                { type: 'new' as const, label: t('type_new'), sub: t('type_new_desc'), icon: Home, tw: 'hover:border-bubble-primary hover:shadow-blue-500/10', ico: 'bg-blue-50 text-bubble-primary' },
                                { type: 'replace_1' as const, label: t('type_r1'), sub: t('type_r1_desc'), icon: Settings, tw: 'hover:border-purple-500 hover:shadow-purple-500/10', ico: 'bg-purple-50 text-purple-600' },
                                { type: 'replace_2' as const, label: t('type_r2'), sub: t('type_r2_desc'), icon: Settings, tw: 'hover:border-orange-400 hover:shadow-orange-500/10', ico: 'bg-orange-50 text-orange-500' },
                            ].map(({ type, label, sub, icon: Icon, tw, ico }) => (
                                <button key={type} onClick={() => handleTypeSelect(type)}
                                    className={cn('text-left group bg-white border-2 border-gray-100 p-6 rounded-3xl hover:shadow-2xl transition-all', tw)}>
                                    <div className={cn('w-12 h-12 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform', ico)}>
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-base font-bold text-gray-900 mb-1">{label}</h3>
                                    <p className="text-sm text-gray-500">{sub}</p>
                                </button>
                            ))}

                            <button onClick={() => handleTypeSelect('repair')}
                                className="text-left relative group bg-gradient-to-br from-gray-900 to-black border-2 border-gray-900 p-6 rounded-3xl hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl group-hover:bg-cyan-400/30 transition-colors"></div>
                                <div className="w-12 h-12 bg-white/10 text-cyan-400 rounded-2xl flex items-center justify-center mb-5 border border-white/10 group-hover:scale-110 transition-transform relative z-10">
                                    <Camera className="w-6 h-6" />
                                </div>
                                <h3 className="text-base font-bold text-white mb-1 relative z-10">{t('type_repair')}</h3>
                                <p className="text-sm text-gray-400 relative z-10">{t('type_repair_desc')}</p>
                                <div className="absolute top-4 right-4 px-2.5 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-[9px] font-bold uppercase tracking-wider rounded-full">
                                    {t('photo')}
                                </div>
                            </button>
                        </div>
                    </div>
                )}

                {/* ── REPAIR FLOW (FASE 1 + FASE 2) ──
                     The form wraps BOTH phases so the file input stays alive in the DOM.
                     The browser natively keeps file selection on the input — no DataTransfer needed.
                     Same technique as the working quote.html / repairquote.html.
                ── */}
                {/* Picker input — outside form, no name, accumulates files into state */}
                <input ref={repairPickerRef} type="file" accept="image/*" multiple className="hidden" onChange={addPhotos} />

                {(view === 'ai_repair' || view === 'repair_contact' || repairStatus === 'success') && (
                    <form
                        className="flex-1 flex flex-col overflow-y-auto"
                        onSubmit={handleRepairSubmit}
                        // @ts-expect-error — WebMCP W3C Draft attributes
                        toolname="requestRepairQuote"
                        tooldescription="Submit a soffit or fascia repair quote request with photos of the damage. Triggers same-day callback from Bubbles Enterprise in Orlando, FL."
                    >

                        {/* ── SUCCESS ── */}
                        {repairStatus === 'success' && (
                            <div className="flex-1 p-8 md:p-12 flex flex-col items-center justify-center text-center animate-in fade-in zoom-in-95 duration-500">
                                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6 relative">
                                    <div className="absolute inset-0 border-4 border-emerald-500 rounded-full animate-ping opacity-20"></div>
                                    <CheckCircle2 className="w-10 h-10 text-emerald-600 relative z-10" />
                                </div>
                                <h2 className="text-3xl font-extrabold text-gray-900 mb-2">{t('successTitle')}</h2>
                                <p className="text-gray-500 max-w-sm mb-8">{t('successMsg')}</p>
                                <button type="button" onClick={() => { setView('intro'); setRepairFiles([]); setRepairStatus('idle'); }}
                                    className="inline-flex items-center gap-2 bg-gray-900 text-white font-bold px-6 py-3 rounded-xl hover:bg-black transition-colors">
                                    <ArrowRight className="w-4 h-4" /> {t('backToEstimator')}
                                </button>
                            </div>
                        )}

                        {/* ── FASE 1: PHOTO UPLOAD ── */}
                        <div className={cn('flex-1 p-8 md:p-12 flex flex-col items-center animate-in fade-in duration-500', (view !== 'ai_repair' || repairStatus === 'success') && 'hidden')}>
                            <div className="text-center mb-8">
                                <div className="inline-flex items-center gap-2 bg-cyan-50 border border-cyan-200 text-cyan-700 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
                                    <Camera className="w-3.5 h-3.5" /> {t('uploadPhotosStep')}
                                </div>
                                <h2 className="text-3xl font-extrabold text-gray-900 mb-2">{t('showDamageTitle')}</h2>
                                <p className="text-gray-500 max-w-md mx-auto">{t('showDamageSubtitle')}</p>
                            </div>

                            <div className="w-full max-w-xl space-y-5">
                                {/* Tip */}
                                <div className="bg-amber-50 border border-amber-200 rounded-2xl px-5 py-4 flex gap-3 items-start">
                                    <span className="text-amber-500 text-xl leading-none mt-0.5">💡</span>
                                    <div>
                                        <p className="text-sm font-bold text-amber-900">{t('photosTip')}</p>
                                        <p className="text-xs text-amber-700 mt-0.5 leading-relaxed">
                                            {t('photosHelpText')}
                                        </p>
                                    </div>
                                </div>

                                {/* Photos grid */}
                                {repairPreviews.length > 0 && (
                                    <div className="grid grid-cols-3 gap-3 animate-in fade-in duration-300">
                                        {repairPreviews.map((src, i) => (
                                            <div key={i} className="relative aspect-square rounded-2xl overflow-hidden border-2 border-emerald-400 shadow-md">
                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                <img src={src} alt={`Damage photo ${i + 1}`} className="w-full h-full object-cover" />
                                                <div className="absolute top-1.5 left-1.5 bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                                                    {i + 1}
                                                </div>
                                            </div>
                                        ))}
                                        {/* Add more slot */}
                                        {repairPreviews.length < 5 && (
                                            <div
                                                className="aspect-square rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 flex flex-col items-center justify-center cursor-pointer hover:border-bubble-primary hover:bg-blue-50/30 transition-all group"
                                                onClick={() => repairPickerRef.current?.click()}
                                            >
                                                <Camera className="w-6 h-6 text-gray-400 group-hover:text-bubble-primary mb-1" />
                                                <span className="text-[10px] font-bold text-gray-400 group-hover:text-bubble-primary">{t('addPhoto')}</span>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* Empty state */}
                                {repairPreviews.length === 0 && (
                                    <div
                                        className="border-2 border-dashed border-gray-200 bg-gray-50 rounded-3xl p-12 flex flex-col items-center justify-center hover:bg-blue-50/30 hover:border-bubble-primary/40 transition-all group cursor-pointer"
                                        onClick={() => repairPickerRef.current?.click()}
                                    >
                                        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform group-hover:bg-blue-100">
                                            <ImageIcon className="w-10 h-10 text-gray-400 group-hover:text-bubble-primary" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-1">{t('tapUpload')}</h3>
                                        <p className="text-gray-400 text-sm text-center max-w-xs">{t('tapUploadDesc')}</p>
                                        <span className="mt-5 inline-flex items-center gap-2 bg-gray-900 text-white text-sm font-bold px-5 py-2.5 rounded-full hover:bg-black transition-colors">
                                            <Camera className="w-4 h-4" /> {t('choosePhotos')}
                                        </span>
                                    </div>
                                )}

                                {/* Status bar */}
                                {repairPreviews.length > 0 && (
                                    <div className={cn(
                                        'rounded-2xl px-5 py-4 flex items-center gap-3',
                                        repairPreviews.length >= 2 ? 'bg-emerald-50 border border-emerald-200' : 'bg-amber-50 border border-amber-200'
                                    )}>
                                        {repairPreviews.length >= 2
                                            ? <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                                            : <span className="text-amber-500 shrink-0">⚠️</span>
                                        }
                                        <p className={cn('text-sm font-semibold', repairPreviews.length >= 2 ? 'text-emerald-800' : 'text-amber-800')}>
                                            {repairPreviews.length >= 2
                                                ? t('photosReady', { count: repairPreviews.length })
                                                : t('photosNeedMore')
                                            }
                                        </p>
                                    </div>
                                )}

                                {/* Continue button */}
                                {repairPreviews.length > 0 && (
                                    <button
                                        type="button"
                                        onClick={() => setView('repair_contact')}
                                        className="w-full bg-gray-900 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 hover:scale-[1.02] hover:bg-black transition-all shadow-xl shadow-gray-900/20 text-lg"
                                    >
                                        {t('continueFillInfo')} <ArrowRight className="w-5 h-5" />
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* ── FASE 2: CONTACT FORM ── */}
                        <div className={cn('flex-1 p-8 md:p-12 flex flex-col items-center animate-in slide-in-from-right-8 duration-500 overflow-y-auto', (view !== 'repair_contact' || repairStatus === 'success') && 'hidden')}>
                            <div className="w-full max-w-2xl">
                                <div className="text-center mb-7">
                                    <div className="inline-flex items-center gap-2 bg-cyan-50 border border-cyan-200 text-cyan-700 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
                                        <ArrowRight className="w-3.5 h-3.5" /> {t('repairStep2Label')}
                                    </div>
                                    <h2 className="text-3xl font-extrabold text-gray-900 mb-2">{t('repairStep2Title')}</h2>
                                    <p className="text-gray-500 max-w-md mx-auto">{t('repairStep2Subtitle')}</p>
                                </div>

                                {/* Photo thumbnails */}
                                {repairPreviews.length > 0 && (
                                    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 mb-6">
                                        <div className="flex items-center justify-between mb-3">
                                            <p className="text-sm font-bold text-gray-800 flex items-center gap-1.5">
                                                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                                {t('photosAttached', { count: repairPreviews.length })}
                                            </p>
                                            <button type="button" onClick={() => setView('ai_repair')} className="text-xs font-bold text-gray-400 hover:text-red-500 transition-colors">
                                                {t('editPhotos')}
                                            </button>
                                        </div>
                                        <div className="flex gap-2 flex-wrap">
                                            {repairPreviews.map((src, i) => (
                                                // eslint-disable-next-line @next/next/no-img-element
                                                <img key={i} src={src} alt={`Photo ${i + 1}`} className="w-14 h-14 rounded-lg object-cover border-2 border-emerald-300" />
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <div className="space-y-5">
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="repair-name" className="block text-sm font-bold text-gray-700 mb-1.5">{t('labelName')} <span className="text-red-500">*</span></label>
                                            <input id="repair-name" type="text" name="name" required autoComplete="name" placeholder={t('placeholderName')}
                                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-bubble-primary focus:border-bubble-primary outline-none transition-all text-sm font-medium text-gray-900" />
                                        </div>
                                        <div>
                                            <label htmlFor="repair-phone" className="block text-sm font-bold text-gray-700 mb-1.5">{t('labelPhone')} <span className="text-red-500">*</span></label>
                                            <input id="repair-phone" type="tel" name="phone" required autoComplete="tel" placeholder="(407) 000-0000"
                                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-bubble-primary focus:border-bubble-primary outline-none transition-all text-sm font-medium text-gray-900" />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="repair-address" className="block text-sm font-bold text-gray-700 mb-1.5">{t('labelAddress')} <span className="text-red-500">*</span></label>
                                        <input id="repair-address" type="text" name="address" required autoComplete="street-address" placeholder={t('placeholderAddress')}
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-bubble-primary focus:border-bubble-primary outline-none transition-all text-sm font-medium text-gray-900" />
                                    </div>
                                    <div>
                                        <label htmlFor="repair-desc" className="block text-sm font-bold text-gray-700 mb-1.5">{t('labelDescription')}</label>
                                        <textarea id="repair-desc" name="description" rows={3} placeholder={t('placeholderDescription')}
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-bubble-primary focus:border-bubble-primary outline-none transition-all text-sm font-medium text-gray-900 resize-none" />
                                    </div>
                                    <button type="submit" disabled={repairStatus === 'sending'}
                                        className="w-full bg-gradient-to-r from-bubble-primary to-bubble-dark text-white font-extrabold py-5 px-6 rounded-2xl flex items-center justify-center gap-2 hover:scale-[1.02] transition-all shadow-2xl shadow-blue-500/30 text-lg disabled:opacity-70 disabled:cursor-not-allowed disabled:scale-100"
                                    >
                                        {repairStatus === 'sending'
                                            ? <><span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" /> {t('sending')}</>
                                            : <><Camera className="w-5 h-5" /> {t('sendPhotosBtn')}</>
                                        }
                                    </button>
                                    {repairStatus === 'error' && (
                                        <p className="text-center text-sm font-bold text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                                            {t('repairError')}
                                        </p>
                                    )}
                                    <p className="text-center text-xs text-gray-400 flex items-center justify-center gap-1.5">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                                        {t('repairCallbackNote')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </form>
                )}

                {/* ── MEASUREMENTS ── */}
                {view === 'measurements' && (
                    <div className="flex-1 p-8 md:p-12 flex flex-col animate-in slide-in-from-right-8 duration-500 overflow-y-auto">
                        <div className="flex justify-between items-end mb-8 border-b border-gray-100 pb-6">
                            <div>
                                <span className="text-bubble-primary font-bold text-sm tracking-widest uppercase mb-1 block">{t('measStep')}</span>
                                <h2 className="text-3xl font-extrabold text-bubble-navy">{t('measTitle')}</h2>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-10 items-start">
                            {/* Left: Guide + Sliders */}
                            <div className="space-y-8">
                                <MeasurementGuide t={t} />

                                {/* Linear Feet */}
                                <div>
                                    <label htmlFor="calc-lf" className="flex items-center justify-between text-sm font-bold text-gray-700 mb-4">
                                        <span>{t('totalLinearFeet')}</span>
                                        <span className="text-bubble-primary text-xl">{linearFeet} ft</span>
                                    </label>
                                    <input id="calc-lf" type="range" min="50" max="600" step="10"
                                        value={linearFeet} onChange={e => setLinearFeet(Number(e.target.value))}
                                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-bubble-primary" />
                                    <div className="flex justify-between text-xs text-gray-400 font-bold mt-2">
                                        <span>{t('lfSmall')}</span><span>{t('lfLarge')}</span>
                                    </div>
                                </div>

                                {/* Overhang */}
                                <div>
                                    <label htmlFor="calc-overhang" className="flex items-center justify-between text-sm font-bold text-gray-700 mb-4">
                                        <span>{t('overhangDepth')}</span>
                                        <span className="text-bubble-primary text-xl">{overhang}&quot;</span>
                                    </label>
                                    <input id="calc-overhang" type="range" min="6" max="48" step="2"
                                        value={overhang} onChange={e => setOverhang(Number(e.target.value))}
                                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-bubble-primary" />
                                    <div className="flex justify-between text-xs text-gray-400 font-bold mt-2">
                                        <span>{t('ovhStandard')}</span><span>{t('ovhDeep')}</span>
                                    </div>
                                    {overhang > 36 && (
                                        <p className="mt-3 text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-xl px-4 py-2 font-medium">
                                            {t('ovhWarning')}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Right: Material */}
                            <div>
                                <span className="block text-sm font-bold text-gray-700 mb-4">{t('baseMaterial')}</span>
                                <div className="space-y-4">
                                    {([
                                        { val: 'aluminum', label: t('matAluminum'), sub: t('matAluminumDesc') },
                                        { val: 'vinyl', label: t('matVinyl'), sub: t('matVinylDesc') },
                                    ] as { val: Material; label: string; sub: string }[]).map(({ val, label, sub }) => (
                                        <button key={val} onClick={() => setMaterial(val)}
                                            className={cn('w-full text-left p-5 rounded-2xl border-2 transition-all flex justify-between items-center',
                                                material === val ? 'border-bubble-primary bg-blue-50 ring-4 ring-blue-500/10' : 'border-gray-200 hover:border-gray-300 bg-white'
                                            )}>
                                            <div>
                                                <div className="font-bold text-lg text-gray-900">{label}</div>
                                                <div className="text-sm text-gray-500 font-medium mt-1">{sub}</div>
                                            </div>
                                            <div className={cn('w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0', material === val ? 'border-bubble-primary' : 'border-gray-300')}>
                                                {material === val && <div className="w-3 h-3 bg-bubble-primary rounded-full" />}
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 flex justify-end">
                            <button
                                onClick={() => setView('result')}
                                className="bg-gray-900 text-white font-bold py-4 px-8 rounded-xl flex items-center gap-2 hover:scale-105 transition-transform shadow-xl shadow-gray-900/20"
                            >
                                {t('generateQuote')} <Sparkles className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                )}

                {/* ── RESULT ── */}
                {view === 'result' && (
                    <div className="flex-1 p-8 md:p-12 flex flex-col justify-center animate-in zoom-in-95 duration-700">
                        <div className="text-center mb-10">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full mb-6 relative">
                                <div className="absolute inset-0 border-4 border-emerald-500 rounded-full animate-ping opacity-20"></div>
                                <CheckCircle2 className="w-10 h-10 relative z-10" />
                            </div>
                            <h2 className="text-4xl font-extrabold text-gray-900">{t('resultTitle')}</h2>
                            <p className="text-gray-500 mt-2 font-medium">{t('resultSubtitle')}</p>
                        </div>

                        {isBlocked ? (
                            <div className="bg-red-50 p-6 rounded-2xl border border-red-100 flex items-start gap-4">
                                <AlertTriangle className="w-8 h-8 text-red-500 shrink-0" />
                                <div>
                                    <h3 className="font-bold text-red-900 mb-2">{t('blockedTitle')}</h3>
                                    <p className="text-sm text-red-700">{t('blockedDesc')}</p>
                                </div>
                            </div>
                        ) : (
                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-200">
                                <div className="flex justify-between items-end mb-6 pb-6 border-b border-gray-200">
                                    <div>
                                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">{t('totalEstimate')}</p>
                                        <p className="text-5xl font-extrabold text-bubble-navy tracking-tight">
                                            ${finalTotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{t('toSchedule')}</p>
                                        <p className="text-2xl font-bold text-emerald-600">
                                            {t('deposit')}: ${deposit.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="bg-white border border-gray-200 px-3 py-1.5 rounded-lg text-sm font-bold text-gray-700">{jobLabel}</span>
                                    <span className="bg-white border border-gray-200 px-3 py-1.5 rounded-lg text-sm font-bold text-gray-700 capitalize">{material} Soffit</span>
                                    <span className="bg-white border border-gray-200 px-3 py-1.5 rounded-lg text-sm font-bold text-gray-700">{linearFeet} ft</span>
                                    <span className="bg-white border border-gray-200 px-3 py-1.5 rounded-lg text-sm font-bold text-gray-700">{overhang}&quot; {t('overhang')}</span>
                                </div>

                                <p className="text-xs text-gray-400 mb-6 italic">
                                    {t('resultDisclaimer')} <Link href={lp('/terms')} className="underline hover:text-gray-600">{t('serviceAgreement')}</Link>.
                                </p>

                                <Link
                                    href={`${lp('/contact')}?total=${Math.round(finalTotal)}&type=${projectType}&material=${material}&lf=${linearFeet}&overhang=${overhang}`}
                                    className="w-full bg-gray-900 text-white font-bold py-5 px-6 rounded-2xl flex items-center justify-center gap-2 hover:scale-[1.02] hover:bg-black transition-all shadow-2xl shadow-gray-900/30 text-xl"
                                >
                                    {t('lockQuote')} <ArrowRight className="w-6 h-6" />
                                </Link>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </>
    );
}

// ─────────────────────────────────────────────
// EXPORTED CLIENT WRAPPER (with Suspense for useSearchParams)
// ─────────────────────────────────────────────

export default function CalculatorClient() {
    return (
        <Suspense fallback={
            <div className="w-full max-w-4xl h-[600px] flex items-center justify-center bg-white rounded-[2.5rem] shadow-xl">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 border-4 border-gray-200 border-t-bubble-primary rounded-full animate-spin"></div>
                    <p className="font-bold text-gray-400 animate-pulse">Loading...</p>
                </div>
            </div>
        }>
            <SmartCalculatorApp />
        </Suspense>
    );
}
