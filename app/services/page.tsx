"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      num: "01",
      title: "SOCIAL MEDIA STRATEGY & MANAGEMENT",
      hook: "PLANNED CONTENT. CONSISTENT GROWTH.",
      desc: "We build structured content calendars that ensure your brand shows up consistently and strategically across platforms. From trend-based reels to storytelling posts, our approach focuses on audience engagement, brand recall, and long-term social media growth.",
    },
    {
      num: "02",
      title: "PERFORMANCE MARKETING & PAID ADS",
      hook: "DATA-DRIVEN CAMPAIGNS THAT CONVERT",
      desc: "Our performance marketing strategy combines audience targeting, ad creatives, A/B testing, and conversion tracking to maximise ROI. We continuously analyse campaign data to optimise results and turn attention into measurable business growth.",
    },
    {
      num: "03",
      title: "BRAND DESIGN & VISUAL IDENTITY",
      hook: "DESIGN SYSTEMS THAT STRENGTHEN YOUR BRAND",
      desc: "We create brand-consistent visuals, digital assets, and communication designs that elevate your brand presence. From social media creatives to campaign graphics, every design is built to maintain clarity, consistency, and premium appeal.",
    },
    {
      num: "04",
      title: "VIDEO EDITING & CONTENT OPTIMIZATION",
      hook: "EDITING DESIGNED FOR ENGAGEMENT",
      desc: "We transform raw footage into platform-optimized content using storytelling, pacing, motion graphics, and sound design. Whether it’s reels, ads, or brand films, our editing process focuses on retention, clarity, and impact.",
    },
    {
      num: "05",
      title: "PRODUCTION, SHOOTS & EVENT COVERAGE",
      hook: "HIGH-QUALITY VISUAL PRODUCTION",
      desc: "From brand shoots and campaign videos to event coverage, we manage the entire production workflow — planning, filming, and post-production. The result is cinematic content aligned with your brand identity.",
    },
    {
      num: "06",
      title: "STRATEGIC COPYWRITING",
      hook: "MESSAGING THAT DRIVES ACTION",
      desc: "Our copywriting blends brand voice, audience psychology, and marketing frameworks to craft captions, scripts, and campaigns that resonate with your audience while supporting your overall marketing strategy.",
    },
  ];

  return (
    <main className="min-h-screen pt-32 px-6 max-w-7xl mx-auto pb-32 bg-[#0A0A0A]">
      
      <div className="mb-24 relative">
        <p className="text-sm font-bold text-[#E50914] uppercase tracking-widest mb-4">— OUR CAPABILITIES</p>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 80 }}
          className="text-6xl md:text-8xl lg:text-9xl font-heading font-extrabold uppercase tracking-tighter text-white leading-[0.85] max-w-4xl"
        >
          EVERYTHING <br /><span className="text-[#E50914]">YOU NEED.</span>
        </motion.h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1 }}
            className="group bg-white/[0.02] border border-white/10 p-10 hover:bg-white/[0.05] hover:border-[#E50914] transition-all duration-300 flex flex-col h-full relative"
          >
            <div className="text-5xl font-heading font-extrabold text-white/10 group-hover:text-stroke group-hover:text-stroke-hover absolute top-8 right-8 transition-all duration-300">
              {service.num}
            </div>
            
            <h3 className="text-3xl font-heading font-extrabold mb-6 text-white group-hover:text-[#E50914] transition-colors leading-[1.1] max-w-[80%]">
              {service.title}
            </h3>
            <p className="text-xs font-bold text-gray-400 mb-6 uppercase tracking-[0.2em] border-l-2 border-[#E50914] pl-3">
              {service.hook}
            </p>
            <p className="text-gray-400 leading-relaxed text-base flex-grow mb-10 font-medium">
              {service.desc}
            </p>
            
            <div className="mt-auto">
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 bg-transparent text-white text-sm font-bold uppercase tracking-widest hover:text-[#E50914] transition-colors group/btn"
              >
                GET STARTED <ArrowRight size={16} className="group-hover/btn:translate-x-2 transition-transform" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

    </main>
  );
}