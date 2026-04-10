"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Work", path: "/work" },
    { name: "Websites", path: "/websites" },
    { name: "Services", path: "/services" },
    { name: "Creators", path: "/creators" },
    { name: "About", path: "/about" },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/10 py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        
        {/* LOGO IMAGE */}
        <Link href="/" className="flex items-center group z-50">
          <div className="w-48 md:w-56 h-14 flex items-center justify-start group-hover:opacity-80 transition-opacity">
            <object 
              data="/ppm_logo_animated.svg" 
              type="image/svg+xml" 
              className="w-full h-full object-contain pointer-events-none"
              aria-label="Pixel Pie Media Logo"
            />
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.path}
              className="text-sm font-bold uppercase tracking-widest text-gray-300 hover:text-[#E50914] transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/contact" 
            className="bg-[#E50914] text-white px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-red-700 transition-colors shadow-[0_0_15px_rgba(229,9,20,0.3)] hover:shadow-[0_0_25px_rgba(229,9,20,0.5)]"
          >
            Contact
          </Link>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button 
          className="md:hidden text-white p-2 z-50 hover:text-[#E50914] transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE NAVIGATION OVERLAY */}
      <div 
        className={`fixed inset-0 bg-[#0A0A0A] z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {navLinks.map((link) => (
          <Link 
            key={link.name} 
            href={link.path}
            onClick={() => setIsOpen(false)}
            className="text-2xl font-heading font-bold uppercase tracking-widest text-white hover:text-[#E50914] transition-colors"
          >
            {link.name}
          </Link>
        ))}
        <Link 
          href="/contact" 
          onClick={() => setIsOpen(false)}
          className="bg-[#E50914] text-white px-8 py-4 rounded-full text-lg font-bold uppercase tracking-widest mt-4 shadow-[0_0_15px_rgba(229,9,20,0.3)]"
        >
          Contact Us
        </Link>
      </div>
    </header>
  );
}