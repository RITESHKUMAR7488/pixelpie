"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

export default function WorkPage() {
  const videos = [
    { type: "youtube", src: "NcMvBQ3aN1A" },
    { type: "youtube", src: "i1WdGGVuQUU" },
    { type: "local", src: "/hero-video.mp4" }, 
  ];

  const photos = ["mg9.jpg", "krsna5.jpg", "DSC02112.jpg", "mg2.jpg", "DSC07884.jpg", "DSC02856.jpg"];

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
        <p className="text-sm font-bold text-[#E50914] uppercase tracking-widest mb-4">— CASE STUDIES</p>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 80 }}
          className="text-6xl md:text-8xl lg:text-9xl font-heading font-extrabold uppercase tracking-tighter text-white leading-[0.85]"
        >
          REAL <br /><span className="text-[#E50914]">RESULTS.</span>
        </motion.h1>
      </div>

      <section className="mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative w-full aspect-video overflow-hidden border border-white/10 group bg-black ${index === 0 ? 'lg:col-span-2 aspect-[21/9]' : ''}`}
            >
              {video.type === "youtube" ? (
                <iframe
                  src={`https://www.youtube.com/embed/${video.src}?modestbranding=1&rel=0`}
                  title={`Portfolio Video ${index + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
                ></iframe>
              ) : (
                <video 
                  src={video.src}
                  controls
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              )}
            </motion.div>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-12">
          <h2 className="text-4xl font-heading font-extrabold uppercase text-white">BEHIND THE LENS</h2>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8"
        >
          {photos.map((photo, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="relative break-inside-avoid overflow-hidden border border-white/10 group cursor-pointer bg-black"
            >
              <div className="absolute inset-0 bg-[#E50914] opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10 mix-blend-multiply"></div>
              
              <Image 
                src={`/work/${photo}`}
                alt={`Agency Work ${index + 1}`}
                width={800}
                height={1200}
                className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

    </main>
  );
}