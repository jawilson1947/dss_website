import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

export type EstimatorPayload = {
    // Contact info
    contactName: string;
    contactEmail: string;
    contactPhone?: string;
    contactCompany?: string;

    // 1. External Doors
    extSingle: number;
    extDouble: number;
    extAutomatic: number;

    // 2. Internal Doors
    intSingle: number;
    intDouble: number;
    intAutomatic: number;

    // 3. Specialized Access
    motorizedGates: number;
    elevators: number;
    otherSpecialized: string;

    // 4. Calculated totals
    totalDoors: number;
    totalDevices: number;

    // 4. License
    addCloudLicense: boolean;

    // 5. Maintenance plan
    maintenancePlan: string;

    // 6. Hardware add-ons (auto-required when any double doors > 0)
    needsMagLocks: boolean;
    needsMotionSensor: boolean;
    needsRexDevice: boolean;
};

function escapeHtml(s: string) {
    return s
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function row(label: string, value: string | number | boolean) {
    const display =
        typeof value === "boolean" ? (value ? "Yes" : "No") : String(value);
    return `<tr><td style="padding:4px 12px 4px 0;color:#64748b;white-space:nowrap">${escapeHtml(
        label
    )}</td><td style="padding:4px 0;font-weight:600">${escapeHtml(
        display
    )}</td></tr>`;
}

export async function POST(req: Request) {
    try {
        const apiKey = process.env.SENDGRID_API_KEY;
        const toEmail =
            process.env.CONTACT_TO_EMAIL || "info@digitalsupportsystems.com";
        const fromEmail = process.env.CONTACT_FROM_EMAIL;

        if (!apiKey)
            return NextResponse.json(
                { ok: false, error: "Missing SENDGRID_API_KEY" },
                { status: 500 }
            );
        if (!fromEmail)
            return NextResponse.json(
                { ok: false, error: "Missing CONTACT_FROM_EMAIL" },
                { status: 500 }
            );

        const d = (await req.json()) as EstimatorPayload;

        if (!d.contactName?.trim() || !d.contactEmail?.trim()) {
            return NextResponse.json(
                { ok: false, error: "Name and email are required." },
                { status: 400 }
            );
        }

        sgMail.setApiKey(apiKey);

        const html = `
<div style="font-family:Arial,sans-serif;max-width:640px;line-height:1.6;color:#1e293b">
  <h2 style="margin-bottom:4px">Access Control Project Estimate Request</h2>
  <p style="margin-top:0;color:#64748b">Submitted via the DSS Project Estimator</p>

  <h3 style="border-bottom:1px solid #e2e8f0;padding-bottom:4px">Contact Information</h3>
  <table><tbody>
    ${row("Name", d.contactName)}
    ${row("Email", d.contactEmail)}
    ${d.contactPhone ? row("Phone", d.contactPhone) : ""}
    ${d.contactCompany ? row("Company", d.contactCompany) : ""}
  </tbody></table>

  <h3 style="border-bottom:1px solid #e2e8f0;padding-bottom:4px;margin-top:20px">1. External Doors</h3>
  <table><tbody>
    ${row("Single doors", d.extSingle)}
    ${row("Double doors", d.extDouble)}
    ${row("Automatic doors", d.extAutomatic)}
  </tbody></table>

  <h3 style="border-bottom:1px solid #e2e8f0;padding-bottom:4px;margin-top:20px">2. Internal Doors</h3>
  <table><tbody>
    ${row("Single doors", d.intSingle)}
    ${row("Double doors", d.intDouble)}
    ${row("Automatic doors", d.intAutomatic)}
  </tbody></table>

  <h3 style="border-bottom:1px solid #e2e8f0;padding-bottom:4px;margin-top:20px">3. Specialized Access</h3>
  <table><tbody>
    ${row("Motorized gates", d.motorizedGates)}
    ${row("Elevators", d.elevators)}
    ${d.otherSpecialized ? row("Other (description)", d.otherSpecialized) : ""}
  </tbody></table>

  <h3 style="border-bottom:1px solid #e2e8f0;padding-bottom:4px;margin-top:20px">4. Project Totals &amp; Licensing</h3>
  <table><tbody>
    ${row("Total doors", d.totalDoors)}
    ${row("Total devices (doors + specialized)", d.totalDevices)}
    ${row("ISONAS Pure Access Cloud License", d.addCloudLicense)}
  </tbody></table>

  <h3 style="border-bottom:1px solid #e2e8f0;padding-bottom:4px;margin-top:20px">5. Annual Maintenance Plan</h3>
  <table><tbody>
    ${row("Selected plan", d.maintenancePlan || "None")}
  </tbody></table>

  ${d.needsMagLocks || d.needsMotionSensor || d.needsRexDevice
                ? `<h3 style="border-bottom:1px solid #e2e8f0;padding-bottom:4px;margin-top:20px">6. Required Hardware Add-Ons (Double Doors)</h3>
  <table><tbody>
    ${row("Magnetic locks", d.needsMagLocks)}
    ${row("Motion sensors", d.needsMotionSensor)}
    ${row("REX devices", d.needsRexDevice)}
  </tbody></table>`
                : ""
            }
</div>`;

        const text = [
            "Access Control Project Estimate Request",
            "",
            `Name: ${d.contactName}`,
            `Email: ${d.contactEmail}`,
            d.contactPhone ? `Phone: ${d.contactPhone}` : null,
            d.contactCompany ? `Company: ${d.contactCompany}` : null,
            "",
            "--- External Doors ---",
            `Single: ${d.extSingle}  Double: ${d.extDouble}  Automatic: ${d.extAutomatic}`,
            "",
            "--- Internal Doors ---",
            `Single: ${d.intSingle}  Double: ${d.intDouble}  Automatic: ${d.intAutomatic}`,
            "",
            "--- Specialized Access ---",
            `Motorized gates: ${d.motorizedGates}  Elevators: ${d.elevators}`,
            d.otherSpecialized ? `Other: ${d.otherSpecialized}` : null,
            "",
            "--- Totals ---",
            `Total doors: ${d.totalDoors}  Total devices: ${d.totalDevices}`,
            `Cloud License: ${d.addCloudLicense ? "Yes" : "No"}`,
            `Maintenance plan: ${d.maintenancePlan || "None"}`,
            d.needsMagLocks || d.needsMotionSensor || d.needsRexDevice
                ? `Hardware add-ons: Mag Locks=${d.needsMagLocks}, Motion Sensors=${d.needsMotionSensor}, REX=${d.needsRexDevice}`
                : null,
        ]
            .filter(Boolean)
            .join("\n");

        await sgMail.send({
            to: toEmail,
            from: fromEmail,
            replyTo: d.contactEmail,
            subject: `Access Control Estimate Request from ${d.contactName}`,
            text,
            html,
        });

        return NextResponse.json({ ok: true }, { status: 200 });
    } catch (err: any) {
        console.error("Estimator form error:", err?.response?.body || err);
        return NextResponse.json(
            { ok: false, error: "Failed to send estimate request." },
            { status: 500 }
        );
    }
}
