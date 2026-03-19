"use client";

import { useState, useRef, useEffect, useCallback, type ChangeEvent } from "react";
import Image from "next/image";
import { ArrowLeft, Camera, Check, ChevronRight, X } from "lucide-react";

// ─── i18n content ───────────────────────────────────────────────
type Locale = "en" | "es" | "pt";

const content: Record<Locale, {
  welcome: string;
  whatDoYouNeed: string;
  repair: string;
  installation: string;
  whatNeedsRepair: string;
  soffit: string;
  fascia: string;
  soffitAndFascia: string;
  projectType: string;
  newConstruction: string;
  renovation: string;
  take3Photos: string;
  photoInstructions: string;
  addVideo: string;
  take1Photo: string;
  take1PhotoSub: string;
  next: string;
  yourInfo: string;
  name: string;
  namePlaceholder: string;
  email: string;
  emailPlaceholder: string;
  phone: string;
  phonePlaceholder: string;
  address: string;
  addressPlaceholder: string;
  submit: string;
  sending: string;
  successTitle: string;
  successSub: string;
  backToWebsite: string;
  step: string;
  of: string;
  back: string;
  desktopTitle: string;
  desktopSub: string;
  required: string;
  photoSlotLabel: string;
  optional: string;
  errorGeneric: string;
}> = {
  en: {
    welcome: "Welcome",
    whatDoYouNeed: "What do you need?",
    repair: "Repair",
    installation: "Installation",
    whatNeedsRepair: "What needs repair?",
    soffit: "Soffit",
    fascia: "Fascia",
    soffitAndFascia: "Soffit & Fascia",
    projectType: "What type of project?",
    newConstruction: "New Construction",
    renovation: "Renovation",
    take3Photos: "Take 3 photos of the damage",
    photoInstructions: "1. Far away  2. Close up  3. Another angle",
    addVideo: "Add video (optional)",
    take1Photo: "Take a photo of the front of your house",
    take1PhotoSub: "This helps us understand the scope of work.",
    next: "Next",
    yourInfo: "Your information",
    name: "Name",
    namePlaceholder: "John Doe",
    email: "Email",
    emailPlaceholder: "john@example.com",
    phone: "Phone",
    phonePlaceholder: "(407) 555-0199",
    address: "Address",
    addressPlaceholder: "123 Main St, Orlando, FL",
    submit: "Submit Request",
    sending: "Sending...",
    successTitle: "We received your request!",
    successSub: "We'll review your photos and contact you soon.",
    backToWebsite: "Back to website",
    step: "Step",
    of: "of",
    back: "Back",
    desktopTitle: "Open on your phone",
    desktopSub: "This page is designed for mobile devices. Visit the link below on your phone:",
    required: "Required",
    photoSlotLabel: "Photo",
    optional: "optional",
    errorGeneric: "Something went wrong. Please try again.",
  },
  es: {
    welcome: "Bienvenido",
    whatDoYouNeed: "\u00bfQu\u00e9 necesita?",
    repair: "Reparaci\u00f3n",
    installation: "Instalaci\u00f3n",
    whatNeedsRepair: "\u00bfQu\u00e9 necesita reparaci\u00f3n?",
    soffit: "Soffit",
    fascia: "Fascia",
    soffitAndFascia: "Soffit y Fascia",
    projectType: "\u00bfQu\u00e9 tipo de proyecto?",
    newConstruction: "Construcci\u00f3n Nueva",
    renovation: "Renovaci\u00f3n",
    take3Photos: "Tome 3 fotos del da\u00f1o",
    photoInstructions: "1. De lejos  2. De cerca  3. Otro \u00e1ngulo",
    addVideo: "Agregar video (opcional)",
    take1Photo: "Tome una foto del frente de su casa",
    take1PhotoSub: "Esto nos ayuda a entender el alcance del trabajo.",
    next: "Siguiente",
    yourInfo: "Su informaci\u00f3n",
    name: "Nombre",
    namePlaceholder: "Juan P\u00e9rez",
    email: "Correo electr\u00f3nico",
    emailPlaceholder: "juan@ejemplo.com",
    phone: "Tel\u00e9fono",
    phonePlaceholder: "(407) 555-0199",
    address: "Direcci\u00f3n",
    addressPlaceholder: "123 Main St, Orlando, FL",
    submit: "Enviar Solicitud",
    sending: "Enviando...",
    successTitle: "\u00a1Recibimos su solicitud!",
    successSub: "Revisaremos sus fotos y lo contactaremos pronto.",
    backToWebsite: "Volver al sitio",
    step: "Paso",
    of: "de",
    back: "Volver",
    desktopTitle: "Abra en su tel\u00e9fono",
    desktopSub: "Esta p\u00e1gina est\u00e1 dise\u00f1ada para m\u00f3viles. Visite el enlace en su tel\u00e9fono:",
    required: "Obligatorio",
    photoSlotLabel: "Foto",
    optional: "opcional",
    errorGeneric: "Algo sali\u00f3 mal. Int\u00e9ntelo de nuevo.",
  },
  pt: {
    welcome: "Bem-vindo",
    whatDoYouNeed: "O que voc\u00ea precisa?",
    repair: "Reparo",
    installation: "Instala\u00e7\u00e3o",
    whatNeedsRepair: "O que precisa de reparo?",
    soffit: "Soffit",
    fascia: "Fascia",
    soffitAndFascia: "Soffit e Fascia",
    projectType: "Que tipo de projeto?",
    newConstruction: "Casa Nova",
    renovation: "Renova\u00e7\u00e3o",
    take3Photos: "Tire 3 fotos do problema",
    photoInstructions: "1. De longe  2. De perto  3. Outro \u00e2ngulo",
    addVideo: "Adicionar v\u00eddeo (opcional)",
    take1Photo: "Tire uma foto da frente da sua casa",
    take1PhotoSub: "Isso nos ajuda a entender o escopo do trabalho.",
    next: "Pr\u00f3ximo",
    yourInfo: "Seus dados",
    name: "Nome",
    namePlaceholder: "Jo\u00e3o Silva",
    email: "Email",
    emailPlaceholder: "joao@exemplo.com",
    phone: "Telefone",
    phonePlaceholder: "(407) 555-0199",
    address: "Endere\u00e7o",
    addressPlaceholder: "123 Main St, Orlando, FL",
    submit: "Enviar Solicita\u00e7\u00e3o",
    sending: "Enviando...",
    successTitle: "Recebemos sua solicita\u00e7\u00e3o!",
    successSub: "Vamos analisar suas fotos e entrar em contato em breve.",
    backToWebsite: "Voltar ao site",
    step: "Passo",
    of: "de",
    back: "Voltar",
    desktopTitle: "Abra no seu celular",
    desktopSub: "Esta p\u00e1gina foi feita para celular. Acesse o link abaixo no seu celular:",
    required: "Obrigat\u00f3rio",
    photoSlotLabel: "Foto",
    optional: "opcional",
    errorGeneric: "Algo deu errado. Tente novamente.",
  },
};

// ─── Types ──────────────────────────────────────────────────────
type ServiceType = "repair" | "installation";
type RepairSubtype = "soffit" | "fascia" | "soffit-and-fascia";
type InstallSubtype = "new-construction" | "renovation";
type Step = 1 | 2 | 3 | 4 | 5;

interface FormData {
  type: ServiceType | null;
  subtype: RepairSubtype | InstallSubtype | null;
  name: string;
  email: string;
  phone: string;
  address: string;
  photos: File[];
  previews: string[];
}

const RECAPTCHA_SITE_KEY = "6LfcYYosAAAAAFuEjO8kGDIqOjwsXMoKmWgBGyuh";

// ─── Helpers ────────────────────────────────────────────────────
function getRequiredPhotoCount(data: FormData): number {
  if (data.type === "repair") return 3;
  if (data.type === "installation" && data.subtype === "renovation") return 1;
  return 0;
}

function getStepCount(data: FormData): number {
  // repair: welcome(1) > repairType(2) > photos(3) > info(4) > done(5) = 5
  // installation+renovation: welcome(1) > installType(2) > photos(3) > info(4) > done(5) = 5
  // installation+new: welcome(1) > installType(2) > info(3→mapped to 4) > done(4→mapped to 5) = 4
  if (data.type === "installation" && data.subtype === "new-construction") return 4;
  return 5;
}

function getVisualStep(step: Step, data: FormData): number {
  if (data.type === "installation" && data.subtype === "new-construction") {
    // Skip photo step: 1,2,4,5 → visual 1,2,3,4
    if (step === 4) return 3;
    if (step === 5) return 4;
  }
  return step;
}

// ─── Main Component ─────────────────────────────────────────────
export default function MobileClient({ locale }: { locale: string }) {
  const t = content[(locale as Locale) in content ? (locale as Locale) : "en"];
  const [isDesktop, setIsDesktop] = useState(false);
  const [step, setStep] = useState<Step>(1);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [data, setData] = useState<FormData>({
    type: null,
    subtype: null,
    name: "",
    email: "",
    phone: "",
    address: "",
    photos: [],
    previews: [],
  });

  const fileRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");

  // Desktop detection
  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth > 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Cleanup preview URLs
  useEffect(() => {
    return () => {
      data.previews.forEach((url) => URL.revokeObjectURL(url));
    };
    // Only on unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goTo = useCallback((nextStep: Step, dir: "forward" | "backward" = "forward") => {
    setDirection(dir);
    setStep(nextStep);
  }, []);

  const handleServiceType = useCallback((type: ServiceType) => {
    setData((prev) => ({ ...prev, type, subtype: null, photos: [], previews: [] }));
    goTo(2, "forward");
  }, [goTo]);

  const handleRepairSubtype = useCallback((subtype: RepairSubtype) => {
    setData((prev) => ({ ...prev, subtype }));
    goTo(3, "forward");
  }, [goTo]);

  const handleInstallSubtype = useCallback((subtype: InstallSubtype) => {
    setData((prev) => ({ ...prev, subtype }));
    if (subtype === "new-construction") {
      goTo(4, "forward"); // skip photos
    } else {
      goTo(3, "forward");
    }
  }, [goTo]);

  const handlePhotoSelect = useCallback((index: number, e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setData((prev) => {
      const photos = [...prev.photos];
      const previews = [...prev.previews];
      // Revoke old preview if replacing
      if (previews[index]) URL.revokeObjectURL(previews[index]);
      photos[index] = file;
      previews[index] = URL.createObjectURL(file);
      return { ...prev, photos, previews };
    });
  }, []);

  const removePhoto = useCallback((index: number) => {
    setData((prev) => {
      const photos = [...prev.photos];
      const previews = [...prev.previews];
      if (previews[index]) URL.revokeObjectURL(previews[index]);
      photos.splice(index, 1);
      previews.splice(index, 1);
      return { ...prev, photos, previews };
    });
  }, []);

  const handleSubmit = useCallback(async () => {
    setStatus("sending");
    try {
      const recaptchaToken = await (
        window as Window & { grecaptcha?: { execute: (key: string, opts: { action: string }) => Promise<string> } }
      ).grecaptcha?.execute(RECAPTCHA_SITE_KEY, { action: "mobile_lead" }) ?? "";

      const fd = new globalThis.FormData();
      fd.append("type", data.type ?? "");
      fd.append("subtype", data.subtype ?? "");
      fd.append("name", data.name);
      fd.append("email", data.email);
      fd.append("phone", data.phone);
      fd.append("address", data.address);
      fd.append("recaptchaToken", recaptchaToken);
      data.photos.forEach((photo) => fd.append("photos", photo));

      const res = await fetch("/api/mobile-lead", { method: "POST", body: fd });
      if (!res.ok) throw new Error("Server error");

      setStatus("success");
      goTo(5, "forward");

      // Analytics
      if (typeof (window as Window & { gtag?: (...args: unknown[]) => void }).gtag === "function") {
        (window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.("event", "mobile_lead_submit");
      }
      if (typeof (window as Window & { fbq?: (...args: unknown[]) => void }).fbq === "function") {
        (window as Window & { fbq?: (...args: unknown[]) => void }).fbq?.("track", "Lead");
      }
    } catch {
      setStatus("error");
    }
  }, [data, goTo]);

  // ─── Desktop: Liquid Glass QR screen ──────────────────────────
  if (isDesktop) {
    return (
      <div className="min-h-dvh flex items-center justify-center p-8 bg-[#060a14] relative overflow-hidden">
        {/* Animated background orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-bubble-primary/20 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: "4s" }} />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/15 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: "6s", animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-400/10 rounded-full blur-[80px] animate-pulse" style={{ animationDuration: "5s", animationDelay: "2s" }} />
        </div>

        {/* Liquid glass card */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Glass container */}
          <div className="backdrop-blur-2xl bg-white/[0.06] border border-white/[0.12] rounded-[2rem] p-10 shadow-[0_8px_64px_rgba(37,99,235,0.15),inset_0_1px_0_rgba(255,255,255,0.08)] max-w-md w-full">
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-bubble-primary to-bubble-dark flex items-center justify-center shadow-[0_4px_24px_rgba(37,99,235,0.4)]">
                <Image
                  src="/logo-512.png"
                  alt="Bubbles Enterprise"
                  width={64}
                  height={64}
                  className="rounded-xl"
                />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl font-bold text-white mb-2 text-center font-[family-name:var(--font-heading)]">
              {t.desktopTitle}
            </h1>
            <p className="text-white/50 text-center mb-8 text-sm leading-relaxed max-w-xs mx-auto">
              {t.desktopSub}
            </p>

            {/* QR Code — real QR using Google Charts API */}
            <div className="flex justify-center mb-8">
              <div className="bg-white rounded-2xl p-4 shadow-[0_4px_32px_rgba(37,99,235,0.2)]">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://bubblesenterprise.com/mobile&bgcolor=ffffff&color=0f172a&margin=0"
                  alt="QR Code — bubblesenterprise.com/mobile"
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
              </div>
            </div>

            {/* Scan instruction */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-8 h-[1px] bg-white/20" />
              <span className="text-white/40 text-xs uppercase tracking-widest font-medium">
                {locale === "pt" ? "ou acesse" : locale === "es" ? "o visite" : "or visit"}
              </span>
              <div className="w-8 h-[1px] bg-white/20" />
            </div>

            {/* URL */}
            <a
              href="https://bubblesenterprise.com/mobile"
              className="flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl bg-bubble-primary/10 border border-bubble-primary/30 text-bubble-secondary font-semibold text-sm hover:bg-bubble-primary/20 hover:border-bubble-primary/50 transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><rect x="5" y="2" width="14" height="20" rx="2" /><circle cx="12" cy="18" r="1" /></svg>
              bubblesenterprise.com/mobile
            </a>
          </div>

          {/* Subtle bottom text */}
          <p className="mt-6 text-white/20 text-xs text-center">
            Bubbles Enterprise Soffit &amp; Fascia
          </p>
        </div>
      </div>
    );
  }

  // ─── Mobile: multi-step form ──────────────────────────────────
  const totalSteps = getStepCount(data);
  const visualStep = getVisualStep(step, data);

  const animClass =
    direction === "forward"
      ? "animate-[slideInRight_300ms_ease-out_both]"
      : "animate-[slideInLeft_300ms_ease-out_both]";

  return (
    <div className="min-h-dvh flex flex-col bg-gradient-to-b from-[#0f172a] via-[#131c31] to-[#0f172a]">
      {/* Progress bar */}
      {step < 5 && (
        <div className="px-6 pt-4 pb-2">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-slate-500 font-medium">
              {t.step} {visualStep} {t.of} {totalSteps}
            </span>
          </div>
          <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-bubble-primary rounded-full transition-all duration-500 ease-out"
              style={{ width: `${(visualStep / totalSteps) * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* Content area */}
      <div className="flex-1 flex flex-col px-6 pb-8" key={step}>
        <div className={animClass}>
          {/* ═══ STEP 1: Welcome ═══ */}
          {step === 1 && (
            <div className="flex-1 flex flex-col items-center justify-center min-h-[70dvh]">
              <div className="mb-8">
                <Image
                  src="/logo-512.png"
                  alt="Bubbles Enterprise"
                  width={64}
                  height={64}
                  className="rounded-xl mx-auto"
                  priority
                />
              </div>
              <h1 className="text-2xl font-bold text-white text-center mb-2 font-[family-name:var(--font-heading)]">
                {t.whatDoYouNeed}
              </h1>
              <p className="text-slate-400 text-sm text-center mb-10">
                Soffit & Fascia Services
              </p>
              <div className="w-full max-w-sm space-y-4">
                <button
                  type="button"
                  onClick={() => handleServiceType("repair")}
                  className="w-full h-14 bg-slate-800 hover:bg-slate-700 active:scale-[0.98] text-white font-semibold rounded-xl border border-slate-700 transition-all duration-200 flex items-center justify-between px-6"
                >
                  <span>{t.repair}</span>
                  <ChevronRight className="w-5 h-5 text-slate-500" />
                </button>
                <button
                  type="button"
                  onClick={() => handleServiceType("installation")}
                  className="w-full h-14 bg-slate-800 hover:bg-slate-700 active:scale-[0.98] text-white font-semibold rounded-xl border border-slate-700 transition-all duration-200 flex items-center justify-between px-6"
                >
                  <span>{t.installation}</span>
                  <ChevronRight className="w-5 h-5 text-slate-500" />
                </button>
              </div>
            </div>
          )}

          {/* ═══ STEP 2a: Repair subtype ═══ */}
          {step === 2 && data.type === "repair" && (
            <div className="flex-1 flex flex-col min-h-[70dvh]">
              <BackButton label={t.back} onClick={() => goTo(1, "backward")} />
              <div className="flex-1 flex flex-col items-center justify-center">
                <h2 className="text-xl font-bold text-white text-center mb-8 font-[family-name:var(--font-heading)]">
                  {t.whatNeedsRepair}
                </h2>
                <div className="w-full max-w-sm space-y-4">
                  {(["soffit", "fascia", "soffit-and-fascia"] as RepairSubtype[]).map((sub) => (
                    <button
                      key={sub}
                      type="button"
                      onClick={() => handleRepairSubtype(sub)}
                      className="w-full h-14 bg-slate-800 hover:bg-slate-700 active:scale-[0.98] text-white font-semibold rounded-xl border border-slate-700 transition-all duration-200 flex items-center justify-between px-6"
                    >
                      <span>
                        {sub === "soffit" ? t.soffit : sub === "fascia" ? t.fascia : t.soffitAndFascia}
                      </span>
                      <ChevronRight className="w-5 h-5 text-slate-500" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ═══ STEP 2b: Installation subtype ═══ */}
          {step === 2 && data.type === "installation" && (
            <div className="flex-1 flex flex-col min-h-[70dvh]">
              <BackButton label={t.back} onClick={() => goTo(1, "backward")} />
              <div className="flex-1 flex flex-col items-center justify-center">
                <h2 className="text-xl font-bold text-white text-center mb-8 font-[family-name:var(--font-heading)]">
                  {t.projectType}
                </h2>
                <div className="w-full max-w-sm space-y-4">
                  <button
                    type="button"
                    onClick={() => handleInstallSubtype("new-construction")}
                    className="w-full h-14 bg-slate-800 hover:bg-slate-700 active:scale-[0.98] text-white font-semibold rounded-xl border border-slate-700 transition-all duration-200 flex items-center justify-between px-6"
                  >
                    <span>{t.newConstruction}</span>
                    <ChevronRight className="w-5 h-5 text-slate-500" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleInstallSubtype("renovation")}
                    className="w-full h-14 bg-slate-800 hover:bg-slate-700 active:scale-[0.98] text-white font-semibold rounded-xl border border-slate-700 transition-all duration-200 flex items-center justify-between px-6"
                  >
                    <span>{t.renovation}</span>
                    <ChevronRight className="w-5 h-5 text-slate-500" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ═══ STEP 3: Photos ═══ */}
          {step === 3 && (
            <div className="flex-1 flex flex-col min-h-[70dvh]">
              <BackButton label={t.back} onClick={() => goTo(2, "backward")} />
              <div className="flex-1 flex flex-col items-center justify-center py-8">
                {data.type === "repair" ? (
                  <>
                    <h2 className="text-xl font-bold text-white text-center mb-2 font-[family-name:var(--font-heading)]">
                      {t.take3Photos}
                    </h2>
                    <p className="text-slate-400 text-sm text-center mb-8">
                      {t.photoInstructions}
                    </p>
                    <div className="grid grid-cols-3 gap-3 w-full max-w-sm mb-6">
                      {[0, 1, 2].map((i) => (
                        <PhotoSlot
                          key={i}
                          index={i}
                          preview={data.previews[i]}
                          label={`${t.photoSlotLabel} ${i + 1}`}
                          fileRef={(el) => { fileRefs.current[i] = el; }}
                          onSelect={(e) => handlePhotoSelect(i, e)}
                          onRemove={() => removePhoto(i)}
                        />
                      ))}
                    </div>
                    {/* Optional extra photos / video */}
                    {data.photos.filter(Boolean).length >= 3 && (
                      <div className="w-full max-w-sm space-y-3">
                        {[3, 4].map((i) =>
                          data.previews[i] ? (
                            <div key={i} className="flex items-center gap-3 bg-slate-800/60 rounded-xl p-3 border border-slate-700">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img src={data.previews[i]} alt={`Extra ${i - 2}`} className="w-12 h-12 rounded-lg object-cover" />
                              <span className="text-sm text-slate-300 flex-1 truncate">{data.photos[i]?.name}</span>
                              <button type="button" onClick={() => removePhoto(i)} className="p-1 text-slate-500 hover:text-red-400">
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                          ) : (
                            <label key={i} className="flex items-center gap-3 bg-slate-800/40 rounded-xl p-3 border border-dashed border-slate-700 cursor-pointer hover:border-slate-500 transition-colors">
                              <Camera className="w-5 h-5 text-slate-500" />
                              <span className="text-sm text-slate-400">
                                {i === 4 ? t.addVideo : `${t.photoSlotLabel} ${i + 1} (${t.optional})`}
                              </span>
                              <input
                                type="file"
                                accept={i === 4 ? "image/*,video/*" : "image/*,video/*"}
                                capture="environment"
                                className="hidden"
                                ref={(el) => { fileRefs.current[i] = el; }}
                                onChange={(e) => handlePhotoSelect(i, e)}
                              />
                            </label>
                          )
                        )}
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    <h2 className="text-xl font-bold text-white text-center mb-2 font-[family-name:var(--font-heading)]">
                      {t.take1Photo}
                    </h2>
                    <p className="text-slate-400 text-sm text-center mb-8">
                      {t.take1PhotoSub}
                    </p>
                    <div className="w-full max-w-[200px] mb-6">
                      <PhotoSlot
                        index={0}
                        preview={data.previews[0]}
                        label={t.photoSlotLabel}
                        fileRef={(el) => { fileRefs.current[0] = el; }}
                        onSelect={(e) => handlePhotoSelect(0, e)}
                        onRemove={() => removePhoto(0)}
                      />
                    </div>
                  </>
                )}

                {/* Next button */}
                <div className="w-full max-w-sm mt-6">
                  <button
                    type="button"
                    disabled={data.photos.filter(Boolean).length < getRequiredPhotoCount(data)}
                    onClick={() => goTo(4, "forward")}
                    className="w-full h-14 bg-bubble-primary hover:bg-bubble-dark active:scale-[0.98] disabled:opacity-40 disabled:active:scale-100 text-white font-bold rounded-xl transition-all duration-200"
                  >
                    {t.next}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ═══ STEP 4: Contact info ═══ */}
          {step === 4 && (
            <div className="flex-1 flex flex-col min-h-[70dvh]">
              <BackButton
                label={t.back}
                onClick={() => {
                  if (data.type === "installation" && data.subtype === "new-construction") {
                    goTo(2, "backward");
                  } else {
                    goTo(3, "backward");
                  }
                }}
              />
              <div className="flex-1 flex flex-col justify-center py-8">
                <h2 className="text-xl font-bold text-white text-center mb-8 font-[family-name:var(--font-heading)]">
                  {t.yourInfo}
                </h2>
                <div className="w-full max-w-sm mx-auto space-y-4">
                  <FormInput
                    label={t.name}
                    type="text"
                    placeholder={t.namePlaceholder}
                    value={data.name}
                    required
                    autoComplete="name"
                    onChange={(v) => setData((prev) => ({ ...prev, name: v }))}
                  />
                  <FormInput
                    label={t.email}
                    type="email"
                    placeholder={t.emailPlaceholder}
                    value={data.email}
                    required
                    autoComplete="email"
                    onChange={(v) => setData((prev) => ({ ...prev, email: v }))}
                  />
                  <FormInput
                    label={t.phone}
                    type="tel"
                    placeholder={t.phonePlaceholder}
                    value={data.phone}
                    required
                    autoComplete="tel"
                    onChange={(v) => setData((prev) => ({ ...prev, phone: v }))}
                  />
                  <FormInput
                    label={t.address}
                    type="text"
                    placeholder={t.addressPlaceholder}
                    value={data.address}
                    required
                    autoComplete="street-address"
                    onChange={(v) => setData((prev) => ({ ...prev, address: v }))}
                  />

                  {status === "error" && (
                    <p role="alert" className="text-sm text-red-400 bg-red-950/40 border border-red-800 rounded-xl px-4 py-3 text-center">
                      {t.errorGeneric}
                    </p>
                  )}

                  <button
                    type="button"
                    disabled={status === "sending" || !data.name || !data.email || !data.phone || !data.address}
                    onClick={handleSubmit}
                    className="w-full h-14 bg-bubble-primary hover:bg-bubble-dark active:scale-[0.98] disabled:opacity-40 disabled:active:scale-100 text-white font-bold rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    {status === "sending" ? (
                      <>
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        {t.sending}
                      </>
                    ) : (
                      t.submit
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ═══ STEP 5: Success ═══ */}
          {step === 5 && (
            <div className="flex-1 flex flex-col items-center justify-center min-h-[80dvh]">
              <div className="w-20 h-20 bg-green-500/20 border-4 border-green-500 rounded-full flex items-center justify-center mb-6 animate-[scaleIn_500ms_cubic-bezier(0.34,1.56,0.64,1)_both]">
                <Check className="w-10 h-10 text-green-400" />
              </div>
              <h2 className="text-2xl font-bold text-white text-center mb-3 font-[family-name:var(--font-heading)]">
                {t.successTitle}
              </h2>
              <p className="text-slate-400 text-center max-w-xs mb-10">
                {t.successSub}
              </p>
              <a
                href={locale === "en" ? "/" : `/${locale}`}
                className="text-sm text-slate-500 hover:text-slate-300 underline underline-offset-4 transition-colors"
              >
                {t.backToWebsite}
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Keyframes injected via style tag */}
      <style>{`
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(24px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-24px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.5); }
          to { opacity: 1; transform: scale(1); }
        }
        @media (prefers-reduced-motion: reduce) {
          @keyframes slideInRight { from, to { opacity: 1; transform: none; } }
          @keyframes slideInLeft { from, to { opacity: 1; transform: none; } }
          @keyframes scaleIn { from, to { opacity: 1; transform: none; } }
        }
      `}</style>
    </div>
  );
}

// ─── Sub-components ─────────────────────────────────────────────
function BackButton({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center gap-1.5 text-slate-400 hover:text-white py-3 -ml-1 self-start transition-colors"
      aria-label={label}
    >
      <ArrowLeft className="w-5 h-5" />
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
}

function PhotoSlot({
  index,
  preview,
  label,
  fileRef,
  onSelect,
  onRemove,
}: {
  index: number;
  preview?: string;
  label: string;
  fileRef: (el: HTMLInputElement | null) => void;
  onSelect: (e: ChangeEvent<HTMLInputElement>) => void;
  onRemove: () => void;
}) {
  return (
    <div className="relative aspect-square">
      {preview ? (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={preview}
            alt={`${label} ${index + 1}`}
            className="w-full h-full object-cover rounded-xl border-2 border-green-500/50"
          />
          <button
            type="button"
            onClick={onRemove}
            className="absolute -top-2 -right-2 w-7 h-7 bg-red-500 text-white rounded-full flex items-center justify-center shadow-lg active:scale-90 transition-transform"
            aria-label={`Remove ${label}`}
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </>
      ) : (
        <label className="w-full h-full flex flex-col items-center justify-center bg-slate-800 border-2 border-dashed border-slate-600 rounded-xl cursor-pointer hover:border-slate-400 active:scale-95 transition-all">
          <Camera className="w-7 h-7 text-slate-500 mb-1" />
          <span className="text-[11px] text-slate-500 font-medium">{label}</span>
          <input
            type="file"
            accept="image/*,video/*"
            capture="environment"
            className="hidden"
            ref={fileRef}
            onChange={onSelect}
          />
        </label>
      )}
    </div>
  );
}

function FormInput({
  label,
  type,
  placeholder,
  value,
  required,
  autoComplete,
  onChange,
}: {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  required?: boolean;
  autoComplete?: string;
  onChange: (value: string) => void;
}) {
  const id = `mobile-${label.toLowerCase().replace(/\s+/g, "-")}`;
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-slate-300 mb-1.5">
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        required={required}
        autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-14 px-4 bg-slate-800 text-white placeholder:text-slate-500 border border-slate-600 rounded-xl focus:ring-2 focus:ring-bubble-primary focus:border-bubble-primary outline-none transition-all"
      />
    </div>
  );
}
