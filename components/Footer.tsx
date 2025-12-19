"use client";

import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Image from "next/image";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Removed Twitter and LinkedIn as requested.
    const socialLinks = [
        { icon: Instagram, href: "https://instagram.com/alexcathe.ltd", label: "Instagram" },
        { icon: Facebook, href: "https://facebook.com/alexcatheltd", label: "Facebook" },
    ];

    const footerLinks = [
        {
            title: "Company",
            links: [
                { name: "About Us", href: "/about" },
                { name: "Our Team", href: "/about#team" },
                { name: "Careers", href: "/careers" },
                { name: "Privacy Policy", href: "/privacy" },
            ]
        },
        {
            title: "Services",
            links: [
                { name: "Geo-Informatic Services", href: "/services" },
                { name: "Architectural Designs", href: "/services" },
                { name: "Building Constructions", href: "/services" },
                { name: "Real Estate Dev.", href: "/services" },
            ]
        },
    ];

    const logoSrc = '/logo.png';

    return (
        <footer className="bg-background-section-alt border-t border-border pt-20 pb-10 relative overflow-hidden transition-colors duration-300">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-[128px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 text-center md:text-left">
                    {/* Brand Column */}
                    <div className="space-y-6 flex flex-col items-center md:items-start">
                        <Link href="/" className="inline-block group h-20 w-72 relative">
                             {mounted ? (
                                 <Image 
                                    src={logoSrc} 
                                    alt="Alexcathe Logo" 
                                    fill
                                    className={cn(
                                        "object-contain transition-all duration-300",
                                        resolvedTheme === "dark" ? "brightness-0 invert" : ""
                                    )}
                                 />
                             ) : (
                                 <span className="font-heading font-bold text-3xl text-foreground tracking-tight">Alexcathe.</span>
                             )}
                        </Link>
                        <p className="text-muted-foreground leading-relaxed text-sm max-w-xs mx-auto md:mx-0">
                            Building excellence across Nigeria. We combine engineering precision with architectural innovation.
                        </p>
                        <div className="flex gap-4 justify-center md:justify-start">
                            {socialLinks.map((social) => (
                                <Link
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-foreground/5 border border-border flex items-center justify-center text-muted-foreground hover:text-orange-500 hover:bg-foreground/10 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-1"
                                >
                                    <social.icon size={18} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    {footerLinks.map((column) => (
                        <div key={column.title} className="space-y-6">
                            <h4 className="text-lg font-bold text-foreground font-heading">{column.title}</h4>
                            <ul className="space-y-4">
                                {column.links.map((link) => (
                                    <li key={link.name}>
                                        <Link 
                                            href={link.href}
                                            className="text-muted-foreground hover:text-orange-500 transition-colors flex items-center justify-center md:justify-start gap-2 group text-sm"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-orange-500/0 group-hover:bg-orange-500 transition-all hidden md:block" />
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Contact Column */}
                    <div className="space-y-6">
                         <h4 className="text-lg font-bold text-foreground font-heading">Contact Us</h4>
                         <ul className="space-y-5">
                            <li className="flex flex-col md:flex-row items-center md:items-start gap-4 text-muted-foreground text-sm group">
                                <MapPin size={18} className="text-orange-500" />
                                <span className="mt-1">Ilorin, Kwara State,<br />Nigeria</span>
                            </li>
                            <li className="flex flex-col md:flex-row items-center md:items-start gap-4 text-muted-foreground text-sm group">
                                <Phone size={18} className="text-orange-500" />
                                <div className="flex flex-col gap-1">
                                    <a href="tel:08034988816" className="hover:text-foreground transition-colors">0803 498 8816</a>
                                    <a href="tel:08121379995" className="hover:text-foreground transition-colors">0812 137 9995</a>
                                </div>
                            </li>
                            <li className="flex flex-col md:flex-row items-center md:items-start gap-4 text-muted-foreground text-sm group">
                                <Mail size={18} className="text-orange-500" />
                                <a href="mailto:alexcatheltd@gmail.com" className="hover:text-foreground transition-colors">alexcatheltd@gmail.com</a>
                            </li>
                         </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-muted-foreground text-xs text-center md:text-left">
                        © {currentYear} Alexcathe Services Nig Ltd. All rights reserved. <span className="text-slate-500 ml-2 font-mono">RC: 1002813</span>
                    </p>
                    <div className="flex gap-6 text-xs text-muted-foreground">
                        <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
