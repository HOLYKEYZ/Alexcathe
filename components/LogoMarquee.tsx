import Marquee from "react-fast-marquee";
import { CheckCircle2 } from "lucide-react";

export const LogoMarquee = () => {
  const partners = [
    "Dangote Cement", "COREN", "NSE", "ISO 9001", "Julius Berger", "Lafarge", "BUA"
  ];

  return (
    <section className="py-10 border-y border-border bg-background/50 backdrop-blur-sm relative z-20">
        {/* Removed header text as requested */}
        
        <Marquee gradient={true} gradientColor="hsl(var(--background))" speed={40}>
            {partners.map((partner, i) => (
                <div key={i} className="mx-8 md:mx-16 group cursor-default">
                    <span className="text-2xl md:text-3xl font-heading font-bold text-muted-foreground group-hover:text-foreground transition-colors duration-500 flex items-center gap-2">
                         <CheckCircle2 size={24} className="text-muted-foreground/50 group-hover:text-orange-500 transition-colors" />
                         {partner}
                    </span>
                </div>
            ))}
        </Marquee>
    </section>
  );
};
