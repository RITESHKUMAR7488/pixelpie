"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function Home() {
  const services = [
    {
      title: "SOCIAL MEDIA STRATEGY",
      desc: "Structured content calendars, trend-based reels, and storytelling posts built to maximize engagement, brand recall, and long-term platform growth.",
      image: "/work/1.jpg"
    },
    {
      title: "WEBSITE BUILDING",
      desc: "Modern, blazing-fast, and responsive websites architected for exceptional UI/UX, built precisely to turn your digital traffic into business revenue.",
      image: "/work/DSC02856.jpg"
    },
    {
      title: "VISUAL PRODUCTION",
      desc: "From brand shoots and campaign videos to event coverage, cinematic content created to align completely with your brand identity.",
      image: "/work/DSC02112.jpg"
    },
  ];

  const clients = [
    "adda247.jpg", "dtu.png", "srcc.png", "mahindra.jpg", "united.png", "disha.png", "edushield.png"
  ];

  const processSteps = [
    { num: "01", title: "DISCOVER & UNDERSTAND", desc: "We immerse in your brand, audience, and ambitions. Deep listening before any creative output." },
    { num: "02", title: "STRATEGIZE & PLAN", desc: "Data-backed strategy meets creative intuition. Comprehensive content blueprints — platform-specific and commercially sharp." },
    { num: "03", title: "CREATE & PRODUCE", desc: "Vision becomes reality. Scripts, shoots, design, editing — rigorous and quality-focused at every stage." },
    { num: "04", title: "DISTRIBUTE & AMPLIFY", desc: "Right content, right time, right people. Organic strategy meets paid performance for maximum reach." },
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
    <main className="flex min-h-screen flex-col items-center justify-between w-full overflow-x-hidden bg-[#0A0A0A]">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden bg-black">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-50"
          >
            <source src="/0311 (5) (1).mp4" type="video/mp4" />
          </video>
          {/* Top to Bottom Gradient Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/80 via-transparent to-[#0A0A0A]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
          
          <motion.div 
            initial="hidden"
            animate="show"
            variants={containerVariants}
            className="lg:col-span-9 flex flex-col justify-center"
          >
            <motion.h1 variants={itemVariants} className="text-7xl md:text-[10rem] font-heading font-extrabold tracking-tighter uppercase leading-[0.85] mb-8 text-white drop-shadow-xl">
              WE BUILD <br />
              <span className="text-[#E50914]">CULTURE.</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl font-medium tracking-wide border-l-2 border-[#E50914] pl-6 drop-shadow-md">
              Creator management, visual production, and digital strategy — turning attention into measurable, lasting business growth for brands that refuse to be ordinary.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6">
              <Link href="/work" className="bg-[#E50914] hover:bg-white hover:text-black text-white px-8 py-5 rounded-none text-sm font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3 group shadow-[0_0_20px_rgba(229,9,20,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)]">
                <Play size={16} className="fill-current group-hover:scale-110 transition-transform" /> View Our Work
              </Link>
              <Link href="/services" className="bg-transparent border border-white/40 hover:border-white text-white px-8 py-5 rounded-none text-sm font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center backdrop-blur-sm">
                Explore Services
              </Link>
            </motion.div>
          </motion.div>

          {/* Hero Stats Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="hidden lg:flex lg:col-span-3 flex-col justify-center gap-12 border-l border-white/20 pl-12"
          >
            {[
              { label: "PROJECTS", val: "125+" },
              { label: "REVENUE GEN", val: "₹30M+" },
              { label: "IMPRESSIONS", val: "100M+" }
            ].map((stat, i) => (
              <div key={i} className="group cursor-default">
                <h3 className="text-5xl font-heading font-bold text-[#E50914] tracking-tighter mb-2 group-hover:scale-105 transition-transform origin-left drop-shadow-lg">{stat.val}</h3>
                <p className="text-xs font-bold text-gray-300 uppercase tracking-[0.2em]">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 2. MORE THAN AN AGENCY */}
      <section className="w-full py-32 bg-white text-black relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <p className="text-sm font-bold text-[#E50914] uppercase tracking-widest mb-4">— WHO WE ARE</p>
            <h2 className="text-5xl md:text-7xl font-heading font-extrabold uppercase leading-[0.9] mb-8">
              MORE THAN <br />AN AGENCY
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed font-medium">
              We are architects of cultural moments. Pixel Pie Media sits at the intersection of creative vision and strategic execution — where brands become movements and creators become icons.
            </p>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed font-medium">
              Based in New Delhi, we work with brands that refuse to be ordinary and creators who are ready to dominate their niche.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-[#E50914] transition-colors shadow-lg hover:shadow-xl">
              Our Story <ArrowRight size={18} />
            </Link>
          </motion.div>
          
          <div className="relative h-[600px] w-full">
            <Image src="/work/DSC07884.jpg" alt="Team" fill className="object-cover rounded-none grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl" />
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-[#E50914] z-[-1]"></div>
          </div>
        </div>
      </section>

      {/* 3. OUR SERVICES */}
      <section className="w-full py-32 bg-[#0A0A0A] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-sm font-bold text-[#E50914] uppercase tracking-widest mb-4">— WHAT WE DO</p>
            <h2 className="text-5xl md:text-7xl font-heading font-extrabold uppercase text-white">WHAT WE DO</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative h-[450px] overflow-hidden cursor-pointer border border-white/10"
              >
                <Image src={service.image} alt={service.title} fill className="object-cover opacity-40 group-hover:opacity-20 transition-opacity duration-500 grayscale group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent p-8 flex flex-col justify-end">
                  <h3 className="text-2xl font-heading font-bold mb-4 text-white group-hover:text-[#E50914] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link href="/services" className="inline-block border-b border-white text-white font-bold uppercase tracking-widest pb-1 hover:text-[#E50914] hover:border-[#E50914] transition-colors">
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* 4. RED STATS BANNER */}
      <section className="w-full bg-[#E50914] py-20 flex flex-col items-center border-y border-red-800 shadow-[inset_0_0_50px_rgba(0,0,0,0.3)]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center w-full">
          {[
            { label: "PROJECTS DELIVERED", val: "125+" },
            { label: "REVENUE GENERATED", val: "₹30M+" },
            { label: "TOTAL IMPRESSIONS", val: "100M+" },
            { label: "VIEWS ACHIEVED", val: "10M+" }
          ].map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center group cursor-default">
              <p className="text-5xl md:text-7xl font-heading font-extrabold text-white tracking-tighter drop-shadow-lg group-hover:-translate-y-2 transition-transform duration-300">
                {stat.val}
              </p>
              <p className="text-xs font-bold text-red-200 uppercase tracking-widest mt-4">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CLIENT MARQUEE - REBUILT WITH WHITE CARDS */}
      <section className="w-full py-16 bg-[#0A0A0A] overflow-hidden border-b border-white/10">
        <p className="text-xs font-bold text-gray-600 uppercase tracking-[0.3em] mb-10 text-center">
          — TRUSTED BY INDUSTRY LEADERS —
        </p>
        <div className="w-full relative flex overflow-x-hidden">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-6 px-6">
            {[...clients, ...clients, ...clients].map((client, index) => (
              <div 
                key={index} 
                className="relative h-20 w-40 flex-shrink-0 bg-white rounded-md flex items-center justify-center p-3 opacity-90 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
              >
                <div className="relative w-full h-full">
                  <Image 
                    src={`/clients/${client}`} 
                    alt="Client Logo" 
                    fill 
                    className="object-contain" 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. OUR PROCESS */}
      <section className="w-full py-32 bg-[#0A0A0A] relative">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-sm font-bold text-[#E50914] uppercase tracking-widest mb-4 text-center">— HOW WE WORK</p>
          <h2 className="text-5xl md:text-7xl font-heading font-extrabold uppercase text-white text-center mb-20">OUR PROCESS</h2>
          
          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col md:flex-row gap-6 md:gap-12 items-start group hover:bg-white/[0.02] p-6 rounded-2xl transition-colors border border-transparent hover:border-white/5"
              >
                <span className="text-5xl font-heading font-bold text-white/10 group-hover:text-[#E50914] transition-colors duration-500">
                  {step.num}
                </span>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-lg">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA SECTION */}
      <section className="w-full py-32 bg-black relative border-t border-white/10">
        <div className="absolute inset-0 bg-[#E50914]/5 blur-[100px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <p className="text-sm font-bold text-[#E50914] uppercase tracking-widest mb-4">READY TO GROW?</p>
          <h2 className="text-5xl md:text-7xl font-heading font-extrabold uppercase text-white mb-10 leading-[0.9]">
            LET'S BUILD SOMETHING <br /> <span className="text-stroke text-stroke-hover transition-all duration-300 cursor-default">REMARKABLE.</span>
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/contact" className="bg-[#E50914] text-white px-10 py-5 font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-300 shadow-[0_0_20px_rgba(229,9,20,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]">
              START A PROJECT
            </Link>
            <Link href="/work" className="bg-transparent border border-white text-white px-10 py-5 font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-300">
              SEE OUR WORK
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}