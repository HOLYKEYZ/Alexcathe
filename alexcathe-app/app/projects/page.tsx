"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { fadeUp, staggerContainer } from "@/lib/animations";

// Total images 1-18, excluding 17 (founder)
const projectImages = Array.from({ length: 18 }, (_, i) => i + 1).filter(i => i !== 17);

export default function ProjectsPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <div className="flex flex-col w-full overflow-hidden">
      
      {/* PAGE HERO */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-background-section-alt">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
        {/* Abstract Background */}
        <div className="absolute inset-0 opacity-20 bg-[url('/hero-bg-cool.png')] bg-cover bg-center" />
        
        <div className="container relative z-20 px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Our Projects
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-text-secondary max-w-2xl mx-auto text-lg"
          >
            A showcase of our excellence in construction, engineering, and design across Kwara State.
          </motion.p>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20 bg-background">
        <div className="container px-6 max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8"
          >
            {projectImages.map((num) => (
              <motion.div key={num} variants={fadeUp} className="break-inside-avoid">
                <div 
                  className="group relative rounded-2xl overflow-hidden bg-background-card border border-border cursor-pointer"
                  onClick={() => setSelectedImage(num)}
                >
                  <div className="relative w-full">
                     <img 
                       src={`/${num}.jpg`} 
                       alt={`Project ${num}`}
                       className="w-full h-auto transform transition-transform duration-500 group-hover:scale-105"
                       loading="lazy"
                     />
                     <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                       <ZoomIn className="text-white drop-shadow-lg" size={32} />
                     </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-4 right-4 text-white/50 hover:text-white p-2"
              onClick={() => setSelectedImage(null)}
            >
              <X size={40} />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={`/${selectedImage}.jpg`} 
                alt={`Project ${selectedImage}`}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
