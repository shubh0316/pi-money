"use client";

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ContactForm, contactFormSchema } from "@/app/ContactUsSchema";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/app/ContactUs.email.action";
import { toast } from "sonner";
import { Button } from "@/components/ui/Button";

interface ContactUsFormProps {}

const ContactUs = () => {
  const [loading, setloading] = useState(false);
  const form = useForm<ContactForm>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      EmailAddress: "",
      Name: "",
      Message: "",
    },
  });

  const clientAction = async () => {
    const valid = await form.trigger();
    if (!valid) return;
    setloading(true);
    const result = await sendEmail(form.getValues());

    if (result?.error) {
      toast.error(result.error);
    } else {
      toast.success("Query sent successfully.");
    }
    setloading(false);
  };

  return (
    <>
      <div className="pb-10">
        <div className="hidden">
          <h1> Contact Us </h1>
          <h2> Social media </h2>
        </div>
      </div>
      <div className="mt-32 max-w-7xl mx-auto">
        <Form {...form}>
          <div className="px-5 md:px-10  grid lg:grid-cols-2 mt-20 mb-20 gap-20">
            <div className="flex flex-col gap-5">
              <div className="font-bold text-4xl text-[#00173C]">
                Ready to Transform Your Workforce?
              </div>
              <div className="text-[#576A8A]">
                LOREM IPSUM
              </div>
            </div>
            <div className="p-10 bg-[#F8F9FD] rounded-3xl">
              <h1 className="text-2xl md:text-4xl  font- pb-2">Contact Us</h1>

              <form action={clientAction} className="gap-4 mt-3">
                <div className="flex flex-col gap-2 w-full">
                  <FormField
                    control={form.control}
                    name="Name"
                    render={({ field }) => (
                      <FormItem className="w-full col-span-1">
                        <FormLabel>
                          {" "}
                          Name<span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="EmailAddress"
                    render={({ field }) => (
                      <FormItem className="w-full col-span-1">
                        <FormLabel>
                          Email Address <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Email Address" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="Message"
                    render={({ field }) => (
                      <FormItem className="w-full col-span-1">
                        <FormLabel>
                          Message <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <textarea
                            className="resize-none w-full h-32 p-2 border border-gray-300 rounded-md"
                            placeholder="Write your message here..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="w-full mt-10">
                    <Button
                      disabled={loading}
                      className="w-full rounded-full bg-customblue px-8 py-6"
                      type="submit"
                    >
                      Submit
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Form>
      </div>
    </>
  );
};

export default ContactUs;
