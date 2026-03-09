"use client";

import Link from "next/link";
import { Phone, AlertTriangle, Clock, CheckCircle2, Upload, Send, Camera } from "lucide-react";
import { useState, useEffect, useRef, ChangeEvent } from "react";

export default function EmergencyRepairPage() {
    const [previews, setPreviews] = useState<string[]>([]);
    const [files, setFiles] = useState<File[]>([]);
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const fileRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        return () => previews.forEach(u => URL.revokeObjectURL(u));
    }, [previews]);

    const handleFiles = (e: ChangeEvent<HTMLInputElement>) => {
        const selected = Array.from(e.target.files ?? []).slice(0, 5);
        setFiles(selected);
        setPreviews(selected.map(f => URL.createObjectURL(f)));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('sending');
        try {
            const form = e.currentTarget;
            const fd = new FormData();
            fd.append('name', (form.elements.namedItem('name') as HTMLInputElement).value);
            fd.append('phone', (form.elements.namedItem('phone') as HTMLInputElement).value);
            fd.append('address', (form.elements.namedItem('address') as HTMLInputElement).value);
            fd.append('gate_code', (form.elements.namedItem('gate_code') as HTMLInputElement).value ?? '');
            fd.append('damage_type', (form.elements.namedItem('damage_type') as HTMLSelectElement).value);
            fd.append('description', (form.elements.namedItem('description') as HTMLTextAreaElement).value ?? '');
            files.forEach(f => fd.append('photos', f));

            const res = await fetch('/api/emergency-repair', { method: 'POST', body: fd });
            if (!res.ok) throw new Error('server error');
            if (typeof window.fbq === 'function') window.fbq('track', 'Lead', { content_name: 'Emergency Repair' });
            setStatus('success');
        } catch {
            setStatus('error');
        }
    };

    return (
        <div className="min-h-screen bg-red-950 text-white flex flex-col">

            {/* Flashing top banner */}
            <div className="bg-red-600 py-3 text-center animate-pulse">
                <p className="font-extrabold text-white text-sm uppercase tracking-widest flex items-center justify-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    Emergency Service — Same-Day Response Available
                    <AlertTriangle className="w-4 h-4" />
                </p>
            </div>

            <section className="flex-1 py-12 px-4">
                <div className="max-w-5xl mx-auto">

                    {/* Header */}
                    <div className="text-center mb-10">
                        <div className="relative inline-flex items-center justify-center mb-6">
                            <div className="absolute inset-0 bg-red-600/30 rounded-full blur-2xl scale-150" />
                            <div className="relative w-20 h-20 bg-red-700 border-4 border-red-400 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(220,38,38,0.6)]">
                                <AlertTriangle className="w-10 h-10 text-white" />
                            </div>
                        </div>
                        <div className="inline-block bg-red-600 text-white text-xs font-extrabold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4 border border-red-400">
                            🚨 Emergency Repair Request
                        </div>
                        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
                            Open Soffit = Danger.<br />
                            <span className="text-red-300">We Fix It Today.</span>
                        </h1>
                        <p className="text-lg text-red-200 max-w-2xl mx-auto">
                            Every hour with an open soffit puts your attic, wiring, and insulation at risk. Fill out the form below or call us directly.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 items-start">

                        {/* Left — Call + risk info */}
                        <div className="space-y-6">
                            {/* Big call button */}
                            <a
                                href="tel:4077151790"
                                className="group flex items-center justify-center gap-3 w-full bg-white text-red-700 rounded-2xl px-6 py-5 font-extrabold text-xl shadow-[0_0_50px_rgba(255,255,255,0.1)] hover:shadow-[0_0_80px_rgba(255,255,255,0.25)] hover:scale-[1.02] transition-all border-4 border-red-300"
                            >
                                <Phone className="w-6 h-6 group-hover:animate-bounce" />
                                (407) 715-1790 — Call Now
                            </a>
                            <p className="text-center text-red-300 text-sm">
                                <Clock className="w-3.5 h-3.5 inline mr-1" />
                                Mon–Sat 8am–6pm · Emergency response available
                            </p>

                            {/* Risk list */}
                            <div className="bg-red-900/60 border border-red-700 rounded-2xl p-6">
                                <h2 className="font-extrabold text-sm text-red-200 mb-4 uppercase tracking-wider text-center">What an open soffit costs every day:</h2>
                                <ul className="space-y-3">
                                    {[
                                        "🐀 Rodents chew electrical wires → fire hazard",
                                        "🐦 Birds nest in your attic insulation",
                                        "💧 Rain enters → mold, wood rot, structural damage",
                                        "🔊 Odors & bacteria spread through your vents",
                                    ].map(item => (
                                        <li key={item} className="text-red-100 text-sm font-medium">{item}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* 3 steps */}
                            <div className="grid grid-cols-3 gap-3">
                                {[
                                    { step: "1", label: "Submit", sub: "Form or call" },
                                    { step: "2", label: "Same-Day Visit", sub: "We assess" },
                                    { step: "3", label: "Fixed", sub: "Sealed & secure" },
                                ].map(s => (
                                    <div key={s.step} className="bg-red-900/40 border border-red-700/50 rounded-xl p-4 text-center">
                                        <div className="w-9 h-9 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-2 font-extrabold">
                                            {s.step}
                                        </div>
                                        <p className="font-bold text-white text-xs">{s.label}</p>
                                        <p className="text-red-300 text-xs">{s.sub}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Trust badges */}
                            <div className="flex flex-wrap gap-3 text-sm text-red-200">
                                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-green-400" /> Licensed &amp; Insured</span>
                                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-green-400" /> Orlando &amp; Central FL</span>
                                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-green-400" /> Free Assessment</span>
                            </div>
                        </div>

                        {/* Right — Emergency Form */}
                        <div className="bg-red-900/40 border border-red-700/50 rounded-2xl p-6 backdrop-blur-sm">

                            {/* SUCCESS */}
                            {status === 'success' ? (
                                <div role="status" className="flex flex-col items-center justify-center text-center py-12 space-y-4">
                                    <div className="w-20 h-20 bg-green-900/50 border-4 border-green-500 rounded-full flex items-center justify-center">
                                        <CheckCircle2 className="w-10 h-10 text-green-400" />
                                    </div>
                                    <h2 className="text-2xl font-extrabold text-white">Request Sent!</h2>
                                    <p className="text-red-200 max-w-xs">Our team received your emergency request and will call you back within 1 hour.</p>
                                    <a href="tel:4077151790" className="mt-2 flex items-center gap-2 bg-white text-red-700 font-extrabold px-6 py-3 rounded-xl hover:scale-105 transition-all">
                                        <Phone className="w-4 h-4" /> Call us now if urgent
                                    </a>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <h2 className="text-xl font-extrabold text-white mb-5 flex items-center gap-2">
                                        <Send className="w-5 h-5 text-red-400" />
                                        Send Emergency Request
                                    </h2>

                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="emg-name" className="block text-xs font-bold text-red-200 uppercase tracking-wider mb-1.5">Your Name *</label>
                                            <input
                                                id="emg-name"
                                                type="text"
                                                name="name"
                                                required
                                                autoComplete="name"
                                                placeholder="John Smith"
                                                className="w-full bg-red-950/80 border border-red-700 rounded-xl px-4 py-3 text-white placeholder-red-400 focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400 transition text-sm"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="emg-phone" className="block text-xs font-bold text-red-200 uppercase tracking-wider mb-1.5">Phone *</label>
                                            <input
                                                id="emg-phone"
                                                type="tel"
                                                name="phone"
                                                required
                                                autoComplete="tel"
                                                placeholder="(407) 000-0000"
                                                className="w-full bg-red-950/80 border border-red-700 rounded-xl px-4 py-3 text-white placeholder-red-400 focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400 transition text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="emg-address" className="block text-xs font-bold text-red-200 uppercase tracking-wider mb-1.5">Property Address *</label>
                                        <input
                                            id="emg-address"
                                            type="text"
                                            name="address"
                                            required
                                            autoComplete="street-address"
                                            placeholder="123 Main St, Orlando, FL"
                                            className="w-full bg-red-950/80 border border-red-700 rounded-xl px-4 py-3 text-white placeholder-red-400 focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400 transition text-sm"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="emg-gate" className="block text-xs font-bold text-red-200 uppercase tracking-wider mb-1.5">
                                            Gate Code <span className="font-normal text-red-400 normal-case">(if applicable)</span>
                                        </label>
                                        <input
                                            id="emg-gate"
                                            type="text"
                                            name="gate_code"
                                            placeholder="e.g. #1234"
                                            className="w-full bg-red-950/80 border border-red-700 rounded-xl px-4 py-3 text-white placeholder-red-400 focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400 transition text-sm"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="emg-damage" className="block text-xs font-bold text-red-200 uppercase tracking-wider mb-1.5">Type of Damage *</label>
                                        <select
                                            id="emg-damage"
                                            name="damage_type"
                                            required
                                            defaultValue=""
                                            className="w-full bg-red-950/80 border border-red-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400 transition text-sm"
                                        >
                                            <option value="" disabled>Select damage type...</option>
                                            <option value="Animal / Pest Intrusion">Animal / Pest Intrusion</option>
                                            <option value="Storm Damage">Storm Damage</option>
                                            <option value="Open Hole / Falling Soffit">Open Hole / Falling Soffit</option>
                                            <option value="Water / Moisture Damage">Water / Moisture Damage</option>
                                            <option value="Other Emergency">Other Emergency</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="emg-desc" className="block text-xs font-bold text-red-200 uppercase tracking-wider mb-1.5">Describe the Emergency</label>
                                        <textarea
                                            id="emg-desc"
                                            name="description"
                                            rows={3}
                                            placeholder="Tell us what happened, when it started, what you see..."
                                            className="w-full bg-red-950/80 border border-red-700 rounded-xl px-4 py-3 text-white placeholder-red-400 focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400 transition text-sm resize-none"
                                        />
                                    </div>

                                    {/* Photo upload */}
                                    <div>
                                        <label htmlFor="emg-photos" className="block text-xs font-bold text-red-200 uppercase tracking-wider mb-1.5">
                                            <Camera className="w-3.5 h-3.5 inline mr-1" />
                                            Attach Photos (up to 5)
                                        </label>
                                        <div
                                            role="button"
                                            tabIndex={0}
                                            className="border-2 border-dashed border-red-700 rounded-xl p-5 text-center cursor-pointer hover:border-red-500 hover:bg-red-900/20 transition"
                                            onClick={() => fileRef.current?.click()}
                                            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); fileRef.current?.click(); } }}
                                        >
                                            <Upload className="w-7 h-7 mx-auto text-red-400 mb-2" />
                                            <p className="text-sm text-red-300 font-medium">Click to upload photos of the damage</p>
                                            <p className="text-xs text-red-500 mt-1">JPG, PNG, HEIC · Max 5 photos</p>
                                            <input
                                                ref={fileRef}
                                                id="emg-photos"
                                                type="file"
                                                accept="image/*"
                                                multiple
                                                className="hidden"
                                                onChange={handleFiles}
                                            />
                                        </div>
                                        {previews.length > 0 && (
                                            <div className="mt-3 grid grid-cols-3 sm:grid-cols-5 gap-2">
                                                {previews.map((src, i) => (
                                                    // eslint-disable-next-line @next/next/no-img-element
                                                    <img
                                                        key={i}
                                                        src={src}
                                                        alt={`Preview ${i + 1}`}
                                                        className="w-full aspect-square object-cover rounded-lg border border-red-700"
                                                    />
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={status === 'sending'}
                                        className="w-full bg-red-600 hover:bg-red-500 text-white font-extrabold py-4 rounded-xl transition-all hover:scale-[1.02] shadow-[0_0_20px_rgba(220,38,38,0.4)] flex items-center justify-center gap-2 text-base mt-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:scale-100"
                                    >
                                        {status === 'sending'
                                            ? <><span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" /> Sending…</>
                                            : <><Send className="w-5 h-5" /> Send Emergency Request — We&apos;ll Respond Within 1 Hour</>
                                        }
                                    </button>

                                    {status === 'error' && (
                                        <p role="alert" className="text-center text-sm font-bold text-red-300 bg-red-950 border border-red-700 rounded-xl px-4 py-3">
                                            ⚠ Could not send. Please call us directly at (407) 715-1790.
                                        </p>
                                    )}
                                </form>
                            )}
                        </div>
                    </div>

                    <div className="text-center mt-8">
                        <Link href="/contact" className="text-red-500 hover:text-red-400 underline text-sm">
                            → Standard contact form (non-emergency)
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
