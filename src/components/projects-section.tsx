"use client";

import { motion } from "framer-motion";
import { ExternalLink, Zap, ShoppingCart, Target, Palette, FileText, Sparkles, MessageSquare, Shield } from "lucide-react";
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
    title: "OttoKit",
    description: "No-code AI automation platform",
    longDescription:
      "Formerly SureTriggers - Build intelligent automation workflows with AI-powered triggers and actions. Features an interactive canvas builder powered by ReactFlow v12, enabling teams to create complex workflows without code.",
    icon: Zap,
    link: "https://ottokit.com",
    tags: ["AI Automation", "React", "No-Code", "SaaS"],
    color: "#d2f059",
    gradient: "from-green-400/20 to-purple-600/20",
  },
  {
    title: "Sigmize",
    description: "AI-powered A/B testing & optimization",
    longDescription:
      "Intelligent experimentation platform that uses machine learning to identify winning variations faster. Run AI-assisted experiments with automated statistical analysis and predictive insights for data-driven optimization.",
    icon: Target,
    link: "https://sigmize.com",
    tags: ["AI Testing", "ML Analytics", "Optimization"],
    color: "#005f5a",
    gradient: "from-teal-500/20 to-cyan-500/20",
  },
  {
    title: "SureCart",
    description: "Modern checkout built with AI insights",
    longDescription:
      "Next-generation e-commerce platform built with Next.js 14. Leverages AI-driven analytics and smart payment optimization to deliver lightning-fast checkout experiences with intelligent cart abandonment recovery.",
    icon: ShoppingCart,
    link: "https://surecart.com",
    tags: ["Next.js", "AI Commerce", "Payments"],
    color: "#00824c",
    gradient: "from-emerald-500/20 to-green-600/20",
  },
  {
    title: "Astra Theme",
    description: "The world's most popular WordPress theme",
    longDescription:
      "Fast, lightweight & customizable WordPress theme trusted by 7M+ websites worldwide. Engineered with performance-first architecture, intelligent design systems, and seamless page builder integration for limitless customization.",
    icon: Palette,
    link: "https://wpastra.com",
    tags: ["WordPress", "Performance", "7M+ Active"],
    color: "#7143e3",
    gradient: "from-purple-500/20 to-yellow-500/20",
  },
  {
    title: "AI Chatbot Platform",
    description: "Next-Gen Conversational AI Experience",
    longDescription:
      "Advanced AI chatbot powered by OpenAI GPT-4o with real-time web search, multi-file handling (images, documents), and transparent reasoning display. Features beautiful responsive UI with dark/light themes, source citations, and seamless interactions. Built with Next.js 16, React 19, and shadcn/ui.",
    icon: MessageSquare,
    link: "https://raj-ai-chatbot.vercel.app/",
    tags: ["GPT-4o", "Web Search", "Next.js 16", "React 19"],
    color: "#10a37f",
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "NGLFS",
    description: "Anonymous Feedback, Zero Signup",
    longDescription:
      "Anonymous messaging platform that lets you receive honest feedback from friends without requiring them to sign up. Features a beautiful inbox interface with analytics dashboard, encrypted data storage, and hashed IP addresses for maximum privacy. 100% anonymous, ad-free experience with instant setup.",
    icon: Shield,
    link: "https://nglfs.vercel.app/",
    tags: ["Next.js", "Anonymous", "Privacy", "Analytics"],
    color: "#3b82f6",
    gradient: "from-blue-500/20 to-indigo-500/20",
  },
  {
    title: "PDF Q&A AI SaaS",
    description: "Your PDF Documents, Now Interactive",
    longDescription:
      "Upload any PDF and ask questions in natural language. Powered by Claude AI for intelligent, contextual understanding. Get instant, accurate answers with source citations in under 5 seconds. Perfect for research, studying, and professional document analysis with 100% private & secure processing.",
    icon: Sparkles,
    link: "https://pdf-qna-ai-saas.vercel.app/",
    tags: ["Claude AI", "Next.js", "RAG", "10MB Max"],
    color: "#8b5cf6",
    gradient: "from-violet-500/20 to-fuchsia-500/20",
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
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <BentoCard
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
                    <p className="text-slate-300 mb-3 font-medium text-base">
                      {project.description}
                    </p>

                    {/* Long Description */}
                    <p className="text-sm text-slate-400 mb-4 line-clamp-3 leading-relaxed">
                      {project.longDescription}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="border-white/20 text-slate-300 hover:bg-white/10 text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Link */}
                    <div className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-blue-400 group-hover:text-blue-300 transition-colors">
                      <span>Visit Project</span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </div>
                </BentoCard>
              </a>
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
