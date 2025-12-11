import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const GlassCard = ({ children, className, hoverEffect = true }: GlassCardProps) => {
  return (
    <div
      className={cn(
        "relative backdrop-blur-xl border transition-all duration-300",
        "bg-background/40 border-white/10 dark:hover:border-white/20", // Dark Mode: Glass & Subtle Border
        // Light Mode: Clean background with subtle shadow for depth, rather than just border
        "light:bg-white/80 light:border-slate-200 light:shadow-lg light:shadow-slate-200/50 light:hover:shadow-xl",
        hoverEffect && "hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-500/10",
        "rounded-3xl overflow-hidden", // Increased corner radius for "Sleek" look
        className
      )}
    >
      {/* Glossy sheen overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div className="relative z-10 h-full">
        {children} 
      </div>
    </div>
  );
};
