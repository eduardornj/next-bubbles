"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Pause, Play } from "lucide-react";

const heroImages = [
    "IMG_3511.webp",
    "soffit-porch-new-construction.webp",
    "IMG_0313.webp",
    "soffit-fascia-two-story.webp",
    "ceiling.webp",
];

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeReducedMotion(callback: () => void) {
    const mq = window.matchMedia(REDUCED_MOTION_QUERY);
    mq.addEventListener("change", callback);
    return () => mq.removeEventListener("change", callback);
}

function getReducedMotion() {
    return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

function getReducedMotionServer() {
    return false;
}

export function HeroSlider() {
    const reducedMotion = useSyncExternalStore(subscribeReducedMotion, getReducedMotion, getReducedMotionServer);
    const [current, setCurrent] = useState(0);
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        if (reducedMotion || paused) return;
        const t = setInterval(() => setCurrent(p => (p + 1) % heroImages.length), 4500);
        return () => clearInterval(t);
    }, [paused, reducedMotion]);

    const nextIdx = (current + 1) % heroImages.length;
    const visibleIndices = [current, nextIdx];

    return (
        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <Link
                href="/gallery"
                className="block aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-bubble-primary to-bubble-dark relative border border-white/10 group cursor-pointer hover:shadow-[0_0_40px_rgba(37,99,235,0.4)] transition-all"
                aria-label="View our project gallery"
            >
                {heroImages.map((img, idx) =>
                    visibleIndices.includes(idx) ? (
                        <Image
                            key={img}
                            src={`/images/works/${img}`}
                            alt={`Soffit and fascia project ${idx + 1} in Central Florida`}
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            priority={idx === 0}
                            fetchPriority={idx === 0 ? "high" : undefined}
                            loading={idx === 0 ? "eager" : "lazy"}
                            className={`object-cover ${reducedMotion ? "" : "transition-all duration-1000"} ${idx === current ? "opacity-80 scale-100" : "opacity-0 scale-110"}`}
                        />
                    ) : null
                )}
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-bubble-navy/90 via-transparent to-transparent group-hover:from-bubble-primary/80 transition-colors duration-500" />
                {/* Caption card */}
                <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 flex justify-between items-center group-hover:bg-white/20 transition-colors">
                        <div>
                            <p className="text-white font-semibold">Recent Projects</p>
                            <p className="text-bubble-light text-sm">Central Florida</p>
                        </div>
                        <ArrowRight className="text-white w-6 h-6 transform group-hover:translate-x-2 transition-transform" />
                    </div>
                </div>
                {/* Slide dots */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-0">
                    {heroImages.map((_, i) => (
                        <button
                            key={i}
                            onClick={(e) => { e.preventDefault(); setCurrent(i); }}
                            aria-label={`Slide ${i + 1} of ${heroImages.length}`}
                            className="p-3"
                        >
                            <span className={`block h-2 rounded-full transition-all ${i === current ? "bg-white w-5" : "bg-white/40 hover:bg-white/60 w-2"}`} />
                        </button>
                    ))}
                </div>
            </Link>
            {/* Pause/Play button */}
            <button
                onClick={() => setPaused(p => !p)}
                aria-label={paused ? "Play slideshow" : "Pause slideshow"}
                className="absolute top-4 right-4 z-10 bg-black/40 hover:bg-black/60 backdrop-blur-sm text-white rounded-full p-2 transition-colors"
            >
                {paused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
            </button>
        </div>
    );
}
