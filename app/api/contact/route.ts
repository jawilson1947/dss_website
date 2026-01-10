import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

type Payload = {
    name: string;
    email: string;
    message: string;
    company?: string;
    phone?: string;
    website?: string;
    // simple spam trap:
    honey?: string; // should be empty
};

function isValidEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
    try {
        const apiKey = process.env.SENDGRID_API_KEY;
        const toEmail = process.env.CONTACT_TO_EMAIL || "info@digitalsupportsystems.com";
        const fromEmail = process.env.CONTACT_FROM_EMAIL;

        if (!apiKey) {
            return NextResponse.json({ ok: false, error: "Missing SENDGRID_API_KEY" }, { status: 500 });
        }
        if (!fromEmail) {
            return NextResponse.json({ ok: false, error: "Missing CONTACT_FROM_EMAIL" }, { status: 500 });
        }

        const body = (await req.json()) as Payload;

        // Honeypot: if filled, silently accept but do nothing (likely bot)
        if (body.honey && body.honey.trim().length > 0) {
            return NextResponse.json({ ok: true }, { status: 200 });
        }

        const name = (body.name || "").trim();
        const email = (body.email || "").trim();
        const message = (body.message || "").trim();

        if (!name || !email || !message) {
            return NextResponse.json({ ok: false, error: "Name, email, and message are required." }, { status: 400 });
        }
        if (!isValidEmail(email)) {
            return NextResponse.json({ ok: false, error: "Please provide a valid email address." }, { status: 400 });
        }
        if (message.length < 10) {
            return NextResponse.json({ ok: false, error: "Message is too short." }, { status: 400 });
        }

        sgMail.setApiKey(apiKey);

        const subject = `DSS Website Inquiry from ${name}`;
        const text = [
            `New website inquiry`,
            ``,
            `Name: ${name}`,
            `Email: ${email}`,
            body.company ? `Company: ${body.company}` : null,
            body.phone ? `Phone: ${body.phone}` : null,
            body.website ? `Website: ${body.website}` : null,
            ``,
            `Message:`,
            message,
        ]
            .filter(Boolean)
            .join("\n");

        // Nice HTML version (simple, safe)
        const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.5;">
        <h2>New website inquiry</h2>
        <p><b>Name:</b> ${escapeHtml(name)}</p>
        <p><b>Email:</b> ${escapeHtml(email)}</p>
        ${body.company ? `<p><b>Company:</b> ${escapeHtml(body.company)}</p>` : ""}
        ${body.phone ? `<p><b>Phone:</b> ${escapeHtml(body.phone)}</p>` : ""}
        ${body.website ? `<p><b>Website:</b> ${escapeHtml(body.website)}</p>` : ""}
        <hr/>
        <p><b>Message:</b></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
      </div>
    `;

        await sgMail.send({
            to: toEmail,
            from: fromEmail,
            replyTo: email, // so you can hit "reply" to respond to the sender
            subject,
            text,
            html,
        });

        return NextResponse.json({ ok: true }, { status: 200 });
    } catch (err: any) {
        console.error("Contact form error:", err?.response?.body || err);
        return NextResponse.json({ ok: false, error: "Failed to send message." }, { status: 500 });
    }
}

function escapeHtml(input: string) {
    return input
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}
