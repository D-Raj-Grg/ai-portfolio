"use client";

import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "BrainStorm Force LLC",
    position: "Software Developer - Front-end Lead Developer",
    location: "Remote",
    period: "Feb 2023 - Present",
    description:
      "Leading frontend development for SaaS and WordPress products, building scalable web applications and collaborating with cross-functional teams.",
    achievements: [
      "Designed interactive canvas builder for workflow automation",
      "Migrated project to Next.js 14, achieving 40% higher customer retention",
      "Built responsive UX flows, resulting in 30% more active users",
      "Architected complete workflow automation system using ReactFlow v12",
    ],
    projects: [
      "Astra Theme",
      "OttoKit (SureTriggers)",
      "SureCart",
      "Sigmize",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    company: "VYK HealthCare Pvt. Ltd.",
    position: "Senior Web Developer",
    location: "Remote",
    period: "March 2021 - Feb 2023",
    description:
      "Developed and optimized WordPress websites with focus on performance, security, and user experience.",
    achievements: [
      "Developed new website leading to 30% growth in customers",
      "Implemented security parameters for 50% more secured platform",
      "Optimized page loads to under 2 seconds",
      "Configured backend tools with webhook integration",
    ],
    projects: [],
    color: "from-purple-500 to-pink-500",
  },
  {
    company: "Atomic House",
    position: "WordPress Developer",
    location: "Remote",
    period: "March 2020 - Feb 2021",
    description:
      "Built reusable components and optimized applications for maximum speed and scalability.",
    achievements: [
      "Applied optimizations leading to 15% more active users",
      "Converted Figma designs to production-ready web pages",
      "Developed multiple client websites",
      "Built reusable component libraries",
    ],
    projects: [],
    color: "from-green-500 to-emerald-500",
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Work <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            5+ years of professional experience building web applications
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <Card className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm border-white/10 p-6 hover:border-white/20 transition-all duration-300 group">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${exp.color} opacity-20 group-hover:opacity-30 transition-opacity flex items-center justify-center flex-shrink-0`}>
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {exp.position}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 mb-3">
                      <span className="font-semibold text-blue-400">
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-slate-300 mb-4">{exp.description}</p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="text-sm text-slate-400 flex items-start gap-2"
                          >
                            <span className="text-blue-400 mt-1">▸</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {exp.projects.length > 0 && (
                      <div>
                        <h4 className="text-sm font-semibold text-white mb-2">
                          Projects:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.projects.map((project) => (
                            <Badge
                              key={project}
                              variant="secondary"
                              className="bg-white/5 hover:bg-white/10 border border-white/10 text-white"
                            >
                              {project}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
