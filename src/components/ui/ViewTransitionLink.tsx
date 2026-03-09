"use client";

/**
 * ViewTransitionLink — wraps Next.js <Link> with the View Transitions API.
 * Falls back silently in browsers that don't support it.
 *
 * Chrome 111+, Safari 18.2+. Firefox: plain navigation (no visual diff).
 * W3C CSSWG Living Standard — https://drafts.csswg.org/css-view-transitions/
 */
import { useRouter } from "next/navigation";
import { MouseEvent, ReactNode, AnchorHTMLAttributes } from "react";

interface ViewTransitionLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    children: ReactNode;
    className?: string;
}

export function ViewTransitionLink({ href, children, className, onClick, ...rest }: ViewTransitionLinkProps) {
    const router = useRouter();

    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
        // External links or modifier keys — let browser handle normally
        if (
            href.startsWith("http") ||
            href.startsWith("mailto") ||
            href.startsWith("tel") ||
            e.metaKey || e.ctrlKey || e.shiftKey || e.altKey
        ) return;

        e.preventDefault();
        onClick?.(e);

        // View Transitions API — Chrome 111+, Safari 18.2+
        if (typeof document !== "undefined" && "startViewTransition" in document) {
            (document as Document & { startViewTransition: (cb: () => void) => void })
                .startViewTransition(() => {
                    router.push(href);
                });
        } else {
            // Fallback — instant navigation
            router.push(href);
        }
    };

    return (
        <a href={href} className={className} onClick={handleClick} {...rest}>
            {children}
        </a>
    );
}
