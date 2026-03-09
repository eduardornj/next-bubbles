"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    ArrowRight, X, Lock, ChevronLeft, ChevronRight,
    Eye, EyeOff, LogOut, Upload, Phone, Instagram,
} from "lucide-react";

const HIDDEN_KEY = "gallery_hidden_images";

// ─── Catalog with SEO alt text ───────────────────────────────────────────────
interface WorkItem { file: string; alt: string; }

const WORKS: WorkItem[] = [
    { file: "IMG_3511.webp", alt: "New construction farmhouse soffit and fascia installation - dark fascia wrap with white soffit, Central Florida" },
    { file: "soffit-porch-new-construction.webp", alt: "Vented aluminum soffit installation on L-shaped porch overhang - new construction residential project" },
    { file: "ceiling.webp", alt: "Close-up of vented aluminum soffit panels installed under porch overhang - white soffit with ventilation perforations" },
    { file: "IMG_0313.webp", alt: "Bronze vented aluminum soffit installation on residential home - under-eave view, Orlando FL" },
    { file: "IMG_3164.webp", alt: "White vented soffit with red fascia installation - side view of completed project, Central Florida" },
    { file: "IMG_3628.webp", alt: "White soffit installation on new construction home with palm tree - Central Florida" },
    { file: "soffit-fascia-two-story.webp", alt: "Soffit and fascia installation on two-story residential home - brown fascia with matching soffit, Orlando area" },
    { file: "soffit-fascia-brick-home.webp", alt: "White soffit and fascia installation on brick residential home - complete eave system, Central Florida" },
    { file: "soffit-branco-fascia-bronze.webp", alt: "Before and after soffit repair - white soffit with bronze fascia replacement on residential home" },
    { file: "qw31230.webp", alt: "New construction soffit installation in progress - white aluminum vented soffit under blue sky" },
    { file: "work9.webp", alt: "Vented soffit installation on gable triangle section inside screened porch - residential project" },
    { file: "work10.webp", alt: "Soffit and fascia on gable end - tan siding with dark fascia, Orlando area residence at golden hour" },
    { file: "commercial-soffit-before-after.webp", alt: "Commercial soffit installation before and after - gas station canopy soffit replacement with black aluminum panels" },
    { file: "ceiling2.webp", alt: "Interior soffit installation on covered porch - white horizontal panels with recessed lighting, new construction" },
];

export default function GalleryPage() {
    // ── State ─────────────────────────────────────────────────────────────────
    const [lightbox, setLightbox] = useState<number | null>(null);
    const [showLogin, setShowLogin] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState(false);
    const [hidden, setHidden] = useState<Set<string>>(new Set());
    const [visible, setVisible] = useState<Set<number>>(new Set());
    const [uploadMsg, setUploadMsg] = useState(false);
    const refs = useRef<(HTMLDivElement | null)[]>([]);

    // ── Load hidden from localStorage ─────────────────────────────────────────
    useEffect(() => {
        try {
            const s = localStorage.getItem(HIDDEN_KEY);
            if (s) setHidden(new Set(JSON.parse(s)));
        } catch { }
    }, []);

    // ── Scroll reveal (IntersectionObserver — stagger per column) ─────────────
    useEffect(() => {
        const obs = new IntersectionObserver(
            (entries) => entries.forEach(e => {
                if (e.isIntersecting) {
                    const i = parseInt(e.target.getAttribute("data-idx") ?? "0");
                    setVisible(prev => new Set([...prev, i]));
                }
            }),
            { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
        );
        refs.current.forEach(r => r && obs.observe(r));
        return () => obs.disconnect();
    }, []);

    // ── Keyboard: Escape / ← → for lightbox ──────────────────────────────────
    useEffect(() => {
        if (lightbox === null) return;
        const visWorks = WORKS.filter(w => isAdmin || !hidden.has(w.file));
        const handle = (e: KeyboardEvent) => {
            if (e.key === "Escape") setLightbox(null);
            if (e.key === "ArrowRight") setLightbox(p => p !== null ? Math.min(p + 1, visWorks.length - 1) : null);
            if (e.key === "ArrowLeft") setLightbox(p => p !== null ? Math.max(p - 1, 0) : null);
        };
        window.addEventListener("keydown", handle);
        return () => window.removeEventListener("keydown", handle);
    }, [lightbox, hidden, isAdmin]);

    // ── Touch swipe for lightbox ───────────────────────────────────────────
    const touchStartX = useRef<number | null>(null);
    const handleTouchStart = useCallback((e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    }, []);
    const handleTouchEnd = useCallback((e: React.TouchEvent) => {
        if (touchStartX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchStartX.current;
        if (Math.abs(dx) < 40) return; // ignore small swipes
        const visWorks = WORKS.filter(w => isAdmin || !hidden.has(w.file));
        if (dx < 0) setLightbox(p => p !== null ? Math.min(p + 1, visWorks.length - 1) : null);
        else setLightbox(p => p !== null ? Math.max(p - 1, 0) : null);
        touchStartX.current = null;
    }, [isAdmin, hidden]);

    const login = async () => {
        try {
            const res = await fetch("/api/admin/verify", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ password }),
            });
            if (res.ok) {
                setIsAdmin(true); setShowLogin(false); setPassword(""); setLoginError(false);
            } else {
                setLoginError(true);
            }
        } catch {
            setLoginError(true);
        }
    };

    const toggleHide = (file: string) => {
        setHidden(prev => {
            const next = new Set(prev);
            next.has(file) ? next.delete(file) : next.add(file);
            localStorage.setItem(HIDDEN_KEY, JSON.stringify([...next]));
            return next;
        });
    };

    const openLightbox = (idx: number) => {
        if ("startViewTransition" in document) {
            (document as any).startViewTransition(() => setLightbox(idx));
        } else {
            setLightbox(idx);
        }
    };

    const visibleWorks = WORKS.filter(w => isAdmin || !hidden.has(w.file));
    const current = lightbox !== null ? visibleWorks[lightbox] : null;

    // ── Render ────────────────────────────────────────────────────────────────
    return (
        <div className="flex flex-col min-h-screen">

            {/* ── HERO ──────────────────────────────────────────────────── */}
            <section className="relative overflow-hidden bg-gray-950 text-white py-20 md:py-28">
                {/* Background blurred photo */}
                <Image
                    src="/images/works/IMG_3511.webp"
                    alt=""
                    aria-hidden="true"
                    fill
                    sizes="100vw"
                    className="object-cover opacity-10 blur-sm scale-105"
                />
                {/* Orbs */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[80px]" aria-hidden="true" />
                <div className="absolute -bottom-16 -left-16 w-[400px] h-[400px] bg-cyan-500/15 rounded-full blur-[60px]" aria-hidden="true" />

                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                        <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" aria-hidden="true" />
                        Portfolio — Real Projects
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-5 leading-tight tracking-tight">
                        Real Work.<br />
                        <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                            Your Proof.
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-blue-100/80 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Every photo here is from a real project completed by our crew in Orlando and Central Florida.
                        No stock photos. No renders. Just honest work on real homes.
                    </p>

                    {/* Quick stats — mobile horizontal scroll */}
                    <div className="flex justify-center gap-6 sm:gap-12 flex-wrap">
                        {[
                            { n: "500+", label: "Homes Served" },
                            { n: "10+", label: "Years Experience" },
                            { n: "100%", label: "Satisfaction" },
                        ].map(s => (
                            <div key={s.label} className="text-center">
                                <div className="text-2xl sm:text-3xl font-extrabold text-white">{s.n}</div>
                                <div className="text-xs text-blue-300/80 font-semibold uppercase tracking-wider mt-0.5">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── GALLERY ───────────────────────────────────────────────── */}
            <section className="flex-1 py-10 md:py-16 bg-gray-100">
                <div className="container mx-auto px-3 sm:px-5 lg:px-8 max-w-7xl">

                    {/* Admin banner */}
                    {isAdmin && (
                        <div className="mb-5 flex flex-wrap items-center justify-between gap-3 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3">
                            <p className="text-amber-800 font-bold text-sm flex items-center gap-2">
                                <Lock className="w-4 h-4" />
                                Admin Mode — tap <Eye className="w-4 h-4 inline" /> / <EyeOff className="w-4 h-4 inline" /> to show or hide each photo
                            </p>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => setUploadMsg(true)}
                                    className="flex items-center gap-1.5 bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition"
                                >
                                    <Upload className="w-3.5 h-3.5" /> Add Photo
                                </button>
                                <button
                                    onClick={() => setIsAdmin(false)}
                                    className="flex items-center gap-1.5 text-amber-700 hover:text-amber-900 text-xs font-medium px-3 py-1.5 border border-amber-300 rounded-lg transition"
                                >
                                    <LogOut className="w-3.5 h-3.5" /> Exit
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Upload future feature toast */}
                    {uploadMsg && (
                        <div className="mb-4 bg-blue-900 text-blue-100 text-sm font-medium px-4 py-3 rounded-xl flex items-start justify-between gap-4">
                            <p>🚧 <strong>Coming soon:</strong> In the next version this will connect to cloud storage (Vercel Blob/Sanity) for live photo uploads from your phone.</p>
                            <button onClick={() => setUploadMsg(false)}><X className="w-4 h-4 shrink-0" /></button>
                        </div>
                    )}

                    {/* ── MASONRY GRID — 1 col mobile, 2 sm, 3 md, 4 lg ── */}
                    <div className="columns-1 sm:columns-2 md:columns-3 gap-3 md:gap-4">
                        {visibleWorks.map((work, idx) => (
                            <div
                                key={work.file}
                                ref={el => { refs.current[idx] = el; }}
                                data-idx={idx}
                                className={`
                                    group relative break-inside-avoid mb-3 md:mb-4
                                    overflow-hidden rounded-xl cursor-pointer shadow-sm
                                    hover:shadow-xl transition-shadow duration-300
                                    ${hidden.has(work.file) ? "opacity-40 ring-2 ring-red-400 ring-offset-2" : ""}
                                `}
                                style={{
                                    opacity: visible.has(idx) ? (hidden.has(work.file) ? 0.4 : 1) : 0,
                                    transform: visible.has(idx) ? "none" : "translateY(28px)",
                                    transition: `opacity 0.55s ease ${(idx % 3) * 90}ms, transform 0.55s ease ${(idx % 3) * 90}ms`,
                                }}
                                onClick={() => !isAdmin && openLightbox(idx)}
                                role={!isAdmin ? "button" : undefined}
                                aria-label={!isAdmin ? `View: ${work.alt}` : undefined}
                                tabIndex={!isAdmin ? 0 : undefined}
                                onKeyDown={!isAdmin ? (e) => e.key === "Enter" && openLightbox(idx) : undefined}
                            >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={`/images/works/${work.file}`}
                                    alt={work.alt}
                                    loading="lazy"
                                    className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                                />

                                {/* Hover caption overlay */}
                                {!isAdmin && (
                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950/85 via-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 pointer-events-none">
                                        <p className="text-white text-xs sm:text-sm font-medium leading-snug line-clamp-2">
                                            {work.alt}
                                        </p>
                                        <p className="text-blue-300 text-xs mt-1 font-semibold uppercase tracking-wide">
                                            Tap to view full size
                                        </p>
                                    </div>
                                )}

                                {/* Admin: hide/show toggle */}
                                {isAdmin && (
                                    <button
                                        onClick={(e) => { e.stopPropagation(); toggleHide(work.file); }}
                                        className={`
                                            absolute top-2 right-2 p-2 rounded-full backdrop-blur-sm z-10 shadow transition
                                            ${hidden.has(work.file)
                                                ? "bg-red-500 text-white"
                                                : "bg-white/90 text-gray-700 hover:bg-red-100 hover:text-red-600"
                                            }
                                        `}
                                        aria-label={hidden.has(work.file) ? "Show photo on site" : "Hide photo from site"}
                                    >
                                        {hidden.has(work.file) ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ───────────────────────────────────────────────────── */}
            <section className="py-16 md:py-20 bg-white text-center border-t border-gray-100">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Like What You See?</h2>
                    <p className="text-gray-500 text-lg mb-8">Let&apos;s add your home to our portfolio. Free estimate, no pressure.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 bg-bubble-primary text-white px-8 py-4 rounded-full font-bold hover:bg-bubble-dark transition-all shadow-lg text-base"
                        >
                            Request Free Estimate <ArrowRight className="w-5 h-5" />
                        </Link>
                        <a
                            href="tel:4077151790"
                            className="inline-flex items-center justify-center gap-2 border-2 border-bubble-primary text-bubble-primary px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-all text-base"
                        >
                            <Phone className="w-5 h-5" /> (407) 715-1790
                        </a>
                        <a
                            href="https://www.instagram.com/bubblesoffit"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 border-2 border-pink-400 text-pink-600 px-8 py-4 rounded-full font-bold hover:bg-pink-50 transition-all text-base"
                        >
                            <Instagram className="w-5 h-5" /> @bubblesoffit
                        </a>
                    </div>
                </div>
            </section>

            {/* ── LIGHTBOX ──────────────────────────────────────────────── */}
            {current && lightbox !== null && (
                <div
                    className="fixed inset-0 z-[200] bg-black/96 flex items-center justify-center p-2 sm:p-4 md:p-8"
                    onClick={() => setLightbox(null)}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                    role="dialog"
                    aria-modal="true"
                    aria-label={current.alt}
                >
                    {/* Close */}
                    <button
                        className="absolute top-3 right-3 sm:top-6 sm:right-6 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition"
                        onClick={() => setLightbox(null)}
                        aria-label="Close"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    {/* Prev */}
                    {lightbox > 0 && (
                        <button
                            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition"
                            onClick={(e) => { e.stopPropagation(); setLightbox(l => (l ?? 0) - 1); }}
                            aria-label="Previous photo"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                    )}

                    {/* Next */}
                    {lightbox < visibleWorks.length - 1 && (
                        <button
                            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition"
                            onClick={(e) => { e.stopPropagation(); setLightbox(l => (l ?? 0) + 1); }}
                            aria-label="Next photo"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    )}

                    {/* Image */}
                    <div
                        className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center gap-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={`/images/works/${current.file}`}
                            alt={current.alt}
                            className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl"
                            style={{ viewTransitionName: "lightbox-image" }}
                        />
                        <p className="text-white/70 text-sm text-center font-medium px-4">
                            {current.alt}
                            <span className="ml-3 text-white/40">({lightbox + 1}/{visibleWorks.length})</span>
                        </p>
                        {/* Mobile swipe hint */}
                        <p className="text-white/30 text-xs md:hidden text-center">← Swipe to navigate → · Tap outside to close</p>
                    </div>
                </div>
            )}

            {/* ── ADMIN LOGIN MODAL ─────────────────────────────────────── */}
            {showLogin && (
                <div className="fixed inset-0 z-[300] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-sm relative">
                        <button
                            onClick={() => { setShowLogin(false); setLoginError(false); setPassword(""); }}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
                            aria-label="Close"
                        >
                            <X className="w-5 h-5" />
                        </button>
                        <div className="text-center mb-6">
                            <div className="w-14 h-14 bg-bubble-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                                <Lock className="w-7 h-7 text-bubble-primary" />
                            </div>
                            <h2 className="text-xl font-extrabold text-gray-900">Admin Access</h2>
                            <p className="text-gray-500 text-sm mt-1">Enter your password to manage the gallery</p>
                        </div>

                        <input
                            type="password"
                            value={password}
                            onChange={e => { setPassword(e.target.value); setLoginError(false); }}
                            onKeyDown={e => e.key === "Enter" && login()}
                            placeholder="Admin password"
                            autoFocus
                            className={`w-full border rounded-xl px-4 py-3 mb-3 text-sm focus:outline-none focus:ring-2 focus:ring-bubble-primary transition
                                ${loginError ? "border-red-400 bg-red-50" : "border-gray-200"}`}
                        />
                        {loginError && (
                            <p className="text-red-500 text-xs mb-3 font-medium text-center">❌ Incorrect password. Try again.</p>
                        )}
                        <button
                            onClick={login}
                            className="w-full bg-bubble-primary text-white font-bold py-3 rounded-xl hover:bg-bubble-dark transition"
                        >
                            Enter Admin Mode
                        </button>
                    </div>
                </div>
            )}

            {/* ── Floating admin button (subtle, bottom-left) ───────────── */}
            <button
                onClick={() => isAdmin ? setIsAdmin(false) : setShowLogin(true)}
                className="fixed bottom-24 left-4 z-50 w-9 h-9 bg-gray-800/50 hover:bg-gray-700/70 backdrop-blur-sm text-white/60 hover:text-white rounded-full flex items-center justify-center transition shadow-md"
                aria-label={isAdmin ? "Exit admin mode" : "Admin login"}
                title={isAdmin ? "Exit admin" : "Admin"}
            >
                <Lock className="w-3.5 h-3.5" />
            </button>
        </div>
    );
}
