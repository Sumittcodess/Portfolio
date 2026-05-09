"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight, Copy, CheckCircle2 } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const emailAddress = "sumitsoni0544@gmail.com"; 
   
  const handleCopyEmail = () => { 
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);  
  };

  return (
    <section className="py-12 relative max-w-5xl mx-auto px-6 lg:px-8">
      {/* Background glowing orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-electric-blue/5 rounded-full blur-[100px] z-0 pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
          Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-blue-500">Connect</span>
        </h2>
        <p className="text-slate-muted max-w-2xl mx-auto text-lg">
          I'm currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        {/* Main Email Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:col-span-2 glassmorphism rounded-2xl p-8 md:p-12 glow-border flex flex-col justify-between group"
        >
          <div>
            <div className="w-14 h-14 rounded-full bg-electric-blue/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Mail className="text-electric-blue w-7 h-7" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Drop me an email</h3>
            <p className="text-slate-muted mb-8 max-w-md leading-relaxed">
              The fastest way to reach me is directly through email. I'm always excited to discuss new projects, tech, or potential roles.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`mailto:${emailAddress}`}
              className="px-6 py-3 rounded-md bg-electric-blue text-background font-semibold hover:bg-electric-blue/90 transition-colors box-glow-hover flex items-center justify-center gap-2"
            >
              <Mail size={18} />
              Send Email
            </a>
            <button
              onClick={handleCopyEmail}
              className="px-6 py-3 rounded-md border border-glass-border bg-surface hover:border-electric-blue/50 text-slate-300 transition-colors flex items-center justify-center gap-2 group/copy"
            >
              {copied ? (
                <>
                  <CheckCircle2 size={18} className="text-green-400" />
                  <span className="text-green-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={18} className="group-hover/copy:text-electric-blue transition-colors" />
                  <span>Copy Address</span>
                </>
              )}
            </button>
          </div>
        </motion.div>

        {/* Social Cards */}
        <div className="flex flex-col gap-6">
          <motion.a
            href="https://www.linkedin.com/in/sumit-soni-018366310/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glassmorphism rounded-2xl p-8 flex-1 flex flex-col justify-center items-center text-center group hover:border-electric-blue/50 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
          >
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowUpRight className="text-electric-blue w-5 h-5" />
            </div>
            <div className="w-16 h-16 rounded-full bg-[#0A66C2]/10 flex items-center justify-center mb-4 group-hover:bg-[#0A66C2]/20 transition-colors">
              <FaLinkedin className="text-[#0A66C2] w-8 h-8" />
            </div>
            <h4 className="text-lg font-bold text-foreground mb-1">LinkedIn</h4>
            <p className="text-sm text-slate-muted">Let's connect professionally</p>
          </motion.a>

          <motion.a
            href="https://github.com/Sumittcodess"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glassmorphism rounded-2xl p-8 flex-1 flex flex-col justify-center items-center text-center group hover:border-electric-blue/50 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
          >
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowUpRight className="text-electric-blue w-5 h-5" />
            </div>
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:bg-white/10 transition-colors">
              <FaGithub className="text-foreground w-8 h-8" />
            </div>
            <h4 className="text-lg font-bold text-foreground mb-1">GitHub</h4>
            <p className="text-sm text-slate-muted">Check out my repositories</p>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
