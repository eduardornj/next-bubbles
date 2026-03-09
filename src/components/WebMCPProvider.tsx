"use client";

import { useEffect } from "react";
import { registerWebMCPTools } from "@/lib/webmcp";

/**
 * WebMCP Provider — W3C Draft (February 10, 2026)
 * Registers Bubbles Enterprise tool contracts via the browser's
 * native navigator.modelContext Imperative API.
 *
 * Only activates in Chrome 146+ Canary with "WebMCP for testing"
 * flag enabled at chrome://flags. Safe no-op in all other browsers.
 */
export function WebMCPProvider() {
    useEffect(() => {
        registerWebMCPTools();
    }, []);

    return null; // renders nothing
}
