"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  LayoutDashboard, 
  Zap, 
  Building2, 
  Hammer, 
  Activity, 
  Award,
  CheckCircle2,
  Shield,
  Clock,
  Users,
  TrendingUp,
  MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { CountUp } from "@/components/CountUp";
import { fadeUp, staggerContainer, scaleOnHover } from "@/lib/animations";

export default function Home() {
  return (
    <div className="flex flex-col gap-0 w-full overflow-hidden">
      
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        
        {/* Background - In real app use Next.js Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10" />
           {/* Hero Image */}
           <div className="w-full h-full relative">
             <Image 
               src="/hero-bg-cool.png"
               alt="Modern Construction"
               fill
               className="object-cover"
               priority
             />
           </div>
        </div>

        <div className="container relative z-20 px-6 text-center max-w-5xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8"
          >
            <Shield size={16} />
            <span>Licensed & Registered | RC: 1002813</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            Building Nigeria's <br className="hidden md:block" />
            <span className="text-gradient">Premier Construction Solutions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Alexcathe Services — Modern Construction, Architectural Excellence & Electrical Engineering for Homes & Enterprises. We build secure, sustainable, and intelligently designed structures.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="gradient" size="xl" asChild>
              <Link href="/services">Explore Our Services</Link>
            </Button>
            <Button variant="outline" size="xl" className="border-2 border-primary text-primary hover:bg-primary/10 bg-transparent" asChild>
              <Link href="/contact">Request Quote</Link>
            </Button>
          </motion.div>

          {/* Tech/Service Stack Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16 flex flex-wrap justify-center gap-3"
          >
            {[
              { icon: Building2, label: "Construction" },
              { icon: Zap, label: "Electrical" },
              { icon: LayoutDashboard, label: "Architecture" },
              { icon: Activity, label: "MEP Systems" },
              { icon: Hammer, label: "Structural" },
              { icon: TrendingUp, label: "Real Estate" },
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-background-card border border-white/5 text-sm text-text-secondary hover:border-primary/30 transition-colors">
                <badge.icon size={14} className="text-primary" />
                {badge.label}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHAT WE DO SECTION */}
      <section className="py-20 md:py-32 bg-background relative">
        <div className="container px-6 max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <span className="text-sm uppercase tracking-wider text-primary font-semibold block mb-4">What We Do</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">We Build Solutions That <span className="text-white">Transform Communities</span></h2>
            <p className="text-text-secondary text-lg">From concept to completion, we deliver construction and engineering services that create lasting value.</p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { icon: LayoutDashboard, title: "Architectural Excellence", desc: "Innovative architectural designs combining functionality with aesthetics. From concept to approval, we handle every detail." },
              { icon: Zap, title: "Electrical Systems", desc: "Professional electrical installations and MEP services. Smart home integration, safety compliance, and energy-efficient solutions." },
              { icon: Building2, title: "Real Estate Development", desc: "End-to-end property development from land acquisition to handover. Investment-focused with transparent timelines." },
              { icon: Hammer, title: "Structural Engineering", desc: "Foundation to framework expertise following Nigerian Building Code. Load calculations and reinforcement detailing." },
              { icon: Activity, title: "Project Management", desc: "Real-time coordination of resources, teams, and workflows. Weekly progress reports for complete transparency." },
              { icon: Award, title: "Quality Assurance", desc: "5-year structural warranty and post-completion support. Quality materials from verified suppliers." },
            ].map((feature, i) => (
              <motion.div key={i} variants={fadeUp}>
                <Card className="h-full border-border/50 bg-background-card/50 backdrop-blur-sm hover:border-primary/50">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center mb-4 shadow-lg shadow-primary/20">
                      <feature.icon className="text-white" size={24} />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{feature.desc}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SERVICES SHOWCASE */}
      <section className="py-20 md:py-32 bg-background-section-alt">
        <div className="container px-6 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm uppercase tracking-wider text-primary font-semibold block mb-4">Our Services</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Professional Building Solutions</h2>
            <p className="text-text-secondary text-lg">Enterprise-grade construction services built for quality, performance, and real-world impact.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Real Estate Development",
                badge: "⭐ Flagship Service",
                num: "01",
                desc: "Complete property development solutions helping investors and landowners create valuable assets.",
                features: ["Site identification", "Feasibility studies", "Project management", "Marketing coordination"],
                price: "From ₦8M"
              },
              {
                title: "Architectural Designs",
                badge: "🎨 Design Excellence",
                num: "02",
                desc: "Innovative architectural solutions that transform your vision into detailed, approval-ready plans.",
                features: ["Concept development", "Working drawings", "Regulatory approval", "Material specifications"],
                price: "From ₦350K"
              },
              {
                title: "Structural Designs",
                badge: "🏗️ Technical Core",
                num: "03",
                desc: "Engineering excellence from foundation to completion, ensuring structural integrity and safety.",
                features: ["Foundation design", "Reinforcement detailing", "Load calculations", "Construction supervision"],
                price: "From ₦250K"
              },
              {
                title: "MEP Services",
                badge: "⚡ Systems Integration",
                num: "04",
                desc: "Complete building systems design including electrical, plumbing, range, and smart home infrastructure.",
                features: ["Electrical distribution", "Plumbing systems", "HVAC planning", "Smart home pre-wiring"],
                price: "From ₦200K"
              },
              {
                title: "Installation Services",
                badge: "🔧 Implementation",
                num: "05",
                desc: "Professional installation ensuring safety, compliance, and quality workmanship.",
                features: ["Electrical installations", "Plumbing fixtures", "Tiling & finishing", "Equipment testing"],
                price: "From ₦150K"
              }
            ].map((service, i) => (
              <Card key={i} className="group overflow-hidden border-border bg-background-card relative flex flex-col">
                {/* Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
                   <div className="absolute inset-0 flex items-center justify-center text-white/10 font-bold text-2xl">
                     {service.title} Image
                   </div>
                   <div className="absolute inset-0 bg-gradient-to-t from-background-card to-transparent" />
                   <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur border border-white/10 text-white text-xs font-medium">
                     {service.badge}
                   </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <span className="text-xs text-primary/60 font-mono tracking-wider mb-2">SERVICE {service.num}</span>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-6">{service.desc}</p>
                  
                  <div className="mt-auto">
                    <ul className="space-y-2 mb-6">
                      {service.features.map((f, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-text-secondary">
                          <CheckCircle2 size={16} className="text-primary shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <span className="text-sm font-medium text-white/60">{service.price}</span>
                      <Link href="/services" className="text-primary text-sm font-semibold hover:underline flex items-center gap-1">
                        Explore <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm uppercase tracking-wider text-primary font-semibold">Why Choose Alexcathe</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4">Built on Excellence, Trusted Nationwide</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Licensed & Certified", text: "CAC registered (RC: 1002813) with full compliance and licensing." },
              { icon: Award, title: "Quality Guarantee", text: "5-year structural warranty and 2-year installation coverage." },
              { icon: Clock, title: "On-Time Delivery", text: "99% on-time delivery rate. Fixed timelines with milestone tracking." },
              { icon: Users, title: "Transparent Process", text: "No hidden costs. Weekly progress reports with photos." },
              { icon: TrendingUp, title: "Proven Results", text: "Significant ROI for investors and satisfied homeowners." },
              { icon: MapPin, title: "Nationwide Reach", text: "Headquartered in Kwara, serving clients across all of Nigeria." }
            ].map((reason, i) => (
              <div key={i} className="p-8 rounded-2xl bg-background-card border border-border hover:-translate-y-1 hover:border-primary/30 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                  <reason.icon size={20} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
                <p className="text-text-secondary">{reason.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-20 bg-background-section-alt border-y border-white/5">
        <div className="container px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { val: 50, label: "Satisfied Clients", suffix: "+" },
              { val: 99, label: "Project Success", suffix: "%" },
              { val: 100, label: "On-Time Delivery", suffix: "%" },
              { val: 24, label: "Support Available", suffix: "/7" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-4xl md:text-6xl font-bold text-gradient mb-2">
                  <CountUp value={stat.val} suffix={stat.suffix} />
                </span>
                <span className="text-sm md:text-base text-text-secondary uppercase tracking-wide font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 md:py-32">
        <div className="container px-6 max-w-7xl mx-auto">
          <div className="rounded-3xl bg-gradient-cta p-12 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-primary/20">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/noise.png')] opacity-20 mix-blend-overlay"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Let's Build Your Vision</h2>
              <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                Partner with us to design, build, and deliver construction projects that create lasting value.
              </p>
              <Button variant="secondary" size="xl" className="bg-white text-primary hover:bg-white/90 border-0" asChild>
                <Link href="/contact">Start a Conversation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
