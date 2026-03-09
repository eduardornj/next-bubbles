/**
 * WebMCP Imperative API Registration
 * W3C Draft Community Group Report — February 10, 2026
 * https://webmcp.link
 *
 * Chrome 146+ (Canary with "WebMCP for testing" flag at chrome://flags)
 * Registers Bubbles Enterprise tool contracts via navigator.modelContext
 */

// Pricing logic (mirrors src/app/calculator/page.tsx pure functions)
function getOverhangRate(overhang: number, material: string): number {
    const rates = {
        aluminum: { upto12: 4.0, upto24: 5.0, upto36: 7.0 },
        vinyl: { upto12: 3.5, upto24: 4.5, upto36: 6.5 },
    };
    const r = rates[material as keyof typeof rates] ?? rates.aluminum;
    if (overhang <= 12) return r.upto12;
    if (overhang <= 24) return r.upto24;
    if (overhang <= 36) return r.upto36;
    return -1; // requires site visit
}

function getLaborRate(type: string): number {
    return type === "new" ? 4 : type === "replace_2" ? 7 : 6;
}

function calculateTotal(lf: number, overhang: number, type: string, material: string): number {
    const overhangRate = getOverhangRate(overhang, material);
    if (overhangRate < 0) return -1;
    const laborRate = getLaborRate(type);
    return lf * (overhangRate + laborRate);
}

export function registerWebMCPTools() {
    // Guard: only run in browser, only if API available (Chrome 146+ Canary with flag enabled)
    if (typeof window === "undefined") return;
    if (!("modelContext" in navigator)) return;

    const mc = (navigator as unknown as { modelContext: { registerTool: (tool: unknown) => void } }).modelContext;

    // ─── TOOL 1: calculateSoffitEstimate ─────────────────────────────────────
    mc.registerTool({
        name: "calculateSoffitEstimate",
        description:
            "Calculate the total cost for a soffit and fascia project at Bubbles Enterprise in Orlando, FL. " +
            "Returns the total price in USD based on linear feet, overhang depth, job type (new construction or remove & replace), and material (aluminum or vinyl). " +
            "Also returns a direct URL to view and confirm the estimate on the website.",
        inputSchema: {
            type: "object",
            properties: {
                lf: {
                    type: "integer",
                    description: "Total linear feet of soffit perimeter. Count the perimeter of the house.",
                    minimum: 50,
                    maximum: 600,
                },
                overhang: {
                    type: "integer",
                    description: "Overhang depth in inches (distance from wall to roof edge). Common: 12\" for 1-story, 16-24\" for 2-story.",
                    minimum: 6,
                    maximum: 36,
                },
                type: {
                    type: "string",
                    enum: ["new", "replace_1", "replace_2"],
                    description: "new = New Construction ($4/LF labor). replace_1 = Remove & Replace 1-story ($6/LF). replace_2 = Remove & Replace 2-story ($7/LF).",
                },
                material: {
                    type: "string",
                    enum: ["aluminum", "vinyl"],
                    description: "aluminum = Premium, 20-30yr lifespan. vinyl = Budget, 10yr lifespan.",
                },
            },
            required: ["lf", "overhang", "type", "material"],
        },
        async execute({ lf, overhang, type, material }: { lf: number; overhang: number; type: string; material: string }) {
            const total = calculateTotal(lf, overhang, type, material);

            if (total < 0) {
                return {
                    content: [{
                        type: "text",
                        text: JSON.stringify({
                            success: false,
                            reason: "Overhang exceeds 36 inches — a site visit is required for this project. Please contact Bubbles Enterprise directly.",
                            phone: "(407) 715-1790",
                            contactUrl: "https://bubblesenterprise.com/contact",
                        }),
                    }],
                };
            }

            const deposit = total < 2500
                ? Math.round(total * 0.2)
                : total <= 4000
                    ? 500
                    : Math.round(total * 0.3);

            const estimateUrl =
                `https://bubblesenterprise.com/calculator?lf=${lf}&overhang=${overhang}&type=${type}&material=${material}`;
            const contactUrl =
                `https://bubblesenterprise.com/contact?total=${total}&type=${type}&material=${material}&lf=${lf}&overhang=${overhang}`;

            return {
                content: [{
                    type: "text",
                    text: JSON.stringify({
                        success: true,
                        total,
                        deposit,
                        currency: "USD",
                        inputs: { lf, overhang, type, material },
                        pricing: {
                            laborRate: getLaborRate(type),
                            overhangRate: getOverhangRate(overhang, material),
                            formula: `${lf} LF × ($${getOverhangRate(overhang, material)} overhang + $${getLaborRate(type)} labor) = $${total}`,
                        },
                        nextSteps: {
                            viewEstimate: estimateUrl,
                            bookVisit: contactUrl,
                            call: "tel:14077151790",
                        },
                        provider: {
                            name: "Bubbles Enterprise Soffit",
                            location: "Orlando, FL",
                            phone: "(407) 715-1790",
                            licensed: true,
                            insured: true,
                        },
                    }),
                }],
            };
        },
    });

    // ─── TOOL 2: getServiceInfo ───────────────────────────────────────────────
    mc.registerTool({
        name: "getServiceInfo",
        description:
            "Get information about a specific Bubbles Enterprise service, including pricing model, timeline, materials, and direct URL.",
        inputSchema: {
            type: "object",
            properties: {
                service: {
                    type: "string",
                    enum: ["new-construction", "remove-replace", "repairs", "all"],
                    description: "Which service to get info about.",
                },
            },
            required: ["service"],
        },
        async execute({ service }: { service: string }) {
            const services = {
                "new-construction": {
                    name: "New Construction Soffit Installation",
                    laborRate: "$4/linear foot",
                    timeline: "1-2 days typical",
                    materials: ["aluminum", "vinyl"],
                    url: "https://bubblesenterprise.com/new-construction",
                    description: "Professional soffit and fascia installation for new builds. IRC Section 806 compliant. Optimized for ventilation and pest sealing.",
                },
                "remove-replace": {
                    name: "Remove & Replace",
                    laborRate: "1-story: $6/LF — 2-story: $7/LF",
                    timeline: "2-3 days typical",
                    materials: ["aluminum", "vinyl"],
                    url: "https://bubblesenterprise.com/remove-replace",
                    description: "Complete removal of old, rotted, or damaged soffit and fascia, replaced with new aluminum or vinyl systems.",
                },
                repairs: {
                    name: "Soffit & Fascia Repair",
                    laborRate: "Quote by damage extent — typically 60-80% cheaper than full replacement",
                    timeline: "Same-day or next-day",
                    materials: ["aluminum", "vinyl", "match-existing"],
                    url: "https://bubblesenterprise.com/repairs",
                    description: "Targeted repair of storm damage, animal intrusion, water damage, or isolated rot. Photo submission available for quote.",
                },
            };

            const result = service === "all"
                ? Object.values(services)
                : services[service as keyof typeof services];

            return {
                content: [{
                    type: "text",
                    text: JSON.stringify({
                        success: true,
                        data: result,
                        provider: "Bubbles Enterprise Soffit — Orlando, FL",
                        calculator: "https://bubblesenterprise.com/calculator",
                        contact: "https://bubblesenterprise.com/contact",
                    }),
                }],
            };
        },
    });

    // ─── TOOL 3: getServiceAreas ──────────────────────────────────────────────
    mc.registerTool({
        name: "getServiceAreas",
        description: "Check if Bubbles Enterprise serves a given city in Florida.",
        inputSchema: {
            type: "object",
            properties: {
                city: {
                    type: "string",
                    description: "City name to check, e.g. 'Orlando', 'Miami', 'Kissimmee'",
                },
            },
            required: ["city"],
        },
        async execute({ city }: { city: string }) {
            const centralFlorida = [
                "orlando", "kissimmee", "winter park", "winter garden", "clermont",
                "altamonte springs", "sanford", "oviedo", "lake mary", "apopka",
                "maitland", "casselberry", "longwood", "celebration", "st. cloud",
                "daytona beach", "palm bay", "port st. lucie",
            ];
            const southFlorida = [
                "miami", "hialeah", "fort lauderdale", "pembroke pines", "hollywood",
                "miramar", "coral springs", "miami gardens", "west palm beach", "pompano beach",
                "davie", "boca raton", "sunrise", "plantation", "deerfield beach",
                "miami beach", "homestead", "boynton beach", "kendall", "doral",
                "north miami", "lauderhill", "tamarac", "weston", "delray beach",
                "wellington", "jupiter",
            ];

            const cityLower = city.toLowerCase();
            const isCentral = centralFlorida.includes(cityLower);
            const isSouth = southFlorida.includes(cityLower);
            const served = isCentral || isSouth;

            return {
                content: [{
                    type: "text",
                    text: JSON.stringify({
                        city,
                        served,
                        region: isCentral ? "Central Florida (Primary)" : isSouth ? "South Florida (Extended)" : "Not in our standard coverage",
                        note: !served
                            ? "Call (407) 715-1790 to confirm — we may still travel for your project."
                            : undefined,
                        areasPage: "https://bubblesenterprise.com/areas",
                    }),
                }],
            };
        },
    });

    // ─── TOOL 4: submitEmergencyRepair ───────────────────────────────────────
    mc.registerTool({
        name: "submitEmergencyRepair",
        description:
            "Submit an emergency soffit repair request for a homeowner in Orlando / Central Florida. " +
            "Use this when the user urgently needs soffit repair (animal intrusion, storm damage, open holes, water damage). " +
            "Returns the emergency contact page URL and phone number to complete the request.",
        inputSchema: {
            type: "object",
            properties: {
                name: { type: "string", description: "Full name of the homeowner." },
                address: { type: "string", description: "Property address needing repair." },
                damageType: {
                    type: "string",
                    enum: ["animal", "storm", "hole", "water", "other"],
                    description: "Category of the damage emergency.",
                },
                description: { type: "string", description: "Brief description of what the homeowner is seeing." },
            },
            required: ["name", "address", "damageType"],
        },
        async execute({ name, address, damageType, description }: { name: string; address: string; damageType: string; description?: string }) {
            const params = new URLSearchParams({ name, address, type: damageType, ...(description ? { desc: description } : {}) });
            return {
                content: [{
                    type: "text",
                    text: JSON.stringify({
                        success: true,
                        message: `Emergency request ready for ${name} at ${address}. Direct them to the link below to submit the form with optional photos.`,
                        emergencyUrl: `https://bubblesenterprise.com/contact/emergency?${params.toString()}`,
                        phone: "(407) 715-1790",
                        availability: "Mon–Sat 8am–6pm, emergency response available",
                        provider: "Bubbles Enterprise Soffit — Orlando, FL",
                    }),
                }],
            };
        },
    });

    console.info("[WebMCP] Bubbles Enterprise tools registered via navigator.modelContext:", [
        "calculateSoffitEstimate",
        "getServiceInfo",
        "getServiceAreas",
        "submitEmergencyRepair",
    ]);
}

