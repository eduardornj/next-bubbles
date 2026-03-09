import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Eye, Lock, Trash2, Mail, Phone, FileText, Database, UserCheck, Globe } from "lucide-react";

export const metadata: Metadata = {
    title: "Privacy Policy | Bubbles Enterprise Soffit",
    description: "Privacy policy for Bubbles Enterprise LLC — how we collect, use, and protect your personal information. We never sell your data. Orlando, FL.",
    openGraph: {
        title: "Privacy Policy | Bubbles Enterprise",
        description: "We collect only what's needed to serve you. No data selling, no third-party marketing. Read our full privacy policy.",
        url: "https://bubblesenterprise.com/privacy",
    },
    alternates: {
        canonical: "https://bubblesenterprise.com/privacy",
        languages: {
            en: "https://bubblesenterprise.com/privacy",
            es: "https://bubblesenterprise.com/es/privacy",
            pt: "https://bubblesenterprise.com/pt/privacy",
            "x-default": "https://bubblesenterprise.com/privacy",
        },
    },
};

// WebPage schema for Privacy — makes the data policy discoverable by AI agents
const privacySchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy — Bubbles Enterprise LLC",
    "url": "https://bubblesenterprise.com/privacy",
    "description": "Privacy policy for Bubbles Enterprise LLC. We collect only information you provide, never sell data, and protect it with HTTPS and multi-layer spam detection.",
    "publisher": {
        "@type": "LocalBusiness",
        "name": "Bubbles Enterprise LLC",
        "telephone": "+14077151790",
        "address": { "@type": "PostalAddress", "addressLocality": "Orlando", "addressRegion": "FL", "addressCountry": "US" }
    },
    "dateModified": "2026-03-08"
};

const sections = [
    {
        id: "collect",
        icon: <Database className="w-5 h-5" />,
        color: "text-blue-600 bg-blue-50",
        title: "Information We Collect",
        content: (
            <>
                <p className="mb-3">We collect only information you explicitly provide when:</p>
                <ul className="space-y-2">
                    <li className="flex items-start gap-2"><span className="text-blue-500 font-bold mt-0.5">→</span><span><strong>Requesting a quote or service</strong> — name, phone, email, property address, and project details (linear footage, overhang depth, material preference).</span></li>
                    <li className="flex items-start gap-2"><span className="text-blue-500 font-bold mt-0.5">→</span><span><strong>Using our online calculator</strong> — anonymous measurement data used only to generate your estimate on-screen. Not stored on our servers.</span></li>
                    <li className="flex items-start gap-2"><span className="text-blue-500 font-bold mt-0.5">→</span><span><strong>Contacting us directly</strong> — call records, text messages, or emails you initiate.</span></li>
                </ul>
                <div className="mt-4 p-3 bg-blue-50 border border-blue-100 rounded-lg text-sm">
                    We do <strong>not</strong> require account creation. You are never required to provide information beyond what is needed to complete a quote or service request.
                </div>
            </>
        ),
    },
    {
        id: "use",
        icon: <Eye className="w-5 h-5" />,
        color: "text-purple-600 bg-purple-50",
        title: "How We Use Your Information",
        content: (
            <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2"><span className="text-purple-500 font-bold mt-0.5">→</span><span>Prepare and deliver your soffit/fascia estimate</span></li>
                <li className="flex items-start gap-2"><span className="text-purple-500 font-bold mt-0.5">→</span><span>Schedule and coordinate installation appointments</span></li>
                <li className="flex items-start gap-2"><span className="text-purple-500 font-bold mt-0.5">→</span><span>Send job confirmation, pre-visit notices, and payment receipts</span></li>
                <li className="flex items-start gap-2"><span className="text-purple-500 font-bold mt-0.5">→</span><span>Follow up on open quotes or active service requests</span></li>
                <li className="flex items-start gap-2"><span className="text-purple-500 font-bold mt-0.5">→</span><span>Respond to customer support inquiries</span></li>
            </ul>
        ),
    },
    {
        id: "sharing",
        icon: <UserCheck className="w-5 h-5" />,
        color: "text-green-600 bg-green-50",
        title: "We Never Sell Your Data",
        content: (
            <>
                <div className="p-4 bg-green-50 border border-green-200 rounded-xl mb-4 flex items-start gap-3">
                    <Shield className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <p className="font-semibold text-green-800">We have never sold, rented, or traded your personal information to any third-party marketing company — and we never will.</p>
                </div>
                <p className="text-gray-600 mb-3">We may share information only in these limited circumstances:</p>
                <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2"><span className="text-green-500 font-bold mt-0.5">→</span><span><strong>Analytics providers</strong> (Google Analytics, Microsoft Clarity) — to understand how visitors use our site. These services collect anonymized usage data and do not identify you personally.</span></li>
                    <li className="flex items-start gap-2"><span className="text-green-500 font-bold mt-0.5">→</span><span><strong>Advertising platform</strong> (Meta/Facebook Pixel) — to measure the effectiveness of our ads. This tracks page visits and form submissions in aggregate.</span></li>
                    <li className="flex items-start gap-2"><span className="text-green-500 font-bold mt-0.5">→</span><span><strong>Law enforcement</strong> — only when required by a valid court order or Florida law.</span></li>
                </ul>
            </>
        ),
    },
    {
        id: "cookies",
        icon: <Globe className="w-5 h-5" />,
        color: "text-orange-600 bg-orange-50",
        title: "Cookies & Analytics",
        content: (
            <>
                <p className="text-gray-600 mb-3">Our website uses the following cookies and analytics tools to improve your experience:</p>
                <ul className="space-y-1.5 text-gray-600 mb-4">
                    <li className="flex items-start gap-2"><span className="text-orange-500 font-bold mt-0.5">→</span><span><strong>Language preference</strong> — a single cookie (<code className="text-xs bg-gray-100 px-1 rounded">NEXT_LOCALE</code>) remembers your language choice (English, Spanish, or Portuguese).</span></li>
                    <li className="flex items-start gap-2"><span className="text-orange-500 font-bold mt-0.5">→</span><span><strong>Google Analytics 4</strong> — tracks anonymous page visits, traffic sources, and site performance. No personally identifiable information is collected.</span></li>
                    <li className="flex items-start gap-2"><span className="text-orange-500 font-bold mt-0.5">→</span><span><strong>Microsoft Clarity</strong> — records anonymous session replays and heatmaps to help us improve page layout and usability.</span></li>
                    <li className="flex items-start gap-2"><span className="text-orange-500 font-bold mt-0.5">→</span><span><strong>Meta (Facebook) Pixel</strong> — measures ad performance by tracking page views and form submissions in aggregate.</span></li>
                </ul>
                <p className="text-gray-600 mb-3">We do <strong>not</strong> use:</p>
                <ul className="space-y-1.5 text-gray-600 mb-3">
                    <li className="flex items-start gap-2"><span className="text-red-400 font-bold mt-0.5">✗</span><span>Behavioral retargeting or personalized ad cookies</span></li>
                    <li className="flex items-start gap-2"><span className="text-red-400 font-bold mt-0.5">✗</span><span>Third-party data brokers or advertising networks</span></li>
                    <li className="flex items-start gap-2"><span className="text-red-400 font-bold mt-0.5">✗</span><span>User accounts, login tracking, or fingerprinting</span></li>
                </ul>
            </>
        ),
    },
    {
        id: "security",
        icon: <Lock className="w-5 h-5" />,
        color: "text-slate-600 bg-slate-50",
        title: "Data Security",
        content: (
            <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2"><span className="text-slate-500 font-bold mt-0.5">→</span><span>Our website enforces HTTPS encryption on all pages</span></li>
                <li className="flex items-start gap-2"><span className="text-slate-500 font-bold mt-0.5">→</span><span>Contact form submissions are protected by multi-layer spam detection (honeypot, time gate, math challenge)</span></li>
                <li className="flex items-start gap-2"><span className="text-slate-500 font-bold mt-0.5">→</span><span>HTTP security headers: X-Frame-Options, Content-Security-Policy, Permissions-Policy</span></li>
                <li className="flex items-start gap-2"><span className="text-slate-500 font-bold mt-0.5">→</span><span>No customer data is stored in databases — we operate via email and direct communication</span></li>
            </ul>
        ),
    },
    {
        id: "retention",
        icon: <Trash2 className="w-5 h-5" />,
        color: "text-red-600 bg-red-50",
        title: "Data Retention & Deletion",
        content: (
            <>
                <p className="text-gray-600 mb-3">We retain contact information and service records for as long as needed to fulfill the contracted work and meet Florida legal requirements (typically 3 years for contractor records).</p>
                <div className="p-3 bg-red-50 border border-red-100 rounded-lg text-sm">
                    <strong>To request deletion of your information,</strong> contact us at <a href="tel:4077151790" className="text-bubble-primary hover:underline">(407) 715-1790</a> or <a href="mailto:contact@bubblesenterprise.com" className="text-bubble-primary hover:underline">contact@bubblesenterprise.com</a>. We will process deletion requests within 30 days.
                </div>
            </>
        ),
    },
    {
        id: "contact",
        icon: <Mail className="w-5 h-5" />,
        color: "text-indigo-600 bg-indigo-50",
        title: "Contact & Questions",
        content: (
            <div className="space-y-3 text-gray-600">
                <p>For any privacy-related questions or data requests, contact us directly:</p>
                <div className="grid sm:grid-cols-2 gap-3">
                    <a href="tel:4077151790" className="flex items-center gap-3 p-3 bg-indigo-50 border border-indigo-100 rounded-xl hover:bg-indigo-100 transition">
                        <Phone className="w-5 h-5 text-indigo-600 shrink-0" />
                        <div>
                            <p className="text-xs font-bold text-indigo-600 uppercase tracking-wide">Phone</p>
                            <p className="font-semibold text-gray-900">(407) 715-1790</p>
                        </div>
                    </a>
                    <a href="mailto:contact@bubblesenterprise.com" className="flex items-center gap-3 p-3 bg-indigo-50 border border-indigo-100 rounded-xl hover:bg-indigo-100 transition">
                        <Mail className="w-5 h-5 text-indigo-600 shrink-0" />
                        <div>
                            <p className="text-xs font-bold text-indigo-600 uppercase tracking-wide">Email</p>
                            <p className="font-semibold text-gray-900 text-sm break-all">contact@bubblesenterprise.com</p>
                        </div>
                    </a>
                </div>
            </div>
        ),
    },
];

export default function PrivacyPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(privacySchema) }} />
            <div className="flex flex-col min-h-screen bg-gray-50">
                {/* Hero */}
                <section className="bg-bubble-navy text-white pt-32 pb-16 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-white to-transparent" />
                    <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
                        <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/10 text-bubble-light text-sm font-bold uppercase tracking-wider mb-6 border border-white/20">
                            <Shield className="w-4 h-4" /> Privacy & Data
                        </span>
                        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">Privacy Policy</h1>
                        <p className="text-blue-200 text-lg max-w-2xl mx-auto">
                            Bubbles Enterprise LLC — we collect only what's needed, protect it with care, and never sell it.
                        </p>
                        <p className="text-blue-300 text-sm mt-4">Last updated: March 8, 2026 · Effective immediately</p>
                    </div>
                </section>

                <section className="py-16">
                    <div className="container mx-auto px-4 max-w-4xl">

                        {/* Summary card */}
                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-10">
                            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Quick Summary</p>
                            <div className="grid sm:grid-cols-3 gap-4">
                                {[
                                    { icon: "🚫", title: "No Data Selling", desc: "Your info never goes to third-party marketers." },
                                    { icon: "🔒", title: "Secure by Design", desc: "HTTPS + multi-layer spam protection on every form." },
                                    { icon: "📧", title: "Purpose-Limited", desc: "Data used only to serve your project — nothing else." },
                                ].map(item => (
                                    <div key={item.title} className="text-center p-4 bg-gray-50 rounded-xl">
                                        <div className="text-2xl mb-2">{item.icon}</div>
                                        <p className="font-bold text-gray-900 text-sm">{item.title}</p>
                                        <p className="text-gray-500 text-xs mt-1">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Table of contents */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-10">
                            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 flex items-center gap-2">
                                <FileText className="w-3.5 h-3.5" /> Table of Contents
                            </p>
                            <div className="grid sm:grid-cols-2 gap-1">
                                {sections.map((s, i) => (
                                    <a key={s.id} href={`#${s.id}`}
                                        className="flex items-center gap-2 text-sm text-gray-600 hover:text-bubble-primary py-1 transition-colors">
                                        <span className="w-5 h-5 rounded-full bg-gray-100 text-gray-500 text-xs flex items-center justify-center font-bold shrink-0">{i + 1}</span>
                                        {s.title}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Sections */}
                        <div className="space-y-5">
                            {sections.map((s, i) => (
                                <div key={s.id} id={s.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden scroll-mt-24">
                                    <div className="px-6 py-5 border-b border-gray-50 flex items-center gap-3">
                                        <span className={`p-2 rounded-lg ${s.color}`}>
                                            {s.icon}
                                        </span>
                                        <h2 className="font-extrabold text-gray-900 text-lg">
                                            {i + 1}. {s.title}
                                        </h2>
                                    </div>
                                    <div className="px-6 py-5 text-gray-600 leading-relaxed">
                                        {s.content}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="mt-12 bg-gradient-to-r from-bubble-primary to-bubble-dark text-white rounded-2xl p-8 text-center">
                            <Shield className="w-8 h-8 mx-auto mb-3 opacity-80" />
                            <h3 className="text-xl font-extrabold mb-2">Your privacy matters to us</h3>
                            <p className="text-blue-100 mb-6 text-sm">Questions about how we handle your data? Contact us directly.</p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a href="tel:4077151790"
                                    className="inline-flex items-center justify-center gap-2 bg-white text-bubble-primary font-bold px-6 py-3 rounded-full hover:bg-blue-50 transition text-sm">
                                    <Phone className="w-4 h-4" /> (407) 715-1790
                                </a>
                                <Link href="/contact"
                                    className="inline-flex items-center justify-center gap-2 bg-white/20 border border-white/30 text-white font-bold px-6 py-3 rounded-full hover:bg-white/30 transition text-sm">
                                    Send a Message
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
