"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram, Youtube, Twitter } from "lucide-react";

export default function CreatorsPage() {
  const creators = [
    {
      name: "KR$NA",
      niche: "Desi Hip-Hop & Rap",
      followers: "1.2M+",
      image: "krsna5.jpg",
    },
    {
      name: "Milind Gaba",
      niche: "Pop & Bollywood",
      followers: "5.8M+",
      image: "mg9.jpg",
    },
    {
      name: "Calm",
      niche: "Desi Hip-Hop",
      followers: "600K+",
      image: "DSC02112.jpg",
    },
    {
      name: "Milind Gaba",
      niche: "Live Performance",
      followers: "5.8M+",
      image: "mg2.jpg",
    },
    {
      name: "Paradox",
      niche: "Hip-Hop & Pop",
      followers: "1.5M+",
      image: "DSC07884.jpg",
    },
    {
      name: "Encore ABJ",
      niche: "Desi Hip-Hop",
      followers: "600K+",
      image: "DSC02856.jpg",
    },
  ];

  return (
    <main className="min-h-screen pt-32 px-6 max-w-7xl mx-auto pb-24">
      
      <div className="text-center mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold uppercase tracking-tighter"
        >
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E50914] to-red-600">Talent.</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg"
        >
          We represent the voices shaping digital culture. From massive reach to hyper-engaged niches, our creators drive the conversation.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {creators.map((creator, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
            className="group relative h-[500px] w-full rounded-2xl overflow-hidden border border-white/10 bg-[#0A0A0A] cursor-pointer"
          >
            {/* Mobile Fix: grayscale-0 on mobile, grayscale on md screens and above */}
            <Image
              src={`/work/${creator.image}`}
              alt={creator.name}
              fill
              className="object-cover grayscale-0 md:grayscale group-hover:grayscale-0 transition-all duration-700 md:group-hover:scale-110"
            />
            
            {/* Gradient Overlay - Always slightly visible on mobile */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 md:opacity-80 md:group-hover:opacity-90 transition-opacity duration-300"></div>

            <div className="absolute -bottom-10 left-0 w-full h-1/2 bg-[#E50914]/20 blur-[50px] opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            {/* Creator Info - Always up on mobile */}
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex flex-col justify-end h-full translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-300">
              <div className="flex justify-between items-end mb-2">
                <h3 className="text-3xl font-heading font-bold uppercase tracking-wide text-white">
                  {creator.name}
                </h3>
                <span className="text-[#E50914] font-bold text-sm tracking-widest">
                  {creator.followers}
                </span>
              </div>
              
              <p className="text-gray-300 text-sm tracking-wider uppercase mb-6 font-medium">
                {creator.niche}
              </p>

              {/* Social Icons - Always visible on mobile */}
              <div className="flex gap-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-100">
                <div className="p-2 bg-white/10 rounded-full hover:bg-[#E50914] hover:text-white transition-colors text-gray-300">
                  <Instagram size={18} />
                </div>
                <div className="p-2 bg-white/10 rounded-full hover:bg-[#E50914] hover:text-white transition-colors text-gray-300">
                  <Youtube size={18} />
                </div>
                <div className="p-2 bg-white/10 rounded-full hover:bg-[#E50914] hover:text-white transition-colors text-gray-300">
                  <Twitter size={18} />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </main>
  );
}