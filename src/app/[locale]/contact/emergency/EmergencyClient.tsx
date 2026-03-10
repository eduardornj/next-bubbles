"use client";

import Link from "next/link";
import { Phone, AlertTriangle, Clock, CheckCircle2, Upload, Send, Camera } from "lucide-react";
import { useState, useEffect, useRef, ChangeEvent } from "react";
import { useTranslations, useLocale } from "next-intl";

export default function EmergencyClient() {
    const t = useTranslations("emergency");
    const locale = useLocale();
    const lp = (path: string) => locale === "en" ? path : `/${locale}${path}`;

    const [previews, setPreviews] = useState<string[]>([]);
    const [files, setFiles] = useState<File[]>([]);
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
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
        setStatus("sending");
        try {
            const form = e.currentTarget;
            const fd = new FormData();
            fd.append("name", (form.elements.namedItem("name") as HTMLInputElement).value);
            fd.append("phone", (form.elements.namedItem("phone") as HTMLInputElement).value);
            fd.append("address", (form.elements.namedItem("address") as HTMLInputElement).value);
            fd.append("gate_code", (form.elements.namedItem("gate_code") as HTMLInputElement).value ?? "");
            fd.append("damage_type", (form.elements.namedItem("damage_type") as HTMLSelectElement).value);
            fd.append("description", (form.elements.namedItem("description") as HTMLTextAreaElement).value ?? "");
            files.forEach(f => fd.append("photos", f));

            const res = await fetch("/api/emergency-repair", { method: "POST", body: fd });
            if (!res.ok) throw new Error("server error");
            setStatus("success");
        } catch {
            setStatus("error");
        }
    };

    return (
        <div className="min-h-screen bg-red-950 text-white flex flex-col">

            {/* Flashing top banner */}
            <div className="bg-red-600 py-3 text-center">
                <p className="font-extrabold text-white text-sm uppercase tracking-widest flex items-center justify-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    {t("banner")}
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
                            {t("headerBadge")}
                        </div>
                        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
                            {t("headerTitle1")}<br />
                            <span className="text-red-300">{t("headerTitle2")}</span>
                        </h1>
                        <p className="text-lg text-red-200 max-w-2xl mx-auto">
                            {t("headerSubtitle")}
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 items-start">

                        {/* Left -- Call + risk info */}
                        <div className="space-y-6">
                            {/* Big call button */}
                            <a
                                href="tel:4077151790"
                                className="group flex items-center justify-center gap-3 w-full bg-white text-red-700 rounded-2xl px-6 py-5 font-extrabold text-xl shadow-[0_0_50px_rgba(255,255,255,0.1)] hover:shadow-[0_0_80px_rgba(255,255,255,0.25)] hover:scale-[1.02] transition-all border-4 border-red-300"
                            >
                                <Phone className="w-6 h-6 group-hover:animate-bounce" />
                                {t("callNow")}
                            </a>
                            <p className="text-center text-red-300 text-sm">
                                <Clock className="w-3.5 h-3.5 inline mr-1" />
                                {t("callHours")}
                            </p>

                            {/* Risk list */}
                            <div className="bg-red-900/60 border border-red-700 rounded-2xl p-6">
                                <h2 className="font-extrabold text-sm text-red-200 mb-4 uppercase tracking-wider text-center">{t("riskTitle")}</h2>
                                <ul className="space-y-3">
                                    {[
                                        t("risk1"),
                                        t("risk2"),
                                        t("risk3"),
                                        t("risk4"),
                                    ].map(item => (
                                        <li key={item} className="text-red-100 text-sm font-medium">{item}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* 3 steps */}
                            <div className="grid grid-cols-3 gap-3">
                                {[
                                    { step: "1", label: t("step1Label"), sub: t("step1Sub") },
                                    { step: "2", label: t("step2Label"), sub: t("step2Sub") },
                                    { step: "3", label: t("step3Label"), sub: t("step3Sub") },
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
                                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-green-400" /> {t("trustLicensed")}</span>
                                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-green-400" /> {t("trustOrlando")}</span>
                                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-green-400" /> {t("trustFree")}</span>
                            </div>
                        </div>

                        {/* Right -- Emergency Form */}
                        <div className="bg-red-900/40 border border-red-700/50 rounded-2xl p-6 backdrop-blur-sm">

                            {/* SUCCESS */}
                            {status === "success" ? (
                                <div role="status" className="flex flex-col items-center justify-center text-center py-12 space-y-4">
                                    <div className="w-20 h-20 bg-green-900/50 border-4 border-green-500 rounded-full flex items-center justify-center">
                                        <CheckCircle2 className="w-10 h-10 text-green-400" />
                                    </div>
                                    <h2 className="text-2xl font-extrabold text-white">{t("successTitle")}</h2>
                                    <p className="text-red-200 max-w-xs">{t("successMsg")}</p>
                                    <a href="tel:4077151790" className="mt-2 flex items-center gap-2 bg-white text-red-700 font-extrabold px-6 py-3 rounded-xl hover:scale-105 transition-all">
                                        <Phone className="w-4 h-4" /> {t("successCall")}
                                    </a>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <h2 className="text-xl font-extrabold text-white mb-5 flex items-center gap-2">
                                        <Send className="w-5 h-5 text-red-400" />
                                        {t("formTitle")}
                                    </h2>

                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="emg-name" className="block text-xs font-bold text-red-200 uppercase tracking-wider mb-1.5">{t("labelName")}</label>
                                            <input
                                                id="emg-name"
                                                type="text"
                                                name="name"
                                                required
                                                autoComplete="name"
                                                placeholder={t("placeholderName")}
                                                className="w-full bg-red-950/80 border border-red-700 rounded-xl px-4 py-3 text-white placeholder-red-400 focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400 transition text-sm"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="emg-phone" className="block text-xs font-bold text-red-200 uppercase tracking-wider mb-1.5">{t("labelPhone")}</label>
                                            <input
                                                id="emg-phone"
                                                type="tel"
                                                name="phone"
                                                required
                                                autoComplete="tel"
                                                placeholder={t("placeholderPhone")}
                                                className="w-full bg-red-950/80 border border-red-700 rounded-xl px-4 py-3 text-white placeholder-red-400 focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400 transition text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="emg-address" className="block text-xs font-bold text-red-200 uppercase tracking-wider mb-1.5">{t("labelAddress")}</label>
                                        <input
                                            id="emg-address"
                                            type="text"
                                            name="address"
                                            required
                                            autoComplete="street-address"
                                            placeholder={t("placeholderAddress")}
                                            className="w-full bg-red-950/80 border border-red-700 rounded-xl px-4 py-3 text-white placeholder-red-400 focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400 transition text-sm"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="emg-gate" className="block text-xs font-bold text-red-200 uppercase tracking-wider mb-1.5">
                                            {t("labelGateCode")} <span className="font-normal text-red-400 normal-case">{t("gateCodeHint")}</span>
                                        </label>
                                        <input
                                            id="emg-gate"
                                            type="text"
                                            name="gate_code"
                                            placeholder={t("placeholderGateCode")}
                                            className="w-full bg-red-950/80 border border-red-700 rounded-xl px-4 py-3 text-white placeholder-red-400 focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400 transition text-sm"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="emg-damage" className="block text-xs font-bold text-red-200 uppercase tracking-wider mb-1.5">{t("labelDamageType")}</label>
                                        <select
                                            id="emg-damage"
                                            name="damage_type"
                                            required
                                            defaultValue=""
                                            className="w-full bg-red-950/80 border border-red-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400 transition text-sm"
                                        >
                                            <option value="" disabled>{t("damageDefault")}</option>
                                            <option value="Animal / Pest Intrusion">{t("damageAnimal")}</option>
                                            <option value="Storm Damage">{t("damageStorm")}</option>
                                            <option value="Open Hole / Falling Soffit">{t("damageHole")}</option>
                                            <option value="Water / Moisture Damage">{t("damageWater")}</option>
                                            <option value="Other Emergency">{t("damageOther")}</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="emg-desc" className="block text-xs font-bold text-red-200 uppercase tracking-wider mb-1.5">{t("labelDesc")}</label>
                                        <textarea
                                            id="emg-desc"
                                            name="description"
                                            rows={3}
                                            placeholder={t("placeholderDesc")}
                                            className="w-full bg-red-950/80 border border-red-700 rounded-xl px-4 py-3 text-white placeholder-red-400 focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400 transition text-sm resize-none"
                                        />
                                    </div>

                                    {/* Photo upload */}
                                    <div>
                                        <label htmlFor="emg-photos" className="block text-xs font-bold text-red-200 uppercase tracking-wider mb-1.5">
                                            <Camera className="w-3.5 h-3.5 inline mr-1" />
                                            {t("labelPhotos")}
                                        </label>
                                        <div
                                            role="button"
                                            tabIndex={0}
                                            aria-label={t("photosUpload")}
                                            className="border-2 border-dashed border-red-700 rounded-xl p-5 text-center cursor-pointer hover:border-red-500 hover:bg-red-900/20 transition"
                                            onClick={() => fileRef.current?.click()}
                                            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); fileRef.current?.click(); } }}
                                        >
                                            <Upload className="w-7 h-7 mx-auto text-red-400 mb-2" />
                                            <p className="text-sm text-red-300 font-medium">{t("photosUpload")}</p>
                                            <p className="text-xs text-red-500 mt-1">{t("photoFormats")}</p>
                                            <input
                                                id="emg-photos"
                                                ref={fileRef}
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
                                        disabled={status === "sending"}
                                        className="w-full bg-red-600 hover:bg-red-500 text-white font-extrabold py-4 rounded-xl transition-all hover:scale-[1.02] shadow-[0_0_20px_rgba(220,38,38,0.4)] flex items-center justify-center gap-2 text-base mt-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:scale-100"
                                    >
                                        {status === "sending"
                                            ? <><span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" /> {t("submitSending")}</>
                                            : <><Send className="w-5 h-5" /> {t("submitBtn")}</>
                                        }
                                    </button>

                                    {status === "error" && (
                                        <p role="alert" className="text-center text-sm font-bold text-red-300 bg-red-950 border border-red-700 rounded-xl px-4 py-3">
                                            {t("errorMsg")}
                                        </p>
                                    )}
                                </form>
                            )}
                        </div>
                    </div>

                    <div className="text-center mt-8">
                        <Link href={lp("/contact")} className="text-red-500 hover:text-red-400 underline text-sm">
                            {t("standardContact")}
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
