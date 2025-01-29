"use server";

import { ContactForm } from "@/app/ContactUsSchema";
import { resend } from "@/lib/resend";
import ContactUsEmail from "@/components/email/contact-us";
import { toast } from "sonner";

export const sendEmail = async (data: ContactForm) => {
    try {
        await resend.emails.send({
            from: process.env.CONTACT__EMAIL_FROM!,
            to: process.env.CONTACT__EMAIL_TO!,
            subject: `Query from ${data.Name}`,
            react: await ContactUsEmail(data), // Await the ContactUsEmail function call
            text: "Error",
            reply_to: data.EmailAddress,
        });
    } catch (e) {
        console.log(e);
        return { error: "Can't send email" };
    }
};