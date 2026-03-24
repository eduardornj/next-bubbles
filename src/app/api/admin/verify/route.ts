import { NextRequest, NextResponse } from "next/server";
import { verifyPassword, checkRateLimit, audit } from "@/lib/admin-auth";
import { getClientIp, checkOrigin } from "@/lib/api-utils";

export async function POST(req: NextRequest) {
    // Origin check
    const originErr = checkOrigin(req);
    if (originErr) return originErr;

    // Rate limit (shared with login)
    const ip = getClientIp(req);
    const rateCheck = checkRateLimit(ip);
    if (!rateCheck.allowed) {
        return NextResponse.json({ ok: false }, { status: 429 });
    }

    try {
        const { password } = await req.json();
        if (!password || typeof password !== "string" || password.length > 256) {
            return NextResponse.json({ ok: false }, { status: 400 });
        }

        const stored = process.env.ADMIN_HASH ?? "";
        if (!stored) {
            return NextResponse.json({ ok: false }, { status: 401 });
        }

        // Use shared verifyPassword (scrypt + timingSafeEqual)
        const valid = verifyPassword(password, stored);
        if (!valid) {
            audit("VERIFY_FAILED", ip);
            return NextResponse.json({ ok: false }, { status: 401 });
        }

        audit("VERIFY_SUCCESS", ip);
        return NextResponse.json({ ok: true });
    } catch {
        return NextResponse.json({ ok: false }, { status: 400 });
    }
}
