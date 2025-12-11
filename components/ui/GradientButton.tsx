import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

export const GradientButton = ({ children, variant = "primary", className, ...props }: GradientButtonProps) => {
  const variants = {
    primary: "bg-gradient-to-r from-orange-600 to-orange-500 text-white shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 hover:scale-[1.02]",
    secondary: "bg-white/10 text-white hover:bg-white/20 backdrop-blur-md border border-white/10",
    outline: "bg-transparent border border-orange-500/50 text-orange-500 hover:bg-orange-500/10"
  };

  return (
    <button
      className={cn(
        "px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
