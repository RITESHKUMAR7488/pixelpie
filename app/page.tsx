import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
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

  const clients = [
    "adda247.jpg", 
    "dtu.png", 
    "srcc.png", 
    "mahindra.jpg", 
    "united.png", 
    "disha.png", 
    "edushield.png"
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full overflow-x-hidden">
      
      {/* 1. HERO SECTION WITH VIDEO BACKGROUND */}
      <section className="relative w-full h-[90vh] flex flex-col items-center justify-center overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/60 via-[#0A0A0A]/70 to-[#0A0A0A] z-10"></div>
        
        <div className="relative z-20 text-center px-6 max-w-5xl mx-auto flex flex-col items-center mt-12">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold tracking-tighter uppercase leading-[0.9] mb-6">
            We Build <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E50914] to-red-600">Culture.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl font-medium tracking-wide">
            Premier creator management, visual production, and digital strategy. We turn attention into measurable business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/work" 
              className="bg-[#E50914] hover:bg-red-700 text-white px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(229,9,20,0.4)] hover:shadow-[0_0_30px_rgba(229,9,20,0.6)] hover:-translate-y-1"
            >
              View Our Work <ArrowRight size={18} />
            </Link>
            <Link 
              href="/services" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider transition-all flex items-center justify-center hover:-translate-y-1"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* 2. TRUSTED BY CLIENT MARQUEE */}
      <section className="w-full py-12 border-b border-white/10 bg-[#0A0A0A] overflow-hidden flex flex-col items-center">
        <p className="text-sm font-bold text-gray-500 uppercase tracking-[0.2em] mb-8 text-center">
          Trusted By Industry Leaders
        </p>
        
        <div className="w-full relative flex overflow-x-hidden">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-8 md:gap-12 px-8">
            {[...clients, ...clients].map((client, index) => (
              <div 
                key={index} 
                className="relative h-20 w-36 md:h-24 md:w-48 flex-shrink-0 bg-white rounded-xl transition-all duration-300 grayscale-0 md:grayscale opacity-95 md:opacity-70 md:hover:grayscale-0 md:hover:opacity-100 overflow-hidden border border-white/10"
              >
                <Image 
                  src={`/clients/${client}`} 
                  alt="Client Logo" 
                  fill
                  className="object-contain p-4"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. AGENCY IMPACT STATS SECTION */}
      <section className="w-full py-24 bg-[#0A0A0A] relative border-b border-white/10 overflow-hidden">
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-0 opacity-[0.03] pointer-events-none select-none">
          <h2 className="text-[12vw] font-heading font-extrabold whitespace-nowrap leading-none">
            PIXEL PIE MEDIA
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold uppercase tracking-wide text-white">
              Pixel Pie Media <br className="md:hidden" />
              <span className="text-[#E50914]">By The Numbers</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
            
            <div className="flex flex-col items-center justify-center text-center pt-8 md:pt-0 px-4 group">
              <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2 group-hover:text-white transition-colors">Projects</p>
              <p className="text-5xl md:text-7xl font-heading font-extrabold text-white tracking-tighter">
                125<span className="text-[#E50914]">+</span>
              </p>
            </div>

            <div className="flex flex-col items-center justify-center text-center pt-8 md:pt-0 px-4 group">
              <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2 group-hover:text-white transition-colors">Revenue Gen</p>
              <p className="text-5xl md:text-7xl font-heading font-extrabold text-white tracking-tighter">
                30M<span className="text-[#E50914]">+</span>
              </p>
            </div>

            <div className="flex flex-col items-center justify-center text-center pt-8 md:pt-0 px-4 group">
              <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2 group-hover:text-white transition-colors">Impressions</p>
              <p className="text-5xl md:text-7xl font-heading font-extrabold text-white tracking-tighter">
                100M<span className="text-[#E50914]">+</span>
              </p>
            </div>

            <div className="flex flex-col items-center justify-center text-center pt-8 md:pt-0 px-4 group">
              <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2 group-hover:text-white transition-colors">Views</p>
              <p className="text-5xl md:text-7xl font-heading font-extrabold text-white tracking-tighter">
                10M<span className="text-[#E50914]">+</span>
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. SERVICES GRID */}
      <section className="w-full py-24 px-6 max-w-7xl mx-auto relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E50914]/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold uppercase tracking-tighter">
            What We <span className="text-[#E50914]">Do</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative bg-white/[0.03] border border-white/10 p-8 rounded-2xl hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#E50914] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <h3 className="text-xl font-heading font-bold mb-3 text-white group-hover:text-[#E50914] transition-colors leading-tight">
                {service.title}
              </h3>
              <p className="text-sm font-bold text-[#E50914] mb-4 uppercase tracking-wider">
                {service.hook}
              </p>
              <p className="text-gray-400 leading-relaxed text-sm flex-grow">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}