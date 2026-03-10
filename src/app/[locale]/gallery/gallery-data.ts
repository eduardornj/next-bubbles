// Shared data & types for gallery — importable from both Server and Client components

export type Category = "all" | "installation" | "repair" | "newconstruction";

export interface WorkItem {
    file: string;
    alt: string;
    category: Exclude<Category, "all">;
}

export interface BeforeAfterItem {
    before: string;
    after: string;
    titleKey: string;
    descKey: string;
}

/** Only REAL photos, no AI renders */
export const WORKS: WorkItem[] = [
    { file: "IMG_3511.webp", alt: "New construction farmhouse soffit and fascia installation - dark fascia wrap with white soffit, Central Florida", category: "newconstruction" },
    { file: "soffit-porch-new-construction.webp", alt: "Vented aluminum soffit installation on L-shaped porch overhang - new construction residential project", category: "newconstruction" },
    { file: "ceiling.webp", alt: "Close-up of vented aluminum soffit panels installed under porch overhang - white soffit with ventilation perforations", category: "installation" },
    { file: "IMG_0313.webp", alt: "Bronze vented aluminum soffit installation on residential home - under-eave view, Orlando FL", category: "installation" },
    { file: "IMG_3164.webp", alt: "White vented soffit with red fascia installation - side view of completed project, Central Florida", category: "installation" },
    { file: "IMG_3628.webp", alt: "White soffit installation on new construction home with palm tree - Central Florida", category: "newconstruction" },
    { file: "soffit-fascia-two-story.webp", alt: "Soffit and fascia installation on two-story residential home - brown fascia with matching soffit, Orlando area", category: "installation" },
    { file: "soffit-fascia-brick-home.webp", alt: "White soffit and fascia installation on brick residential home - complete eave system, Central Florida", category: "repair" },
    { file: "soffit-branco-fascia-bronze.webp", alt: "Before and after soffit repair - white soffit with bronze fascia replacement on residential home", category: "repair" },
    { file: "qw31230.webp", alt: "New construction soffit installation in progress - white aluminum vented soffit under blue sky", category: "newconstruction" },
    { file: "work9.webp", alt: "Vented soffit installation on gable triangle section inside screened porch - residential project", category: "installation" },
    { file: "work10.webp", alt: "Soffit and fascia on gable end - tan siding with dark fascia, Orlando area residence at golden hour", category: "installation" },
    { file: "commercial-soffit-before-after.webp", alt: "Commercial soffit installation before and after - gas station canopy soffit replacement with black aluminum panels", category: "repair" },
    { file: "ceiling2.webp", alt: "Interior soffit installation on covered porch - white horizontal panels with recessed lighting, new construction", category: "newconstruction" },
];

// Before/After — Eduardo will add photos here
// To add a before/after pair:
// 1. Place photos in /public/images/works/ (e.g., ba-1-before.webp, ba-1-after.webp)
// 2. Add an entry below with the filenames and i18n keys
// 3. Add matching i18n keys to all 4 JSON files (gallery namespace)
// The section auto-renders when this array has items.
export const BEFORE_AFTER: BeforeAfterItem[] = [
    // Example (uncomment when photos are ready):
    // { before: "ba-1-before.webp", after: "ba-1-after.webp", titleKey: "ba1Title", descKey: "ba1Desc" },
];
