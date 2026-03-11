"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState, useEffect, useRef, ChangeEvent } from "react";
import Link from "next/link";
import {
    Phone, Mail, MapPin, CheckCircle2, Send, ShieldCheck,
    Award, Calculator, Shield, Upload, Camera,
} from "lucide-react";
import { useTranslations } from "next-intl";

function ContactForm() {
    const searchParams = useSearchParams();
    const t = useTranslations("contactPage");

    const total = searchParams.get("total");
    const type = searchParams.get("type");
    const material = searchParams.get("material");
    const lf = searchParams.get("lf");
    const overhang = searchParams.get("overhang");
    const service = searchParams.get("service");
    const details = searchParams.get("details");

    const hasQuote = Boolean(total && Number(total) > 0);

    const serviceMap: Record<string, string> = {
        new: "New Construction",
        replace_1: "Remove & Replace",
        replace_2: "Remove & Replace",
        repair: "Repairs",
    };
    const prefilledService = type ? (serviceMap[type] ?? service ?? "") : (service ?? "");

    const prefilledMessage = hasQuote
        ? `I got an online estimate of $${Number(total).toLocaleString("en-US", { minimumFractionDigits: 2 })} for ${prefilledService || "a project"} — ${lf} linear feet, ${overhang}" overhang, ${material} material. I'd like to confirm and schedule a visit.`
        : (details ?? "");

    const onlineEstimateValue = hasQuote
        ? `$${Number(total).toLocaleString("en-US", { minimumFractionDigits: 2 })} | ${prefilledService} | ${lf} LF | ${overhang}" overhang | ${material}`
        : "";

    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
    const [previews, setPreviews] = useState<string[]>([]);
    const [files, setFiles] = useState<File[]>([]);
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
            fd.append("firstName", (form.elements.namedItem("firstName") as HTMLInputElement).value);
            fd.append("lastName", (form.elements.namedItem("lastName") as HTMLInputElement).value);
            fd.append("email", (form.elements.namedItem("email") as HTMLInputElement).value);
            fd.append("phone", (form.elements.namedItem("phone") as HTMLInputElement).value ?? "");
            fd.append("address", (form.elements.namedItem("address") as HTMLInputElement).value);
            fd.append("gate_code", (form.elements.namedItem("gate_code") as HTMLInputElement).value ?? "");
            fd.append("service", (form.elements.namedItem("service") as HTMLSelectElement).value);
            fd.append("message", (form.elements.namedItem("message") as HTMLTextAreaElement).value ?? "");
            if (onlineEstimateValue) fd.append("online_estimate", onlineEstimateValue);
            files.forEach(f => fd.append("photos", f));

            const res = await fetch("/api/contact", { method: "POST", body: fd });
            if (!res.ok) throw new Error("server error");
            setStatus("success");
            if (typeof window !== "undefined") {
                if (typeof (window as Window & { gtag?: (...args: unknown[]) => void }).gtag === "function") {
                    (window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.("event", "generate_lead");
                }
                if (typeof (window as Window & { fbq?: (...args: unknown[]) => void }).fbq === "function") {
                    (window as Window & { fbq?: (...args: unknown[]) => void }).fbq?.("track", "Lead");
                }
            }
        } catch {
            setStatus("error");
        }
    };

    return (
        <div className="lg:col-span-3 order-1 lg:order-2">
            <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-xl border border-gray-100 h-full">

                {/* Quote Banner */}
                {hasQuote && (
                    <div className="mb-8 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-2xl p-6 flex items-center gap-5 shadow-lg shadow-blue-500/20">
                        <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center shrink-0">
                            <Calculator className="w-7 h-7 text-white" />
                        </div>
                        <div>
                            <p className="text-blue-100 text-xs font-bold uppercase tracking-widest mb-1">{t("onlineEstimateLabel")}</p>
                            <p className="text-3xl font-extrabold tracking-tight">
                                ${Number(total).toLocaleString("en-US", { minimumFractionDigits: 2 })}
                            </p>
                            <p className="text-blue-100 text-sm mt-0.5">
                                {prefilledService && <span className="capitalize">{prefilledService}</span>}
                                {lf && ` · ${lf} LF`}
                                {overhang && ` · ${overhang}" overhang`}
                                {material && ` · ${material}`}
                            </p>
                        </div>
                    </div>
                )}

                {/* SUCCESS */}
                {status === "success" ? (
                    <div role="status" className="flex flex-col items-center justify-center text-center py-16 space-y-4">
                        <div className="w-20 h-20 bg-green-50 border-4 border-green-400 rounded-full flex items-center justify-center">
                            <CheckCircle2 className="w-10 h-10 text-green-500" />
                        </div>
                        <h2 className="text-2xl font-extrabold text-gray-900">{t("successTitle")}</h2>
                        <p className="text-gray-500 max-w-xs">{t("successMsg")}</p>
                        <a href="tel:4077151790" className="mt-2 flex items-center gap-2 bg-blue-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-blue-700 transition-all">
                            <Phone className="w-4 h-4" /> (407) 715-1790
                        </a>
                        <Link href="/" className="text-sm text-gray-400 hover:text-gray-600 underline">{t("backToHome")}</Link>
                    </div>
                ) : (
                    <>
                        <div className="mb-8">
                            <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
                                {hasQuote ? t("formTitleQuote") : t("formTitleDefault")}
                            </h2>
                            <p className="text-gray-500">
                                {hasQuote ? t("formSubQuote") : t("formSubDefault")}
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-bold text-gray-700 mb-2">{t("firstName")} <span className="text-red-500">*</span></label>
                                    <input type="text" id="firstName" name="firstName" required autoComplete="given-name"
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-bubble-primary focus:border-bubble-primary outline-none transition-all font-medium text-gray-900"
                                        placeholder="John" />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-bold text-gray-700 mb-2">{t("lastName")} <span className="text-red-500">*</span></label>
                                    <input type="text" id="lastName" name="lastName" required autoComplete="family-name"
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-bubble-primary focus:border-bubble-primary outline-none transition-all font-medium text-gray-900"
                                        placeholder="Doe" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">{t("emailAddress")} <span className="text-red-500">*</span></label>
                                    <input type="email" id="email" name="email" required autoComplete="email"
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-bubble-primary focus:border-bubble-primary outline-none transition-all font-medium text-gray-900"
                                        placeholder="john@example.com" />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">{t("phoneNumber")}</label>
                                    <input type="tel" id="phone" name="phone" autoComplete="tel"
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-bubble-primary focus:border-bubble-primary outline-none transition-all font-medium text-gray-900"
                                        placeholder="(407) 555-0199" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="address" className="block text-sm font-bold text-gray-700 mb-2">{t("propertyAddress")} <span className="text-red-500">*</span></label>
                                <input type="text" id="address" name="address" required autoComplete="street-address"
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-bubble-primary focus:border-bubble-primary outline-none transition-all font-medium text-gray-900"
                                    placeholder="123 Main St, Orlando, FL" />
                            </div>

                            <div>
                                <label htmlFor="gate_code" className="block text-sm font-bold text-gray-700 mb-2">
                                    {t("gateCode")} <span className="font-normal text-gray-400">{t("gateCodeOptional")}</span>
                                </label>
                                <input type="text" id="gate_code" name="gate_code"
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-bubble-primary focus:border-bubble-primary outline-none transition-all font-medium text-gray-900"
                                    placeholder="e.g. #1234" />
                            </div>

                            <div>
                                <label htmlFor="service" className="block text-sm font-bold text-gray-700 mb-2">{t("serviceType")} <span className="text-red-500">*</span></label>
                                <select
                                    id="service"
                                    name="service"
                                    required
                                    defaultValue={prefilledService}
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-bubble-primary focus:border-bubble-primary outline-none transition-all font-medium text-gray-900 cursor-pointer"
                                >
                                    <option value="" disabled>{t("serviceSelect")}</option>
                                    <option value="New Construction">{t("serviceNewConstruction")}</option>
                                    <option value="Remove & Replace">{t("serviceRemoveReplace")}</option>
                                    <option value="Repairs">{t("serviceRepairs")}</option>
                                    <option value="Other">{t("serviceOther")}</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">{t("projectDetails")} <span className="text-red-500">*</span></label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    required
                                    defaultValue={prefilledMessage}
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-bubble-primary focus:border-bubble-primary outline-none transition-all font-medium text-gray-900 resize-none"
                                    placeholder={t("projectDetailsPlaceholder")}
                                />
                            </div>

                            {/* Photo upload */}
                            <div>
                                <label htmlFor="photos" className="block text-sm font-bold text-gray-700 mb-2">
                                    <Camera className="w-3.5 h-3.5 inline mr-1" />
                                    {t("attachPhotos")} <span className="font-normal text-gray-400">{t("photosOptional")}</span>
                                </label>
                                <div
                                    role="button"
                                    tabIndex={0}
                                    className="border-2 border-dashed border-gray-200 rounded-xl p-5 text-center cursor-pointer hover:border-blue-400 hover:bg-blue-50/30 transition"
                                    onClick={() => fileRef.current?.click()}
                                    onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); fileRef.current?.click(); } }}
                                >
                                    <Upload className="w-7 h-7 mx-auto text-gray-400 mb-2" />
                                    <p className="text-sm text-gray-500 font-medium">{t("photosUploadText")}</p>
                                    <p className="text-xs text-gray-400 mt-1">{t("photosUploadSub")}</p>
                                    <input
                                        ref={fileRef}
                                        id="photos"
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
                                                className="w-full aspect-square object-cover rounded-lg border border-gray-200"
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div className="pt-2">
                                <button
                                    type="submit"
                                    disabled={status === "sending"}
                                    className="w-full flex items-center justify-center gap-2 bg-bubble-primary hover:bg-bubble-dark text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-xl text-lg hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:translate-y-0"
                                >
                                    {status === "sending"
                                        ? <><span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" /> {t("sending")}</>
                                        : <><Send className="w-5 h-5" /> {t("submitBtn")}</>
                                    }
                                </button>
                                <div className="flex items-center justify-center gap-2 mt-4 text-xs text-gray-400">
                                    <ShieldCheck className="w-3.5 h-3.5 text-green-500" />
                                    <span>{t("privacyNote")}</span>
                                </div>
                            </div>

                            {status === "error" && (
                                <p role="alert" className="text-center text-sm font-bold text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                                    {t("errorMsg")}
                                </p>
                            )}
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}

export default function ContactClient() {
    const t = useTranslations("contactPage");
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            {/* Page Header */}
            <section className="bg-bubble-navy text-white pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/works/IMG_3511.webp')] opacity-5 bg-cover bg-center"></div>
                <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
                    <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 text-bubble-light text-sm font-bold uppercase tracking-wider mb-6 border border-white/20">
                        {t("heroBadge")}
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
                        {t("heroTitle")}
                    </h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
                        {t("heroSubtitle")}
                    </p>
                    <div className="mt-8 inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm text-blue-100">
                        <Shield className="w-4 h-4 text-green-400" />
                        {t("spamBadge")}
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 -mt-10 relative z-20">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid lg:grid-cols-5 gap-10">

                        {/* Left: Info & Trust */}
                        <div className="lg:col-span-2 space-y-8 order-2 lg:order-1">
                            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                                <h3 className="text-2xl font-bold text-gray-900 mb-8 border-b border-gray-100 pb-4">{t("directCommTitle")}</h3>
                                <div className="space-y-6 text-gray-600">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-bubble-primary shrink-0">
                                            <Phone className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-lg">{t("phoneLabel")}</h4>
                                            <p className="text-sm mb-1">{t("phoneHours")}</p>
                                            <a href="tel:4077151790" className="text-bubble-primary font-bold hover:underline text-lg">(407) 715-1790</a>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-bubble-primary shrink-0">
                                            <Mail className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-lg">{t("emailLabel")}</h4>
                                            <p className="text-sm mb-1">{t("emailSub")}</p>
                                            <a href="mailto:contact@bubblesenterprise.com" className="text-bubble-primary font-bold hover:underline">contact@bubblesenterprise.com</a>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600 shrink-0">
                                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-lg">{t("whatsappLabel")}</h4>
                                            <p className="text-sm mb-1">{t("whatsappSub")}</p>
                                            <a href="https://wa.me/14077151790" target="_blank" rel="noopener noreferrer" className="text-green-600 font-bold hover:underline">(407) 715-1790</a>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-bubble-primary shrink-0">
                                            <MapPin className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-lg">{t("serviceAreaLabel")}</h4>
                                            <p className="text-sm leading-relaxed">{t("serviceAreaDesc")}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-bubble-primary to-bubble-dark text-white p-8 rounded-2xl shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                                <h3 className="text-xl font-bold mb-6 flex items-center gap-2 relative z-10">
                                    <Award className="w-6 h-6" /> {t("promiseTitle")}
                                </h3>
                                <ul className="space-y-4 relative z-10 font-medium">
                                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-bubble-light" /> {t("promise1")}</li>
                                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-bubble-light" /> {t("promise2")}</li>
                                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-bubble-light" /> {t("promise3")}</li>
                                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-bubble-light" /> {t("promise4")}</li>
                                </ul>
                            </div>
                        </div>

                        {/* Right: Form */}
                        <Suspense fallback={
                            <div className="lg:col-span-3 bg-white rounded-2xl shadow-xl border border-gray-100 flex items-center justify-center min-h-[400px] order-1 lg:order-2">
                                <div className="w-10 h-10 border-4 border-gray-200 border-t-bubble-primary rounded-full animate-spin"></div>
                            </div>
                        }>
                            <ContactForm />
                        </Suspense>

                    </div>
                </div>
            </section>
        </div>
    );
}
