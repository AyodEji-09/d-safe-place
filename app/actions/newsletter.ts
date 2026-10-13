"use server";

import { resend, NOTIFICATION_EMAIL, FROM_EMAIL } from "@/lib/resend";
import type { ActionResponse } from "./contact";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function subscribeNewsletter(
  email: string
): Promise<ActionResponse> {
  try {
    const trimmedEmail = email?.trim();

    if (!trimmedEmail || !EMAIL_REGEX.test(trimmedEmail)) {
      return {
        success: false,
        error: "Please enter a valid email address.",
      };
    }

    const audienceId = process.env.RESEND_AUDIENCE_ID;

    if (!resend) {
      console.warn(
        "[Resend Dev Mode] RESEND_API_KEY is not configured. Simulating success for newsletter subscription:",
        trimmedEmail
      );
      return { success: true, devMode: true };
    }

    // 1. If an audience ID is configured, add subscriber to Resend Audience contacts
    if (audienceId) {
      const { error: audienceError } = await resend.contacts.create({
        email: trimmedEmail,
        audienceId: audienceId,
      });

      if (audienceError) {
        console.warn("Resend notice adding contact to audience:", audienceError);
      }
    }

    // 2. Always notify the admin about the new subscriber
    const { error: emailError } = await resend.emails.send({
      from: FROM_EMAIL,
      to: NOTIFICATION_EMAIL,
      subject: `[D Safe Place] New Newsletter Subscriber: ${trimmedEmail}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
          <h2 style="color: #192838; margin-bottom: 8px;">New Newsletter Subscriber</h2>
          <p style="color: #64748b; font-size: 14px; margin-top: 0;">Received through D Safe Place website footer</p>
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
          
          <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
            <tr>
              <td style="padding: 8px 0; color: #64748b; width: 140px; font-weight: 500;">Email Address:</td>
              <td style="padding: 8px 0; color: #192838; font-weight: 600;">
                <a href="mailto:${trimmedEmail}" style="color: #4e81bc; text-decoration: none;">${trimmedEmail}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: 500;">Audience Sync:</td>
              <td style="padding: 8px 0; color: #192838;">
                ${audienceId ? "Synced to Resend Audience" : "None (RESEND_AUDIENCE_ID not set)"}
              </td>
            </tr>
          </table>
          
          <p style="font-size: 12px; color: #94a3b8; margin-top: 24px; margin-bottom: 0;">
            This notification was sent automatically from D Safe Place.
          </p>
        </div>
      `,
    });

    if (emailError) {
      console.error("Resend error sending newsletter notification email:", emailError);
      return { success: false, error: emailError.message };
    }

    return { success: true };
  } catch (err: unknown) {
    console.error("Error subscribing to newsletter:", err);
    const message = err instanceof Error ? err.message : "Something went wrong. Please try again.";
    return { success: false, error: message };
  }
}
