"use client";
import { useEffect, useRef, useState, ReactNode } from "react";

// ── Shared IntersectionObserver (single instance for all AnimatedSections) ──
const callbacks = new Map<Element, () => void>();
let sharedObserver: IntersectionObserver | null = null;

function getObserver(): IntersectionObserver {
    if (!sharedObserver) {
        sharedObserver = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        const cb = callbacks.get(entry.target);
                        if (cb) {
                            cb();
                            callbacks.delete(entry.target);
                            sharedObserver?.unobserve(entry.target);
                        }
                    }
                }
            },
            { threshold: 0.12 }
        );
    }
    return sharedObserver;
}

interface AnimatedSectionProps {
    children: ReactNode;
    className?: string;
    /** Delay in ms before animation starts (for stagger) */
    delay?: number;
    /** Animation direction */
    from?: "bottom" | "left" | "right" | "scale";
}

/**
 * Wraps children in a div that fades + slides in when it enters the viewport.
 * Uses a single shared IntersectionObserver for all instances.
 */
export function AnimatedSection({ children, className = "", delay = 0, from = "bottom" }: AnimatedSectionProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = getObserver();
        callbacks.set(el, () => setVisible(true));
        observer.observe(el);
        return () => {
            callbacks.delete(el);
            observer.unobserve(el);
        };
    }, []);

    const initial: Record<string, string> = {
        bottom: "translate-y-10 opacity-0",
        left: "-translate-x-10 opacity-0",
        right: "translate-x-10 opacity-0",
        scale: "scale-95 opacity-0",
    };

    return (
        <div
            ref={ref}
            className={`transition-all duration-700 ease-out ${visible ? "translate-y-0 translate-x-0 scale-100 opacity-100" : initial[from]} ${className}`}
            style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
        >
            {children}
        </div>
    );
}
