"use server";

import { resend, NOTIFICATION_EMAIL, FROM_EMAIL } from "@/lib/resend";

export interface ContactFormData {
  name: string;
  contact: string;
  reason: string;
  message: string;
}

export interface ActionResponse {
  success: boolean;
  error?: string;
  devMode?: boolean;
}

export async function submitContactForm(
  data: ContactFormData
): Promise<ActionResponse> {
  try {
    const { name, contact, reason, message } = data;

    if (!name?.trim() || !contact?.trim()) {
      return {
        success: false,
        error: "Please provide both your name and email or phone number.",
      };
    }

    if (!resend) {
      console.warn(
        "[Resend Dev Mode] RESEND_API_KEY is not configured. Simulating success for contact submission:",
        { name, contact, reason, message }
      );
      return { success: true, devMode: true };
    }

    const htmlContent = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
        <h2 style="color: #192838; margin-bottom: 8px;">New Contact Inquiry</h2>
        <p style="color: #64748b; font-size: 14px; margin-top: 0;">Received through D Safe Place website</p>
        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
        
        <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
          <tr>
            <td style="padding: 8px 0; color: #64748b; width: 140px; font-weight: 500;">Name:</td>
            <td style="padding: 8px 0; color: #192838; font-weight: 600;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-weight: 500;">Email or Phone:</td>
            <td style="padding: 8px 0; color: #192838;">${contact}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-weight: 500;">Reaching out about:</td>
            <td style="padding: 8px 0; color: #192838; font-weight: 600;">${reason}</td>
          </tr>
        </table>
        
        <div style="margin-top: 20px; padding: 16px; background-color: #f8fafc; border-radius: 8px; border-left: 4px solid #4e81bc;">
          <p style="margin: 0 0 6px 0; font-size: 13px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">Message</p>
          <p style="margin: 0; color: #1e293b; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message || "No message provided."}</p>
        </div>
      </div>
    `;

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: NOTIFICATION_EMAIL,
      replyTo: contact.includes("@") ? contact : undefined,
      subject: `[D Safe Place] Contact Inquiry: ${reason} from ${name}`,
      html: htmlContent,
    });

    if (error) {
      console.error("Resend error sending contact email:", error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err: unknown) {
    console.error("Error submitting contact form:", err);
    const message = err instanceof Error ? err.message : "Something went wrong. Please try again.";
    return { success: false, error: message };
  }
}
