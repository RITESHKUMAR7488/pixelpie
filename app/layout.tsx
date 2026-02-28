import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const syne = Syne({ subsets: ["latin"], variable: "--font-syne" });

export const metadata: Metadata = {
  title: "The Pixel Pie Media | Creator Management",
  description: "Premier creator management, social media strategy, and visual production.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${syne.variable} font-sans pt-20`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}