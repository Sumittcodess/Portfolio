"use client";

import { motion } from "framer-motion";
import { Mail, Terminal, Cloud, Server } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#111827_1px,transparent_1px),linear-gradient(to_bottom,#111827_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-blue/10 rounded-full blur-[120px]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glassmorphism text-electric-blue text-sm font-medium">
              <Terminal size={16} />
              <span>Junior Full Stack Developer</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-tight">
              Building <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-blue-500 text-glow">
                Modern Web Apps
              </span>
            </h1> 

            <p className="text-lg text-slate-muted max-w-xl leading-relaxed">
              Hii I'm Sumit Soni,A passionate full stack developer focused on building responsive frontend interfaces and robust backend systems. Hands-on experience with React, Next.js, Node.js, and exploring modern deployment workflows.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/projects"
                className="px-8 py-3 rounded-md bg-electric-blue text-background font-semibold hover:bg-electric-blue/90 transition-colors box-glow-hover"
              >
                View Projects
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 rounded-md border border-glass-border glassmorphism text-foreground hover:border-electric-blue/50 transition-colors"
              >
                Contact Me
              </Link>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <SocialLink href="#" icon={<FaGithub size={24} />} label="GitHub" />
              <SocialLink href="#" icon={<FaLinkedin size={24} />} label="LinkedIn" />
              <SocialLink href="#" icon={<Mail />} label="Email" />
            </div>
          </motion.div>

          {/* Graphic/Image Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block h-[500px]"
          >
            <div className="absolute inset-0 glow-border rounded-2xl glassmorphism p-8 flex flex-col justify-between">
              {/* Fake Terminal / Code Window */}
              <div className="flex items-center gap-2 mb-6 border-b border-glass-border pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-xs text-slate-muted font-mono">deploy_pipeline.yml</span>
              </div>
              <div className="font-mono text-sm text-slate-muted space-y-2 flex-grow overflow-hidden">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <span className="text-electric-blue">name:</span> Production CI/CD
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                >
                  <span className="text-electric-blue">on:</span>
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 }}
                >
                  &nbsp;&nbsp;<span className="text-electric-blue">push:</span>
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.5 }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-electric-blue">branches:</span> [ "main" ]
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3 }}
                  className="mt-4"
                >
                  <span className="text-green-400">✓ Build successful</span>
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3.5 }}
                >
                  <span className="text-green-400">✓ Tests passed (142/142)</span>
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 4 }}
                >
                  <span className="text-electric-blue">➜ Deploying to Kubernetes cluster...</span>
                </motion.p>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-8 top-20 glassmorphism p-4 rounded-xl flex items-center gap-3"
              >
                <Cloud className="text-electric-blue" />
                <span className="text-sm font-medium">AWS Active</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -left-8 bottom-20 glassmorphism p-4 rounded-xl flex items-center gap-3"
              >
                <Server className="text-electric-blue" />
                <span className="text-sm font-medium">K8s Ready</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="text-slate-muted hover:text-electric-blue transition-colors p-2 rounded-full hover:bg-electric-blue/10"
    >
      {icon}
    </a>
  );
}
