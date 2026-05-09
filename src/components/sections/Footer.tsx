"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const footerLinks = [
  { name: "About", href: "/" },
  { name: "Skills", href: "/skills" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-8 z-10 overflow-hidden">
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-electric-blue/50 to-transparent"></div>

      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-32 bg-electric-blue/5 blur-[80px] rounded-t-full pointer-events-none"></div>

      <div className="bg-surface/30 backdrop-blur-md pt-10 pb-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center text-center space-y-8">

            {/* Brand Logo */}
            <Link href="/" className="text-3xl font-bold text-foreground text-glow flex items-center gap-2 group">
              <span className="text-electric-blue group-hover:text-blue-400 transition-colors">&lt;</span>
              DevOps FullStack
              <span className="text-electric-blue group-hover:text-blue-400 transition-colors">/&gt;</span>
            </Link>

            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-slate-muted hover:text-electric-blue transition-colors uppercase tracking-widest relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-electric-blue transition-all group-hover:w-full box-glow"></span>
                </Link>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              <SocialLink href="#" icon={<FaGithub size={22} />} label="GitHub" />
              <SocialLink href="#" icon={<FaLinkedin size={22} />} label="LinkedIn" />
              <SocialLink href="#" icon={<FaTwitter size={22} />} label="Twitter" />
              <SocialLink href="/contact" icon={<Mail size={22} />} label="Email" />
            </div>

          </div>

          {/* Copyright text at the bottom */}
          <div className="mt-6 text-center">
            <p className="text-slate-600 text-sm">
              &copy; {currentYear} Personal Portfolio. Built with Next.js & Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <motion.a
      whileHover={{ y: -3 }}
      href={href}
      aria-label={label}
      className="text-slate-muted hover:text-electric-blue transition-colors"
    >
      {icon}
    </motion.a>
  );
}
