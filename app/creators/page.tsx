"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram, Youtube, Twitter } from "lucide-react";

export default function CreatorsPage() {
  const creators = [
    { name: "KR$NA", niche: "DESI HIP-HOP", followers: "1.2M+", image: "krsna5.jpg" },
    { name: "MILIND GABA", niche: "POP & BOLLYWOOD", followers: "5.8M+", image: "mg9.jpg" },
    { name: "CALM", niche: "DESI HIP-HOP", followers: "600K+", image: "DSC02112.jpg" },
    { name: "MILIND GABA", niche: "LIVE PERFORMANCE", followers: "5.8M+", image: "mg2.jpg" },
    { name: "PARADOX", niche: "HIP-HOP & POP", followers: "1.5M+", image: "DSC07884.jpg" },
    { name: "ENCORE ABJ", niche: "DESI HIP-HOP", followers: "600K+", image: "DSC02856.jpg" },
  ];

  return (
    <main className="min-h-screen pt-32 px-6 max-w-7xl mx-auto pb-32 bg-[#0A0A0A]">
      
      <div className="mb-24">
        <p className="text-sm font-bold text-[#E50914] uppercase tracking-widest mb-4">— MANAGED CREATORS</p>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 80 }}
          className="text-6xl md:text-8xl lg:text-9xl font-heading font-extrabold uppercase tracking-tighter text-white leading-[0.85]"
        >
          THE <br /><span className="text-[#E50914]">ROSTER.</span>
        </motion.h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {creators.map((creator, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1 }}
            className="group relative h-[600px] w-full bg-[#0A0A0A] cursor-pointer overflow-hidden border border-white/10 hover:border-[#E50914] transition-colors duration-500"
          >
            <Image
              src={`/work/${creator.image}`}
              alt={creator.name}
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent opacity-100 transition-opacity duration-300"></div>

            <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end">
              <p className="text-[#E50914] text-xs tracking-[0.2em] uppercase font-bold mb-2">
                {creator.niche}
              </p>
              <h3 className="text-4xl font-heading font-extrabold uppercase tracking-tighter text-white mb-6">
                {creator.name}
              </h3>
              
              <div className="flex items-center justify-between border-t border-white/20 pt-6">
                <div>
                  <span className="block text-2xl font-bold text-white tracking-tighter">{creator.followers}</span>
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest">Followers</span>
                </div>
                
                <div className="flex gap-3">
                  <div className="text-gray-400 hover:text-[#E50914] transition-colors"><Instagram size={20} /></div>
                  <div className="text-gray-400 hover:text-[#E50914] transition-colors"><Youtube size={20} /></div>
                  <div className="text-gray-400 hover:text-[#E50914] transition-colors"><Twitter size={20} /></div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </main>
  );
}