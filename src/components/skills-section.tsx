"use client";

import { motion } from "framer-motion";
import { BentoCard } from "./magicui/bento-grid";
import { Badge } from "./ui/badge";
import {
  Code2,
  Palette,
  Database,
  Wrench,
  Globe,
  Boxes,
  Brain,
} from "lucide-react";

interface Skill {
  name: string;
  years: string;
  level: "Expert" | "Advanced" | "Intermediate";
}

const skillCategories = [
  {
    title: "Frontend Technologies",
    icon: Code2,
    skills: [
      { name: "React.js", years: "5+ years", level: "Expert" as const },
      { name: "Next.js (SSR, ISR, RSC)", years: "5+ years", level: "Expert" as const },
      { name: "TypeScript", years: "5+ years", level: "Expert" as const },
      { name: "JavaScript ES6+", years: "5+ years", level: "Expert" as const },
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "AI & Modern Tools",
    icon: Brain,
    skills: [
      { name: "OpenAI GPT-4", years: "2+ years", level: "Advanced" as const },
      { name: "Claude AI", years: "1+ year", level: "Advanced" as const },
      { name: "RAG Systems", years: "1+ year", level: "Intermediate" as const },
      { name: "Framer Motion", years: "2+ years", level: "Advanced" as const },
    ],
    color: "from-violet-500 to-purple-500",
  },
  {
    title: "Styling & Design",
    icon: Palette,
    skills: [
      { name: "Tailwind CSS", years: "5+ years", level: "Expert" as const },
      { name: "SASS/SCSS", years: "5+ years", level: "Expert" as const },
      { name: "CSS3/Responsive", years: "5+ years", level: "Expert" as const },
      { name: "shadcn/ui", years: "5+ years", level: "Expert" as const },
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "State & Data Management",
    icon: Boxes,
    skills: [
      { name: "Redux Toolkit", years: "3+ years", level: "Advanced" as const },
      { name: "React Query/TanStack", years: "2+ years", level: "Advanced" as const },
      { name: "Context API/Zustand", years: "3+ years", level: "Advanced" as const },
    ],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Backend & Database",
    icon: Database,
    skills: [
      { name: "Node.js/Express", years: "3+ years", level: "Advanced" as const },
      { name: "Supabase", years: "2+ years", level: "Advanced" as const },
      { name: "PHP", years: "4+ years", level: "Advanced" as const },
      { name: "MySQL/PostgreSQL", years: "3+ years", level: "Advanced" as const },
      { name: "MongoDB", years: "2+ years", level: "Intermediate" as const },
    ],
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Tools & Workflows",
    icon: Wrench,
    skills: [
      { name: "Git/GitHub", years: "5+ years", level: "Expert" as const },
      { name: "Vercel/Deployment", years: "3+ years", level: "Advanced" as const },
      { name: "ReactFlow", years: "2+ years", level: "Advanced" as const },
      { name: "Agile/Scrum", years: "4+ years", level: "Advanced" as const },
    ],
    color: "from-yellow-500 to-amber-500",
  },
  {
    title: "WordPress Ecosystem",
    icon: Globe,
    skills: [
      { name: "Custom Themes", years: "5+ years", level: "Expert" as const },
      { name: "Gutenberg Blocks", years: "3+ years", level: "Advanced" as const },
      { name: "Plugin Development", years: "4+ years", level: "Advanced" as const },
    ],
    color: "from-indigo-500 to-violet-500",
  },
];

const getLevelColor = (level: string) => {
  switch (level) {
    case "Expert":
      return "bg-green-500/20 text-green-300 border-green-500/30";
    case "Advanced":
      return "bg-blue-500/20 text-blue-300 border-blue-500/30";
    case "Intermediate":
      return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30";
    default:
      return "bg-slate-500/20 text-slate-300 border-slate-500/30";
  }
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Technical <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Proven expertise across modern web technologies with hands-on experience and measurable impact
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="h-full"
            >
              <BentoCard
                Icon={category.icon}
                title={category.title}
                background={
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-10`} />
                }
                className="h-full"
              >
                <div className="space-y-3 mt-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between gap-2 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      <div className="flex-1">
                        <p className="text-sm font-medium text-white">{skill.name}</p>
                        <p className="text-xs text-slate-400">{skill.years} experience</p>
                      </div>
                      <Badge
                        variant="outline"
                        className={`text-xs ${getLevelColor(skill.level)}`}
                      >
                        {skill.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </BentoCard>
            </motion.div>
          ))}
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-12 flex justify-center gap-6 text-sm"
        >
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-slate-400">Expert - Production-ready, can architect systems</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span className="text-slate-400">Advanced - Strong proficiency, shipped multiple projects</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <span className="text-slate-400">Intermediate - Working knowledge, actively learning</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
