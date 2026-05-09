"use client";

import { motion } from "framer-motion";
import { ExternalLink, Layers } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "CloudScale Microservices Dashboard",
    description: "A centralized real-time monitoring dashboard for Kubernetes clusters. Visualizes resource utilization, pod health, and network traffic using WebSockets and Next.js.",
    image: "bg-gradient-to-br from-slate-800 to-slate-900",
    tags: ["Next.js", "TypeScript", "Kubernetes", "WebSockets", "Tailwind CSS"],
    github: "#",
    live: "#"
  },
  {
    id: 2,
    title: "Serverless E-Commerce API",
    description: "Highly scalable e-commerce backend built on AWS Lambda and API Gateway. Handles authentication, inventory management, and stripe payment processing.",
    image: "bg-gradient-to-br from-slate-900 to-blue-900",
    tags: ["Node.js", "AWS Lambda", "DynamoDB", "Serverless", "Stripe"],
    github: "#",
    live: "#"
  },
  {
    id: 3,
    title: "Automated Deployment Pipeline Tool",
    description: "A CLI and web interface tool that abstracts complex CI/CD setups. Generates Dockerfiles and GitHub Actions workflows for multi-tier applications automatically.",
    image: "bg-gradient-to-br from-blue-900 to-slate-800",
    tags: ["React", "Go", "Docker", "GitHub Actions", "CLI"],
    github: "#",
    live: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="pt-10 pb-8 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-blue-500">Projects</span>
            </h2>
            <p className="text-slate-muted max-w-2xl text-lg">
              Showcasing scalable web applications, backend API integrations, and containerized infrastructure.
            </p>
          </div>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-electric-blue hover:text-blue-400 transition-colors group"
          >
            <span>View All on GitHub</span>
            <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group glassmorphism rounded-2xl overflow-hidden flex flex-col h-full hover:-translate-y-2 transition-transform duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)]"
            >
              {/* Image Placeholder */}
              <div className={`w-full h-48 ${project.image} relative overflow-hidden flex items-center justify-center`}>
                <Layers className="text-slate-700/50 w-24 h-24" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827] to-transparent opacity-80"></div>
                
                {/* Hover overlay links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-sm z-10">
                  <a href={project.github} className="p-3 bg-surface rounded-full text-foreground hover:text-electric-blue transition-colors">
                    <FaGithub size={20} />
                  </a>
                  <a href={project.live} className="p-3 bg-electric-blue rounded-full text-background hover:bg-electric-blue/80 transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-electric-blue transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-muted text-sm mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium text-electric-blue/80 px-2 py-1 bg-electric-blue/10 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
