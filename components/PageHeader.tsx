import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  className?: string;
  alignment?: "center" | "left";
}

export const PageHeader = ({ title, subtitle, className, alignment = "center" }: PageHeaderProps) => {
  return (
    <section className={cn("relative pt-40 pb-20 bg-background overflow-hidden transition-colors duration-500", className)}>
        {/* Background Elements */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[128px] pointer-events-none" />
        
        <div className={cn("container mx-auto px-6 relative z-10", alignment === "center" ? "text-center" : "text-left")}>
            <span className="inline-block px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-xs font-mono mb-6 uppercase tracking-widest animate-fade-in-up">
                 Alexcathe Services
            </span>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in-up delay-100">
                {title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
                {subtitle}
            </p>
        </div>
    </section>
  );
};
