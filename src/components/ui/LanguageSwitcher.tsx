"use client";

import { useRouter, usePathname } from "@/i18n/navigation";

type Locale = "en" | "es" | "pt";

const ACTIVE_LOCALES: Locale[] = ["en", "es", "pt"];

const LOCALE_LABELS: Record<Locale, string> = {
  en: "EN",
  es: "ES",
  pt: "PT",
};

function setLocaleCookie(locale: Locale) {
  document.cookie = `NEXT_LOCALE=${locale};path=/;max-age=31536000;SameSite=Lax;Secure`;
}

interface Props {
  locale: string;
  variant?: "footer" | "mobile";
}

export function LanguageSwitcherClient({ locale, variant = "footer" }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  const handleSwitch = (targetLocale: Locale) => {
    setLocaleCookie(targetLocale);
    router.replace(pathname, { locale: targetLocale });
  };

  if (variant === "mobile") {
    return (
      <div className="flex items-center gap-2 mb-4 px-4 py-3 bg-gray-50 rounded-xl">
        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mr-1">Lang:</span>
        {ACTIVE_LOCALES.map((l) =>
          l === locale ? (
            <span key={l} className="px-3 py-1.5 rounded-lg text-sm font-bold bg-bubble-primary text-white">
              {LOCALE_LABELS[l]}
            </span>
          ) : (
            <button
              key={l}
              onClick={() => handleSwitch(l)}
              className="px-3 py-1.5 rounded-lg text-sm font-semibold text-gray-600 hover:text-bubble-primary hover:bg-white transition-colors"
              aria-label={l === "es" ? "Español" : l === "pt" ? "Português" : "English"}
            >
              {LOCALE_LABELS[l]}
            </button>
          )
        )}
      </div>
    );
  }

  // Footer variant
  return (
    <div className="flex items-center gap-1 border border-white/20 rounded-lg px-2 py-1.5">
      {ACTIVE_LOCALES.map((l, i) => (
        <span key={l} className="flex items-center gap-1 text-xs font-bold">
          {i > 0 && <span className="text-white/20">|</span>}
          {l === locale ? (
            <span className="text-bubble-light">{LOCALE_LABELS[l]}</span>
          ) : (
            <button
              onClick={() => handleSwitch(l)}
              className="text-white/60 hover:text-white transition-colors"
              aria-label={l === "es" ? "Español" : l === "pt" ? "Português" : "English"}
            >
              {LOCALE_LABELS[l]}
            </button>
          )}
        </span>
      ))}
    </div>
  );
}
