"use client";

import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

const categories = ["All", "Commercial", "Residential", "Industrial", "Public", "3D Designs"];

// Updated projects based on user feedback
const projects = [
  { id: 1, title: "Estate", category: "Commercial", image: "/1.jpg" }, // Was Lagos High-Rise
  { id: 2, title: "Modern Duplex", category: "Residential", image: "/2.jpg" },
  { id: 3, title: "Estate", category: "Industrial", image: "/3.jpg" }, // Was Shopping Complex
  { id: 4, title: "Mosque", category: "Public", image: "/4.jpg" }, // Was Government Facility
  { id: 5, title: "Graphics Card Flier", category: "Residential", image: "/flier1.jpg" }, // Was Urban Estate
  { id: 6, title: "Electronic Services", category: "Commercial", image: "/electrical-works.png" }, // Was Tech Hub
  // Added Remaining Images 5-16 with specific updates
  { id: 7, title: "Real Estate", category: "Commercial", image: "/5.jpg" },
  { id: 8, title: "Architectural Drawing", category: "3D Designs", image: "/6.jpg" },
  { id: 9, title: "Architectural Drawing", category: "3D Designs", image: "/7.jpg" },
  { id: 10, title: "Architectural Drawing", category: "3D Designs", image: "/8.jpg" },
  { id: 11, title: "Architectural Drawing", category: "3D Designs", image: "/9.jpg" },
  { id: 12, title: "Architectural Drawing", category: "3D Designs", image: "/10.jpg" },
  { id: 13, title: "Ongoing Project", category: "Residential", image: "/11.jpg" },
  { id: 14, title: "Ongoing Project", category: "Commercial", image: "/12.jpg" },
  { id: 15, title: "Ongoing Project", category: "Industrial", image: "/13.jpg" },
  { id: 16, title: "Ongoing Project", category: "Residential", image: "/14.jpg" },
  { id: 17, title: "Ongoing Project", category: "Commercial", image: "/15.jpg" },
  { id: 18, title: "Public Facility", category: "Public", image: "/16.jpg" },
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projects.filter(p => filter === "All" || p.category === filter);

  return (
    <main className="bg-background min-h-screen transition-colors duration-500">
       <PageHeader 
          title="Our Portfolio." 
          subtitle="A showcase of engineering precision and architectural innovation across Nigeria."
       />

       <section className="py-12 container mx-auto px-6">
           {/* Filters */}
           <div className="flex flex-wrap gap-4 justify-center mb-12">
               {categories.map((cat) => (
                   <button
                       key={cat}
                       onClick={() => setFilter(cat)}
                       className={cn(
                           "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border",
                           filter === cat 
                             ? "bg-orange-500 text-white border-orange-500 shadow-lg shadow-orange-500/20" 
                             : "bg-background/50 text-muted-foreground border-border hover:border-orange-500/50 hover:text-orange-500"
                       )}
                   >
                       {cat}
                   </button>
               ))}
           </div>

           {/* Grid */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               <AnimatePresence>
                   {filteredProjects.map((project) => (
                       <motion.div 
                          layout
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.3 }}
                          key={project.id} 
                          className="relative group rounded-3xl overflow-hidden cursor-pointer h-[400px]"
                       >
                           <div className="relative w-full h-full">
                                <Image 
                                   src={project.image} 
                                   alt={project.title}
                                   fill
                                   className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                     <span className="text-orange-400 font-mono text-xs uppercase tracking-widest mb-1">{project.category}</span>
                                     <h3 className="text-xl font-bold text-white">{project.title}</h3>
                                </div>
                           </div>
                       </motion.div>
                   ))}
               </AnimatePresence>
           </div>
       </section>
    </main>
  );
}
