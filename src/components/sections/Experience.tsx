"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Junior Full Stack Developer",
    company: "Cubo-Square Technologies Private Limited",
    period: "September 2025 - Present",
    description: "Developing and maintaining responsive web applications using modern frontend frameworks. Assisting in REST API integration, database management, and getting hands-on experience with deployment workflows and containerization.",
    skills: ["React", "Next.js", "Node.js", "Docker", "REST APIs", "Express", "MongoDB  "],
    highlights: [
      "Building scalable frontend interfaces using React & Next.js",
      "Integrating REST APIs and managing database interactions",
      "Collaborating on deployment workflows and containerization"
    ]
  }
];

export default function Experience() {
  const exp = experiences[0];

  return (
    <section id="experience" className="pb-10 relative overflow-hidden">
      {/* Background glowing orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric-blue/5 rounded-full blur-[100px] z-0 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-blue-500">Journey</span>
          </h2>
          <p className="text-slate-muted max-w-2xl mx-auto text-lg">
            A track record of delivering robust applications and resilient infrastructure.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glassmorphism rounded-2xl glow-border p-1"
        >
          <div className="bg-surface/80 rounded-xl p-8 md:p-12 backdrop-blur-md">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {exp.role}
                </h3>
                <div className="flex flex-wrap items-center gap-4 text-slate-muted font-medium">
                  <div className="flex items-center gap-2">
                    <Briefcase size={18} className="text-electric-blue" />
                    <span className="text-lg">{exp.company}</span>
                  </div>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric-blue/10 text-electric-blue border border-electric-blue/20 whitespace-nowrap self-start">
                <Calendar size={16} />
                <span className="font-semibold">{exp.period}</span>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-slate-muted text-lg leading-relaxed">
                {exp.description}
              </p>

              <div className="bg-background/50 rounded-xl p-6 border border-glass-border">
                <h4 className="text-foreground font-semibold mb-4 text-lg">Key Responsibilities & Learning</h4>
                <ul className="space-y-3">
                  {exp.highlights.map((highlight, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + idx * 0.1 }}
                      className="flex items-start gap-3 text-slate-muted"
                    >
                      <ChevronRight className="text-electric-blue shrink-0 mt-0.5" size={18} />
                      <span>{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-foreground font-semibold mb-3 text-sm uppercase tracking-wider">Tech Stack Used</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, idx) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + idx * 0.05 }}
                      className="px-4 py-1.5 bg-background border border-glass-border rounded-md text-sm text-slate-300 hover:border-electric-blue/50 hover:text-electric-blue transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
