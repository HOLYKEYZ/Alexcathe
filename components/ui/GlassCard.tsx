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
        "bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-2xl overflow-hidden transition-all duration-300",
        hoverEffect && "hover:bg-slate-800/60 hover:-translate-y-1 hover:border-orange-500/30 hover:shadow-[0_0_30px_-10px_rgba(249,115,22,0.15)]",
        className
      )}
    >
      {children}
    </div>
  );
};
