import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Clock } from "lucide-react";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "repairThankYou" });
    return {
        title: t("metaTitle"),
        description: t("metaDesc"),
        robots: { index: false, follow: false },
    };
}

export default async function RepairThankYouPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "repairThankYou" });
    const lp = (path: string) => locale === "en" ? path : `/${locale}${path}`;

    return (
        <div className="flex flex-col min-h-screen items-center justify-center bg-gray-50 px-4">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-12 max-w-lg w-full text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Clock className="w-10 h-10 text-bubble-primary" />
                </div>
                <h1 className="text-3xl font-extrabold text-gray-900 mb-4">{t("title")}</h1>
                <p
                    className="text-lg text-gray-600 leading-relaxed mb-8"
                    dangerouslySetInnerHTML={{ __html: t("message") }}
                />
                <p className="text-sm text-gray-500 mb-8 bg-blue-50 border border-blue-100 rounded-xl p-4">
                    {t("urgentNote")}{" "}
                    <a href="tel:4077151790" className="text-bubble-primary font-bold">
                        (407) 715-1790
                    </a>
                    .
                </p>
                <Link
                    href={lp("/")}
                    className="inline-flex items-center justify-center gap-2 bg-bubble-primary text-white font-bold px-10 py-4 rounded-full hover:bg-bubble-dark transition shadow-lg"
                >
                    {t("backHome")} <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </div>
    );
}
