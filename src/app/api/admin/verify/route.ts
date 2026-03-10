import { NextRequest, NextResponse } from "next/server";
import { scryptSync, timingSafeEqual } from "crypto";
import { isRateLimited, getClientIp, checkOrigin } from "@/lib/api-utils";

export async function POST(req: NextRequest) {
    // Origin check
    const originErr = checkOrigin(req);
    if (originErr) return originErr;

    // Rate limit
    const ip = getClientIp(req);
    if (isRateLimited(ip)) {
        return NextResponse.json({ error: "Too many attempts" }, { status: 429 });
    }

    try {
        const { password } = await req.json();
        if (!password || typeof password !== "string" || password.length > 200) {
            return NextResponse.json({ ok: false }, { status: 400 });
        }

        const stored = process.env.ADMIN_HASH ?? "";
        const [salt, expectedHex] = stored.split(":");
        if (!salt || !expectedHex) {
            return NextResponse.json({ ok: false }, { status: 401 });
        }

        // scrypt with stored salt, then timing-safe compare
        const hash = scryptSync(password, salt, 64);
        const expected = Buffer.from(expectedHex, "hex");

        if (hash.length !== expected.length || !timingSafeEqual(hash, expected)) {
            return NextResponse.json({ ok: false }, { status: 401 });
        }

        return NextResponse.json({ ok: true });
    } catch {
        return NextResponse.json({ ok: false }, { status: 400 });
    }
}
