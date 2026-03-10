"use client";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
    return (
        <html lang="en">
            <body className="flex items-center justify-center min-h-screen bg-gray-50 font-sans">
                <div className="text-center p-8">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
                    <p className="text-gray-500 mb-6">An unexpected error occurred. Please try again.</p>
                    <button
                        onClick={reset}
                        className="px-6 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition"
                    >
                        Try Again
                    </button>
                </div>
            </body>
        </html>
    );
}
