"use client";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

export default function WorkPage() {
  const videos = [
    { type: "youtube", src: "NcMvBQ3aN1A" },
    { type: "youtube", src: "i1WdGGVuQUU" },
    { type: "local", src: "/hero-video.mp4" }, 
  ];

  const photos = [
    "mg9.jpg",
    "krsna5.jpg",
    "DSC02112.jpg",
    "mg2.jpg",
    "DSC07884.jpg",
    "DSC02856.jpg",
  ];

  // THE FIX: Explicitly typing these as Variants so TypeScript doesn't panic
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <main className="min-h-screen pt-32 px-6 max-w-7xl mx-auto pb-24">
      
      <div className="text-center mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold uppercase tracking-tighter"
        >
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E50914] to-red-600">Work.</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg"
        >
          High-impact visual production, strategic campaigns, and cinematic event coverage. Don't just take our word for it—watch the tape.
        </motion.p>
      </div>

      <section className="mb-32">
        <h2 className="text-2xl font-heading font-bold uppercase tracking-wider mb-8 border-l-4 border-[#E50914] pl-4">
          Featured Campaigns
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)] group bg-black"
            >
              {video.type === "youtube" ? (
                <iframe
                  src={`https://www.youtube.com/embed/${video.src}?modestbranding=1&rel=0`}
                  title={`Portfolio Video ${index + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full grayscale-0 md:grayscale group-hover:grayscale-0 transition-all duration-500"
                ></iframe>
              ) : (
                <video 
                  src={video.src}
                  controls
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 w-full h-full object-cover grayscale-0 md:grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              )}
            </motion.div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-heading font-bold uppercase tracking-wider mb-8 border-l-4 border-[#E50914] pl-4">
          Behind The Lens
        </h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          {photos.map((photo, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="relative break-inside-avoid rounded-xl overflow-hidden border border-white/10 group cursor-pointer shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#E50914]/80 via-transparent to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end p-6">
                <p className="text-white font-bold tracking-wider opacity-100 md:opacity-0 translate-y-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300">
                  View Project &rarr;
                </p>
              </div>
              
              <Image 
                src={`/work/${photo}`}
                alt={`Agency Work ${index + 1}`}
                width={800}
                height={1200}
                className="w-full h-auto object-cover grayscale-0 md:grayscale group-hover:grayscale-0 transition-all duration-500 md:group-hover:scale-105"
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

    </main>
  );
}