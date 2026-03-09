import { NextRequest, NextResponse } from 'next/server';
import { isRateLimited, getClientIp, esc, createMailTransport, formatDate, checkOrigin, validatePhotos, validateFieldLengths } from '@/lib/api-utils';

// ── HTML email template ──
function buildEmailHtml(data: {
    name: string;
    phone: string;
    phoneDigits: string;
    address: string;
    description: string;
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
              📸 New Repair Photo Quote Request
            </p>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:36px 40px">

            <!-- Info table -->
            <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin-bottom:28px">
              <tr>
                <td colspan="2" style="padding-bottom:12px">
                  <p style="margin:0;font-size:11px;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:1.5px">Customer Information</p>
                </td>
              </tr>
              <tr style="background:#f8fafc">
                <td style="padding:12px 16px;border:1px solid #e2e8f0;border-radius:8px 0 0 0;font-size:12px;font-weight:700;color:#64748b;width:38%;text-transform:uppercase;letter-spacing:0.5px">Name</td>
                <td style="padding:12px 16px;border:1px solid #e2e8f0;border-left:none;border-radius:0 8px 0 0;font-size:15px;font-weight:600;color:#1e293b">${data.name}</td>
              </tr>
              <tr>
                <td style="padding:12px 16px;border:1px solid #e2e8f0;border-top:none;font-size:12px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:0.5px">Phone</td>
                <td style="padding:12px 16px;border:1px solid #e2e8f0;border-top:none;border-left:none;font-size:15px;font-weight:600;color:#1e293b">
                  <a href="tel:${data.phoneDigits}" style="color:#2563eb;text-decoration:none">${data.phone}</a>
                </td>
              </tr>
              <tr style="background:#f8fafc">
                <td style="padding:12px 16px;border:1px solid #e2e8f0;border-top:none;font-size:12px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:0.5px">Address</td>
                <td style="padding:12px 16px;border:1px solid #e2e8f0;border-top:none;border-left:none;font-size:15px;font-weight:600;color:#1e293b">${data.address}</td>
              </tr>
              <tr>
                <td style="padding:12px 16px;border:1px solid #e2e8f0;border-top:none;border-radius:0 0 0 8px;font-size:12px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:0.5px">Photos</td>
                <td style="padding:12px 16px;border:1px solid #e2e8f0;border-top:none;border-left:none;border-radius:0 0 8px 0;font-size:15px;font-weight:600;color:#1e293b">
                  <span style="background:#dbeafe;color:#1d4ed8;padding:3px 10px;border-radius:20px;font-size:13px;font-weight:700">${data.photoCount} photo${data.photoCount !== 1 ? 's' : ''} attached</span>
                </td>
              </tr>
            </table>

            <!-- Description -->
            ${data.description ? `
            <div style="background:#f8fafc;border:1px solid #e2e8f0;border-left:4px solid #2563eb;border-radius:8px;padding:16px 20px;margin-bottom:28px">
              <p style="margin:0 0 6px 0;font-size:11px;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:1.5px">Description</p>
              <p style="margin:0;font-size:14px;color:#334155;line-height:1.6">${data.description}</p>
            </div>
            ` : ''}

            <!-- CTA -->
            <div style="text-align:center;margin-bottom:28px">
              <a href="tel:4077151790" style="display:inline-block;background:linear-gradient(135deg,#1e3a5f,#2563eb);color:#ffffff;font-size:15px;font-weight:700;padding:14px 36px;border-radius:12px;text-decoration:none;letter-spacing:0.3px">
                📞 Call Customer Now — (407) 715-1790
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
        const originBlock = checkOrigin(req);
        if (originBlock) return originBlock;

        const ip = getClientIp(req);
        if (isRateLimited(ip)) {
            return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
        }

        const formData = await req.formData();

        const name = (formData.get('name') as string)?.trim();
        const phone = (formData.get('phone') as string)?.trim();
        const address = (formData.get('address') as string)?.trim();
        const description = (formData.get('description') as string)?.trim() || '';
        const photos = formData.getAll('photos') as File[];

        if (!name || !phone || !address) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const fieldError = validateFieldLengths({ name, phone, address, description });
        if (fieldError) return NextResponse.json({ error: fieldError }, { status: 400 });

        const validPhotos = validatePhotos(photos);

        const attachments = await Promise.all(
            validPhotos.map(async (file, i) => {
                const buffer = Buffer.from(await file.arrayBuffer());
                const ext = file.name.split('.').pop()?.toLowerCase() || 'jpg';
                return {
                    filename: `repair-photo-${i + 1}.${ext}`,
                    content: buffer,
                    contentType: file.type || 'image/jpeg',
                };
            })
        );

        const transporter = createMailTransport();
        const date = formatDate();
        const phoneDigits = phone.replace(/\D/g, '');

        await transporter.sendMail({
            from: `"Bubbles Enterprise Site" <${process.env.SMTP_USER}>`,
            to: process.env.SMTP_TO || 'quote@bubblesenterprise.com',
            subject: `📸 Repair Quote — ${esc(name)} · ${validPhotos.length} photo${validPhotos.length !== 1 ? 's' : ''}`,
            html: buildEmailHtml({ name: esc(name), phone: esc(phone), phoneDigits, address: esc(address), description: esc(description), photoCount: validPhotos.length, date }),
            attachments,
        });

        return NextResponse.json({ ok: true });
    } catch (err) {
        console.error('[repair-quote]', err);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}
