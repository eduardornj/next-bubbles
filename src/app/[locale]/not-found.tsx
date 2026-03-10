import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
            <h1 className="text-6xl font-extrabold text-gray-900 mb-4">404</h1>
            <p className="text-xl text-gray-500 mb-8">Page not found</p>
            <Link
                href="/"
                className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition"
            >
                Go Home
            </Link>
        </div>
    );
}
