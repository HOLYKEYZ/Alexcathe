"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { fadeUp } from "@/lib/animations";

const services = [
  {
    id: "real-estate",
    title: "Real Estate Development",
    desc: "We transform land into landmark properties. Our real estate development service covers the entire lifecycle from land acquisition and feasibility studies to construction and property management.",
    features: [
      "Land Acquisition & Documentation",
      "Feasibility Studies & ROI Analysis",
      "Residential & Commercial Development",
      "Property Marketing & Sales",
      "Estate Management"
    ],
    price: "Custom Quotes",
    imageText: "Real Estate"
  },
  {
    id: "architecture",
    title: "Architectural Designs",
    desc: "Our architectural team combines creativity with practicality to design spaces that inspire. We produce detailed 2D/3D plans that meet all regulatory standards.",
    features: [
      "Conceptual Design & Visualization",
      "3D Modeling & Rendering",
      "Working Drawings (Architectural/Structural)",
      "Regulatory Approval Processing",
      "Bill of Quantities (BOQ)"
    ],
    price: "From ₦350,000",
    imageText: "Architecture"
  },
  {
    id: "structural",
    title: "Structural Engineering",
    desc: "Ensure your building stands the test of time. Our structural engineers provide comprehensive design and analysis to guarantee safety and stability.",
    features: [
      "Foundation Design & Soil Tests",
      "Structural Integrity Analysis",
      "Reinforcement Detailing",
      "Roofing Systems Design",
      "Site Supervision & Certification"
    ],
    price: "From ₦250,000",
    imageText: "Structure"
  },
  {
    id: "mep",
    title: "MEP Services",
    desc: "Mechanical, Electrical, and Plumbing systems are the lifeblood of any building. We design and install efficient, safe, and modern systems.",
    features: [
      "Electrical Distribution Systems",
      "Plumbing & Drainage Design",
      "HVAC (Heating, Ventilation, AC)",
      "Fire Safety Systems",
      "Smart Home Automation"
    ],
    price: "From ₦200,000",
    imageText: "MEP Systems"
  },
  {
    id: "installation",
    title: "Installation Services",
    desc: "From finishing touches to major installations, our skilled technicians ensure everything is fitted perfectly and functions correctly.",
    features: [
      "Electrical Fixtures & Wiring",
      "Sanitary Ware Installation",
      "Tiling & Flooring",
      "Painting & Wall Finishes",
      "Solar & Inverter Systems"
    ],
    price: "From ₦150,000",
    imageText: "Installations"
  }
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      
      {/* PAGE HERO */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-background-section-alt">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
        <div className="container relative z-20 px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            Comprehensive construction and engineering solutions tailored to your needs.
          </p>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="py-20 bg-background">
        <div className="container px-6 max-w-7xl mx-auto space-y-32">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              id={service.id}
              className={`flex flex-col gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-background-card border border-border shadow-2xl group-hover:shadow-primary/20 transition-all duration-500">
                  <img
                     src={
                       service.id === "real-estate" ? "/service-realestate.png" :
                       service.id === "architecture" ? "/service-architectural.png" :
                       service.id === "structural" ? "/service-construction.png" :
                       service.id === "mep" ? "/electrical-works.png" :
                       "/service-consultancy.png"
                     }
                     alt={service.title}
                     className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background-card via-transparent to-transparent opacity-60" />
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
                  0{index + 1}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">{service.title}</h2>
                <p className="text-text-secondary text-lg leading-relaxed">
                  {service.desc}
                </p>
                
                <div className="pt-4">
                  <h4 className="font-semibold text-white mb-4">What's Included:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-text-secondary">
                        <CheckCircle2 size={16} className="text-primary shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8 flex items-center gap-6">
                  <div>
                    <span className="block text-xs text-text-secondary uppercase tracking-wider mb-1">Starting At</span>
                    <span className="text-xl font-bold text-white">{service.price}</span>
                  </div>
                  <Button variant="gradient" size="lg" asChild>
                    <Link href="/contact">Get Started <ArrowRight className="ml-2" size={16} /></Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background-section-alt">
        <div className="container px-6 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Need a Custom Solution?</h2>
          <p className="text-text-secondary mb-10 text-lg">
            We understand that every project is unique. Contact us for a specialized quote tailored to your specific requirements.
          </p>
          <Button 
            variant="outline" 
            size="xl" 
            className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 scale-100 hover:scale-105 shadow-lg hover:shadow-primary/25" 
            asChild
          >
            <Link href="/contact">Contact Our Team</Link>
          </Button>
        </div>
      </section>

    </div>
  );
}
