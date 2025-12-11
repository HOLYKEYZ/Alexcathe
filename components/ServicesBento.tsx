"use client";

import { GlassCard } from "./ui/GlassCard";
import { HardHat, Ruler, Building, Zap, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const services = [
  {
    icon: HardHat,
    title: "General Contracting",
    description: "End-to-end execution of complex construction projects with unwavering safety standards.",
    colSpan: "md:col-span-2",
  },
  {
    icon: Ruler,
    title: "Architectural Design",
    description: "Blueprint-perfect precision from concept to structural reality.",
    colSpan: "md:col-span-1",
  },
  {
    icon: Zap,
    title: "MEP Engineering",
    description: "Mechanical, Electrical, and Plumbing systems integrated seamlessly.",
    colSpan: "md:col-span-1", 
  },
  {
    icon: Building,
    title: "Real Estate Development",
    description: "Transforming land potential into high-value commercial and residential assets.",
    colSpan: "md:col-span-2",
  }
];

export const ServicesBento = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-24 bg-background relative transition-colors duration-500">
       {/* Ambient Glow */}
       <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[128px] pointer-events-none" />

       <div className="container mx-auto px-6">
          <div className="mb-16">
              <span className="text-orange-500 font-mono text-sm tracking-widest uppercase">Our Expertise</span>
              <h2 className="mt-4 font-heading text-4xl md:text-5xl font-bold text-foreground">
                 Constructing <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">Excellence.</span>
              </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {services.map((service, i) => {
                 // Background logic: Colored "Feature" ONLY on light mode. Dark mode = transparent/glass.
                 const isLight = mounted && resolvedTheme === 'light';
                 const bgClass = isLight 
                    ? (i % 2 === 0 ? "bg-orange-500/10 border-orange-200" : "bg-blue-500/10 border-blue-200") 
                    : "bg-background/20 border-white/5"; // Dark mode default

                 return (
                     <GlassCard 
                        key={i} 
                        className={cn(
                            "p-8 group relative min-h-[300px] flex flex-col justify-between transition-colors", 
                            service.colSpan, 
                            bgClass
                        )}
                     >
                        <div>
                            {/* Icons: "Make it what it was before" - assumed Orange */}
                            <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                                <service.icon size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-orange-500 transition-colors">{service.title}</h3>
                            <p className="text-muted-foreground leading-relaxed max-w-sm">{service.description}</p>
                        </div>
                        
                        <div className="flex justify-end mt-8">
                           <Link href="/services">
                               <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-all duration-300">
                                   <ArrowUpRight size={20} />
                               </div>
                           </Link>
                        </div>
                     </GlassCard>
                 );
             })}
          </div>
       </div>
    </section>
  );
};
