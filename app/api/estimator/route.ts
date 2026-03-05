import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

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
    )}</td><td style="padding:4px 0;font-weight:600">${escapeHtml(display)}</td></tr>`;
}

function str(fd: FormData, key: string) {
    return ((fd.get(key) as string) ?? "").trim();
}

function num(fd: FormData, key: string) {
    return parseInt((fd.get(key) as string) ?? "0") || 0;
}

function bool(fd: FormData, key: string) {
    return (fd.get(key) as string) === "true";
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

        // Parse multipart form data
        const fd = await req.formData();

        const contactName = str(fd, "contactName");
        const contactEmail = str(fd, "contactEmail");

        if (!contactName || !contactEmail) {
            return NextResponse.json(
                { ok: false, error: "Name and email are required." },
                { status: 400 }
            );
        }

        const contactPhone = str(fd, "contactPhone");
        const contactCompany = str(fd, "contactCompany");
        const extSingle = num(fd, "extSingle");
        const extDouble = num(fd, "extDouble");
        const extAutomatic = num(fd, "extAutomatic");
        const intSingle = num(fd, "intSingle");
        const intDouble = num(fd, "intDouble");
        const intAutomatic = num(fd, "intAutomatic");
        const motorizedGates = num(fd, "motorizedGates");
        const elevators = num(fd, "elevators");
        const otherSpecialized = str(fd, "otherSpecialized");
        const totalDoors = num(fd, "totalDoors");
        const totalDevices = num(fd, "totalDevices");
        const addCloudLicense = bool(fd, "addCloudLicense");
        const maintenancePlan = str(fd, "maintenancePlan");
        const needsMagLocks = bool(fd, "needsMagLocks");
        const needsMotionSensor = bool(fd, "needsMotionSensor");
        const needsRexDevice = bool(fd, "needsRexDevice");

        // ── Floor plan attachment (optional) ──────────────────────────────
        const floorPlanFile = fd.get("floorPlan") as File | null;
        let attachments: sgMail.MailDataRequired["attachments"] = [];

        if (floorPlanFile && floorPlanFile.size > 0) {
            const arrayBuffer = await floorPlanFile.arrayBuffer();
            const base64Content = Buffer.from(arrayBuffer).toString("base64");
            attachments = [
                {
                    content: base64Content,
                    filename: floorPlanFile.name,
                    type: floorPlanFile.type || "application/octet-stream",
                    disposition: "attachment",
                },
            ];
        }

        sgMail.setApiKey(apiKey);

        const html = `
<div style="font-family:Arial,sans-serif;max-width:640px;line-height:1.6;color:#1e293b">
  <h2 style="margin-bottom:4px">Access Control Project Estimate Request</h2>
  <p style="margin-top:0;color:#64748b">Submitted via the DSS Project Estimator</p>

  <h3 style="border-bottom:1px solid #e2e8f0;padding-bottom:4px">Contact Information</h3>
  <table><tbody>
    ${row("Name", contactName)}
    ${row("Email", contactEmail)}
    ${contactPhone ? row("Phone", contactPhone) : ""}
    ${contactCompany ? row("Company", contactCompany) : ""}
  </tbody></table>

  <h3 style="border-bottom:1px solid #e2e8f0;padding-bottom:4px;margin-top:20px">1. External Doors</h3>
  <table><tbody>
    ${row("Single doors", extSingle)}
    ${row("Double doors", extDouble)}
    ${row("Automatic doors", extAutomatic)}
  </tbody></table>

  <h3 style="border-bottom:1px solid #e2e8f0;padding-bottom:4px;margin-top:20px">2. Internal Doors</h3>
  <table><tbody>
    ${row("Single doors", intSingle)}
    ${row("Double doors", intDouble)}
    ${row("Automatic doors", intAutomatic)}
  </tbody></table>

  <h3 style="border-bottom:1px solid #e2e8f0;padding-bottom:4px;margin-top:20px">3. Specialized Access</h3>
  <table><tbody>
    ${row("Motorized gates", motorizedGates)}
    ${row("Elevators", elevators)}
    ${otherSpecialized ? row("Other (description)", otherSpecialized) : ""}
  </tbody></table>

  <h3 style="border-bottom:1px solid #e2e8f0;padding-bottom:4px;margin-top:20px">4. Project Totals &amp; Licensing</h3>
  <table><tbody>
    ${row("Total doors", totalDoors)}
    ${row("Total devices (doors + specialized)", totalDevices)}
    ${row("ISONAS Pure Access Cloud License", addCloudLicense)}
  </tbody></table>

  <h3 style="border-bottom:1px solid #e2e8f0;padding-bottom:4px;margin-top:20px">5. Annual Maintenance Plan</h3>
  <table><tbody>
    ${row("Selected plan", maintenancePlan || "None")}
  </tbody></table>

  ${needsMagLocks || needsMotionSensor || needsRexDevice
                ? `<h3 style="border-bottom:1px solid #e2e8f0;padding-bottom:4px;margin-top:20px">6. Required Hardware Add-Ons (Double Doors)</h3>
  <table><tbody>
    ${row("Magnetic locks", needsMagLocks)}
    ${row("Motion sensors", needsMotionSensor)}
    ${row("REX devices", needsRexDevice)}
  </tbody></table>`
                : ""
            }

  ${floorPlanFile && floorPlanFile.size > 0
                ? `<p style="margin-top:20px;padding:12px 16px;background:#f1f5f9;border-radius:8px;font-size:14px">
          📎 <strong>Floor plan attached:</strong> ${escapeHtml(floorPlanFile.name)}
        </p>`
                : ""
            }
</div>`;

        const text = [
            "Access Control Project Estimate Request",
            "",
            `Name: ${contactName}`,
            `Email: ${contactEmail}`,
            contactPhone ? `Phone: ${contactPhone}` : null,
            contactCompany ? `Company: ${contactCompany}` : null,
            "",
            "--- External Doors ---",
            `Single: ${extSingle}  Double: ${extDouble}  Automatic: ${extAutomatic}`,
            "",
            "--- Internal Doors ---",
            `Single: ${intSingle}  Double: ${intDouble}  Automatic: ${intAutomatic}`,
            "",
            "--- Specialized Access ---",
            `Motorized gates: ${motorizedGates}  Elevators: ${elevators}`,
            otherSpecialized ? `Other: ${otherSpecialized}` : null,
            "",
            "--- Totals ---",
            `Total doors: ${totalDoors}  Total devices: ${totalDevices}`,
            `Cloud License: ${addCloudLicense ? "Yes" : "No"}`,
            `Maintenance plan: ${maintenancePlan || "None"}`,
            needsMagLocks || needsMotionSensor || needsRexDevice
                ? `Hardware add-ons: Mag Locks=${needsMagLocks}, Motion Sensors=${needsMotionSensor}, REX=${needsRexDevice}`
                : null,
            floorPlanFile && floorPlanFile.size > 0
                ? `Floor plan attached: ${floorPlanFile.name}`
                : null,
        ]
            .filter(Boolean)
            .join("\n");

        const msg: sgMail.MailDataRequired = {
            to: toEmail,
            from: fromEmail,
            replyTo: contactEmail,
            subject: `Access Control Estimate Request from ${contactName}`,
            text,
            html,
            ...(attachments.length > 0 ? { attachments } : {}),
        };

        await sgMail.send(msg);

        return NextResponse.json({ ok: true }, { status: 200 });
    } catch (err: any) {
        console.error("Estimator form error:", err?.response?.body || err);
        return NextResponse.json(
            { ok: false, error: "Failed to send estimate request." },
            { status: 500 }
        );
    }
}
