import { NextRequest, NextResponse } from 'next/server';
import { isRateLimited, getClientIp, esc, createMailTransport, formatDate, checkOrigin, validatePhotos, validateFieldLengths } from '@/lib/api-utils';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function buildEmailHtml(data: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    phoneDigits: string;
    address: string;
    gateCode: string;
    service: string;
    message: string;
    onlineEstimate: string;
    photoCount: number;
    date: string;
}) {
    return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f7fb;font-family:Arial,Helvetica,sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f7fb;padding:32px 16px">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08)">

        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#1e3a5f 0%,#2563eb 100%);padding:36px 40px;text-align:center">
            <p style="margin:0 0 8px 0;font-size:28px;font-weight:900;color:#ffffff;letter-spacing:-0.5px">
              🏠 Bubbles Enterprise
            </p>
            <p style="margin:0;font-size:13px;color:#93c5fd;font-weight:600;text-transform:uppercase;letter-spacing:2px">
              Soffit &amp; Fascia · Orlando FL
            </p>
          </td>
        </tr>

        <!-- Alert badge -->
        <tr>
          <td style="background:#dbeafe;padding:14px 40px;text-align:center;border-bottom:1px solid #bfdbfe">
            <p style="margin:0;font-size:14px;font-weight:700;color:#1e40af">
              📋 New Service Request — ${data.service}
            </p>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:36px 40px">

            ${data.onlineEstimate ? `
            <!-- Online Estimate Banner -->
            <div style="background:linear-gradient(135deg,#1e3a5f,#2563eb);border-radius:12px;padding:20px 24px;margin-bottom:28px;text-align:center">
              <p style="margin:0 0 4px 0;font-size:11px;font-weight:700;color:#93c5fd;text-transform:uppercase;letter-spacing:1.5px">Online Estimate</p>
              <p style="margin:0;font-size:22px;font-weight:900;color:#ffffff">${data.onlineEstimate}</p>
            </div>
            ` : ''}

            <!-- Info table -->
            <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin-bottom:28px">
              <tr>
                <td colspan="2" style="padding-bottom:12px">
                  <p style="margin:0;font-size:11px;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:1.5px">Customer Information</p>
                </td>
              </tr>
              <tr style="background:#f8fafc">
                <td style="padding:12px 16px;border:1px solid #e2e8f0;border-radius:8px 0 0 0;font-size:12px;font-weight:700;color:#64748b;width:38%;text-transform:uppercase;letter-spacing:0.5px">Name</td>
                <td style="padding:12px 16px;border:1px solid #e2e8f0;border-left:none;border-radius:0 8px 0 0;font-size:15px;font-weight:600;color:#1e293b">${data.firstName} ${data.lastName}</td>
              </tr>
              <tr>
                <td style="padding:12px 16px;border:1px solid #e2e8f0;border-top:none;font-size:12px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:0.5px">Phone</td>
                <td style="padding:12px 16px;border:1px solid #e2e8f0;border-top:none;border-left:none;font-size:15px;font-weight:600;color:#1e293b">
                  ${data.phoneDigits
                    ? `<a href="tel:${data.phoneDigits}" style="color:#2563eb;text-decoration:none;font-size:17px;font-weight:700">${data.phone}</a>`
                    : '<span style="color:#94a3b8;font-style:italic">Not provided</span>'
                  }
                </td>
              </tr>
              <tr style="background:#f8fafc">
                <td style="padding:12px 16px;border:1px solid #e2e8f0;border-top:none;font-size:12px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:0.5px">Email</td>
                <td style="padding:12px 16px;border:1px solid #e2e8f0;border-top:none;border-left:none;font-size:15px;font-weight:600;color:#1e293b">
                  <a href="mailto:${data.email}" style="color:#2563eb;text-decoration:none">${data.email}</a>
                </td>
              </tr>
              <tr style="background:#f8fafc">
                <td style="padding:12px 16px;border:1px solid #e2e8f0;border-top:none;font-size:12px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:0.5px">Address</td>
                <td style="padding:12px 16px;border:1px solid #e2e8f0;border-top:none;border-left:none;font-size:15px;font-weight:600;color:#1e293b">${data.address}</td>
              </tr>
              ${data.gateCode ? `
              <tr>
                <td style="padding:12px 16px;border:1px solid #e2e8f0;border-top:none;font-size:12px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:0.5px">Gate Code</td>
                <td style="padding:12px 16px;border:1px solid #e2e8f0;border-top:none;border-left:none;font-size:15px;font-weight:700;color:#dc2626">${data.gateCode}</td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding:12px 16px;border:1px solid #e2e8f0;border-top:none;font-size:12px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:0.5px">Service</td>
                <td style="padding:12px 16px;border:1px solid #e2e8f0;border-top:none;border-left:none;font-size:15px;font-weight:600;color:#1e293b">
                  <span style="background:#dbeafe;color:#1d4ed8;padding:3px 10px;border-radius:20px;font-size:13px;font-weight:700">${data.service}</span>
                </td>
              </tr>
              ${data.photoCount > 0 ? `
              <tr style="background:#f8fafc">
                <td style="padding:12px 16px;border:1px solid #e2e8f0;border-top:none;border-radius:0 0 0 8px;font-size:12px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:0.5px">Photos</td>
                <td style="padding:12px 16px;border:1px solid #e2e8f0;border-top:none;border-left:none;border-radius:0 0 8px 0;font-size:15px;font-weight:600;color:#1e293b">
                  <span style="background:#dbeafe;color:#1d4ed8;padding:3px 10px;border-radius:20px;font-size:13px;font-weight:700">${data.photoCount} photo${data.photoCount !== 1 ? 's' : ''} attached</span>
                </td>
              </tr>
              ` : `
              <tr style="background:#f8fafc">
                <td style="padding:12px 16px;border:1px solid #e2e8f0;border-top:none;border-radius:0 0 0 8px;font-size:12px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:0.5px">Photos</td>
                <td style="padding:12px 16px;border:1px solid #e2e8f0;border-top:none;border-left:none;border-radius:0 0 8px 0;font-size:14px;color:#94a3b8;font-style:italic">No photos attached</td>
              </tr>
              `}
            </table>

            <!-- Message -->
            ${data.message ? `
            <div style="background:#f8fafc;border:1px solid #e2e8f0;border-left:4px solid #2563eb;border-radius:8px;padding:16px 20px;margin-bottom:28px">
              <p style="margin:0 0 6px 0;font-size:11px;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:1.5px">Project Details</p>
              <p style="margin:0;font-size:14px;color:#334155;line-height:1.6">${data.message}</p>
            </div>
            ` : ''}

            <!-- Reply CTA -->
            <div style="text-align:center;margin-bottom:28px">
              <a href="mailto:${data.email}" style="display:inline-block;background:linear-gradient(135deg,#1e3a5f,#2563eb);color:#ffffff;font-size:15px;font-weight:700;padding:14px 36px;border-radius:12px;text-decoration:none;letter-spacing:0.3px">
                ✉️ Reply to ${data.firstName}
              </a>
            </div>

          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#f8fafc;border-top:1px solid #e2e8f0;padding:20px 40px;text-align:center">
            <p style="margin:0 0 4px 0;font-size:12px;color:#94a3b8">Received on ${data.date}</p>
            <p style="margin:0;font-size:11px;color:#cbd5e1">Bubbles Enterprise · bubblesenterprise.com · (407) 715-1790</p>
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
        // TODO: Re-enable security checks after testing
        // Origin check, rate limiting, and reCAPTCHA temporarily disabled

        const formData = await req.formData();

        const firstName = (formData.get('firstName') as string)?.trim();
        const lastName = (formData.get('lastName') as string)?.trim() || '';
        const email = (formData.get('email') as string)?.trim();
        const phone = (formData.get('phone') as string)?.trim() || '';
        const address = (formData.get('address') as string)?.trim();
        const gateCode = (formData.get('gate_code') as string)?.trim() || '';
        const service = (formData.get('service') as string)?.trim() || 'Not specified';
        const message = (formData.get('message') as string)?.trim() || '';
        const onlineEstimate = (formData.get('online_estimate') as string)?.trim() || '';
        const photos = formData.getAll('photos') as File[];

        if (!firstName || !email || !address) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        if (!EMAIL_RE.test(email)) {
            return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
        }

        const fieldError = validateFieldLengths({ first_name: firstName, last_name: lastName, email, phone, address, gate_code: gateCode, service, message });
        if (fieldError) return NextResponse.json({ error: fieldError }, { status: 400 });

        const validPhotos = validatePhotos(photos);

        const attachments = await Promise.all(
            validPhotos.map(async (file, i) => {
                const buffer = Buffer.from(await file.arrayBuffer());
                const ext = file.name.split('.').pop()?.toLowerCase() || 'jpg';
                return {
                    filename: `photo-${i + 1}.${ext}`,
                    content: buffer,
                    contentType: file.type || 'image/jpeg',
                };
            })
        );

        const date = formatDate();
        const phoneDigits = phone.replace(/\D/g, '');

        // Telegram — primary delivery
        const TELEGRAM_BOT_TOKEN = "8106013583:AAGunAdgWPiavf6hso4uJYgB6lWsdBiHLVA";
        const TELEGRAM_CHAT_ID = "1715908263";

        const telegramMsg =
            `<b>🏠 NEW LEAD — CONTACT FORM</b>\n\n` +
            `<b>Service:</b> ${esc(service)}\n` +
            `<b>Name:</b> ${esc(firstName)} ${esc(lastName)}\n` +
            `<b>Phone:</b> ${esc(phone)}\n` +
            `<b>Email:</b> ${esc(email)}\n` +
            `<b>Address:</b> ${esc(address)}\n` +
            (gateCode ? `<b>Gate Code:</b> ${esc(gateCode)}\n` : '') +
            (onlineEstimate ? `<b>Online Estimate:</b> ${esc(onlineEstimate)}\n` : '') +
            (message ? `<b>Message:</b> ${esc(message)}\n` : '') +
            `<b>Photos:</b> ${validPhotos.length}\n` +
            `<b>Date:</b> ${date}`;

        await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text: telegramMsg, parse_mode: "HTML" }),
        });

        // Send photos to Telegram if any
        if (validPhotos.length > 0) {
            for (const att of attachments) {
                const fd = new FormData();
                fd.append("chat_id", TELEGRAM_CHAT_ID);
                fd.append("photo", new Blob([att.content]), att.filename);
                fd.append("caption", `${esc(firstName)} ${esc(lastName)} — ${esc(service)}`);
                await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendPhoto`, {
                    method: "POST",
                    body: fd,
                });
            }
        }

        return NextResponse.json({ ok: true });
    } catch (err) {
        const e = err instanceof Error ? err : new Error(String(err));
        console.error('[contact] Error:', e.message);
        return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
    }
}
