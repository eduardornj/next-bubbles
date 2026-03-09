import type { Metadata } from "next";
import Link from "next/link";
import { Shield, AlertTriangle, CheckCircle2, FileText, Phone, Wrench, Zap, Droplets, Trees, Car, CreditCard, XCircle, Scale, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Terms of Service | Bubbles Enterprise Soffit",
    description: "Full terms of service for Bubbles Enterprise LLC — soffit and fascia installation in Orlando, FL. Covers warranty, rotten wood policy, gutters, payment, and Florida statutory notices.",
    openGraph: {
        title: "Terms of Service | Bubbles Enterprise",
        description: "Complete service terms, warranty information, and Florida mandatory notices for Bubbles Enterprise LLC.",
        url: "https://bubblesenterprise.com/terms",
    },
    alternates: {
        canonical: "https://bubblesenterprise.com/terms",
        languages: {
            en: "https://bubblesenterprise.com/terms",
            es: "https://bubblesenterprise.com/es/terms",
            pt: "https://bubblesenterprise.com/pt/terms",
            "x-default": "https://bubblesenterprise.com/terms",
        },
    },
};

// LegalDocument schema — allows AI agents to discover our terms via WebMCP
const legalSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms of Service — Bubbles Enterprise LLC",
    "url": "https://bubblesenterprise.com/terms",
    "description": "Full service agreement covering warranty, rotten wood policy, gutter policy, payment, cancellation, and all Florida mandatory notices.",
    "dateModified": "2026-03-05",
    "publisher": {
        "@type": "LocalBusiness",
        "name": "Bubbles Enterprise LLC",
        "telephone": "+14077151790",
        "address": { "@type": "PostalAddress", "addressLocality": "Orlando", "addressRegion": "FL", "addressCountry": "US" }
    },
    "about": [
        { "@type": "Thing", "name": "1-Year Workmanship Warranty" },
        { "@type": "Thing", "name": "Chapter 713 Florida Statutes — Construction Lien" },
        { "@type": "Thing", "name": "Chapter 558 Florida Statutes — Construction Defects" }
    ]
};

const clauses = [
    {
        id: 1,
        icon: <Wrench className="w-5 h-5" />,
        title: "Rotten Wood Policy",
        color: "text-orange-600 bg-orange-50",
        content: (
            <>
                <p>Our quote covers installation over solid wood structure. If, upon removing the old material, we find rotten wood in the structure (sub-fascia or trusses), we will <strong>stop work in that area immediately</strong>.</p>
                <div className="mt-3 p-3 bg-orange-50 border border-orange-100 rounded-lg text-sm">
                    <strong>Important:</strong> We do NOT perform structural framing repairs, as we do not hold a framing license. You will need to hire a licensed carpenter to replace the wood before we can continue installation.
                </div>
            </>
        ),
    },
    {
        id: 2,
        icon: <Droplets className="w-5 h-5" />,
        title: "Gutters",
        color: "text-blue-600 bg-blue-50",
        content: (
            <>
                <p>If your home has gutters that must be removed to install new fascia, <strong>old gutters will NOT be reinstalled.</strong> They deform and warp upon removal, making it impossible to guarantee a proper seal or slope afterward.</p>
                <div className="mt-3 p-3 bg-blue-50 border border-blue-100 rounded-lg text-sm">
                    You will need to hire a specialized gutter company to install a new system after our work is complete. Bubbles Enterprise performs Soffit and Fascia only.
                </div>
            </>
        ),
    },
    {
        id: 3,
        icon: <Zap className="w-5 h-5" />,
        title: "Lights, Satellites & Cameras",
        color: "text-yellow-600 bg-yellow-50",
        content: (
            <ul className="space-y-2 text-gray-600">
                <li><strong>Lights:</strong> We remove and reinstall soffit lights as an access courtesy. If a fixture is old and breaks in our hands, or if wiring is brittle and fails when moved, we are not responsible for replacement.</li>
                <li><strong>Antennas/Cameras:</strong> We remove them to work and reinstall in place, but we do <strong>not</strong> guarantee signal alignment. If Starlink, TV, or camera signal is lost, the customer must call the provider's technician for recalibration.</li>
            </ul>
        ),
    },
    {
        id: 4,
        icon: <Zap className="w-5 h-5" />,
        title: "Loose Wires",
        color: "text-red-600 bg-red-50",
        content: (
            <p>We are not responsible for phone, internet, or alarm wires left loose inside the old soffit without conduit that become damaged during removal of old material. Pre-existing loose wiring is the homeowner's responsibility.</p>
        ),
    },
    {
        id: 5,
        icon: <Trees className="w-5 h-5" />,
        title: "Cleanup & Insulation",
        color: "text-green-600 bg-green-50",
        content: (
            <>
                <p>Our cleanup is standard job-site quality: sweeping and magnetic sweep for nails.</p>
                <div className="mt-3 p-3 bg-green-50 border border-green-100 rounded-lg text-sm">
                    <strong>About insulation:</strong> If thermal insulation (fiberglass) falls from your attic during soffit replacement, we will clean the excess with a blower. Small particles may remain in grass or rocks — this is unavoidable in this type of renovation and does not constitute "mess left behind."
                </div>
            </>
        ),
    },
    {
        id: 6,
        icon: <Shield className="w-5 h-5" />,
        title: "Warranty — 1 Year Workmanship",
        color: "text-bubble-primary bg-blue-50",
        content: (
            <>
                <p className="font-semibold text-gray-900 mb-3">We offer a <span className="text-bubble-primary">1-Year Workmanship Warranty</span> on all installations.</p>
                <div className="grid sm:grid-cols-2 gap-4">
                    <div className="p-3 bg-green-50 border border-green-100 rounded-lg">
                        <p className="font-semibold text-green-700 text-sm mb-2 flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4" /> Covered</p>
                        <p className="text-sm text-gray-600">Any piece that comes loose, unclips, or falls due to installation error.</p>
                    </div>
                    <div className="p-3 bg-red-50 border border-red-100 rounded-lg">
                        <p className="font-semibold text-red-600 text-sm mb-2 flex items-center gap-1.5"><XCircle className="w-4 h-4" /> Not Covered</p>
                        <p className="text-sm text-gray-600">Storms/Hurricanes ("Acts of God"), animal damage (squirrels/rodents), or damage caused by third parties touching the work.</p>
                    </div>
                </div>
            </>
        ),
    },
    {
        id: 7,
        icon: <Trees className="w-5 h-5" />,
        title: "Plants, Bushes & Sprinklers",
        color: "text-emerald-600 bg-emerald-50",
        content: (
            <ul className="space-y-2 text-gray-600">
                <li><strong>Plants & Bushes:</strong> Our work is performed immediately against the walls. Ladders and equipment will inevitably touch surrounding plants. Some branches may be crushed or broken. If you have plants of sentimental value or fragile pots, <strong>please remove or protect them before our arrival.</strong></li>
                <li><strong>Sprinklers:</strong> Please mark or notify our installer where irrigation heads are located. If we are not warned and step on a hidden head, we do not cover the repair.</li>
            </ul>
        ),
    },
    {
        id: 8,
        icon: <Car className="w-5 h-5" />,
        title: "Parking",
        color: "text-slate-600 bg-slate-50",
        content: (
            <p>Our crew uses a pickup truck and a large trailer. It is the customer's responsibility to ensure a legally permissible parking space for both vehicles. If the HOA or municipality tows or fines our equipment due to lack of a proper spot, the cost is on the customer.</p>
        ),
    },
    {
        id: 9,
        icon: <CreditCard className="w-5 h-5" />,
        title: "Payment & Ownership",
        color: "text-indigo-600 bg-indigo-50",
        content: (
            <>
                <p>The final balance is <strong>due immediately upon completion and walkthrough.</strong></p>
                <div className="mt-3 p-3 bg-indigo-50 border border-indigo-100 rounded-lg text-sm">
                    Bubbles Enterprise LLC retains a purchase-money security interest in the installed materials and reserves the right to file a claim of lien per <strong>Chapter 713, Florida Statutes</strong>, until full payment is received.
                </div>
            </>
        ),
    },
    {
        id: 10,
        icon: <XCircle className="w-5 h-5" />,
        title: "Cancellation Policy",
        color: "text-red-600 bg-red-50",
        content: (
            <p>If you cancel the service after materials have been purchased, a fee of <strong>20% of the deposit value</strong> will be charged. This covers the material restocking fee charged by the supplier plus project preparation costs. This amount constitutes liquidated damages as agreed upon at booking.</p>
        ),
    },
    {
        id: 11,
        icon: <Scale className="w-5 h-5" />,
        title: "General Provisions",
        color: "text-gray-600 bg-gray-50",
        content: (
            <ul className="space-y-1.5 text-gray-600">
                <li>Applicable law: <strong>State of Florida</strong></li>
                <li>Venue for any dispute: <strong>Orange County, FL</strong></li>
                <li>The prevailing party in any legal dispute is entitled to attorney's fees.</li>
                <li>This document, together with acceptance via text or email, constitutes the entire agreement between the parties.</li>
            </ul>
        ),
    },
];

export default function TermsPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(legalSchema) }} />
            <div className="flex flex-col min-h-screen bg-gray-50">
                {/* Hero */}
                <section className="bg-bubble-navy text-white pt-32 pb-16 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-white to-transparent" />
                    <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
                        <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/10 text-bubble-light text-sm font-bold uppercase tracking-wider mb-6 border border-white/20">
                            <FileText className="w-4 h-4" /> Legal Document
                        </span>
                        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">Terms of Service</h1>
                        <p className="text-blue-200 text-lg max-w-2xl mx-auto">
                            Bubbles Enterprise LLC — Florida-licensed soffit &amp; fascia contractor. Last updated: February 2026.
                        </p>
                        <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm text-blue-200">
                            <span>📍 Orlando, FL</span>
                            <span>•</span>
                            <span>📞 (407) 715-1790</span>
                            <span>•</span>
                            <span>🔒 Chapter 713, FL Statutes</span>
                        </div>
                    </div>
                </section>

                <section className="py-16">
                    <div className="container mx-auto px-4 max-w-4xl">

                        {/* Quick nav */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-10">
                            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Table of Contents</p>
                            <div className="grid sm:grid-cols-2 gap-1">
                                {clauses.map(c => (
                                    <a key={c.id} href={`#clause-${c.id}`}
                                        className="flex items-center gap-2 text-sm text-gray-600 hover:text-bubble-primary py-1 transition-colors">
                                        <ChevronRight className="w-3.5 h-3.5 shrink-0 text-bubble-primary" />
                                        {c.id}. {c.title}
                                    </a>
                                ))}
                                <a href="#florida-notices"
                                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-bubble-primary py-1 transition-colors">
                                    <ChevronRight className="w-3.5 h-3.5 shrink-0 text-orange-500" />
                                    Florida Mandatory Notices
                                </a>
                            </div>
                        </div>

                        {/* Clauses */}
                        <div id="service-agreement" className="scroll-mt-24 space-y-5 mb-12">
                            {clauses.map(c => (
                                <div key={c.id} id={`clause-${c.id}`} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden scroll-mt-24">
                                    <div className="px-6 py-5 border-b border-gray-50 flex items-center gap-3">
                                        <span className={`p-2 rounded-lg ${c.color}`}>
                                            {c.icon}
                                        </span>
                                        <h2 className="font-extrabold text-gray-900 text-lg">
                                            {c.id}. {c.title}
                                        </h2>
                                    </div>
                                    <div className="px-6 py-5 text-gray-600 leading-relaxed">
                                        {c.content}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Florida Mandatory Notices */}
                        <div id="florida-notices" className="scroll-mt-24">
                            <div className="flex items-center gap-3 mb-6">
                                <AlertTriangle className="w-6 h-6 text-orange-500 shrink-0" />
                                <h2 className="text-2xl font-extrabold text-gray-900">Florida Mandatory Notices</h2>
                            </div>

                            <div className="space-y-4">
                                <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
                                    <h3 className="font-bold text-orange-800 mb-3 uppercase text-sm tracking-wide">Florida Homeowners' Construction Recovery Fund</h3>
                                    <p className="text-sm text-orange-900 leading-relaxed">
                                        PAYMENT, UP TO A LIMITED AMOUNT, MAY BE AVAILABLE FROM THE FLORIDA HOMEOWNERS' CONSTRUCTION RECOVERY FUND IF YOU LOSE MONEY ON A PROJECT PERFORMED UNDER CONTRACT, WHERE THE LOSS RESULTS FROM SPECIFIED VIOLATIONS OF FLORIDA LAW BY A LICENSED CONTRACTOR. FOR MORE INFORMATION ABOUT THE RECOVERY FUND AND THE CONDITIONS FOR RECOVERY, CONTACT THE FLORIDA CONSTRUCTION INDUSTRY LICENSING BOARD.
                                    </p>
                                </div>

                                <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                                    <h3 className="font-bold text-red-800 mb-3 uppercase text-sm tracking-wide">Construction Lien Law Notice — Fla. Stat. § 713.015</h3>
                                    <p className="text-sm text-red-900 leading-relaxed">
                                        ACCORDING TO FLORIDA'S CONSTRUCTION LIEN LAW (SECTIONS 713.001-713.37, FLORIDA STATUTES), THOSE WHO WORK ON YOUR PROPERTY OR PROVIDE MATERIALS AND SERVICES AND ARE NOT PAID IN FULL HAVE A RIGHT TO ENFORCE THEIR CLAIM FOR PAYMENT AGAINST YOUR PROPERTY. THIS CLAIM IS KNOWN AS A CONSTRUCTION LIEN. IF YOUR CONTRACTOR OR A SUBCONTRACTOR FAILS TO PAY SUBCONTRACTORS, SUB-SUBCONTRACTORS, OR MATERIAL SUPPLIERS, THOSE PEOPLE WHO ARE NOT PAID MAY LOOK TO YOUR PROPERTY FOR PAYMENT, EVEN IF YOU HAVE ALREADY PAID YOUR CONTRACTOR IN FULL. IF YOU FAIL TO PAY YOUR CONTRACTOR, YOUR CONTRACTOR MAY ALSO HAVE A LIEN ON YOUR PROPERTY. THIS MEANS IF A LIEN IS FILED YOUR PROPERTY COULD BE SOLD AGAINST YOUR WILL TO PAY FOR LABOR, MATERIALS, OR OTHER SERVICES THAT YOUR CONTRACTOR OR A SUBCONTRACTOR MAY HAVE FAILED TO PAY. FLORIDA'S CONSTRUCTION LIEN LAW IS COMPLEX, AND IT IS RECOMMENDED THAT YOU CONSULT AN ATTORNEY.
                                    </p>
                                </div>

                                <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
                                    <h3 className="font-bold text-yellow-800 mb-3 uppercase text-sm tracking-wide">Chapter 558 Notice — Construction Defects</h3>
                                    <p className="text-sm text-yellow-900 leading-relaxed">
                                        CHAPTER 558, FLORIDA STATUTES, CONTAINS IMPORTANT REQUIREMENTS YOU MUST FOLLOW BEFORE YOU MAY BRING ANY LEGAL ACTION FOR AN ALLEGED CONSTRUCTION DEFECT. SIXTY DAYS BEFORE YOU BRING ANY LEGAL ACTION, YOU MUST DELIVER TO THE OTHER PARTY TO THIS CONTRACT A WRITTEN NOTICE, REFERRING TO CHAPTER 558, OF ANY CONSTRUCTION CONDITIONS YOU ALLEGE ARE DEFECTIVE AND PROVIDE US THE OPPORTUNITY TO INSPECT THE ALLEGED DEFECTIVE CONDITION AND TO CONSIDER MAKING AN OFFER TO REPAIR OR PAY FOR THE ALLEGED DEFECTIVE CONDITION. YOU ARE NOT OBLIGATED TO ACCEPT ANY OFFER WHICH MAY BE MADE. THERE ARE STRICT DEADLINES AND PROCEDURES UNDER FLORIDA LAW WHICH MUST BE MET AND FOLLOWED TO PROTECT YOUR INTERESTS.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="mt-12 bg-gradient-to-r from-bubble-primary to-bubble-dark text-white rounded-2xl p-8 text-center">
                            <h3 className="text-xl font-extrabold mb-2">Questions about our terms?</h3>
                            <p className="text-blue-100 mb-6 text-sm">We're happy to clarify anything before you book.</p>
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
