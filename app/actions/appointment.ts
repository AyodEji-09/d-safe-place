"use server";

import { resend, NOTIFICATION_EMAIL, FROM_EMAIL } from "@/lib/resend";
import type { ActionResponse } from "./contact";

export interface AppointmentFormData {
  fullName: string;
  phoneNumber: string;
  program: string;
  preferredDate: string;
  notes: string;
}

export async function submitAppointmentForm(
  data: AppointmentFormData
): Promise<ActionResponse> {
  try {
    const { fullName, phoneNumber, program, preferredDate, notes } = data;

    if (!fullName?.trim() || !phoneNumber?.trim() || !preferredDate?.trim()) {
      return {
        success: false,
        error: "Please complete all required fields (Name, Phone number, and Preferred date).",
      };
    }

    if (!resend) {
      console.warn(
        "[Resend Dev Mode] RESEND_API_KEY is not configured. Simulating success for appointment booking:",
        { fullName, phoneNumber, program, preferredDate, notes }
      );
      return { success: true, devMode: true };
    }

    const htmlContent = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
        <h2 style="color: #192838; margin-bottom: 8px;">New Appointment Request</h2>
        <p style="color: #64748b; font-size: 14px; margin-top: 0;">Received through D Safe Place website</p>
        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
        
        <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
          <tr>
            <td style="padding: 8px 0; color: #64748b; width: 140px; font-weight: 500;">Full Name:</td>
            <td style="padding: 8px 0; color: #192838; font-weight: 600;">${fullName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-weight: 500;">Phone Number:</td>
            <td style="padding: 8px 0; color: #192838; font-weight: 600;">${phoneNumber}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-weight: 500;">Program:</td>
            <td style="padding: 8px 0; color: #4e81bc; font-weight: 600;">${program}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-weight: 500;">Preferred Date:</td>
            <td style="padding: 8px 0; color: #192838; font-weight: 600;">${preferredDate}</td>
          </tr>
        </table>
        
        <div style="margin-top: 20px; padding: 16px; background-color: #f8fafc; border-radius: 8px; border-left: 4px solid #4e81bc;">
          <p style="margin: 0 0 6px 0; font-size: 13px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">Notes</p>
          <p style="margin: 0; color: #1e293b; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${notes || "None provided."}</p>
        </div>
      </div>
    `;

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: NOTIFICATION_EMAIL,
      subject: `[D Safe Place] Appointment Request: ${program} - ${fullName}`,
      html: htmlContent,
    });

    if (error) {
      console.error("Resend error sending appointment email:", error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err: unknown) {
    console.error("Error submitting appointment form:", err);
    const message = err instanceof Error ? err.message : "Something went wrong. Please try again.";
    return { success: false, error: message };
  }
}
