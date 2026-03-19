import { NextRequest, NextResponse } from "next/server";
import {
  isRateLimited,
  getClientIp,
  esc,
  createMailTransport,
  formatDate,
  checkOrigin,
  validateFieldLengths,
} from "@/lib/api-utils";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const TELEGRAM_BOT_TOKEN = "8106013583:AAGunAdgWPiavf6hso4uJYgB6lWsdBiHLVA";
const TELEGRAM_CHAT_ID = "1715908263";

// ── Telegram helpers ────────────────────────────────────────────
async function sendTelegramMessage(text: string): Promise<void> {
  await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text, parse_mode: "HTML" }),
  });
}

async function sendTelegramPhotos(photos: { arrayBuf: ArrayBuffer; filename: string }[], caption?: string): Promise<void> {
  if (photos.length === 0) return;

  if (photos.length === 1) {
    const fd = new FormData();
    fd.append("chat_id", TELEGRAM_CHAT_ID);
    fd.append("photo", new Blob([photos[0].arrayBuf]), photos[0].filename);
    if (caption) fd.append("caption", caption);
    await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendPhoto`, {
      method: "POST",
      body: fd,
    });
    return;
  }

  // Multiple photos: use sendMediaGroup
  const fd = new FormData();
  fd.append("chat_id", TELEGRAM_CHAT_ID);

  const media = photos.map((p, i) => ({
    type: "photo" as const,
    media: `attach://photo${i}`,
    ...(i === 0 && caption ? { caption } : {}),
  }));
  fd.append("media", JSON.stringify(media));
  photos.forEach((p, i) => {
    fd.append(`photo${i}`, new Blob([p.arrayBuf]), p.filename);
  });

  await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMediaGroup`, {
    method: "POST",
    body: fd,
  });
}

// ── Email builder ───────────────────────────────────────────────
function buildEmailHtml(d: {
  type: string;
  subtype: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  photoCount: number;
  date: string;
}) {
  const typeLabel = d.type === "repair" ? "Repair" : "Installation";
  const subtypeMap: Record<string, string> = {
    soffit: "Soffit",
    fascia: "Fascia",
    "soffit-and-fascia": "Soffit & Fascia",
    "new-construction": "New Construction",
    renovation: "Renovation",
  };
  const subtypeLabel = subtypeMap[d.subtype] ?? d.subtype;

  return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f7fb;font-family:Arial,Helvetica,sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f7fb;padding:32px 16px">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08)">
        <tr>
          <td style="background:linear-gradient(135deg,#1e3a5f 0%,#2563eb 100%);padding:28px 40px;text-align:center">
            <p style="margin:0 0 4px 0;font-size:13px;color:#fbbf24;font-weight:700;text-transform:uppercase;letter-spacing:2px">MOBILE LEAD</p>
            <p style="margin:0;font-size:24px;font-weight:900;color:#fff">&#128241; ${typeLabel} - ${subtypeLabel}</p>
          </td>
        </tr>
        <tr>
          <td style="padding:32px 40px">
            <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin-bottom:24px">
              <tr style="background:#f8fafc">
                <td style="padding:12px 16px;border:1px solid #e2e8f0;font-size:12px;font-weight:700;color:#64748b;width:35%;text-transform:uppercase">Name</td>
                <td style="padding:12px 16px;border:1px solid #e2e8f0;border-left:none;font-size:15px;font-weight:600;color:#1e293b">${d.name}</td>
              </tr>
              <tr>
                <td style="padding:12px 16px;border:1px solid #e2e8f0;border-top:none;font-size:12px;font-weight:700;color:#64748b;text-transform:uppercase">Phone</td>
                <td style="padding:12px 16px;border:1px solid #e2e8f0;border-top:none;border-left:none;font-size:15px;font-weight:600;color:#1e293b">
                  <a href="tel:${d.phone.replace(/\D/g, "")}" style="color:#2563eb;text-decoration:none;font-weight:700">${d.phone}</a>
                </td>
              </tr>
              <tr style="background:#f8fafc">
                <td style="padding:12px 16px;border:1px solid #e2e8f0;border-top:none;font-size:12px;font-weight:700;color:#64748b;text-transform:uppercase">Email</td>
                <td style="padding:12px 16px;border:1px solid #e2e8f0;border-top:none;border-left:none;font-size:15px;font-weight:600;color:#1e293b">
                  <a href="mailto:${d.email}" style="color:#2563eb;text-decoration:none">${d.email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding:12px 16px;border:1px solid #e2e8f0;border-top:none;font-size:12px;font-weight:700;color:#64748b;text-transform:uppercase">Address</td>
                <td style="padding:12px 16px;border:1px solid #e2e8f0;border-top:none;border-left:none;font-size:15px;font-weight:600;color:#1e293b">${d.address}</td>
              </tr>
              <tr style="background:#f8fafc">
                <td style="padding:12px 16px;border:1px solid #e2e8f0;border-top:none;font-size:12px;font-weight:700;color:#64748b;text-transform:uppercase">Service</td>
                <td style="padding:12px 16px;border:1px solid #e2e8f0;border-top:none;border-left:none;font-size:15px;font-weight:600;color:#1e293b">
                  <span style="background:#dbeafe;color:#1d4ed8;padding:3px 10px;border-radius:20px;font-size:13px;font-weight:700">${typeLabel} - ${subtypeLabel}</span>
                </td>
              </tr>
              <tr>
                <td style="padding:12px 16px;border:1px solid #e2e8f0;border-top:none;font-size:12px;font-weight:700;color:#64748b;text-transform:uppercase">Photos</td>
                <td style="padding:12px 16px;border:1px solid #e2e8f0;border-top:none;border-left:none;font-size:15px;font-weight:600;color:#1e293b">
                  <span style="background:#dcfce7;color:#166534;padding:3px 10px;border-radius:20px;font-size:13px;font-weight:700">${d.photoCount} photo${d.photoCount !== 1 ? "s" : ""} attached</span>
                </td>
              </tr>
            </table>
            <div style="text-align:center;margin-bottom:20px">
              <a href="mailto:${d.email}" style="display:inline-block;background:linear-gradient(135deg,#1e3a5f,#2563eb);color:#fff;font-size:15px;font-weight:700;padding:14px 36px;border-radius:12px;text-decoration:none">Reply to ${d.name}</a>
            </div>
          </td>
        </tr>
        <tr>
          <td style="background:#f8fafc;border-top:1px solid #e2e8f0;padding:16px 40px;text-align:center">
            <p style="margin:0;font-size:12px;color:#94a3b8">Received on ${d.date} via Mobile Form</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

// ── Main handler ────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const originBlock = checkOrigin(req);
    if (originBlock) return originBlock;

    const ip = getClientIp(req);
    if (isRateLimited(ip)) {
      return NextResponse.json({ error: "Too many requests." }, { status: 429 });
    }

    const formData = await req.formData();
    const recaptchaToken = (formData.get("recaptchaToken") as string) ?? "";

    // Validate reCAPTCHA
    if (recaptchaToken) {
      try {
        const recaptchaRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
        });
        const recaptchaData = (await recaptchaRes.json()) as { success?: boolean; score?: number };
        if (!recaptchaData.success || (recaptchaData.score ?? 0) < 0.5) {
          return NextResponse.json({ error: "Bot verification failed." }, { status: 403 });
        }
      } catch {
        return NextResponse.json({ error: "Verification error." }, { status: 500 });
      }
    }

    const type = (formData.get("type") as string)?.trim() ?? "";
    const subtype = (formData.get("subtype") as string)?.trim() ?? "";
    const name = (formData.get("name") as string)?.trim() ?? "";
    const email = (formData.get("email") as string)?.trim() ?? "";
    const phone = (formData.get("phone") as string)?.trim() ?? "";
    const address = (formData.get("address") as string)?.trim() ?? "";
    const photos = formData.getAll("photos") as File[];

    // Validate required fields
    if (!name || !email || !phone || !address) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }
    if (!EMAIL_RE.test(email)) {
      return NextResponse.json({ error: "Invalid email." }, { status: 400 });
    }

    const fieldError = validateFieldLengths({ name, email, phone, address });
    if (fieldError) return NextResponse.json({ error: fieldError }, { status: 400 });

    // Process photos (filter valid, max 5, max 10MB each)
    const ALLOWED_MIME = ["image/jpeg", "image/png", "image/webp", "image/heic", "image/heif", "video/mp4", "video/quicktime"];
    const validPhotos = photos
      .filter((f) => f.size > 0 && f.size <= 10 * 1024 * 1024 && ALLOWED_MIME.includes(f.type))
      .slice(0, 5);

    const photoBuffers = await Promise.all(
      validPhotos.map(async (file, i) => {
        const arrayBuf = await file.arrayBuffer();
        const ext = file.name.split(".").pop()?.toLowerCase() || "jpg";
        return { arrayBuf, filename: `photo-${i + 1}.${ext}`, contentType: file.type || "image/jpeg" };
      })
    );

    const date = formatDate();
    const subtypeMap: Record<string, string> = {
      soffit: "Soffit",
      fascia: "Fascia",
      "soffit-and-fascia": "Soffit & Fascia",
      "new-construction": "New Construction",
      renovation: "Renovation",
    };
    const typeLabel = type === "repair" ? "Repair" : "Installation";
    const subtypeLabel = subtypeMap[subtype] ?? subtype;

    // Send email and Telegram in parallel
    const emailPromise = (async () => {
      const transporter = createMailTransport();
      await transporter.sendMail({
        from: `"Bubbles Mobile Lead" <${process.env.SMTP_USER}>`,
        to: process.env.SMTP_TO || "quote@bubblesenterprise.com",
        replyTo: email,
        subject: `📱 [Mobile Lead] ${typeLabel} - ${subtypeLabel} - ${esc(name)}`,
        html: buildEmailHtml({
          type,
          subtype,
          name: esc(name),
          email: esc(email),
          phone: esc(phone),
          address: esc(address),
          photoCount: validPhotos.length,
          date,
        }),
        attachments: photoBuffers.map((p) => ({
          filename: p.filename,
          content: Buffer.from(p.arrayBuf),
          contentType: p.contentType,
        })),
      });
    })();

    const telegramPromise = (async () => {
      const msg =
        `<b>📱 MOBILE LEAD</b>\n\n` +
        `<b>Service:</b> ${typeLabel} - ${subtypeLabel}\n` +
        `<b>Name:</b> ${esc(name)}\n` +
        `<b>Phone:</b> ${esc(phone)}\n` +
        `<b>Email:</b> ${esc(email)}\n` +
        `<b>Address:</b> ${esc(address)}\n` +
        `<b>Photos:</b> ${validPhotos.length}\n` +
        `<b>Date:</b> ${date}`;

      await sendTelegramMessage(msg);

      // Send photos to Telegram
      const imageBuffers = photoBuffers
        .filter((p) => p.contentType.startsWith("image/"))
        .map((p) => ({ arrayBuf: p.arrayBuf, filename: p.filename }));
      if (imageBuffers.length > 0) {
        await sendTelegramPhotos(imageBuffers, `${typeLabel} - ${subtypeLabel} - ${name}`);
      }
    })();

    await Promise.all([emailPromise, telegramPromise]);

    return NextResponse.json({ success: true });
  } catch (err) {
    const e = err instanceof Error ? err : new Error(String(err));
    console.error("[mobile-lead] Error:", e.message, e.stack);
    return NextResponse.json({ error: `Failed: ${e.message}` }, { status: 500 });
  }
}
