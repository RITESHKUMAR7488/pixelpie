"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      title: "Social Media Strategy & Management",
      hook: "Planned Content. Consistent Growth.",
      desc: "We build structured content calendars that ensure your brand shows up consistently and strategically across platforms. From trend-based reels to storytelling posts, our approach focuses on audience engagement, brand recall, and long-term social media growth.",
    },
    {
      title: "Performance Marketing & Paid Ads",
      hook: "Data-Driven Campaigns That Convert",
      desc: "Our performance marketing strategy combines audience targeting, ad creatives, A/B testing, and conversion tracking to maximise ROI. We continuously analyse campaign data to optimise results and turn attention into measurable business growth.",
    },
    {
      title: "Brand Design & Visual Identity",
      hook: "Design Systems That Strengthen Your Brand",
      desc: "We create brand-consistent visuals, digital assets, and communication designs that elevate your brand presence. From social media creatives to campaign graphics, every design is built to maintain clarity, consistency, and premium appeal.",
    },
    {
      title: "Video Editing & Content Optimization",
      hook: "Editing Designed for Engagement",
      desc: "We transform raw footage into platform-optimized content using storytelling, pacing, motion graphics, and sound design. Whether it’s reels, ads, or brand films, our editing process focuses on retention, clarity, and impact.",
    },
    {
      title: "Production, Shoots & Event Coverage",
      hook: "High-Quality Visual Production",
      desc: "From brand shoots and campaign videos to event coverage, we manage the entire production workflow — planning, filming, and post-production. The result is cinematic content aligned with your brand identity.",
    },
    {
      title: "Strategic Copywriting",
      hook: "Messaging That Drives Action",
      desc: "Our copywriting blends brand voice, audience psychology, and marketing frameworks to craft captions, scripts, and campaigns that resonate with your audience while supporting your overall marketing strategy.",
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
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E50914] to-red-600">Services.</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg font-medium"
        >
          Comprehensive digital solutions engineered for scale. We don't just participate in the culture; we shape it.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-white/[0.03] border border-white/10 p-8 rounded-2xl hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#E50914] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <h3 className="text-2xl font-heading font-bold mb-4 text-white group-hover:text-[#E50914] transition-colors leading-tight">
              {service.title}
            </h3>
            <p className="text-sm font-bold text-[#E50914] mb-4 uppercase tracking-wider">
              {service.hook}
            </p>
            <p className="text-gray-400 leading-relaxed text-sm flex-grow mb-8">
              {service.desc}
            </p>
            
            <div className="mt-auto">
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 text-white text-sm font-bold uppercase tracking-wider group-hover:text-[#E50914] transition-colors"
              >
                Let's Talk <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

    </main>
  );
}