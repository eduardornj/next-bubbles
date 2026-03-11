import Link from "next/link";
import { Home, Phone, ArrowRight } from "lucide-react";

export default function NotFound() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50 items-center justify-center px-4 text-center">
            <div className="max-w-lg mx-auto">
                {/* Big 404 */}
                <div className="text-[120px] font-extrabold leading-none text-transparent bg-clip-text bg-gradient-to-br from-bubble-navy via-bubble-primary to-bubble-secondary mb-2 select-none">
                    404
                </div>

                <h1 className="text-2xl font-extrabold text-gray-900 mb-3">
                    Page Not Found
                </h1>
                <p className="text-gray-500 text-lg leading-relaxed mb-10">
                    The page you&apos;re looking for doesn&apos;t exist or has been moved.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-bubble-primary text-white font-bold rounded-full hover:bg-bubble-dark transition shadow-lg"
                    >
                        <Home className="w-4 h-4" /> Back to Home
                    </Link>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-bubble-primary text-bubble-primary font-bold rounded-full hover:bg-blue-50 transition"
                    >
                        Get a Free Quote <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                <a
                    href="tel:4077151790"
                    className="inline-flex items-center gap-2 text-bubble-primary font-extrabold text-xl hover:underline"
                >
                    <Phone className="w-5 h-5" />
                    (407) 715-1790
                </a>
            </div>
        </div>
    );
}
