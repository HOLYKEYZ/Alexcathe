"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { GradientButton } from "@/components/ui/GradientButton";
import { ThemeToggle } from "./ThemeToggle";
import { useTheme } from "next-themes";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  // Dynamic Logo Logic: Use logo.png always, but render as White in Dark Mode using CSS filters
  const logoSrc = '/logo.png';

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out", 
        scrolled ? "py-2" : "py-4", 
        "px-4 md:px-6"
      )}
    >
      <div 
        className={cn(
          "mx-auto max-w-7xl rounded-full border transition-all duration-500 backdrop-blur-xl px-6 py-3 flex items-center justify-between",
          scrolled 
            ? "bg-background/80 border-border shadow-2xl" 
            : "bg-background/40 border-border/50"
        )}
      >
        {/* Logo & Brand Name */}
        <Link href="/" className="relative z-50 flex items-center gap-2 md:gap-3 group">
             {/* Logo Image */}
             <div className="relative h-10 w-10 md:h-14 md:w-14 shrink-0">
                 {mounted && (
                     <Image 
                        src={logoSrc} 
                        alt="Alexcathe Logo" 
                        fill
                        className={cn(
                            "object-contain transition-all duration-300",
                            resolvedTheme === "dark" ? "brightness-0 invert" : ""
                        )}
                        priority
                     />
                 )}
             </div>
             
             {/* Text - Visible on mobile now (sized down) */}
             <span className="font-heading font-bold text-xl md:text-3xl tracking-tight text-foreground block">
                Alexcathe<span className="text-orange-500">.</span>
             </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-orange-500 relative group",
                pathname === link.href ? "text-foreground font-bold" : "text-muted-foreground"
              )}
            >
              {link.name}
              <span className={cn(
                "absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full",
                pathname === link.href ? "w-full" : ""
              )} />
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Link href="/contact">
            <GradientButton className="px-5 py-2 text-sm h-10">
                Get a Quote
            </GradientButton>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground p-2 hover:bg-foreground/10 rounded-full transition-colors"
            >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 mx-4 p-4 rounded-3xl bg-background/95 border border-border backdrop-blur-xl shadow-2xl flex flex-col gap-4 md:hidden animate-in slide-in-from-top-4 fade-in duration-200">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-lg font-medium p-4 rounded-xl transition-colors hover:bg-foreground/5",
                pathname === link.href ? "text-orange-500 bg-orange-500/10" : "text-muted-foreground"
              )}
            >
              {link.name}
            </Link>
          ))}
           <Link href="/contact" onClick={() => setIsOpen(false)}>
            <GradientButton className="w-full justify-center">
                Get Started
            </GradientButton>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
