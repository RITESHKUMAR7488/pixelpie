"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Target, Zap, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const values = [
    {
      icon: <Target size={32} />,
      title: "DATA-DRIVEN STRATEGY",
      desc: "We don't guess. Every piece of content, every ad spend, and every creator partnership is backed by analytics and audience psychology."
    },
    {
      icon: <Zap size={32} />,
      title: "SPEED OF CULTURE",
      desc: "Trends die in weeks. We operate with high-speed execution to ensure your brand is driving the conversation, not just reacting to it."
    },
    {
      icon: <Users size={32} />,
      title: "CREATOR-FIRST",
      desc: "We understand creators because we are them. We build long-term equity for our talent, ensuring sustainable growth over cheap virality."
    }
  ];

  return (
    <main className="min-h-screen pt-32 px-6 max-w-7xl mx-auto pb-32 bg-[#0A0A0A]">
      
      {/* HEADER */}
      <div className="text-center mb-32 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#E50914]/10 blur-[100px] pointer-events-none"></div>
        <p className="text-sm font-bold text-[#E50914] uppercase tracking-widest mb-6">— WHO WE ARE</p>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 80 }}
          className="text-6xl md:text-8xl lg:text-9xl font-heading font-extrabold uppercase tracking-tighter text-white leading-[0.85]"
        >
          THE <br /><span className="text-[#E50914]">VISION.</span>
        </motion.h1>
      </div>

      {/* THE STORY SECTION */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-40">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative h-[600px] w-full"
        >
          <Image 
            src="/work/DSC02856.jpg" 
            alt="The Pixel Pie Media Team" 
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-700 z-10 relative"
          />
          <div className="absolute -top-8 -right-8 w-64 h-64 bg-[#E50914] z-0"></div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-8"
        >
          <h2 className="text-4xl md:text-6xl font-heading font-extrabold uppercase leading-[0.9] text-white">
            WE ARE <br /><span className="text-stroke text-stroke-hover transition-colors duration-300">PIXEL PIE.</span>
          </h2>
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-medium border-l-2 border-[#E50914] pl-6">
            <p>
              The digital landscape is noisy. Most agencies are busy chasing vanity metrics—likes, views, and fleeting moments. We play a different game. 
            </p>
            <p>
              The Pixel Pie Media was built to bridge the gap between high-end visual production and ruthless performance marketing. Whether we are managing a top-tier creator's brand or producing a nationwide campaign for an industry leader, our focus remains absolute: turn attention into measurable business growth.
            </p>
            <p className="text-white font-bold">
              We don't just make noise. We build culture.
            </p>
          </div>
          
          <div>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-3 bg-[#E50914] text-white px-8 py-5 font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-300 group"
            >
              WORK WITH US 
              <span className="group-hover:translate-x-2 transition-transform duration-300">
                <ArrowRight size={20} />
              </span>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* CORE VALUES */}
      <section>
        <div className="mb-16">
          <p className="text-sm font-bold text-[#E50914] uppercase tracking-widest mb-4">— OUR VALUES</p>
          <h2 className="text-5xl md:text-7xl font-heading font-extrabold uppercase text-white">
            HOW WE OPERATE
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/[0.02] border border-white/10 p-10 hover:border-[#E50914] transition-colors duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 text-white/5 font-heading font-extrabold text-8xl group-hover:text-[#E50914]/10 transition-colors duration-500 pointer-events-none">
                0{index + 1}
              </div>
              <div className="text-[#E50914] mb-8 group-hover:scale-110 transition-transform origin-left duration-300 relative z-10">
                {value.icon}
              </div>
              <h3 className="text-2xl font-heading font-bold uppercase tracking-wide text-white mb-4 relative z-10">
                {value.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm relative z-10">
                {value.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

    </main>
  );
}