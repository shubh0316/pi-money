import { z } from "zod";

export const contactFormSchema = z.object({
  Name: z.string().nonempty({
    message: "Please enter your full name.",
  }),
  EmailAddress: z.string().email({
    message: "Please enter valid email address.",
  }),

  Message: z.string().nonempty({
    message: "Please write your message.",
  }),
});

export type ContactForm = z.infer<typeof contactFormSchema>;