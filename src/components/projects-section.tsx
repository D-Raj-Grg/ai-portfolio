"use client";

import { motion } from "framer-motion";
import { ExternalLink, Zap, ShoppingCart, Target, Palette } from "lucide-react";
import { BentoGrid, BentoCard } from "./magicui/bento-grid";
import { GradientText } from "./magicui/animated-text";
import { Badge } from "./ui/badge";

interface Project {
  title: string;
  description: string;
  longDescription: string;
  icon: any;
  link: string;
  tags: string[];
  color: string;
  gradient: string;
}

const projects: Project[] = [
  {
    title: "Astra Theme",
    description: "The most popular WordPress theme of all time",
    longDescription:
      "Fast, lightweight & customizable WordPress theme trusted by millions. Built with performance and flexibility at its core, Astra supports all major page builders and offers extensive design options.",
    icon: Palette,
    link: "https://wpastra.com",
    tags: ["WordPress", "Theme Development", "Performance"],
    color: "#7143e3",
    gradient: "from-purple-500/20 to-yellow-500/20",
  },
  {
    title: "OttoKit",
    description: "All-in-one automation platform for WordPress & beyond",
    longDescription:
      "Formerly SureTriggers - A powerful no-code AI automation tool that streamlines workflows. Built complete workflow automation system using ReactFlow v12 with interactive canvas builder.",
    icon: Zap,
    link: "https://ottokit.com",
    tags: ["React", "Automation", "SaaS", "ReactFlow"],
    color: "#d2f059",
    gradient: "from-green-400/20 to-purple-600/20",
  },
  {
    title: "SureCart",
    description: "NextJS based checkout experience",
    longDescription:
      "Best WordPress e-commerce plugin for selling digital and physical products. A powerful checkout solution built with Next.js, featuring seamless payment processing and cart management.",
    icon: ShoppingCart,
    link: "https://surecart.com",
    tags: ["Next.js", "E-commerce", "Payments"],
    color: "#00824c",
    gradient: "from-emerald-500/20 to-green-600/20",
  },
  {
    title: "Sigmize",
    description: "A/B Testing & Website Optimization Platform",
    longDescription:
      "All-in-one website optimization and A/B testing platform. Empowers teams to run experiments and make data-driven decisions to improve user experience and conversions.",
    icon: Target,
    link: "https://sigmize.com",
    tags: ["A/B Testing", "Analytics", "Optimization"],
    color: "#005f5a",
    gradient: "from-teal-500/20 to-cyan-500/20",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <GradientText>Featured Projects</GradientText>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Transforming ideas into powerful digital experiences. Here are some
            of the impactful projects I've contributed to.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <BentoGrid className="max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={index === 0 ? "md:col-span-2" : ""}
            >
              <BentoCard
                Icon={project.icon}
                className="h-full group cursor-pointer"
                background={
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-50`}
                  />
                }
              >
                <div className="flex flex-col h-full">
                  {/* Icon with Brand Color */}
                  <div
                    className="mb-4 w-14 h-14 rounded-xl flex items-center justify-center"
                    style={{
                      backgroundColor: `${project.color}20`,
                    }}
                  >
                    <project.icon
                      className="w-7 h-7"
                      style={{ color: project.color }}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 mb-3 font-medium">
                    {project.description}
                  </p>

                  {/* Long Description */}
                  <p className="text-sm text-slate-500 mb-4 line-clamp-3">
                    {project.longDescription}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="border-white/20 text-slate-300 hover:bg-white/10"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Link */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors group/link"
                  >
                    <span>Visit Project</span>
                    <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </BentoCard>
            </motion.div>
          ))}
        </BentoGrid>

        {/* Additional Stats or CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-slate-400 mb-6">
            Interested in collaborating on the next big thing?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold rounded-full transition-all hover:scale-105"
          >
            Let's Work Together
          </a>
        </motion.div>
      </div>
    </section>
  );
}
