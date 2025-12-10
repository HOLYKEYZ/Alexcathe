import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
                 A
               </div>
              <span className="text-xl font-bold tracking-tight text-white">
                ALEXCATHE
              </span>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
              Building excellence across Kwara State with quality construction, structural integrity, and transparent processes.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://facebook.com/AlexCatheltd"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary transition-all"
              >
                <Facebook size={18} />
              </Link>
              <Link
                href="https://instagram.com/alexcathe.ltd"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-secondary hover:text-secondary hover:border-secondary transition-all"
              >
                <Instagram size={18} />
              </Link>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-white mb-6">Company</h4>
            <ul className="space-y-4">
              {['About Us', 'Services', 'Contact', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-text-secondary hover:text-primary transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-4">
              {[
                'Real Estate Development',
                'Architectural Designs',
                'Structural Engineering',
                'MEP Services',
                'Installation Services'
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/services"
                    className="text-text-secondary hover:text-primary transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-6">Connect</h4>
            <ul className="space-y-6">
               <li className="flex gap-3 items-start">
                 <MapPin className="text-primary shrink-0 mt-1" size={18} />
                 <span className="text-text-secondary text-sm">
                   No 6, Off Afon Road, Sapati,<br/>Ilorin, Kwara State
                 </span>
               </li>
               <li className="flex gap-3 items-center">
                 <Phone className="text-primary shrink-0" size={18} />
                 <div className="flex flex-col">
                    <a href="tel:08034988816" className="text-text-secondary hover:text-white text-sm">0803 498 8816</a>
                    <a href="tel:08121379995" className="text-text-secondary hover:text-white text-sm">0812 137 9995</a>
                 </div>
               </li>
               <li className="flex gap-3 items-center">
                 <Mail className="text-primary shrink-0" size={18} />
                 <a href="mailto:alexcatheltd@gmail.com" className="text-text-secondary hover:text-white text-sm">
                   alexcatheltd@gmail.com
                 </a>
               </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-secondary text-sm">
            © 2025 Alexcathe Services Nig Ltd. All rights reserved. RC: 1002813
          </p>
          <p className="text-text-secondary text-xs opacity-50">
            Designed with excellence.
          </p>
        </div>
      </div>
    </footer>
  );
}
