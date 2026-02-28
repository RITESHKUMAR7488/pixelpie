"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, ArrowRight } from "lucide-react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // REPLACE THE STRING BELOW WITH YOUR ACTUAL FORMSPREE URL
      const response = await fetch("https://formspree.io/f/xlgwaezd", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset(); // Clears the form fields
        // Reset the success state after 3 seconds so they can submit again if needed
        setTimeout(() => setIsSubmitted(false), 3000);
      } else {
        alert("Oops! There was a problem submitting your form. Please try again.");
      }
    } catch (error) {
      alert("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen pt-32 px-6 max-w-7xl mx-auto pb-24">
      
      {/* HEADER */}
      <div className="text-center mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold uppercase tracking-tighter"
        >
          Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E50914] to-red-600">Talk.</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg"
        >
          Ready to scale your brand? Drop us a line. We are actively taking on new talent and brand partnerships for Q3.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* LEFT COLUMN: CONTACT INFO */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col gap-12"
        >
          <div>
            <h2 className="text-3xl font-heading font-bold uppercase tracking-wide text-white mb-6">
              Get In Touch
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Whether you are a creator looking for representation or a brand looking to execute a high-ROI campaign, our inbox is open. We typically respond within 24 hours.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex items-start gap-4 group">
              <div className="p-4 bg-white/5 rounded-full text-[#E50914] group-hover:bg-[#E50914] group-hover:text-white transition-colors duration-300">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-1">Email Us</p>
                <a href="mailto:hello@pixelpiemedia.com" className="text-xl font-medium text-white hover:text-[#E50914] transition-colors">
                  hello@pixelpiemedia.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="p-4 bg-white/5 rounded-full text-[#E50914] group-hover:bg-[#E50914] group-hover:text-white transition-colors duration-300">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-1">HQ</p>
                <p className="text-xl font-medium text-white">
                  New Delhi, India<br />
                  <span className="text-gray-400 text-base">Available for global campaigns</span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: THE FORM */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white/[0.03] border border-white/10 p-8 md:p-12 rounded-2xl relative overflow-hidden"
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#E50914]/10 rounded-full blur-[80px] -z-10"></div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-bold uppercase tracking-wider text-gray-400">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required
                  className="bg-[#0A0A0A] border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-[#E50914] focus:ring-1 focus:ring-[#E50914] transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-bold uppercase tracking-wider text-gray-400">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required
                  className="bg-[#0A0A0A] border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-[#E50914] focus:ring-1 focus:ring-[#E50914] transition-all"
                  placeholder="john@brand.com"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="service" className="text-sm font-bold uppercase tracking-wider text-gray-400">I am looking for...</label>
              <select 
                id="service" 
                name="service" 
                className="bg-[#0A0A0A] border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-[#E50914] focus:ring-1 focus:ring-[#E50914] transition-all appearance-none"
              >
                <option value="creator">Creator Representation</option>
                <option value="brand">Brand Campaign & Strategy</option>
                <option value="production">Video Production / Event Shoot</option>
                <option value="other">Other Inquiry</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-bold uppercase tracking-wider text-gray-400">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows={4}
                required
                className="bg-[#0A0A0A] border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-[#E50914] focus:ring-1 focus:ring-[#E50914] transition-all resize-none"
                placeholder="Tell us about your project or goals..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting || isSubmitted}
              className={`mt-4 w-full py-4 rounded-lg font-bold uppercase tracking-widest flex items-center justify-center gap-3 transition-all duration-300 ${
                isSubmitted 
                  ? "bg-green-600 text-white" 
                  : "bg-[#E50914] hover:bg-red-700 text-white shadow-[0_0_15px_rgba(229,9,20,0.3)] hover:shadow-[0_0_25px_rgba(229,9,20,0.5)]"
              }`}
            >
              {isSubmitting ? (
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : isSubmitted ? (
                "Message Sent!"
              ) : (
                <>Send Message <Send size={18} /></>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </main>
  );
}