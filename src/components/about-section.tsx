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
            From building simple Blogspot sites in 10th grade to architecting AI-powered applications
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
                      My coding journey started way back in school around 10th grade when I first
                      discovered Blogspot. I didn&apos;t know anything about coding, but creating small
                      websites felt magical. That curiosity pushed me to WordPress, where I learned
                      customization, hosting, and design.
                    </p>
                    <p>
                      Slowly, I moved from just clicking buttons to actually writing code… and
                      that&apos;s where everything changed. From those simple beginnings, I kept building,
                      learning, and experimenting bit by bit until coding became my career.
                    </p>
                    <p>
                      Over the past 5+ years, I&apos;ve had the privilege of contributing to products
                      like Astra Theme (used by 7M+ websites) and building AI-powered applications
                      that solve real problems for real people.
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
                      What really excites me? The intersection of AI and user experience. I love
                      building things that don&apos;t just work they feel intelligent and intuitive.
                      Whether it&apos;s a chatbot that actually understands context or a workflow
                      builder that makes automation simple, I want users to think &quot;wow, this
                      just works.&quot;
                    </p>
                    <p>
                      I&apos;m the kind of person who gets excited about shaving 3 seconds off a
                      page load time or refactoring messy code into something clean and elegant.
                      The technical challenges architecting scalable systems, optimizing performance,
                      integrating AI that&apos;s what keeps me up at night (in a good way).
                    </p>
                    <p>
                      These days, I&apos;m all in on Next.js, React, TypeScript, and AI tools like
                      OpenAI and Claude. Building the future, one feature at a time.
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
