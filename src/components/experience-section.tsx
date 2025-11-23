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
    type: "Led Frontend Development",
    description:
      "Leading frontend architecture and development for multiple SaaS products serving 7M+ users worldwide. Spearheading Next.js migrations, building workflow automation systems, and mentoring junior developers.",
    achievements: [
      "Led React to Next.js 14 migration for OttoKit, reducing load time by 60% and increasing customer retention from 65% to 91% (40% improvement)",
      "Architected interactive canvas workflow builder using ReactFlow v12, enabling no-code automation for 10,000+ active users",
      "Built responsive onboarding flows that increased Week-1 active users from 1,200 to 1,560 (30% growth)",
      "Core contributor to Astra Theme (7M+ installations) - fixed critical rendering bugs affecting 500K+ users",
      "Developed 15+ custom Gutenberg blocks for WordPress, improving editor UX by 25% based on user feedback",
    ],
    technologies: ["Next.js 14", "React 19", "ReactFlow v12", "TypeScript", "WordPress", "Gutenberg"],
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
    type: "Full-Stack Development",
    description:
      "Developed healthcare web platforms with emphasis on HIPAA compliance, performance optimization, and secure patient data handling.",
    achievements: [
      "Built patient portal from scratch, acquiring 3,000 new users in first 6 months (30% customer growth)",
      "Implemented OAuth 2.0 and AES-256 encryption, reducing security vulnerabilities by 50%",
      "Optimized WordPress sites to load in <2 seconds (reduced from 5.2s average), improving SEO ranking by 35%",
      "Integrated webhook automation with Zapier and Make.com, automating 80% of appointment confirmations",
      "Developed custom WordPress plugin for appointment management serving 500+ daily bookings",
    ],
    technologies: ["WordPress", "PHP", "MySQL", "JavaScript", "REST APIs", "Webhooks"],
    projects: [],
    color: "from-purple-500 to-pink-500",
  },
  {
    company: "Atomic House",
    position: "WordPress Developer",
    location: "Remote",
    period: "March 2020 - Feb 2021",
    type: "Client Project Development",
    description:
      "Delivered custom WordPress solutions for 20+ clients across e-commerce, corporate, and portfolio websites.",
    achievements: [
      "Implemented lazy loading and CDN integration, improving site speed by 15% and increasing user retention",
      "Converted 30+ Figma designs to pixel-perfect, responsive WordPress themes with 99% design accuracy",
      "Built reusable ACF component library used across 12 client projects, reducing dev time by 40%",
      "Developed WooCommerce customizations that increased client conversion rates by 18% on average",
    ],
    technologies: ["WordPress", "WooCommerce", "ACF", "PHP", "jQuery", "CSS/SASS"],
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
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${exp.color} opacity-80 group-hover:opacity-100 transition-all flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl`}>
                    <Briefcase className="w-6 h-6 text-white drop-shadow-lg" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="text-2xl font-bold text-white">
                        {exp.position}
                      </h3>
                      <Badge variant="outline" className="border-blue-400/30 text-blue-300 bg-blue-500/10">
                        {exp.type}
                      </Badge>
                    </div>
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

                    {exp.technologies && exp.technologies.length > 0 && (
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-white mb-2">
                          Technologies Used:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-400/30 text-blue-300"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {exp.projects.length > 0 && (
                      <div>
                        <h4 className="text-sm font-semibold text-white mb-2">
                          Projects Delivered:
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
