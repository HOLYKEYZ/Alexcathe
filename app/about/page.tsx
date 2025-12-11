import { PageHeader } from "@/components/PageHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { CheckCircle2, Shield, Users, Target } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  const values = [
      { icon: Shield, title: "Integrity", desc: "Uncompromising honesty and transparency in every transaction." },
      { icon: Target, title: "Precision", desc: "Attention to detail that exceeds standard industry benchmarks." },
      { icon: Users, title: "Client-Centric", desc: "Your vision is our blueprint. We build for your success." },
  ];

  return (
    <main className="bg-background min-h-screen transition-colors duration-500">
       <PageHeader 
          title="Building With Purpose." 
          subtitle="Alexcathe Services is Nigeria's premier construction and real estate development firm, dedicated to engineering excellence."
       />

       {/* Founder Section */}
       <section className="py-24 container mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               <div className="relative group">
                    <div className="absolute inset-0 bg-orange-500 rounded-3xl rotate-6 opacity-20 blur-xl transition-all group-hover:rotate-0 group-hover:opacity-30" />
                    <GlassCard className="relative overflow-hidden aspect-[4/5] p-0 border-border">
                         <div className="w-full h-full bg-slate-800 flex items-center justify-center text-slate-600">
                             <Image 
                                src="/17.jpg" 
                                alt="Engr. Gabriel" 
                                width={600} 
                                height={800} 
                                className="w-full h-full object-cover"
                             />
                         </div>
                    </GlassCard>
               </div>
               
               <div>
                   <h2 className="font-heading text-4xl text-foreground font-bold mb-6">A Legacy of <span className="text-orange-500">Excellence</span></h2>
                   <div className="space-y-6 text-muted-foreground leading-relaxed font-light text-lg">
                       <p>
                           "At Alexcathe, we don't just build structures; we create environments that inspire. Our journey began with a simple mission: to raise the standard of construction in Nigeria through rigorous engineering and transparent practices."
                       </p>
                       <p>
                           With over a decade of experience, we have successfully delivered landmark projects across Kwara State and beyond, earning the trust of both private individuals and government bodies.
                       </p>
                   </div>
                   
                   <div className="mt-10 pt-10 border-t border-border">
                       <p className="text-foreground font-heading font-bold text-xl">Engr. Gabriel</p>
                       <p className="text-orange-500 font-mono text-sm uppercase tracking-widest mt-1">Chief Executive Officer</p>
                   </div>
               </div>
           </div>
       </section>

       {/* Values Grid */}
       <section className="py-24 bg-background-section-alt border-t border-border">
           <div className="container mx-auto px-6">
               <div className="text-center mb-16">
                   <h2 className="font-heading text-3xl font-bold text-foreground">Our Core Values</h2>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                   {values.map((val, i) => (
                       <GlassCard key={i} className="p-8 text-center bg-background border-border hover:bg-background/80">
                           <div className="w-16 h-16 mx-auto rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 mb-6">
                               <val.icon size={32} />
                           </div>
                           <h3 className="text-xl font-bold text-foreground mb-4">{val.title}</h3>
                           <p className="text-muted-foreground">{val.desc}</p>
                       </GlassCard>
                   ))}
               </div>
           </div>
       </section>
    </main>
  );
}
