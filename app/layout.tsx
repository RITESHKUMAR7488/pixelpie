import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const syne = Syne({ subsets: ["latin"], variable: "--font-syne" });

// Base Metadata for On-Page SEO
export const metadata: Metadata = {
  title: "The Pixel Pie Media | Digital Agency & Web Development",
  description: "Premier creator management, social media strategy, visual production, and modern web development agency founded by Rishav Raj.",
  keywords: ["Creator Management", "Social Media Strategy", "Web Development", "Next.js", "Visual Production", "Digital Agency"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thepixelpiemedia.com",
    title: "The Pixel Pie Media",
    description: "Turning attention into measurable, lasting business growth.",
    siteName: "The Pixel Pie Media",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Pixel Pie Media",
    description: "Turning attention into measurable, lasting business growth.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  // JSON-LD Structured Data to force Google to understand site architecture and organization
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "The Pixel Pie Media",
    "image": "https://thepixelpiemedia.com/ppm_logo_animated.svg",
    "description": "Creator management, visual production, and digital strategy agency.",
    "founder": {
      "@type": "Person",
      "name": "Rishav Raj"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "New Delhi",
      "addressCountry": "IN"
    },
    "url": "https://thepixelpiemedia.com"
  };

  return (
    <html lang="en">
      <body className={`${inter.variable} ${syne.variable} font-sans pt-20 flex flex-col min-h-screen bg-[#0A0A0A] text-white`}>
        {/* Injecting Schema Markup for Rich Snippets eligibility */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}