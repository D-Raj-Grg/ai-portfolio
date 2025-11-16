"use client";

import { motion } from "framer-motion";
import { GradientText } from "./magicui/animated-text";
import { Card } from "./ui/card";
import { Award, Briefcase, Code2, GraduationCap, Heart, Lightbulb } from "lucide-react";

const highlights = [
  {
    icon: Briefcase,
    title: "5+ Years",
    description: "Professional Experience",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Award,
    title: "7M+ Users",
    description: "Products I've Contributed To",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Code2,
    title: "10+ Projects",
    description: "AI-Powered Applications",
    color: "from-green-500 to-emerald-500",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <GradientText>Me</GradientText>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            From curious developer to senior engineer building AI-powered solutions
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Story Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16"
          >
            <Card className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm border-white/10 p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                      <Heart className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">My Journey</h3>
                  </div>
                  <div className="space-y-4 text-slate-300 leading-relaxed">
                    <p>
                      I started my development journey in 2020, driven by a passion for creating
                      seamless digital experiences. What began with WordPress development quickly
                      evolved into a deep dive into modern frontend engineering and AI-powered
                      applications.
                    </p>
                    <p>
                      Over the past 5+ years, I&apos;ve had the privilege of contributing to some of
                      the most popular WordPress products used by millions, while simultaneously
                      exploring the cutting edge of AI and SaaS development with Next.js and React.
                    </p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                      <Lightbulb className="w-6 h-6 text-purple-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">What Drives Me</h3>
                  </div>
                  <div className="space-y-4 text-slate-300 leading-relaxed">
                    <p>
                      I&apos;m fascinated by the intersection of AI and user experience. Building
                      applications that are not just functional, but intelligent and intuitive,
                      is what gets me excited every day.
                    </p>
                    <p>
                      Whether it&apos;s architecting scalable workflows with ReactFlow, optimizing
                      performance to achieve sub-2-second page loads, or implementing AI-powered
                      features that genuinely help users - I thrive on solving complex technical
                      challenges with elegant solutions.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <Card className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm border-white/10 p-6 hover:border-white/20 transition-all duration-300 group text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${highlight.color} opacity-20 group-hover:opacity-30 transition-opacity flex items-center justify-center`}
                  >
                    <highlight.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">{highlight.title}</h3>
                  <p className="text-slate-400 text-sm">{highlight.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Card className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm border-white/10 p-8">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-7 h-7 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Education</h3>
                  <p className="text-lg text-slate-300 mb-1">
                    Bachelor of Engineering - Information Technology
                  </p>
                  <p className="text-slate-400">Mumbai University</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
