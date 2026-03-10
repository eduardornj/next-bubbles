"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import {
    X, Lock, Eye, EyeOff, LogOut, Upload,
} from "lucide-react";
import { useTranslations } from "next-intl";
import type { Category, WorkItem } from "./gallery-data";

const Lightbox = dynamic(() => import("./LightboxModal"), { ssr: false });

const HIDDEN_KEY = "gallery_hidden_images";

interface GalleryClientProps {
    works: WorkItem[];
}

export default function GalleryClient({ works }: GalleryClientProps) {
    const t = useTranslations("gallery");

    // -- State --
    const [lightbox, setLightbox] = useState<number | null>(null);
    const [showLogin, setShowLogin] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState(false);
    const [hidden, setHidden] = useState<Set<string>>(() => {
        if (typeof window === "undefined") return new Set<string>();
        try {
            const s = localStorage.getItem(HIDDEN_KEY);
            if (s) return new Set<string>(JSON.parse(s) as string[]);
        } catch { /* empty */ }
        return new Set<string>();
    });
    const [visible, setVisible] = useState<Set<number>>(new Set());
    const [uploadMsg, setUploadMsg] = useState(false);
    const [activeFilter, setActiveFilter] = useState<Category>("all");
    const refs = useRef<(HTMLDivElement | null)[]>([]);

    // -- Filtered works --
    const filteredWorks = works.filter(w => {
        if (!isAdmin && hidden.has(w.file)) return false;
        if (activeFilter === "all") return true;
        return w.category === activeFilter;
    });

    // -- Scroll reveal (IntersectionObserver) --
    useEffect(() => {
        // Reset on dependency change so new items animate in
        setVisible(new Set()); // eslint-disable-line react-hooks/set-state-in-effect
        const timer = setTimeout(() => {
            const obs = new IntersectionObserver(
                (entries) => entries.forEach(e => {
                    if (e.isIntersecting) {
                        const i = parseInt(e.target.getAttribute("data-idx") ?? "0");
                        setVisible(prev => new Set([...prev, i]));
                    }
                }),
                { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
            );
            refs.current.forEach(r => r && obs.observe(r));
            return () => obs.disconnect();
        }, 50);
        return () => clearTimeout(timer);
    }, [activeFilter, hidden, isAdmin]);

    // -- Admin login --
    const login = async () => {
        try {
            const res = await fetch("/api/admin/verify", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ password }),
            });
            if (res.ok) {
                setIsAdmin(true);
                setShowLogin(false);
                setPassword("");
                setLoginError(false);
            } else {
                setLoginError(true);
            }
        } catch {
            setLoginError(true);
        }
    };

    const toggleHide = (file: string) => {
        setHidden(prev => {
            const next = new Set(prev);
            if (next.has(file)) next.delete(file);
            else next.add(file);
            localStorage.setItem(HIDDEN_KEY, JSON.stringify([...next]));
            return next;
        });
    };

    const openLightbox = (idx: number) => {
        if ("startViewTransition" in document) {
            (document as unknown as { startViewTransition: (cb: () => void) => void }).startViewTransition(() => setLightbox(idx));
        } else {
            setLightbox(idx);
        }
    };

    const handleLightboxNavigate = useCallback((idx: number) => {
        setLightbox(idx);
    }, []);

    const handleLightboxClose = useCallback(() => {
        setLightbox(null);
    }, []);

    const categoryKeys: { key: Category; label: string }[] = [
        { key: "all", label: t("filterAll") },
        { key: "installation", label: t("filterInstallation") },
        { key: "repair", label: t("filterRepair") },
        { key: "newconstruction", label: t("filterNewConstruction") },
    ];

    return (
        <>
            {/* Admin banner */}
            {isAdmin && (
                <div className="mb-5 flex flex-wrap items-center justify-between gap-3 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3">
                    <p className="text-amber-800 font-bold text-sm flex items-center gap-2">
                        <Lock className="w-4 h-4" />
                        Admin Mode — tap <Eye className="w-4 h-4 inline" /> / <EyeOff className="w-4 h-4 inline" /> to show or hide each photo
                    </p>
                    <div className="flex gap-2">
                        <button
                            onClick={() => setUploadMsg(true)}
                            className="flex items-center gap-1.5 bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition"
                        >
                            <Upload className="w-3.5 h-3.5" /> Add Photo
                        </button>
                        <button
                            onClick={() => setIsAdmin(false)}
                            className="flex items-center gap-1.5 text-amber-700 hover:text-amber-900 text-xs font-medium px-3 py-1.5 border border-amber-300 rounded-lg transition"
                        >
                            <LogOut className="w-3.5 h-3.5" /> Exit
                        </button>
                    </div>
                </div>
            )}

            {/* Upload future feature toast */}
            {uploadMsg && (
                <div className="mb-4 bg-blue-900 text-blue-100 text-sm font-medium px-4 py-3 rounded-xl flex items-start justify-between gap-4">
                    <p><strong>Coming soon:</strong> In the next version this will connect to cloud storage for live photo uploads from your phone.</p>
                    <button onClick={() => setUploadMsg(false)}><X className="w-4 h-4 shrink-0" /></button>
                </div>
            )}

            {/* Filter buttons */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
                {categoryKeys.map(cat => (
                    <button
                        key={cat.key}
                        onClick={() => { setActiveFilter(cat.key); setLightbox(null); }}
                        className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all shadow-sm ${
                            activeFilter === cat.key
                                ? "bg-bubble-primary text-white shadow-md"
                                : "bg-white text-gray-600 border border-gray-200 hover:border-bubble-primary"
                        }`}
                    >
                        {cat.label}
                        {activeFilter === cat.key && (
                            <span className="ml-2 bg-white/20 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                                {filteredWorks.filter(w => isAdmin || !hidden.has(w.file)).length}
                            </span>
                        )}
                    </button>
                ))}
            </div>

            {/* Masonry grid */}
            <div className="columns-1 sm:columns-2 md:columns-3 gap-3 md:gap-4">
                {filteredWorks.map((work, idx) => (
                    <div
                        key={work.file}
                        ref={el => { refs.current[idx] = el; }}
                        data-idx={idx}
                        className={`
                            group relative break-inside-avoid mb-3 md:mb-4
                            overflow-hidden rounded-xl cursor-pointer shadow-sm
                            hover:shadow-xl transition-shadow duration-300
                            ${hidden.has(work.file) ? "opacity-40 ring-2 ring-red-400 ring-offset-2" : ""}
                        `}
                        style={{
                            opacity: visible.has(idx) ? (hidden.has(work.file) ? 0.4 : 1) : 0,
                            transform: visible.has(idx) ? "none" : "translateY(28px)",
                            transition: `opacity 0.55s ease ${(idx % 3) * 90}ms, transform 0.55s ease ${(idx % 3) * 90}ms`,
                        }}
                        onClick={() => !isAdmin && openLightbox(idx)}
                        role={!isAdmin ? "button" : undefined}
                        aria-label={!isAdmin ? `View: ${work.alt}` : undefined}
                        tabIndex={!isAdmin ? 0 : undefined}
                        onKeyDown={!isAdmin ? (e) => e.key === "Enter" && openLightbox(idx) : undefined}
                    >
                        <Image
                            src={`/images/works/${work.file}`}
                            alt={work.alt}
                            width={800}
                            height={600}
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                            className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                        />

                        {/* Hover caption overlay */}
                        {!isAdmin && (
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/85 via-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 pointer-events-none">
                                <p className="text-white text-sm font-medium leading-snug line-clamp-2">
                                    {work.alt}
                                </p>
                                <p className="text-blue-300 text-xs mt-1.5 font-semibold uppercase tracking-wide">
                                    {t("tapToView")}
                                </p>
                            </div>
                        )}

                        {/* Admin: hide/show toggle */}
                        {isAdmin && (
                            <button
                                onClick={(e) => { e.stopPropagation(); toggleHide(work.file); }}
                                className={`
                                    absolute top-2 right-2 p-2 rounded-full backdrop-blur-sm z-10 shadow transition
                                    ${hidden.has(work.file)
                                        ? "bg-red-500 text-white"
                                        : "bg-white/90 text-gray-700 hover:bg-red-100 hover:text-red-600"
                                    }
                                `}
                                aria-label={hidden.has(work.file) ? "Show photo on site" : "Hide photo from site"}
                            >
                                {hidden.has(work.file) ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                            </button>
                        )}
                    </div>
                ))}
            </div>

            {/* Empty state */}
            {filteredWorks.length === 0 && (
                <div className="text-center py-16">
                    <p className="text-gray-400 text-lg">No projects in this category yet.</p>
                </div>
            )}

            {/* Lightbox (dynamically imported, SSR disabled) */}
            {lightbox !== null && filteredWorks[lightbox] && (
                <Lightbox
                    items={filteredWorks}
                    index={lightbox}
                    onClose={handleLightboxClose}
                    onNavigate={handleLightboxNavigate}
                    swipeHint={t("swipeHint")}
                />
            )}

            {/* Admin login modal */}
            {showLogin && (
                <div className="fixed inset-0 z-[300] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-sm relative">
                        <button
                            onClick={() => { setShowLogin(false); setLoginError(false); setPassword(""); }}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
                            aria-label="Close"
                        >
                            <X className="w-5 h-5" />
                        </button>
                        <div className="text-center mb-6">
                            <div className="w-14 h-14 bg-bubble-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                                <Lock className="w-7 h-7 text-bubble-primary" />
                            </div>
                            <h2 className="text-xl font-extrabold text-gray-900">Admin Access</h2>
                            <p className="text-gray-500 text-sm mt-1">Enter your password to manage the gallery</p>
                        </div>

                        <input
                            type="password"
                            value={password}
                            onChange={e => { setPassword(e.target.value); setLoginError(false); }}
                            onKeyDown={e => e.key === "Enter" && login()}
                            placeholder="Admin password"
                            autoFocus
                            className={`w-full border rounded-xl px-4 py-3 mb-3 text-sm focus:outline-none focus:ring-2 focus:ring-bubble-primary transition
                                ${loginError ? "border-red-400 bg-red-50" : "border-gray-200"}`}
                        />
                        {loginError && (
                            <p className="text-red-500 text-xs mb-3 font-medium text-center">Incorrect password. Try again.</p>
                        )}
                        <button
                            onClick={login}
                            className="w-full bg-bubble-primary text-white font-bold py-3 rounded-xl hover:bg-bubble-dark transition"
                        >
                            Enter Admin Mode
                        </button>
                    </div>
                </div>
            )}

            {/* Floating admin button (subtle, bottom-left) */}
            <button
                onClick={() => isAdmin ? setIsAdmin(false) : setShowLogin(true)}
                className="fixed bottom-24 left-4 z-50 w-9 h-9 bg-gray-800/50 hover:bg-gray-700/70 backdrop-blur-sm text-white/60 hover:text-white rounded-full flex items-center justify-center transition shadow-md"
                aria-label={isAdmin ? "Exit admin mode" : "Admin login"}
                title={isAdmin ? "Exit admin" : "Admin"}
            >
                <Lock className="w-3.5 h-3.5" />
            </button>
        </>
    );
}
