import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 text-center">
      <div className="max-w-md mx-auto">
        <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
          <span className="text-white font-extrabold text-3xl">404</span>
        </div>
        <h1 className="text-2xl font-extrabold text-gray-900 mb-3">
          Page Not Found
        </h1>
        <p className="text-gray-600 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 transition-colors"
          >
            Go Home
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full border-2 border-gray-200 text-gray-700 font-bold text-sm hover:border-blue-600 hover:text-blue-600 transition-colors"
          >
            Our Services
          </Link>
          <a
            href="tel:4077151790"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full border-2 border-gray-200 text-gray-700 font-bold text-sm hover:border-blue-600 hover:text-blue-600 transition-colors"
          >
            Call (407) 715-1790
          </a>
        </div>
      </div>
    </div>
  );
}
