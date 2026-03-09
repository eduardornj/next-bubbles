"use client";

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <div role="alert" className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="text-center max-w-md">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Something went wrong</h1>
                <p className="text-gray-600 mb-8">We apologize for the inconvenience. Please try again.</p>
                <div className="flex flex-col gap-4">
                    <button
                        onClick={reset}
                        className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                    >
                        Try Again
                    </button>
                    <a href="/" className="text-blue-600 hover:underline font-medium">
                        Go to Homepage
                    </a>
                    <a href="tel:4077151790" className="text-gray-500 hover:text-gray-700 text-sm">
                        Need help? Call (407) 715-1790
                    </a>
                </div>
            </div>
        </div>
    );
}
