"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div role="alert" className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
        <span className="text-red-600 text-3xl font-extrabold">!</span>
      </div>
      <h2 className="text-xl font-extrabold text-gray-900 mb-3">
        Something went wrong
      </h2>
      <p className="text-gray-600 mb-6 max-w-sm">
        We encountered an unexpected error. Please try again or call us directly.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={reset}
          className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 transition-colors"
        >
          Try Again
        </button>
        <a
          href="tel:4077151790"
          className="inline-flex items-center justify-center px-6 py-3 rounded-full border-2 border-gray-200 text-gray-700 font-bold text-sm hover:border-blue-600 hover:text-blue-600 transition-colors"
        >
          Call (407) 715-1790
        </a>
      </div>
    </div>
  );
}
