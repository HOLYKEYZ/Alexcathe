import { GlassCard } from "./ui/GlassCard";
import { Check, X } from "lucide-react";

const comparisonData = [
    { feature: "Project Timeline", traditional: "Often delayed / Unpredictable", alexcathe: "Guaranteed Timeline" },
    { feature: "Pricing Model", traditional: "Hidden costs & Upsells", alexcathe: "Transparent Fixed Pricing" },
    { feature: "Safety Standards", traditional: "Basic Compliance", alexcathe: "International ISO Protocols" },
    { feature: "Technology", traditional: "Manual Reporting", alexcathe: "Digital Asset Management" },
    { feature: "Warranty", traditional: "None / Minimal", alexcathe: "5-Year Structural Warranty" }
];

export const ComparisonTable = () => {
  return (
    <section className="py-24 bg-background relative transition-colors duration-500">
       <div className="container mx-auto px-6">
           <div className="text-center mb-16">
               <span className="text-orange-500 font-mono text-sm tracking-widest uppercase">The Difference</span>
               <h2 className="mt-4 font-heading text-4xl md:text-5xl font-bold text-foreground">Why Industry Leaders <br/> Choose <span className="text-orange-500">Alexcathe.</span></h2>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
               {/* Traditional Column */}
               <div className="p-8 rounded-3xl border border-border bg-muted/20 opacity-70 grayscale">
                    <h3 className="text-2xl font-bold text-muted-foreground mb-8 border-b border-border pb-4">Traditional Contractors</h3>
                    <div className="space-y-6">
                        {comparisonData.map((item, i) => (
                            <div key={i} className="flex gap-4 items-start">
                                <div className="mt-1 w-6 h-6 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center flex-shrink-0">
                                    <X size={14} />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground font-mono mb-1">{item.feature}</p>
                                    <p className="text-muted-foreground font-medium line-through decoration-red-500/50">{item.traditional}</p>
                                </div>
                            </div>
                        ))}
                    </div>
               </div>

               {/* Alexcathe Column */}
               <GlassCard className="p-8 border-orange-500/30 bg-background/80 shadow-[0_0_50px_-20px_rgba(249,115,22,0.15)] relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500" />
                    
                    <h3 className="text-2xl font-bold text-foreground mb-8 border-b border-border pb-4 flex items-center gap-2">
                        Alexcathe Standard
                        <span className="px-2 py-0.5 rounded-full bg-orange-500 text-white text-[10px] font-bold uppercase tracking-wider">Premium</span>
                    </h3>
                    
                    <div className="space-y-6">
                        {comparisonData.map((item, i) => (
                            <div key={i} className="flex gap-4 items-start">
                                <div className="mt-1 w-6 h-6 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center flex-shrink-0">
                                    <Check size={14} />
                                </div>
                                <div>
                                    <p className="text-orange-500/80 font-mono mb-1">{item.feature}</p>
                                    <p className="text-foreground font-bold text-lg">{item.alexcathe}</p>
                                </div>
                            </div>
                        ))}
                    </div>
               </GlassCard>
           </div>
       </div>
    </section>
  );
};
