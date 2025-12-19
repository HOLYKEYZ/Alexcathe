"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Phone, Mail, MapPin, Facebook, Instagram, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
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
import { PageHeader } from "@/components/PageHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientButton } from "@/components/ui/GradientButton";

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
    <main className="bg-background min-h-screen transition-colors duration-500">
       <PageHeader 
          title="Start Your Project." 
          subtitle="Ready to build? Get a free consultation and quote for your next construction or engineering project."
       />

       <section className="py-24 container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
             
             {/* Form Section */}
             <div>
                <GlassCard className="p-8 border-orange-500/20 bg-background/50 dark:border-white/10 dark:bg-background/20">
                   {isSuccess ? (
                      <div className="flex flex-col items-center justify-center py-20 text-center">
                         <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 mb-6 animate-pulse">
                             <CheckCircle2 size={40} />
                         </div>
                         <h3 className="text-2xl font-bold text-foreground mb-4">Message Received</h3>
                         <p className="text-muted-foreground mb-8 max-w-xs">
                             Thank you for contacting Alexcathe. We will review your request and get back to you within 24 hours.
                         </p>
                         <Button onClick={() => setIsSuccess(false)} variant="outline" className="border-border text-foreground hover:bg-secondary">
                             Send Another Message
                         </Button>
                      </div>
                   ) : (
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                          <div className="space-y-4">
                              <div className="space-y-2">
                                  <Label className="text-foreground">Full Name</Label>
                                  <Input 
                                     {...form.register("fullName")} 
                                     // Thicker border on light mode (border-2) vs normal on dark. 
                                     className="bg-background/50 border-2 dark:border border-border text-foreground placeholder:text-muted-foreground focus:border-orange-500 focus:ring-orange-500/20" 
                                     placeholder="e.g. Alex Cathe"
                                  />
                                  {form.formState.errors.fullName && <p className="text-red-500 text-xs">{form.formState.errors.fullName.message}</p>}
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  <div className="space-y-2">
                                      <Label className="text-foreground">Email</Label>
                                      <Input 
                                         {...form.register("email")} 
                                         className="bg-background/50 border-2 dark:border border-border text-foreground placeholder:text-muted-foreground focus:border-orange-500 focus:ring-orange-500/20" 
                                         placeholder="alex@example.com"
                                      />
                                      {form.formState.errors.email && <p className="text-red-500 text-xs">{form.formState.errors.email.message}</p>}
                                  </div>
                                  <div className="space-y-2">
                                      <Label className="text-foreground">Phone</Label>
                                      <Input 
                                         {...form.register("phone")} 
                                         className="bg-background/50 border-2 dark:border border-border text-foreground placeholder:text-muted-foreground focus:border-orange-500 focus:ring-orange-500/20" 
                                         placeholder="0803..."
                                      />
                                      {form.formState.errors.phone && <p className="text-red-500 text-xs">{form.formState.errors.phone.message}</p>}
                                  </div>
                              </div>

                              <div className="space-y-2">
                                   <Label className="text-foreground">Service Needed</Label>
                                   <Select onValueChange={(val) => form.setValue("serviceInterest", val)}>
                                      <SelectTrigger className="bg-background/50 border-2 dark:border border-border text-foreground">
                                          <SelectValue placeholder="Select a service" />
                                      </SelectTrigger>
                                      <SelectContent className="bg-background border-border text-foreground">
                                          <SelectItem value="Geo-Informatic Services">Geo-Informatic Services</SelectItem>
                                          <SelectItem value="Architectural Designs">Architectural Designs</SelectItem>
                                          <SelectItem value="Structural Designs">Structural Designs</SelectItem>
                                          <SelectItem value="Real Estate Dev.">Real Estate Dev.</SelectItem>
                                          <SelectItem value="Building Constructions">Building Constructions</SelectItem>
                                          <SelectItem value="Mechanical & Electrical">Mechanical & Electrical</SelectItem>
                                          <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                                      </SelectContent>
                                   </Select>
                                   {form.formState.errors.serviceInterest && <p className="text-red-500 text-xs">{form.formState.errors.serviceInterest.message}</p>}
                              </div>

                              <div className="space-y-2">
                                  <Label className="text-foreground">Messages / Project Details</Label>
                                  <Textarea 
                                      {...form.register("message")}
                                      className="min-h-[150px] bg-background/50 border-2 dark:border border-border text-foreground placeholder:text-muted-foreground focus:border-orange-500 focus:ring-orange-500/20" 
                                      placeholder="Tell us about the project..."
                                  />
                                  {form.formState.errors.message && <p className="text-red-500 text-xs">{form.formState.errors.message.message}</p>}
                              </div>
                          </div>

                          <GradientButton type="submit" className="w-full text-lg h-14" disabled={isSubmitting}>
                               {isSubmitting ? <Loader2 className="animate-spin" /> : "Submit Request"}
                          </GradientButton>
                      </form>
                   )}
                </GlassCard>
             </div>

             {/* Info Section */}
             <div className="space-y-10">
                 <div>
                     <span className="text-orange-500 font-mono text-sm tracking-widest uppercase">Contact Us</span>
                     <h2 className="mt-4 text-4xl font-bold text-foreground font-heading">Get in Touch</h2>
                     <p className="mt-4 text-muted-foreground leading-relaxed">
                         Have a question or looking to start a new project? Our team of engineers is ready to assist you.
                     </p>
                 </div>

                 <div className="space-y-6">
                     <GlassCard className="p-6 flex items-start gap-4 hover:border-orange-500/40 cursor-default">
                         <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 flex-shrink-0">
                             <Phone size={24} />
                         </div>
                         <div>
                             <h4 className="text-lg font-bold text-foreground mb-1">Phone</h4>
                             <p className="text-muted-foreground">0803 498 8816</p>
                             <p className="text-muted-foreground">0812 137 9995</p>
                         </div>
                     </GlassCard>

                     <GlassCard className="p-6 flex items-start gap-4 hover:border-orange-500/40 cursor-default">
                         <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 flex-shrink-0">
                             <Mail size={24} />
                         </div>
                         <div>
                             <h4 className="text-lg font-bold text-foreground mb-1">Email</h4>
                             <p className="text-muted-foreground">alexcatheltd@gmail.com</p>
                         </div>
                     </GlassCard>

                     <GlassCard className="p-6 flex items-start gap-4 hover:border-orange-500/40 cursor-default">
                         <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 flex-shrink-0">
                             <MapPin size={24} />
                         </div>
                         <div>
                             <h4 className="text-lg font-bold text-foreground mb-1">Office</h4>
                             <p className="text-muted-foreground">No 6, Off Afon Road, Sapati,<br/>Ilorin, Kwara State</p>
                         </div>
                     </GlassCard>
                 </div>
             </div>

          </div>
       </section>
    </main>
  );
}
