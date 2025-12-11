import { GlassCard } from "./ui/GlassCard";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { GradientButton } from "./ui/GradientButton";

// Synced with Projects Page items
const projects = [
  { id: 1, title: "Estate", category: "Commercial", image: "/1.jpg" }, // Was Lagos High-Rise
  { id: 2, title: "Modern Duplex", category: "Residential", image: "/2.jpg" },
  { id: 3, title: "Estate", category: "Industrial", image: "/3.jpg" }, // Was Shopping Complex
];

export const ProjectsMasonry = () => {
  return (
    <section className="py-24 bg-background border-t border-border relative overflow-hidden transition-colors duration-500">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div>
                     <span className="text-orange-500 font-mono text-sm tracking-widest uppercase">Featured Works</span>
                     {/* "Blueprint to Reality" - Reality should be orange on dark mode. Using dynamic class. */}
                     <h2 className="mt-4 font-heading text-4xl md:text-5xl font-bold text-foreground">
                        Blueprint to <br className="hidden md:block"/> 
                        <span className="text-orange-500 dark:text-orange-500 text-foreground">Reality.</span>
                     </h2>
                </div>
                <Link href="/projects">
                     <button className="flex items-center gap-2 text-foreground border-b border-orange-500 pb-1 hover:text-orange-500 transition-colors group">
                        View All Projects <ArrowRight className="group-hover:translate-x-1 transition-transform"/>
                     </button>
                </Link>
            </div>

            {/* Grid - 1 Row, 3 columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <div key={project.id} className="relative group rounded-2xl overflow-hidden cursor-pointer h-[400px]">
                        <div className="relative w-full h-full overflow-hidden rounded-2xl">
                             <Image 
                                src={project.image} 
                                alt={project.title}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                             />
                             {/* Overlay */}
                             <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                  <span className="inline-block px-3 py-1 rounded-full bg-orange-500/20 backdrop-blur-md border border-orange-500/30 text-orange-400 text-xs font-mono mb-2 w-fit">
                                      {project.category}
                                  </span>
                                  <h3 className="text-xl font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{project.title}</h3>
                             </div>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="mt-16 text-center">
                 <Link href="/contact">
                    <div className="inline-flex flex-col items-center">
                        <p className="text-muted-foreground mb-4">Have a similar project in mind?</p>
                        <GradientButton className="min-w-[200px]">Get a Quote Now</GradientButton>
                    </div>
                 </Link>
            </div>
        </div>
    </section>
  );
};
