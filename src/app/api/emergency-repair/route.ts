import { NextRequest, NextResponse } from 'next/server';
import { isRateLimited, getClientIp, esc, createMailTransport, formatDate, checkOrigin, validatePhotos, validateFieldLengths } from '@/lib/api-utils';

function buildEmailHtml(data: {
    name: string;
    phone: string;
    phoneDigits: string;
    address: string;
    gateCode: string;
    damageType: string;
    description: string;
    photoCount: number;
    date: string;
}) {
    return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#1a0000;font-family:Arial,Helvetica,sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#1a0000;padding:32px 16px">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#1f0a0a;border-radius:16px;overflow:hidden;box-shadow:0 4px 40px rgba(220,38,38,0.3);border:1px solid #7f1d1d">

        <!-- Flashing header -->
        <tr>
          <td style="background:linear-gradient(135deg,#7f1d1d 0%,#dc2626 100%);padding:36px 40px;text-align:center">
            <p style="margin:0 0 6px 0;font-size:13px;font-weight:900;color:#fca5a5;text-transform:uppercase;letter-spacing:3px">
              🚨 EMERGENCY REQUEST
            </p>
            <p style="margin:0 0 8px 0;font-size:28px;font-weight:900;color:#ffffff;letter-spacing:-0.5px">
              Bubbles Enterprise
            </p>
            <p style="margin:0;font-size:13px;color:#fca5a5;font-weight:600;text-transform:uppercase;letter-spacing:2px">
              Soffit &amp; Fascia · Orlando FL · Same-Day Response
            </p>
          </td>
        </tr>

        <!-- Alert badge -->
        <tr>
          <td style="background:#450a0a;padding:14px 40px;text-align:center;border-bottom:1px solid #7f1d1d">
            <p style="margin:0;font-size:15px;font-weight:900;color:#f87171">
              ⚡ RESPOND WITHIN 1 HOUR — SAME-DAY VISIT AVAILABLE
            </p>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:36px 40px">

            <!-- Damage type badge -->
            <div style="text-align:center;margin-bottom:24px">
              <span style="display:inline-block;background:#dc2626;color:#fff;font-size:14px;font-weight:900;padding:8px 24px;border-radius:100px;text-transform:uppercase;letter-spacing:1px">
                ${data.damageType}
              </span>
            </div>

            <!-- Info table -->
            <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin-bottom:28px">
              <tr>
                <td colspan="2" style="padding-bottom:12px">
                  <p style="margin:0;font-size:11px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1.5px">Customer Information</p>
                </td>
              </tr>
              <tr style="background:#2d0a0a">
                <td style="padding:12px 16px;border:1px solid #7f1d1d;border-radius:8px 0 0 0;font-size:12px;font-weight:700;color:#9ca3af;width:38%;text-transform:uppercase;letter-spacing:0.5px">Name</td>
                <td style="padding:12px 16px;border:1px solid #7f1d1d;border-left:none;border-radius:0 8px 0 0;font-size:15px;font-weight:600;color:#f9fafb">${data.name}</td>
              </tr>
              <tr>
                <td style="padding:12px 16px;border:1px solid #7f1d1d;border-top:none;font-size:12px;font-weight:700;color:#9ca3af;text-transform:uppercase;letter-spacing:0.5px">Phone</td>
                <td style="padding:12px 16px;border:1px solid #7f1d1d;border-top:none;border-left:none;font-size:15px;font-weight:700;color:#f9fafb">
                  <a href="tel:${data.phoneDigits}" style="color:#f87171;text-decoration:none;font-size:18px">${data.phone}</a>
                </td>
              </tr>
              <tr style="background:#2d0a0a">
                <td style="padding:12px 16px;border:1px solid #7f1d1d;border-top:none;font-size:12px;font-weight:700;color:#9ca3af;text-transform:uppercase;letter-spacing:0.5px">Address</td>
                <td style="padding:12px 16px;border:1px solid #7f1d1d;border-top:none;border-left:none;font-size:15px;font-weight:600;color:#f9fafb">${data.address}</td>
              </tr>
              ${data.gateCode ? `
              <tr>
                <td style="padding:12px 16px;border:1px solid #7f1d1d;border-top:none;font-size:12px;font-weight:700;color:#9ca3af;text-transform:uppercase;letter-spacing:0.5px">Gate Code</td>
                <td style="padding:12px 16px;border:1px solid #7f1d1d;border-top:none;border-left:none;font-size:15px;font-weight:900;color:#fbbf24">${data.gateCode}</td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding:12px 16px;border:1px solid #7f1d1d;border-top:none;border-radius:0 0 0 8px;font-size:12px;font-weight:700;color:#9ca3af;text-transform:uppercase;letter-spacing:0.5px">Photos</td>
                <td style="padding:12px 16px;border:1px solid #7f1d1d;border-top:none;border-left:none;border-radius:0 0 8px 0;font-size:15px;font-weight:600;color:#f9fafb">
                  <span style="background:#7f1d1d;color:#fca5a5;padding:3px 10px;border-radius:20px;font-size:13px;font-weight:700">${data.photoCount} photo${data.photoCount !== 1 ? 's' : ''} attached</span>
                </td>
              </tr>
            </table>

            <!-- Description -->
            ${data.description ? `
            <div style="background:#2d0a0a;border:1px solid #7f1d1d;border-left:4px solid #dc2626;border-radius:8px;padding:16px 20px;margin-bottom:28px">
              <p style="margin:0 0 6px 0;font-size:11px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1.5px">Emergency Description</p>
              <p style="margin:0;font-size:14px;color:#e5e7eb;line-height:1.6">${data.description}</p>
            </div>
            ` : ''}

            <!-- CTA -->
            <div style="text-align:center;margin-bottom:28px">
              <a href="tel:4077151790" style="display:inline-block;background:linear-gradient(135deg,#dc2626,#b91c1c);color:#ffffff;font-size:16px;font-weight:900;padding:16px 40px;border-radius:12px;text-decoration:none;letter-spacing:0.3px">
                📞 CALL NOW — (407) 715-1790
              </a>
            </div>

          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#0a0000;border-top:1px solid #7f1d1d;padding:20px 40px;text-align:center">
            <p style="margin:0 0 4px 0;font-size:12px;color:#6b7280">Received on ${data.date}</p>
            <p style="margin:0;font-size:11px;color:#4b5563">Bubbles Enterprise · bubblesenterprise.com · (407) 715-1790</p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export async function POST(req: NextRequest) {
    try {
        // Origin check — relaxed
        const origin = req.headers.get('origin') || '';
        if (origin && !origin.includes('bubblesenterprise.com') && !origin.includes('vercel.app') && !origin.includes('localhost')) {
            return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
        }

        const ip = getClientIp(req);
        if (isRateLimited(ip)) {
            return NextResponse.json({ error: 'Too many requests.' }, { status: 429 });
        }

        const formData = await req.formData();
        const recaptchaToken = (formData.get('recaptcha_token') as string) ?? '';

        // reCAPTCHA — soft check
        if (recaptchaToken && process.env.RECAPTCHA_SECRET_KEY) {
            try {
                const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
                });
                const data = await res.json() as { success?: boolean; score?: number };
                if (!data.success || (data.score ?? 0) < 0.3) {
                    return NextResponse.json({ error: 'Bot detected.' }, { status: 403 });
                }
            } catch { /* don't block */ }
        }

        const name = (formData.get('name') as string)?.trim();
        const phone = (formData.get('phone') as string)?.trim();
        const email = (formData.get('email') as string)?.trim() || '';
        const address = (formData.get('address') as string)?.trim();
        const gateCode = (formData.get('gate_code') as string)?.trim() || '';
        const damageType = (formData.get('damage_type') as string)?.trim() || 'Not specified';
        const description = (formData.get('description') as string)?.trim() || '';
        const photos = formData.getAll('photos') as File[];

        if (!name || !phone || !address) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const fieldError = validateFieldLengths({ name, phone, address, gate_code: gateCode, damage_type: damageType, description });
        if (fieldError) return NextResponse.json({ error: fieldError }, { status: 400 });

        const validPhotos = validatePhotos(photos);

        const attachments = await Promise.all(
            validPhotos.map(async (file, i) => {
                const buffer = Buffer.from(await file.arrayBuffer());
                const ext = file.name.split('.').pop()?.toLowerCase() || 'jpg';
                return {
                    filename: `emergency-photo-${i + 1}.${ext}`,
                    content: buffer,
                    contentType: file.type || 'image/jpeg',
                };
            })
        );

        const date = formatDate();
        const phoneDigits = phone.replace(/\D/g, '');

        // Telegram — primary delivery
        const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN!;
        const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID!;

        const telegramMsg =
            `<b>🚨 EMERGENCY REPAIR</b>\n\n` +
            `<b>Damage:</b> ${esc(damageType)}\n` +
            `<b>Name:</b> ${esc(name)}\n` +
            `<b>Phone:</b> ${esc(phone)}\n` +
            (email ? `<b>Email:</b> ${esc(email)}\n` : '') +
            `<b>Address:</b> ${esc(address)}\n` +
            (gateCode ? `<b>Gate Code:</b> ${esc(gateCode)}\n` : '') +
            (description ? `<b>Description:</b> ${esc(description)}\n` : '') +
            `<b>Photos:</b> ${validPhotos.length}\n` +
            `<b>Date:</b> ${date}`;

        await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text: telegramMsg, parse_mode: "HTML" }),
        });

        if (validPhotos.length > 0) {
            for (const att of attachments) {
                const fd = new FormData();
                fd.append("chat_id", TELEGRAM_CHAT_ID);
                fd.append("photo", new Blob([att.content]), att.filename);
                fd.append("caption", `🚨 ${esc(name)} — ${esc(damageType)}`);
                await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendPhoto`, { method: "POST", body: fd });
            }
        }

        return NextResponse.json({ ok: true });
    } catch (err) {
        const e = err instanceof Error ? err : new Error(String(err));
        console.error('[emergency-repair] Error:', e.message);
        return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
    }
}
