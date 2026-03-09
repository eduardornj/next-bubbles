import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Phone } from "lucide-react";

export const metadata: Metadata = {
    title: "Quote Confirmed — Thank You | Bubbles Enterprise Orlando",
    description:
        "Your soffit and fascia quote request has been received. Bubbles Enterprise will contact you shortly to confirm your appointment.",
    robots: { index: false, follow: false },
};

export default function ThankYouPage() {
    return (
        <div className="flex flex-col min-h-screen items-center justify-center bg-gray-50 px-4">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-12 max-w-lg w-full text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h1 className="text-3xl font-extrabold text-gray-900 mb-4">Thank You!</h1>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    Your request has been received. Our team will reach out within{" "}
                    <strong>24 hours</strong> to confirm your free estimate appointment.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 bg-bubble-primary text-white font-bold px-8 py-4 rounded-full hover:bg-bubble-dark transition shadow-lg"
                    >
                        Back to Home <ArrowRight className="w-4 h-4" />
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
