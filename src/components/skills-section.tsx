"use client";

import { motion } from "framer-motion";
import { BentoGrid, BentoCard } from "./magicui/bento-grid";
import { Badge } from "./ui/badge";
import {
  Code2,
  Palette,
  Database,
  Wrench,
  Globe,
  Boxes,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Technologies",
    icon: Code2,
    skills: [
      "ReactJs",
      "NextJs (SSR, ISR)",
      "TypeScript",
      "JavaScript ES6",
      "HTML5",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Styling & Design",
    icon: Palette,
    skills: ["Tailwind CSS", "SASS", "CSS3", "Responsive Design"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "State Management",
    icon: Boxes,
    skills: ["Redux", "React Query", "Context API"],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Backend & Database",
    icon: Database,
    skills: ["Node.js", "PHP", "MySQL", "MongoDB"],
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Tools & Workflows",
    icon: Wrench,
    skills: ["Git/GitHub", "NPM/PNPM", "Agile Methodology"],
    color: "from-yellow-500 to-amber-500",
  },
  {
    title: "CMS Development",
    icon: Globe,
    skills: ["WordPress Plugins", "Theme Development", "Gutenberg Blocks"],
    color: "from-indigo-500 to-violet-500",
  },
];

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
            A comprehensive toolkit built over 5+ years of professional
            experience in web development
          </p>
        </motion.div>

        <BentoGrid className="max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <BentoCard
                Icon={category.icon}
                title={category.title}
                background={
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-10`} />
                }
              >
                <div className="flex flex-wrap gap-2 mt-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-white/5 hover:bg-white/10 border border-white/10 text-white"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </BentoCard>
            </motion.div>
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
