import nodemailer from 'nodemailer';

// ── Input sanitisation ────────────────────────────────────────────────────────

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function validateEmail(email) {
  // RFC-5321 practical limit + no newlines (header injection guard)
  return /^[^\s@\r\n]+@[^\s@\r\n]+\.[^\s@\r\n]+$/.test(email);
}

// Strip newlines from any value used in a mail header to prevent header injection
function sanitizeHeader(value) {
  return String(value).replace(/[\r\n]+/g, ' ').trim();
}

// ── In-process rate limiting ──────────────────────────────────────────────────
// NOTE: This is per-instance (not shared across serverless replicas).
// For production hardening, replace with an edge KV store (e.g. Vercel KV).

const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 5;
// Cap map size to prevent unbounded memory growth on long-running instances
const RATE_LIMIT_MAP_MAX_SIZE = 10_000;

function isRateLimited(ip) {
  const now = Date.now();

  // Evict oldest entry when the map is full
  if (rateLimitMap.size >= RATE_LIMIT_MAP_MAX_SIZE) {
    const oldestKey = rateLimitMap.keys().next().value;
    rateLimitMap.delete(oldestKey);
  }

  const timestamps = rateLimitMap.get(ip) || [];
  const recent = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);

  if (recent.length >= RATE_LIMIT_MAX_REQUESTS) return true;

  recent.push(now);
  rateLimitMap.set(ip, recent);
  return false;
}

// ── Route handler ─────────────────────────────────────────────────────────────

export async function POST(request) {
  try {
    // 1. Enforce JSON content-type to reject unexpected payloads
    const contentType = request.headers.get('content-type') || '';
    if (!contentType.includes('application/json')) {
      return Response.json(
        { error: 'Unsupported content type' },
        { status: 415 }
      );
    }

    // 2. IP-based rate limiting
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      'unknown';
    if (isRateLimited(ip)) {
      return Response.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // 3. Parse body safely
    let body;
    try {
      body = await request.json();
    } catch {
      return Response.json({ error: 'Invalid JSON body' }, { status: 400 });
    }

    const { user_name, user_email, subject, message } = body;

    // 4. Presence check
    if (!user_name || !user_email || !subject || !message) {
      return Response.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // 5. Type check — all fields must be strings
    if (
      typeof user_name !== 'string' ||
      typeof user_email !== 'string' ||
      typeof subject !== 'string' ||
      typeof message !== 'string'
    ) {
      return Response.json(
        { error: 'All fields must be strings' },
        { status: 400 }
      );
    }

    // 6. Length limits
    if (
      user_name.length > 100 ||
      user_email.length > 254 ||
      subject.length > 200 ||
      message.length > 5000
    ) {
      return Response.json(
        { error: 'One or more fields exceed the maximum allowed length' },
        { status: 400 }
      );
    }

    // 7. Email format validation
    if (!validateEmail(user_email)) {
      return Response.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // 8. Sanitise for HTML email body
    const safeName = escapeHtml(user_name);
    const safeEmail = escapeHtml(user_email);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message);

    // 9. Sanitise headers separately to prevent email header injection
    //    replyTo uses the raw address but stripped of any newlines
    const safeReplyTo = sanitizeHeader(user_email);
    const safeSubjectHeader = sanitizeHeader(subject);

    // 10. Send email
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: safeReplyTo,
      subject: `Portfolio Contact: ${safeSubjectHeader}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8A2BE2;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #333;">Name</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee; color: #555;">${safeName}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #333;">Email</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee; color: #555;">${safeEmail}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #333;">Subject</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee; color: #555;">${safeSubject}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 15px; background: #f5f5f5; border-radius: 8px;">
            <h3 style="color: #333; margin-top: 0;">Message:</h3>
            <p style="color: #555; line-height: 1.6; white-space: pre-wrap;">${safeMessage}</p>
          </div>
          <hr style="margin-top: 30px; border: none; border-top: 1px solid #eee;" />
          <p style="color: #999; font-size: 12px;">This email was sent from your portfolio website contact form.</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return Response.json(
      { message: 'Message sent successfully!' },
      { status: 200 }
    );
  } catch {
    // Do NOT log the error object — it may contain SMTP credentials or user data
    console.error('[contact] Email dispatch failed');
    return Response.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}
