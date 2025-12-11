"use client";

import { GradientButton } from "./ui/GradientButton";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const HeroSection = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-background transition-colors duration-500 pt-0">
      
      {/* Background Image & Gradient Overlay - Only visible in Dark Mode */}
      {mounted && resolvedTheme === "dark" && (
          <div className="absolute inset-0 z-0 animate-fade-in">
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-overlay"
                style={{ backgroundImage: "url('/hero-bg-cool.png')" }}
            />
            {/* Dark Mode Gradients */}
            <div className="absolute inset-0 bg-gradient-to-b from-navy-950/90 via-navy-950/70 to-navy-950" />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-transparent to-navy-950/90" />
          </div>
      )}

      {/* Light Mode Abstract Background */}
      {mounted && resolvedTheme === "light" && (
          <div className="absolute inset-0 z-0 bg-slate-50/50">
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-100/50 rounded-full blur-[100px]" />
             <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[120px]" />
          </div>
      )}

      {/* Content */}
      <div className="container relative z-10 px-6 pt-20">
         <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
            
            {/* Status Badge */}
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/50 border border-border backdrop-blur-md"
            >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-xs font-mono text-green-500 tracking-wider font-semibold uppercase">Status: 100% Operational</span>
            </motion.div>

            {/* Headline - Polished Typography: Responsive sizes, text-balance for wrapping */}
            <h1 className="font-heading text-5xl md:text-7xl lg:text-9xl font-extrabold text-foreground tracking-tighter leading-[0.9] mb-8 animate-fade-in-up delay-100 drop-shadow-2xl text-balance">
                Engineering <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-orange-500 dark:from-orange-400 dark:via-amber-200 dark:to-orange-600 animate-gradient-x">
                    The Future.
                </span>
            </h1>

            {/* Subtext */}
            <p className="text-lg md:text-2xl text-muted-foreground max-w-2xl mb-10 leading-relaxed animate-fade-in-up delay-200 font-light text-balance">
                Premium construction, structural integrity, and architectural excellence. 
                We bring <span className="text-foreground font-semibold">industrial precision</span> to every project in Nigeria.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-fade-in-up delay-300">
                <Link href="/contact" className="w-full sm:w-auto">
                    <GradientButton className="w-full sm:w-auto h-16 px-10 text-xl font-bold rounded-full shadow-orange-500/20 shadow-2xl active:scale-95 transition-transform duration-200">
                        Start Your Project
                        <ArrowRight size={24} />
                    </GradientButton>
                </Link>
                <Link href="/projects" className="w-full sm:w-auto">
                    <button className="w-full sm:w-auto h-16 px-10 rounded-full border border-border bg-background/5 text-foreground font-semibold hover:bg-foreground/5 hover:border-foreground/20 active:scale-95 transition-all flex items-center justify-center gap-2 backdrop-blur-md duration-200">
                        View Portfolio
                    </button>
                </Link>
            </div>
         </div>
      </div>

      {/* Abstract Overlay Elements (Kelegam Physics) - Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-20 transition-colors duration-500" />
    </section>
  );
};
