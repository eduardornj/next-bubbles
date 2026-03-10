"use client";

import { useCallback, useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { WorkItem } from "./gallery-data";

interface LightboxModalProps {
    items: WorkItem[];
    index: number;
    onClose: () => void;
    onNavigate: (index: number) => void;
    swipeHint: string;
}

export default function LightboxModal({
    items,
    index,
    onClose,
    onNavigate,
    swipeHint,
}: LightboxModalProps) {
    const current = items[index];
    const touchStartX = useRef<number | null>(null);

    // Keyboard: Escape / arrows
    useEffect(() => {
        const handle = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowRight" && index < items.length - 1) onNavigate(index + 1);
            if (e.key === "ArrowLeft" && index > 0) onNavigate(index - 1);
        };
        window.addEventListener("keydown", handle);
        return () => window.removeEventListener("keydown", handle);
    }, [index, items.length, onClose, onNavigate]);

    // Touch swipe
    const handleTouchStart = useCallback((e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    }, []);

    const handleTouchEnd = useCallback(
        (e: React.TouchEvent) => {
            if (touchStartX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchStartX.current;
            if (Math.abs(dx) < 40) return;
            if (dx < 0 && index < items.length - 1) onNavigate(index + 1);
            else if (dx > 0 && index > 0) onNavigate(index - 1);
            touchStartX.current = null;
        },
        [index, items.length, onNavigate],
    );

    if (!current) return null;

    return (
        <div
            className="fixed inset-0 z-[200] bg-black/96 flex items-center justify-center p-2 sm:p-4 md:p-8"
            onClick={onClose}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            role="dialog"
            aria-modal="true"
            aria-label={current.alt}
        >
            <button
                className="absolute top-3 right-3 sm:top-6 sm:right-6 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition"
                onClick={onClose}
                aria-label="Close"
            >
                <X className="w-6 h-6" />
            </button>

            {index > 0 && (
                <button
                    className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition"
                    onClick={(e) => {
                        e.stopPropagation();
                        onNavigate(index - 1);
                    }}
                    aria-label="Previous photo"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
            )}

            {index < items.length - 1 && (
                <button
                    className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition"
                    onClick={(e) => {
                        e.stopPropagation();
                        onNavigate(index + 1);
                    }}
                    aria-label="Next photo"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            )}

            <div
                className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center gap-4"
                onClick={(e) => e.stopPropagation()}
            >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={`/images/works/${current.file}`}
                    alt={current.alt}
                    className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl"
                    style={{ viewTransitionName: "lightbox-image" }}
                />
                <p className="text-white/70 text-sm text-center font-medium px-4">
                    {current.alt}
                    <span className="ml-3 text-white/40">
                        ({index + 1}/{items.length})
                    </span>
                </p>
                <p className="text-white/30 text-xs md:hidden text-center">{swipeHint}</p>
            </div>
        </div>
    );
}
