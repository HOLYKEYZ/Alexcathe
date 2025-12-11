import { HeroSection } from "@/components/HeroSection";
import { LogoMarquee } from "@/components/LogoMarquee";
import { StatsRow } from "@/components/StatsRow";
import { ServicesBento } from "@/components/ServicesBento";
import { ProjectsMasonry } from "@/components/ProjectsMasonry";
import { ComparisonTable } from "@/components/ComparisonTable";
import { GradientButton } from "@/components/ui/GradientButton";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-background min-h-screen selection:bg-orange-500/30 transition-colors duration-500">
      
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Trusted By */}
      <LogoMarquee />

      {/* 3. Services (Bento Grid) */}
      <ServicesBento />

      {/* 4. Stats */}
      <StatsRow />

      {/* 5. Comparison */}
      <ComparisonTable />

      {/* 6. Projects (Masonry) */}
      <ProjectsMasonry />

      {/* 7. Final CTA */}
      <section className="py-24 relative overflow-hidden flex items-center justify-center">
         <div className="absolute inset-0 z-0">
             {/* Subtle gradient to not overpower */}
             <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-yellow-500/5 opacity-50" />
             {/* Reduced Blur Height/Intensity as requested */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[80px]" />
         </div>

         <div className="container relative z-10 text-center px-6">
             <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-8">
                Ready to build <br/> the <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">extraordinary?</span>
             </h2>
             <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
                 Join 50+ satisfied clients who trusted Alexcathe with their most complex infrastructure challenges.
             </p>
             <Link href="/contact">
                 <GradientButton className="h-16 px-10 text-xl shadow-2xl shadow-orange-500/20">
                     Schedule a Consultation
                 </GradientButton>
             </Link>
         </div>
      </section>

    </main>
  );
}
