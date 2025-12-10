"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Phone, Mail, MapPin, Facebook, Instagram, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// Zod Schema
const contactSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().regex(/^(\+234|0)[0-9]{10}$/, 'Invalid Nigerian phone number'),
  serviceInterest: z.string().min(1, 'Please select a service'),
  projectType: z.string().optional(),
  location: z.string().optional(),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      serviceInterest: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Form submitted:", data);
    setIsSubmitting(false);
    setIsSuccess(true);
    form.reset();
  }

  return (
    <div className="flex flex-col w-full overflow-hidden">
      
      {/* PAGE HERO */}
      <section className="py-20 bg-background-section-alt">
        <div className="container px-6 max-w-4xl mx-auto text-center">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            ⚡ 2-hour response time
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Let's Start Your Project</h1>
          <p className="text-text-secondary text-lg">
            Ready to build? Get a free consultation and quote for your next construction or engineering project.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            
            {/* LEFT - CONTACT FORM */}
            <div>
              <Card className="border-border bg-background-card p-6 md:p-8">
                {isSuccess ? (
                  <div className="flex flex-col items-center justify-center p-12 text-center h-full min-h-[400px]">
                    <div className="w-16 h-16 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mb-6">
                      <CheckCircle2 size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-text-secondary mb-8">
                      Thank you for contacting Alexcathe. We've received your inquiry and will revert within 2 hours.
                    </p>
                    <Button onClick={() => setIsSuccess(false)} variant="outline">
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName" className="text-white">Full Name *</Label>
                      <Input 
                        id="fullName" 
                        placeholder="John Doe" 
                        {...form.register("fullName")} 
                        className={form.formState.errors.fullName ? "border-red-500" : ""}
                      />
                      {form.formState.errors.fullName && (
                        <p className="text-red-500 text-xs">{form.formState.errors.fullName.message}</p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-white">Email Address *</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="john@example.com" 
                          {...form.register("email")}
                          className={form.formState.errors.email ? "border-red-500" : ""}
                        />
                        {form.formState.errors.email && (
                          <p className="text-red-500 text-xs">{form.formState.errors.email.message}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-white">Phone Number *</Label>
                        <Input 
                          id="phone" 
                          placeholder="0803..." 
                          {...form.register("phone")}
                          className={form.formState.errors.phone ? "border-red-500" : ""}
                        />
                         {form.formState.errors.phone && (
                          <p className="text-red-500 text-xs">{form.formState.errors.phone.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-white">Service Needed *</Label>
                      <Select onValueChange={(val) => form.setValue("serviceInterest", val)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Real Estate Development">Real Estate Development</SelectItem>
                          <SelectItem value="Architectural Designs">Architectural Designs</SelectItem>
                          <SelectItem value="Structural Designs">Structural Designs</SelectItem>
                          <SelectItem value="MEP Services">MEP Services</SelectItem>
                          <SelectItem value="Installation Services">Installation Services</SelectItem>
                          <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                      {form.formState.errors.serviceInterest && (
                        <p className="text-red-500 text-xs">{form.formState.errors.serviceInterest.message}</p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                       <div className="space-y-2">
                        <Label className="text-white">Budget Range</Label>
                         <Select onValueChange={(val) => form.setValue("budget", val)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Under 5M">Under ₦5M</SelectItem>
                            <SelectItem value="5M - 10M">₦5M - ₦10M</SelectItem>
                            <SelectItem value="10M - 20M">₦10M - ₦20M</SelectItem>
                            <SelectItem value="Above 50M">Above ₦50M</SelectItem>
                            <SelectItem value="Not Sure">Not Sure Yet</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="location" className="text-white">Project Location</Label>
                        <Input {...form.register("location")} placeholder="e.g. Ilorin GRA" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-white">Project Details *</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us about your project requirements..." 
                        className={`min-h-[120px] ${form.formState.errors.message ? "border-red-500" : ""}`}
                        {...form.register("message")}
                      />
                      {form.formState.errors.message && (
                        <p className="text-red-500 text-xs">{form.formState.errors.message.message}</p>
                      )}
                    </div>

                    <Button type="submit" variant="gradient" className="w-full text-lg h-12" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                  </form>
                )}
              </Card>
            </div>

            {/* RIGHT - CONTACT INFO */}
            <div className="space-y-8">
              <div className="space-y-6">
                <Card className="bg-background-card border-border hover:border-primary/50 transition-colors">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Call Us Directly</h3>
                      <div className="space-y-1">
                        <a href="tel:08034988816" className="block text-text-secondary hover:text-white transition-colors">0803 498 8816</a>
                        <a href="tel:08121379995" className="block text-text-secondary hover:text-white transition-colors">0812 137 9995</a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-background-card border-border hover:border-primary/50 transition-colors">
                   <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 text-secondary">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                      <a href="mailto:alexcatheltd@gmail.com" className="block text-text-secondary hover:text-white transition-colors">alexcatheltd@gmail.com</a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-background-card border-border hover:border-primary/50 transition-colors">
                   <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0 text-accent">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Visit Our Office</h3>
                      <p className="text-text-secondary mb-4">
                        No 6, Off Afon Road, Sapati,<br/>Ilorin, Kwara State
                      </p>
                      <Button variant="outline" size="sm" asChild>
                        <Link href="https://maps.google.com" target="_blank">Get Directions</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

               {/* Socials */}
               <div>
                 <h4 className="text-white font-semibold mb-4">Connect With Us</h4>
                 <div className="flex gap-4">
                   <Link href="https://facebook.com/AlexCatheltd" className="w-12 h-12 rounded-full bg-background-card border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all text-text-secondary">
                     <Facebook />
                   </Link>
                   <Link href="https://instagram.com/alexcathe.ltd" className="w-12 h-12 rounded-full bg-background-card border border-border flex items-center justify-center hover:bg-secondary hover:border-secondary hover:text-white transition-all text-text-secondary">
                     <Instagram />
                   </Link>
                 </div>
               </div>
            </div>

          </div>
          
          {/* Map removed as requested */}

        </div>
      </section>
    </div>
  );
}
