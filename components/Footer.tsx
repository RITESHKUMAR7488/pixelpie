"use client";

import Link from "next/link";
import { Instagram, Youtube, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#050505] border-t border-white/10 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        
        {/* Brand Col */}
        <div className="md:col-span-1 flex flex-col gap-6">
          <Link href="/" className="flex items-center gap-3 group w-fit">
            <div className="bg-white p-1 rounded h-10 w-10 flex items-center justify-center group-hover:scale-105 transition-transform">
              <img src="/ppm_logo_animated.svg" alt="Pixel Pie Media Logo" className="h-full w-full object-contain" />
            </div>
            <span className="text-white font-heading font-bold uppercase tracking-widest text-sm sm:text-base group-hover:text-[#E50914] transition-colors">
              Pixel Pie Media
            </span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed font-medium">
            Creator management, visual production, and digital strategy. We turn attention into measurable, lasting business growth.
          </p>
        </div>

        {/* Links Col 1 */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-2">Company</h4>
          <Link href="/about" className="text-gray-400 hover:text-[#E50914] text-sm transition-colors">About Us</Link>
          <Link href="/work" className="text-gray-400 hover:text-[#E50914] text-sm transition-colors">Our Work</Link>
          <Link href="/contact" className="text-gray-400 hover:text-[#E50914] text-sm transition-colors">Contact</Link>
        </div>

        {/* Links Col 2 */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-2">Capabilities</h4>
          <Link href="/services" className="text-gray-400 hover:text-[#E50914] text-sm transition-colors">Social Media Strategy</Link>
          <Link href="/services" className="text-gray-400 hover:text-[#E50914] text-sm transition-colors">Website Building</Link>
          <Link href="/services" className="text-gray-400 hover:text-[#E50914] text-sm transition-colors">Visual Production</Link>
          <Link href="/creators" className="text-gray-400 hover:text-[#E50914] text-sm transition-colors">Creator Roster</Link>
        </div>

        {/* Contact Col */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-2">Get In Touch</h4>
          <a href="mailto:admin@thepixelpiemedia.com" className="text-gray-400 hover:text-[#E50914] text-sm transition-colors flex items-center gap-2">
            <Mail size={16} /> admin@thepixelpiemedia.com
          </a>
          <p className="text-gray-400 text-sm mt-2">
            New Delhi, India<br/>
            Available Globally
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Youtube size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-600 text-xs font-medium tracking-wide">
          © {new Date().getFullYear()} The Pixel Pie Media. All rights reserved.
        </p>
        <div className="flex gap-6">
          <Link href="#" className="text-gray-600 hover:text-white text-xs transition-colors">Privacy Policy</Link>
          <Link href="#" className="text-gray-600 hover:text-white text-xs transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}