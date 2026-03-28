"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Instagram, Youtube, Twitter } from "lucide-react";

export default function WorkPage() {
  const youtubeVideos = [
    { type: "youtube", src: "NcMvBQ3aN1A" },
    { type: "youtube", src: "i1WdGGVuQUU" },
  ];

  // Creator roster mapped straight into the Behind The Lens section
  const creators = [
    { name: "KR$NA", niche: "DESI HIP-HOP", followers: "1.2M+", image: "krsna5.jpg" },
    { name: "MILIND GABA", niche: "POP & BOLLYWOOD", followers: "5.8M+", image: "mg9.jpg" },
    { name: "CALM", niche: "DESI HIP-HOP", followers: "600K+", image: "DSC02112.jpg" },
    { name: "MILIND GABA", niche: "LIVE PERFORMANCE", followers: "5.8M+", image: "mg2.jpg" },
    { name: "PARADOX", niche: "HIP-HOP & POP", followers: "1.5M+", image: "DSC07884.jpg" },
    { name: "ENCORE ABJ", niche: "DESI HIP-HOP", followers: "600K+", image: "DSC02856.jpg" },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } }
  };

  return (
    <main className="min-h-screen pt-32 px-6 max-w-7xl mx-auto pb-32 bg-[#0A0A0A]">
      
      <div className="mb-24">
        <p className="text-sm font-bold text-[#E50914] uppercase tracking-widest mb-4">— OUR PORTFOLIO</p>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 80 }}
          className="text-6xl md:text-8xl lg:text-9xl font-heading font-extrabold uppercase tracking-tighter text-white leading-[0.85]"
        >
          CREATIVE <br /><span className="text-[#E50914]">OUTPUT.</span>
        </motion.h1>
      </div>

      <section className="mb-32 flex flex-col gap-8">
        {/* Top Row: YouTube Videos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {youtubeVideos.map((video, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative w-full aspect-video overflow-hidden border border-white/10 group bg-black"
            >
              <iframe
                src={`https://www.youtube.com/embed/${video.src}?modestbranding=1&rel=0`}
                title={`Portfolio Video ${index + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
              ></iframe>
            </motion.div>
          ))}
        </div>

        {/* Bottom Row: Text Left, Local Video Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white/[0.02] border border-white/10 p-8 md:p-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 pr-0 lg:pr-12"
          >
            <h3 className="text-3xl md:text-5xl font-heading font-extrabold text-white uppercase leading-tight">
              EVOKING <br/><span className="text-[#E50914]">EMOTIONS.</span>
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed font-medium">
              We don't just assemble clips. We engineer experiences. Our creative output is designed to make you feel something real. We craft stories so deeply connected to the core of human experience that when the final cut played...
            </p>
            <p className="text-2xl font-bold text-white italic font-serif">
              "...they cried."
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative w-full aspect-video overflow-hidden border border-white/10 group bg-black"
          >
            {/* Reverted back to the original video file */}
            <video 
              src="/hero-video.mp4"
              controls
              playsInline
              className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
        </div>
      </section>

      {/* Behind The Lens - Showcasing Creators */}
      <section>
        <div className="mb-12">
          <h2 className="text-4xl font-heading font-extrabold uppercase text-white">BEHIND THE LENS</h2>
          <p className="text-sm font-bold text-[#E50914] uppercase tracking-widest mt-4">— OUR TALENT ROSTER</p>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {creators.map((creator, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative h-[500px] w-full bg-[#0A0A0A] cursor-pointer overflow-hidden border border-white/10 hover:border-[#E50914] transition-colors duration-500"
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
                <h3 className="text-3xl font-heading font-extrabold uppercase tracking-tighter text-white mb-6">
                  {creator.name}
                </h3>
                
                <div className="flex items-center justify-between border-t border-white/20 pt-6">
                  <div>
                    <span className="block text-xl font-bold text-white tracking-tighter">{creator.followers}</span>
                    <span className="text-[10px] text-gray-500 uppercase tracking-widest">Followers</span>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="text-gray-400 hover:text-[#E50914] transition-colors"><Instagram size={18} /></div>
                    <div className="text-gray-400 hover:text-[#E50914] transition-colors"><Youtube size={18} /></div>
                    <div className="text-gray-400 hover:text-[#E50914] transition-colors"><Twitter size={18} /></div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

    </main>
  );
}