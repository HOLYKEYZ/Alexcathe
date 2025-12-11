"use client";

import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// Simplified internal count up to guarantee it works without complex hooks first
const SimpleCountUp = ({ end, duration = 2 }: { end: number, duration?: number }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    
    useEffect(() => {
        if (!isInView) return;
        
        let startTime: number;
        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / (duration * 1000), 1);
            
            setCount(Math.floor(end * percentage));
            
            if (percentage < 1) {
                requestAnimationFrame(animate);
            }
        };
        
        requestAnimationFrame(animate);
    }, [end, duration, isInView]);

    return <span ref={ref}>{count}</span>;
};

export const StatsRow = () => {
  const stats = [
    { label: "Commercial Projects", value: 30, suffix: "+" }, 
    { label: "Delivery On Time", value: 100, suffix: "%" },
    { label: "Years Experience", value: 12, suffix: "+" },
    { label: "States Covered", value: 36, suffix: "" },
  ];

  return (
    <section className="py-24 bg-background relative border-t border-border transition-colors duration-500">
       <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-border">
             {stats.map((stat, i) => (
                 <div key={i} className="px-4 md:px-8 text-center md:text-left group">
                      <div className="flex items-baseline gap-1 justify-center md:justify-start">
                          <span className="text-5xl md:text-7xl font-bold font-mono text-foreground tracking-tighter group-hover:text-orange-500 transition-all duration-500">
                             <SimpleCountUp end={stat.value} />
                          </span>
                          <span className="text-3xl text-orange-500 font-bold">{stat.suffix}</span>
                      </div>
                      <p className="mt-2 text-xs md:text-sm font-mono text-muted-foreground uppercase tracking-widest group-hover:text-orange-500 transition-colors">
                          {stat.label}
                      </p>
                 </div>
             ))}
          </div>
       </div>
    </section>
  );
};
