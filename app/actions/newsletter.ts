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

    // If an audience ID is configured, add subscriber to Resend Audience contacts
    if (audienceId) {
      const { error } = await resend.contacts.create({
        email: trimmedEmail,
        audienceId: audienceId,
      });

      if (error) {
        console.error("Resend error adding contact to audience:", error);
        return { success: false, error: error.message };
      }
    } else {
      // If audience ID is not yet created, send an internal notification email instead
      console.info(
        "RESEND_AUDIENCE_ID not provided. Sending subscriber notification email instead."
      );
      await resend.emails.send({
        from: FROM_EMAIL,
        to: NOTIFICATION_EMAIL,
        subject: `[D Safe Place] New Newsletter Subscriber: ${trimmedEmail}`,
        html: `
          <div style="font-family: sans-serif; padding: 20px;">
            <h2>New Newsletter Subscriber</h2>
            <p><strong>Email:</strong> ${trimmedEmail}</p>
            <p style="color: #64748b; font-size: 13px;">Add RESEND_AUDIENCE_ID to automatically sync subscribers to your Resend Audience.</p>
          </div>
        `,
      });
    }

    return { success: true };
  } catch (err: unknown) {
    console.error("Error subscribing to newsletter:", err);
    const message = err instanceof Error ? err.message : "Something went wrong. Please try again.";
    return { success: false, error: message };
  }
}
