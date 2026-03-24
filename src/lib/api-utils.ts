import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// ── Shared rate limiter (3 requests per IP per hour across ALL API routes) ──
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

export function isRateLimited(ip: string): boolean {
    const now = Date.now();

    // Periodic cleanup: remove expired entries when map gets large
    if (rateLimitMap.size > 1000) {
        for (const [key, val] of rateLimitMap) {
            if (now > val.resetAt) rateLimitMap.delete(key);
        }
    }

    const entry = rateLimitMap.get(ip);
    if (!entry || now > entry.resetAt) {
        rateLimitMap.set(ip, { count: 1, resetAt: now + 60 * 60 * 1000 });
        return false;
    }
    if (entry.count >= 3) return true;
    entry.count++;
    return false;
}

export function getClientIp(req: NextRequest): string {
    // On Vercel, x-forwarded-for last entry is the real client IP (Vercel appends it).
    // x-real-ip is NOT set by Vercel and can be spoofed by attackers.
    return req.headers.get('x-forwarded-for')?.split(',').pop()?.trim()
        ?? 'unknown';
}

export function esc(s: string): string {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

export function createMailTransport() {
    return nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 465,
        secure: true,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
        tls: { rejectUnauthorized: true },
    });
}

export function formatDate(): string {
    return new Date().toLocaleString('en-US', {
        timeZone: 'America/New_York',
        dateStyle: 'full',
        timeStyle: 'short',
    });
}

// ── CSRF protection: verify request origin ──
const ALLOWED_ORIGINS = ['https://bubblesenterprise.com', 'https://www.bubblesenterprise.com'];

export function checkOrigin(req: NextRequest): NextResponse | null {
    const origin = req.headers.get('origin');
    // Reject requests without Origin header (blocks curl/script spam)
    if (!origin) return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    if (ALLOWED_ORIGINS.includes(origin)) return null;
    // Allow Vercel preview deployments (only *.vercel.app, exact suffix match)
    if (/^https:\/\/[\w-]+\.vercel\.app$/.test(origin)) return null;
    // In development, allow localhost
    if (/^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin)) return null;
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
}

// ── Text field length validation ──
const MAX_LENGTHS: Record<string, number> = {
    name: 200, first_name: 200, last_name: 200,
    email: 320, phone: 30, address: 500, gate_code: 30,
    service: 200, damage_type: 200, description: 5000, message: 5000,
};

export function validateFieldLengths(fields: Record<string, string>): string | null {
    for (const [key, val] of Object.entries(fields)) {
        const max = MAX_LENGTHS[key] ?? 1000;
        if (val && val.length > max) return `${key} exceeds maximum length`;
    }
    return null;
}

// ── File upload validation (MIME type + extension + magic bytes) ──
const ALLOWED_MIME = ['image/jpeg', 'image/png', 'image/webp', 'image/heic', 'image/heif'];
const ALLOWED_EXT = ['jpg', 'jpeg', 'png', 'webp', 'heic', 'heif'];

// Magic byte signatures for allowed image types
const MAGIC_BYTES: Record<string, number[][]> = {
    'image/jpeg': [[0xFF, 0xD8, 0xFF]],
    'image/png': [[0x89, 0x50, 0x4E, 0x47]],
    'image/webp': [[0x52, 0x49, 0x46, 0x46]], // RIFF header
    'image/heic': [[0x00, 0x00, 0x00], [0x66, 0x74, 0x79, 0x70]], // ftyp at offset 4
    'image/heif': [[0x00, 0x00, 0x00], [0x66, 0x74, 0x79, 0x70]],
};

async function checkMagicBytes(file: File): Promise<boolean> {
    try {
        const buf = new Uint8Array(await file.slice(0, 12).arrayBuffer());
        const signatures = MAGIC_BYTES[file.type];
        if (!signatures) return true; // No signature to check, allow
        // For HEIC/HEIF check ftyp at offset 4
        if (file.type === 'image/heic' || file.type === 'image/heif') {
            return buf[4] === 0x66 && buf[5] === 0x74 && buf[6] === 0x79 && buf[7] === 0x70;
        }
        return signatures.some(sig => sig.every((byte, i) => buf[i] === byte));
    } catch {
        return false;
    }
}

export async function validatePhotos(photos: File[]): Promise<File[]> {
    const filtered = photos
        .filter(f => {
            if (f.size <= 0 || f.size > 10 * 1024 * 1024) return false;
            const ext = f.name.split('.').pop()?.toLowerCase() || '';
            if (!ALLOWED_EXT.includes(ext)) return false;
            if (!f.type || !ALLOWED_MIME.includes(f.type)) return false;
            return true;
        })
        .slice(0, 5);

    // Verify magic bytes for each file
    const results = await Promise.all(filtered.map(async f => ({ file: f, valid: await checkMagicBytes(f) })));
    return results.filter(r => r.valid).map(r => r.file);
}
