"use client";

import { useState, useRef, useEffect, useCallback, type ChangeEvent } from "react";
import Image from "next/image";
import { ArrowLeft, Camera, Check, ChevronRight, X, Wrench, Hammer, Building2, RefreshCw } from "lucide-react";

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
      <div className="min-h-dvh flex items-center justify-center p-8 bg-[#040810] relative overflow-hidden">
        {/* CSS animations */}
        <style>{`
          @keyframes float-slow { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(30px,-20px) scale(1.05); } }
          @keyframes float-med { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(-20px,30px) scale(1.08); } }
          @keyframes float-fast { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(15px,15px) scale(0.95); } }
          @keyframes card-enter { from { opacity:0; transform: translateY(24px) scale(0.96); } to { opacity:1; transform: translateY(0) scale(1); } }
          @keyframes sparkle { 0%,100% { opacity:0; transform:scale(0); } 50% { opacity:1; transform:scale(1); } }
          .orb-1 { animation: float-slow 8s ease-in-out infinite; }
          .orb-2 { animation: float-med 10s ease-in-out infinite 1s; }
          .orb-3 { animation: float-fast 7s ease-in-out infinite 2s; }
          .orb-4 { animation: float-slow 12s ease-in-out infinite 3s; }
          .card-enter { animation: card-enter 0.8s cubic-bezier(0.16,1,0.3,1) forwards; }
          .sparkle { animation: sparkle 3s ease-in-out infinite; }
        `}</style>

        {/* Animated background orbs — multi-color */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="orb-1 absolute top-[15%] left-[20%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[150px]" />
          <div className="orb-2 absolute bottom-[10%] right-[15%] w-[500px] h-[500px] bg-purple-500/15 rounded-full blur-[130px]" />
          <div className="orb-3 absolute top-[40%] left-[55%] w-[350px] h-[350px] bg-cyan-400/12 rounded-full blur-[100px]" />
          <div className="orb-4 absolute bottom-[30%] left-[10%] w-[250px] h-[250px] bg-indigo-400/10 rounded-full blur-[80px]" />
        </div>

        {/* Floating sparkle particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="sparkle absolute w-1 h-1 bg-white/40 rounded-full"
              style={{
                top: `${10 + (i * 7) % 80}%`,
                left: `${5 + (i * 11) % 90}%`,
                animationDelay: `${i * 0.4}s`,
                animationDuration: `${2.5 + (i % 3)}s`,
              }}
            />
          ))}
        </div>

        {/* Liquid glass card with layered depth */}
        <div className="relative z-10 flex flex-col items-center card-enter">
          {/* Back layer card (depth effect) */}
          <div className="absolute -top-3 -left-3 -right-3 -bottom-3 backdrop-blur-md bg-white/[0.02] border border-white/[0.05] rounded-[2.5rem] -rotate-1" />
          <div className="absolute -top-1.5 -left-1.5 -right-1.5 -bottom-1.5 backdrop-blur-lg bg-white/[0.03] border border-white/[0.07] rounded-[2.3rem] rotate-[0.5deg]" />

          {/* Main glass container */}
          <div className="relative backdrop-blur-2xl bg-white/[0.07] border border-white/[0.15] rounded-[2rem] p-10 shadow-[0_8px_80px_rgba(37,99,235,0.2),0_0px_40px_rgba(139,92,246,0.08),inset_0_1px_0_rgba(255,255,255,0.1)] max-w-md w-full">
            {/* Subtle inner glow at top */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

            {/* Logo */}
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-[0_4px_32px_rgba(37,99,235,0.5)] ring-2 ring-white/10">
                <Image
                  src="/logo-512.png"
                  alt="Bubbles Enterprise"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl font-bold text-white mb-2 text-center font-[family-name:var(--font-heading)] tracking-tight">
              {t.desktopTitle}
            </h1>
            <p className="text-white/40 text-center mb-2 text-sm leading-relaxed max-w-xs mx-auto">
              {t.desktopSub}
            </p>

            {/* Scan instruction above QR */}
            <div className="flex items-center justify-center gap-3 mb-5 mt-6">
              <div className="w-10 h-px bg-gradient-to-r from-transparent to-white/20" />
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" d="M3 7V5a2 2 0 012-2h2M17 3h2a2 2 0 012 2v2M3 17v2a2 2 0 002 2h2M17 21h2a2 2 0 002-2v-2" /><rect x="7" y="7" width="10" height="10" rx="1" /></svg>
                <span className="text-white/50 text-xs uppercase tracking-[0.2em] font-medium">
                  {locale === "pt" ? "escaneie o código" : locale === "es" ? "escanee el código" : "scan the code"}
                </span>
              </div>
              <div className="w-10 h-px bg-gradient-to-l from-transparent to-white/20" />
            </div>

            {/* QR Code with glow ring */}
            <div className="flex justify-center mb-8">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-br from-bubble-primary/30 via-purple-500/20 to-cyan-400/30 rounded-2xl blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-white rounded-2xl p-4 shadow-[0_4px_40px_rgba(37,99,235,0.25)]">
                  <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://bubblesenterprise.com/mobile&bgcolor=ffffff&color=0f172a&margin=0"
                    alt="QR Code"
                    width={200}
                    height={200}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center gap-2 mb-5">
              <div className="w-12 h-px bg-white/10" />
              <span className="text-white/30 text-xs uppercase tracking-widest font-medium">
                {locale === "pt" ? "ou acesse" : locale === "es" ? "o visite" : "or visit"}
              </span>
              <div className="w-12 h-px bg-white/10" />
            </div>

            {/* URL button */}
            <a
              href="https://bubblesenterprise.com/mobile"
              className="group flex items-center justify-center gap-2.5 w-full py-4 px-6 rounded-xl bg-gradient-to-r from-bubble-primary/15 to-purple-500/10 border border-white/10 text-white font-semibold text-sm hover:from-bubble-primary/25 hover:to-purple-500/20 hover:border-white/20 transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,99,235,0.2)]"
            >
              <svg className="w-5 h-5 text-bubble-secondary group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <rect x="5" y="2" width="14" height="20" rx="2" />
                <circle cx="12" cy="18" r="1" />
                <line x1="9" y1="5" x2="15" y2="5" />
              </svg>
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                bubblesenterprise.com/mobile
              </span>
            </a>
          </div>

          {/* Subtle bottom text */}
          <p className="mt-8 text-white/15 text-xs text-center tracking-wide">
            Bubbles Enterprise Soffit &amp; Fascia &middot; Orlando, FL
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
    <div className="min-h-dvh flex flex-col bg-[#060a14] relative overflow-hidden">
      {/* Subtle ambient orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-bubble-primary/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-cyan-400/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Content with relative z */}
      <div className="relative z-10 flex-1 flex flex-col">
        {/* Progress dots — app style, no text */}
        {step > 1 && step < 5 && (
          <div className="flex items-center justify-center gap-2 pt-4 pb-1">
            {Array.from({ length: totalSteps }, (_, i) => (
              <div
                key={i}
                className={`rounded-full transition-all duration-300 ${
                  i + 1 === visualStep
                    ? "w-6 h-2 bg-gradient-to-r from-bubble-primary to-cyan-400 shadow-[0_0_8px_rgba(37,99,235,0.5)]"
                    : i + 1 < visualStep
                    ? "w-2 h-2 bg-bubble-primary/60"
                    : "w-2 h-2 bg-white/10"
                }`}
              />
            ))}
          </div>
        )}

        {/* Content area */}
        <div className="flex-1 flex flex-col px-6 pb-8" key={step}>
          <div className={animClass}>
            {/* ═══ STEP 1: Welcome ═══ */}
            {step === 1 && (
              <div className="flex-1 flex flex-col items-center justify-center min-h-[70dvh]">
                <div className="mb-8">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(37,99,235,0.4)] ring-2 ring-white/10 mx-auto">
                    <Image
                      src="/logo-512.png"
                      alt="Bubbles Enterprise"
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </div>
                <h1 className="text-3xl font-bold text-center mb-2 font-[family-name:var(--font-heading)] tracking-tight bg-gradient-to-b from-white to-blue-200 bg-clip-text text-transparent">
                  {t.whatDoYouNeed}
                </h1>
                <p className="text-white/40 text-sm text-center mb-10 font-medium">
                  Soffit & Fascia Services
                </p>
                <div className="w-full max-w-sm space-y-4">
                  <button
                    type="button"
                    onClick={() => handleServiceType("repair")}
                    className="w-full h-16 backdrop-blur-xl bg-white/[0.06] hover:bg-white/[0.1] active:scale-[0.97] text-white font-semibold rounded-2xl border border-white/[0.12] transition-all duration-200 flex items-center justify-between px-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
                  >
                    <div className="flex items-center gap-3">
                      <Wrench className="w-5 h-5 text-white/40" />
                      <span>{t.repair}</span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-white/25" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleServiceType("installation")}
                    className="w-full h-16 backdrop-blur-xl bg-white/[0.06] hover:bg-white/[0.1] active:scale-[0.97] text-white font-semibold rounded-2xl border border-white/[0.12] transition-all duration-200 flex items-center justify-between px-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
                  >
                    <div className="flex items-center gap-3">
                      <Hammer className="w-5 h-5 text-white/40" />
                      <span>{t.installation}</span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-white/25" />
                  </button>
                </div>
              </div>
            )}

            {/* ═══ STEP 2a: Repair subtype ═══ */}
            {step === 2 && data.type === "repair" && (
              <div className="flex-1 flex flex-col min-h-[70dvh]">
                <BackButton label={t.back} onClick={() => goTo(1, "backward")} />
                <div className="flex-1 flex flex-col items-center justify-center">
                  <h2 className="text-xl font-bold text-center mb-8 font-[family-name:var(--font-heading)] bg-gradient-to-b from-white to-blue-200 bg-clip-text text-transparent">
                    {t.whatNeedsRepair}
                  </h2>
                  <div className="w-full max-w-sm space-y-4">
                    {(["soffit", "fascia", "soffit-and-fascia"] as RepairSubtype[]).map((sub) => {
                      const icons: Record<RepairSubtype, React.ReactNode> = {
                        soffit: <svg className="w-5 h-5 text-white/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round"><path d="M3 21h18M4 21V10l8-7 8 7v11" /><path d="M4 10h16" /></svg>,
                        fascia: <svg className="w-5 h-5 text-white/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round"><rect x="3" y="8" width="18" height="3" rx="0.5" /><path d="M3 21h18M4 21V11M20 21V11M12 3l9 5M12 3L3 8" /></svg>,
                        "soffit-and-fascia": <svg className="w-5 h-5 text-white/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round"><path d="M3 21h18M4 21V10l8-7 8 7v11" /><rect x="3" y="8" width="18" height="3" rx="0.5" /></svg>,
                      };
                      return (
                        <button
                          key={sub}
                          type="button"
                          onClick={() => handleRepairSubtype(sub)}
                          className="w-full h-16 backdrop-blur-xl bg-white/[0.06] hover:bg-white/[0.1] active:scale-[0.97] text-white font-semibold rounded-2xl border border-white/[0.12] transition-all duration-200 flex items-center justify-between px-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
                        >
                          <div className="flex items-center gap-3">
                            {icons[sub]}
                            <span>
                              {sub === "soffit" ? t.soffit : sub === "fascia" ? t.fascia : t.soffitAndFascia}
                            </span>
                          </div>
                          <ChevronRight className="w-5 h-5 text-white/25" />
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* ═══ STEP 2b: Installation subtype ═══ */}
            {step === 2 && data.type === "installation" && (
              <div className="flex-1 flex flex-col min-h-[70dvh]">
                <BackButton label={t.back} onClick={() => goTo(1, "backward")} />
                <div className="flex-1 flex flex-col items-center justify-center">
                  <h2 className="text-xl font-bold text-center mb-8 font-[family-name:var(--font-heading)] bg-gradient-to-b from-white to-blue-200 bg-clip-text text-transparent">
                    {t.projectType}
                  </h2>
                  <div className="w-full max-w-sm space-y-4">
                    <button
                      type="button"
                      onClick={() => handleInstallSubtype("new-construction")}
                      className="w-full h-16 backdrop-blur-xl bg-white/[0.06] hover:bg-white/[0.1] active:scale-[0.97] text-white font-semibold rounded-2xl border border-white/[0.12] transition-all duration-200 flex items-center justify-between px-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
                    >
                      <div className="flex items-center gap-3">
                        <Building2 className="w-5 h-5 text-white/40" />
                        <span>{t.newConstruction}</span>
                      </div>
                      <ChevronRight className="w-5 h-5 text-white/25" />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleInstallSubtype("renovation")}
                      className="w-full h-16 backdrop-blur-xl bg-white/[0.06] hover:bg-white/[0.1] active:scale-[0.97] text-white font-semibold rounded-2xl border border-white/[0.12] transition-all duration-200 flex items-center justify-between px-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
                    >
                      <div className="flex items-center gap-3">
                        <RefreshCw className="w-5 h-5 text-white/40" />
                        <span>{t.renovation}</span>
                      </div>
                      <ChevronRight className="w-5 h-5 text-white/25" />
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
                      <h2 className="text-xl font-bold text-center mb-2 font-[family-name:var(--font-heading)] bg-gradient-to-b from-white to-blue-200 bg-clip-text text-transparent">
                        {t.take3Photos}
                      </h2>
                      <p className="text-white/35 text-sm text-center mb-8">
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
                              <div key={i} className="flex items-center gap-3 bg-white/[0.04] rounded-xl p-3 border border-white/[0.1]">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={data.previews[i]} alt={`Extra ${i - 2}`} className="w-12 h-12 rounded-lg object-cover" />
                                <span className="text-sm text-white/60 flex-1 truncate">{data.photos[i]?.name}</span>
                                <button type="button" onClick={() => removePhoto(i)} className="p-1 text-white/30 hover:text-red-400 transition-colors">
                                  <X className="w-4 h-4" />
                                </button>
                              </div>
                            ) : (
                              <label key={i} className="flex items-center gap-3 bg-white/[0.03] rounded-xl p-3 border border-dashed border-white/[0.1] cursor-pointer hover:border-white/[0.2] hover:bg-white/[0.05] transition-all">
                                <Camera className="w-5 h-5 text-white/30" />
                                <span className="text-sm text-white/35">
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
                      <h2 className="text-xl font-bold text-center mb-2 font-[family-name:var(--font-heading)] bg-gradient-to-b from-white to-blue-200 bg-clip-text text-transparent">
                        {t.take1Photo}
                      </h2>
                      <p className="text-white/35 text-sm text-center mb-8">
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
                      className="w-full h-14 bg-gradient-to-r from-bubble-primary to-blue-500 hover:from-bubble-dark hover:to-bubble-primary active:scale-[0.97] disabled:opacity-40 disabled:active:scale-100 text-white font-bold rounded-xl transition-all duration-200 shadow-[0_4px_20px_rgba(37,99,235,0.4)]"
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
                  <h2 className="text-xl font-bold text-center mb-8 font-[family-name:var(--font-heading)] bg-gradient-to-b from-white to-blue-200 bg-clip-text text-transparent">
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
                      className="w-full h-14 bg-gradient-to-r from-bubble-primary to-blue-500 hover:from-bubble-dark hover:to-bubble-primary active:scale-[0.97] disabled:opacity-40 disabled:active:scale-100 text-white font-bold rounded-xl transition-all duration-200 shadow-[0_4px_20px_rgba(37,99,235,0.4)] flex items-center justify-center gap-2"
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
              <div className="flex-1 flex flex-col items-center justify-center min-h-[80dvh] relative">
                {/* Mini sparkle particles */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-white/30 rounded-full animate-[sparkle_3s_ease-in-out_infinite]"
                      style={{
                        top: `${15 + (i * 9) % 70}%`,
                        left: `${10 + (i * 13) % 80}%`,
                        animationDelay: `${i * 0.35}s`,
                        animationDuration: `${2.5 + (i % 3)}s`,
                      }}
                    />
                  ))}
                </div>

                <div className="w-24 h-24 bg-green-500/15 border-2 border-green-400/50 rounded-full flex items-center justify-center mb-8 shadow-[0_0_40px_rgba(34,197,94,0.2)] animate-[scaleIn_500ms_cubic-bezier(0.34,1.56,0.64,1)_both]">
                  <Check className="w-12 h-12 text-green-400" />
                </div>
                <h2 className="text-2xl font-bold text-center mb-3 font-[family-name:var(--font-heading)] bg-gradient-to-b from-white to-blue-200 bg-clip-text text-transparent">
                  {t.successTitle}
                </h2>
                <p className="text-white/40 text-center max-w-xs mb-10">
                  {t.successSub}
                </p>
                <a
                  href={locale === "en" ? "/" : `/${locale}`}
                  className="text-sm text-white/30 hover:text-white/60 underline underline-offset-4 transition-colors"
                >
                  {t.backToWebsite}
                </a>
              </div>
            )}
          </div>
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
        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1); }
        }
        @media (prefers-reduced-motion: reduce) {
          @keyframes slideInRight { from, to { opacity: 1; transform: none; } }
          @keyframes slideInLeft { from, to { opacity: 1; transform: none; } }
          @keyframes scaleIn { from, to { opacity: 1; transform: none; } }
          @keyframes sparkle { from, to { opacity: 0.5; transform: scale(1); } }
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
      className="flex items-center gap-1.5 text-white/40 hover:text-white/70 py-3 -ml-1 self-start transition-colors"
      aria-label={label}
    >
      <ArrowLeft className="w-4 h-4" />
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
            className="w-full h-full object-cover rounded-2xl border-2 border-green-400/40 shadow-[0_4px_16px_rgba(34,197,94,0.15)]"
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
        <label className="relative w-full h-full flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-white/15 bg-white/[0.04] cursor-pointer active:scale-95 transition-all overflow-hidden group">
          {/* Gradient border glow on hover */}
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-bubble-primary/20 to-cyan-400/10" />
          <Camera className="relative z-10 w-8 h-8 text-white/25 mb-1 group-hover:text-white/40 transition-colors" />
          <span className="relative z-10 text-[11px] text-white/30 font-medium group-hover:text-white/45 transition-colors">{label}</span>
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
      <label htmlFor={id} className="block text-[11px] font-medium text-white/40 mb-1.5 uppercase tracking-wider">
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
        className="w-full h-14 px-4 bg-white/[0.06] text-white placeholder:text-white/25 border border-white/[0.12] rounded-xl focus:border-bubble-primary/50 focus:bg-white/[0.08] focus:ring-1 focus:ring-bubble-primary/30 outline-none transition-all"
      />
    </div>
  );
}
