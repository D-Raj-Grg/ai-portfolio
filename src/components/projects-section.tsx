"use client";

import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ExternalLink, Sparkles, ChefHat, BookOpen, Languages } from "lucide-react";

const projects = [
  {
    title: "LinguaChat",
    subtitle: "AI-Powered Language Learning",
    description:
      "Master any language through conversation. An AI companion that enables users to practice real dialogue, receive instant feedback, and build confidence in their target language.",
    features: [
      "Real conversations with AI in 5+ languages",
      "Instant grammar and usage corrections",
      "Automatic vocabulary saving and review",
      "Adaptive difficulty scaling",
      "Scenario-based practice (travel, dining, work)",
      "Progress tracking and vocabulary metrics",
    ],
    technologies: ["Next.js", "React", "OpenAI", "TypeScript", "Tailwind CSS"],
    icon: Languages,
    color: "from-blue-500 to-cyan-500",
    liveUrl: "https://ai-language-learning-raj.vercel.app/",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "ChefMate",
    subtitle: "AI Recipe Generator",
    description:
      "Turn ingredients into delicious meals. An AI kitchen companion that generates personalized recipes from available ingredients, reducing food waste and making cooking accessible.",
    features: [
      "Generate recipes from available ingredients",
      "Dietary customization and preferences",
      "Instant creative recipe generation",
      "Popular recipe suggestions",
      "Step-by-step cooking instructions",
      "Progressive Web App support",
    ],
    technologies: ["Next.js", "React", "AI/ML", "PWA", "Tailwind CSS"],
    icon: ChefHat,
    color: "from-orange-500 to-red-500",
    liveUrl: "https://ai-recipe-generator-raj.vercel.app/",
    gradient: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "Study Buddy",
    subtitle: "AI-Powered Study Companion",
    description:
      "Study smarter, not harder. Transform educational content into interactive learning tools with AI-generated quizzes, flashcards, and concept explanations.",
    features: [
      "AI Quiz Generator with multiple formats",
      "Smart Flashcards with spaced repetition",
      "Concept Explainer with examples",
      "Visual breakdowns and analogies",
      "Progress tracking",
      "Dark/Light mode support",
    ],
    technologies: ["Next.js", "React", "AI/ML", "Tailwind CSS", "TypeScript"],
    icon: BookOpen,
    color: "from-purple-500 to-pink-500",
    liveUrl: "https://ai-study-buddy-raj.vercel.app/",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Innovative AI-powered applications built with modern web technologies
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="h-full"
            >
              <Card className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm border-white/10 p-6 hover:border-white/20 transition-all duration-300 group h-full flex flex-col">
                {/* Header with Icon */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity flex items-center justify-center flex-shrink-0`}
                  >
                    <project.icon className="w-7 h-7 text-white" />
                  </div>
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Sparkles className="w-5 h-5 text-yellow-400" />
                  </motion.div>
                </div>

                {/* Title & Subtitle */}
                <div className="mb-3">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-blue-400 font-medium">
                    {project.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-4 flex-grow">
                  <h4 className="text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">
                    Key Features
                  </h4>
                  <ul className="space-y-1.5">
                    {project.features.slice(0, 4).map((feature, i) => (
                      <li
                        key={i}
                        className="text-xs text-slate-400 flex items-start gap-2"
                      >
                        <span className="text-blue-400 mt-0.5 flex-shrink-0">
                          ▸
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 mt-auto pt-4 border-t border-white/10">
                  <Button
                    size="sm"
                    className={`flex-1 bg-gradient-to-r ${project.color} hover:opacity-90 text-white font-semibold`}
                    asChild
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </Button>
                </div>

                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none`}
                />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
