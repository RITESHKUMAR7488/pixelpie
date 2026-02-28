"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Target, Zap, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const values = [
    {
      icon: <Target size={32} />,
      title: "Data-Driven Strategy",
      desc: "We don't guess. Every piece of content, every ad spend, and every creator partnership is backed by analytics and audience psychology."
    },
    {
      icon: <Zap size={32} />,
      title: "Speed of Culture",
      desc: "Trends die in weeks. We operate with high-speed execution to ensure your brand is driving the conversation, not just reacting to it."
    },
    {
      icon: <Users size={32} />,
      title: "Creator-First",
      desc: "We understand creators because we are them. We build long-term equity for our talent, ensuring sustainable growth over cheap virality."
    }
  ];

  return (
    <main className="min-h-screen pt-32 px-6 max-w-7xl mx-auto pb-24">
      
      {/* HEADER */}
      <div className="text-center mb-24">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold uppercase tracking-tighter"
        >
          The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E50914] to-red-600">Vision.</span>
        </motion.h1>
      </div>

      {/* THE STORY SECTION */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative h-[600px] w-full rounded-2xl overflow-hidden border border-white/10"
        >
          {/* Using one of your high-quality images as the team/vibe shot */}
          <Image 
            src="/work/DSC02856.jpg" 
            alt="The Pixel Pie Media Team" 
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80"></div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold uppercase tracking-wide text-white mb-4">
            We are <span className="text-[#E50914]">Pixel Pie.</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            The digital landscape is noisy. Most agencies are busy chasing vanity metrics—likes, views, and fleeting moments. We play a different game. 
          </p>
          <p className="text-gray-400 text-lg leading-relaxed">
            The Pixel Pie Media was built to bridge the gap between high-end visual production and ruthless performance marketing. Whether we are managing a top-tier creator's brand or producing a nationwide campaign for an industry leader, our focus remains absolute: turn attention into measurable business growth.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed">
            We don't just make noise. We build culture.
          </p>
          
          <div className="mt-8">
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 text-[#E50914] font-bold uppercase tracking-widest hover:text-white transition-colors group"
            >
              Work With Us 
              <span className="group-hover:translate-x-2 transition-transform duration-300">
                <ArrowRight size={20} />
              </span>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* CORE VALUES */}
      <section>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-heading font-bold uppercase tracking-wider mb-4">
            How We Operate
          </h2>
          <div className="w-24 h-1 bg-[#E50914] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/[0.03] border border-white/10 p-8 rounded-2xl hover:bg-white/[0.05] transition-colors group"
            >
              <div className="text-[#E50914] mb-6 group-hover:scale-110 transition-transform origin-left duration-300">
                {value.icon}
              </div>
              <h3 className="text-xl font-heading font-bold uppercase tracking-wide text-white mb-4">
                {value.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {value.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

    </main>
  );
}