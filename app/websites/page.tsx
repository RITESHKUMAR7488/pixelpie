"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function WebsitesPage() {
  const projects = [
    {
      title: "NOVA METRICS",
      niche: "B2B SaaS / Data Infrastructure",
      desc: "A high-performance dashboard architecture built for sub-10ms latency. We combined the elegance of classical infrastructure with modern, cybernetic dark-mode aesthetics for enterprise-level data processing.",
      image: "/Screenshot 2026-04-10 162821.png",
    },
    {
      title: "AURA RESIDENCES",
      niche: "Luxury Real Estate",
      desc: "Curated living deserves curated digital experiences. A highly localized, visually stunning web presence showcasing architectural masterpieces with smooth navigation and premium aesthetics.",
      image: "/Screenshot 2026-04-10 162346.png",
    },
    {
      title: "WIRES & CABLE FABRICATORS",
      niche: "Industrial Manufacturing",
      desc: "Powering the furnace industry with a robust, product-focused catalog. Engineered for extremes, this platform bridges heavy-duty manufacturing with seamless digital quotation workflows.",
      image: "/Screenshot 2026-04-10 162517.png",
    },
    {
      title: "THE PIXEL PIE MEDIA",
      niche: "Creative Agency",
      desc: "Our own digital storefront. Blazing fast, highly animated, and structurally optimized to capture attention and convert traffic. It serves as the ultimate proof of concept for our development capabilities.",
      image: "/Screenshot 2026-04-10 162404.png",
    }
  ];

  return (
    <main className="min-h-screen pt-32 px-6 max-w-7xl mx-auto pb-32 bg-[#0A0A0A]">
      
      {/* HEADER */}
      <div className="mb-24 relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E50914]/5 blur-[120px] pointer-events-none"></div>
        <p className="text-sm font-bold text-[#E50914] uppercase tracking-widest mb-4">— DIGITAL ARCHITECTURE</p>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 80 }}
          className="text-6xl md:text-8xl lg:text-9xl font-heading font-extrabold uppercase tracking-tighter text-white leading-[0.85] max-w-5xl"
        >
          WE BUILD <br /><span className="text-[#E50914]">WEBSITES.</span>
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-8 max-w-3xl border-l-2 border-[#E50914] pl-5 space-y-4"
        >
          <p className="text-gray-400 text-lg font-medium leading-relaxed">
            Modern, blazing-fast, and robust web applications. We don't just use templates; we engineer digital storefronts with cutting-edge tech stacks designed specifically to convert traffic into revenue.
          </p>
          <p className="text-white text-lg font-bold leading-relaxed">
            Plus, we build with search engines in mind. From day one, your site includes comprehensive On-Page SEO, structured data, and technical optimizations so you actually rank.
          </p>
        </motion.div>
      </div>

      {/* FULL-VIEW GRID PORTFOLIO */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col group"
          >
            {/* Browser Mockup Container */}
            <div className="w-full bg-white/[0.03] border border-white/10 rounded-t-xl overflow-hidden flex flex-col">
              {/* Browser Header Bar */}
              <div className="h-8 bg-black/40 border-b border-white/10 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/20 group-hover:bg-red-500 transition-colors"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 group-hover:bg-yellow-500 transition-colors"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/20 group-hover:bg-green-500 transition-colors"></div>
              </div>
              
              {/* Image Container - Strictly Aspect Video to prevent cropping */}
              <div className="relative w-full aspect-video bg-black overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={`${project.title} Interface`} 
                  fill 
                  className="object-contain sm:object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700" 
                />
              </div>
            </div>

            {/* Project Details */}
            <div className="pt-8 flex flex-col">
              <p className="text-[#E50914] text-xs font-bold tracking-[0.2em] uppercase mb-3">
                {project.niche}
              </p>
              <h3 className="text-3xl font-heading font-extrabold text-white mb-4 uppercase tracking-tight">
                {project.title}
              </h3>
              <p className="text-gray-400 text-base leading-relaxed font-medium">
                {project.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

    </main>
  );
}