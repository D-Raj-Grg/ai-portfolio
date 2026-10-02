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
  Coins,
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
    color: "from-emerald-500 to-lime-300",
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
    color: "from-green-600 to-green-400",
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
    color: "from-green-500 to-teal-300",
  },
  {
    title: "State & Data Management",
    icon: Boxes,
    skills: [
      { name: "Redux Toolkit", years: "3+ years", level: "Advanced" as const },
      { name: "React Query/TanStack", years: "2+ years", level: "Advanced" as const },
      { name: "Context API/Zustand", years: "3+ years", level: "Advanced" as const },
    ],
    color: "from-teal-500 to-emerald-400",
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
    color: "from-green-600 to-teal-500",
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
    color: "from-lime-500 to-emerald-500",
  },
  {
    title: "Web3 & Blockchain",
    icon: Coins,
    skills: [
      { name: "Solidity", years: "3+ years", level: "Advanced" as const },
      { name: "Hardhat", years: "3+ years", level: "Advanced" as const },
      { name: "OpenZeppelin", years: "3+ years", level: "Advanced" as const },
      { name: "Wagmi/Viem", years: "3+ years", level: "Advanced" as const },
      { name: "RainbowKit", years: "3+ years", level: "Advanced" as const },
    ],
    color: "from-emerald-500 to-green-700",
  },
  {
    title: "WordPress Ecosystem",
    icon: Globe,
    skills: [
      { name: "Custom Themes", years: "5+ years", level: "Expert" as const },
      { name: "Gutenberg Blocks", years: "3+ years", level: "Advanced" as const },
      { name: "Plugin Development", years: "4+ years", level: "Advanced" as const },
    ],
    color: "from-green-700 to-green-500",
  },
];

const getLevelColor = (level: string) => {
  switch (level) {
    case "Expert":
      return "bg-primary/25 text-primary border-primary/50";
    case "Advanced":
      return "bg-primary/15 text-primary border-primary/30";
    case "Intermediate":
      return "bg-primary/10 text-primary/80 border-primary/20";
    default:
      return "bg-muted text-muted-foreground border-border";
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Technical <span className="bg-gradient-to-r from-brand to-brand-2 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
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
                      className="flex items-center justify-between gap-2 p-2 rounded-lg bg-foreground/5 hover:bg-foreground/10 transition-colors"
                    >
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">{skill.name}</p>
                        <p className="text-xs text-muted-foreground">{skill.years} experience</p>
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
          className="mt-12 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 text-sm"
        >
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary flex-shrink-0"></div>
            <span className="text-muted-foreground">Expert - Production-ready</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary/70 flex-shrink-0"></div>
            <span className="text-muted-foreground">Advanced - Strong proficiency</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary/40 flex-shrink-0"></div>
            <span className="text-muted-foreground">Intermediate - Actively learning</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
