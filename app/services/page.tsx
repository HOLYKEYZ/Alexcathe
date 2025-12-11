import { PageHeader } from "@/components/PageHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { HardHat, Ruler, Building, Zap, Truck, Wrench } from "lucide-react";

export default function ServicesPage() {
  const services = [
    { icon: HardHat, title: "General Contracting", desc: "Full-service construction management from ground-breaking to handover." },
    { icon: Ruler, title: "Architectural Design", desc: "Innovative 2D/3D modeling and structural planning." },
    { icon: Zap, title: "Electrical Engineering", desc: "Industrial and residential electrical installations and maintenance." },
    { icon: Building, title: "Real Estate Development", desc: "Property acquisition, development, and sales management." },
    { icon: Truck, title: "Material Supply", desc: "Procurement of high-grade construction materials." },
    { icon: Wrench, title: "Facility Management", desc: "Post-construction maintenance and facility optimization." },
  ];

  return (
    <main className="bg-background min-h-screen transition-colors duration-500">
       <PageHeader 
          title="Our Expertise." 
          subtitle="Comprehensive engineering solutions tailored to your unique requirements."
       />

       <section className="py-24 container mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {services.map((service, i) => (
                   <GlassCard key={i} className="p-8 group hover:bg-secondary/20">
                       <div className="flex justify-between items-start mb-6">
                           <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center text-muted-foreground group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
                               <service.icon size={28} />
                           </div>
                           <span className="font-mono text-muted-foreground text-xs">0{i+1}</span>
                       </div>
                       
                       <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-orange-500 transition-colors">{service.title}</h3>
                       <p className="text-muted-foreground leading-relaxed transition-colors">
                           {service.desc}
                       </p>
                   </GlassCard>
               ))}
           </div>
       </section>
    </main>
  );
}
