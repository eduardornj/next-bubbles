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
    // On DirectAdmin/CloudLinux with Passenger, the proxy sets x-real-ip reliably.
    // x-forwarded-for can be spoofed by clients, so prefer x-real-ip first.
    return req.headers.get('x-real-ip')
        ?? req.headers.get('x-forwarded-for')?.split(',').pop()?.trim()
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
        tls: { rejectUnauthorized: false },
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

// ── File upload validation (MIME type + extension) ──
const ALLOWED_MIME = ['image/jpeg', 'image/png', 'image/webp', 'image/heic', 'image/heif'];
const ALLOWED_EXT = ['jpg', 'jpeg', 'png', 'webp', 'heic', 'heif'];

export function validatePhotos(photos: File[]): File[] {
    return photos
        .filter(f => {
            if (f.size <= 0 || f.size > 10 * 1024 * 1024) return false;
            const ext = f.name.split('.').pop()?.toLowerCase() || '';
            if (!ALLOWED_EXT.includes(ext)) return false;
            if (!f.type || !ALLOWED_MIME.includes(f.type)) return false;
            return true;
        })
        .slice(0, 5);
}
