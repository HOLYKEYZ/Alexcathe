"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, Target, Lightbulb, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      
      {/* PAGE HERO */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-background-section-alt">
          {/* Placeholder for About Hero Image */}
           <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20" />
           <div className="absolute inset-0 flex items-center justify-center text-white/5 font-bold text-8xl uppercase tracking-widest -rotate-12">
             About Us
           </div>
        </div>
        <div className="absolute inset-0 bg-black/60 z-10" />
        
        <div className="container relative z-20 px-6 text-center max-w-4xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary font-medium tracking-wider uppercase mb-4 block"
          >
            About Alexcathe
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Building Kwara's Future,<br/>One Project at a Time
          </motion.h1>
        </div>
      </section>

      {/* COMPANY OVERVIEW */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Who We Are</h2>
              <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                <p>
                  Alexcathe Services Nig Ltd is a premier construction and engineering firm based in Ilorin, Kwara State. With over 10 years of offering satisfactory results to clients, we have established ourselves as a trusted partner in the industry.
                </p>
                <p>
                  We specialize in delivering high-quality residential and commercial projects that stand the test of time. With RC numbers 1002813 and 101, we are a fully registered and licensed entity, committed to professional excellence and regulatory compliance in every brick we lay and every system we install.
                </p>
                <div className="flex flex-col gap-4 mt-8 p-6 bg-background-card rounded-xl border border-border">
                  <div className="flex items-center gap-3">
                    <Shield className="text-primary" />
                    <span className="text-white font-semibold">Fully Licensed & Insured</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-primary" />
                    <span className="text-white font-semibold">RC: 1002813 | RC: 101</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative aspect-square md:aspect-video lg:aspect-square bg-background-card rounded-2xl overflow-hidden border border-border"
            >
               {/* Founder Image */}
               <Image 
                 src="/17.jpg" 
                 alt="Founder of Alexcathe Services" 
                 fill
                 className="object-cover" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
               <div className="absolute bottom-6 left-6 right-6">
                 <h3 className="text-2xl font-bold text-white mb-1">Our Founder</h3>
                 <p className="text-primary font-medium mb-3">Civil & Electrical Expert</p>
                 <p className="text-sm text-gray-300">
                   With 15+ years of hands-on experience, our founder leads with expertise in structural integrity and complex electrical systems, ensuring every project meets global standards.
                 </p>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-20 md:py-32 bg-background-section-alt">
        <div className="container px-6 max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Creating Lasting Value", 
                desc: "We focus on high-quality construction and transparent processes to create lasting value for homeowners and investors, ensuring long-term community impact." 
              },
              { 
                title: "Shaping Thriving Communities", 
                desc: "Our goal is to delivery safe, sustainable, and beautifully crafted homes that exceed our clients’ expectations and enhance the neighborhoods we build in." 
              },
              { 
                title: "Efficient Innovation", 
                desc: "We prioritize efficient time management and the introduction of new innovations to ensure optimal output and timely delivery of every project at hand." 
              }
            ].map((val, i) => (
              <div key={i} className="p-8 rounded-2xl bg-background-card border border-border hover:border-primary/50 transition-colors">
                <h3 className="text-xl font-bold text-white mb-3">{val.title}</h3>
                <p className="text-text-secondary leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
