"use client";

import { motion } from "framer-motion";
import { Code2, Server } from "lucide-react";

const fullStackSkills = [
  "HTML", "CSS", "Tailwind CSS", "React", "JavaScript", "TypeScript", "Redux Toolkit", "TanStack Query", "Next.js",
  "Node.js", "Express.js", "MongoDB", "REST APIs", "Authentication"
];

const devOpsSkills = [
  "Linux", "Docker", "Kubernetes", "GitHub Actions", "CI/CD Pipelines",
  "AWS Services", "Nginx", "Deployment Automation",
  "Monitoring Systems", "Cloud Infrastructure"
];

export default function Skills() {
  return (
    <section id="skills" className="pt-10 pb-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-blue-500">Arsenal</span>
          </h2>
          <p className="text-slate-muted max-w-2xl mx-auto text-lg">
            Comprehensive expertise across modern frontend ecosystems and production-grade cloud infrastructure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Full Stack Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glow-border rounded-2xl glassmorphism p-8 h-full"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-electric-blue/10 rounded-lg">
                <Code2 className="text-electric-blue w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Full Stack Engineering</h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {fullStackSkills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="px-4 py-2 rounded-md bg-surface border border-glass-border text-slate-muted text-sm font-medium hover:border-electric-blue/50 hover:text-electric-blue transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* DevOps Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glow-border rounded-2xl glassmorphism p-8 h-full"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-blue-500/10 rounded-lg">
                <Server className="text-blue-500 w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">DevOps & Cloud</h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {devOpsSkills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="px-4 py-2 rounded-md bg-surface border border-glass-border text-slate-muted text-sm font-medium hover:border-blue-500/50 hover:text-blue-400 transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
