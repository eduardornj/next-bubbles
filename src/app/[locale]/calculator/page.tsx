import CalculatorClient from './CalculatorClient';

// ─────────────────────────────────────────────
// PAGE (Server Component — static wrapper)
// Metadata is handled by layout.tsx
// ─────────────────────────────────────────────

export default async function CalculatorPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    // Await params per Next.js 16 requirement
    await params;

    return (
        <section className="min-h-screen bg-gray-50 py-20 px-4 flex items-center justify-center relative overflow-hidden">
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-400/20 blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-400/20 blur-[120px] pointer-events-none"></div>

            <CalculatorClient />
        </section>
    );
}
