import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Phone } from "lucide-react";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "thankYou" });
    return {
        title: t("metaTitle"),
        description: t("metaDesc"),
        robots: { index: false, follow: false },
    };
}

export default async function ThankYouPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "thankYou" });
    const lp = (path: string) => locale === "en" ? path : `/${locale}${path}`;

    return (
        <div className="flex flex-col min-h-screen items-center justify-center bg-gray-50 px-4">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-12 max-w-lg w-full text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h1 className="text-3xl font-extrabold text-gray-900 mb-4">{t("title")}</h1>
                <p
                    className="text-lg text-gray-600 leading-relaxed mb-8"
                    dangerouslySetInnerHTML={{ __html: t("message") }}
                />
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href={lp("/")}
                        className="inline-flex items-center justify-center gap-2 bg-bubble-primary text-white font-bold px-8 py-4 rounded-full hover:bg-bubble-dark transition shadow-lg"
                    >
                        {t("backHome")} <ArrowRight className="w-4 h-4" />
                    </Link>
                    <a
                        href="tel:4077151790"
                        className="inline-flex items-center justify-center gap-2 bg-white text-bubble-primary border-2 border-bubble-primary font-bold px-8 py-4 rounded-full hover:bg-blue-50 transition"
                    >
                        <Phone className="w-4 h-4" /> (407) 715-1790
                    </a>
                </div>
            </div>
        </div>
    );
}
