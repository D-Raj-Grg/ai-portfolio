"use client";

import { motion } from "framer-motion";
import { AnimatedText, GradientText } from "./magicui/animated-text";
import { Sparkles } from "./magicui/sparkles";
import { Button } from "./ui/button";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="text-blue-400 font-mono text-sm md:text-base">
              Hi, my name is
            </span>
          </motion.div>

          {/* Name with Sparkles */}
          <Sparkles>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
              <AnimatedText className="text-white">
                Divyashwar Raj Gurung
              </AnimatedText>
            </h1>
          </Sparkles>

          {/* Title */}
          <motion.h2
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <GradientText>Senior Software Engineer</GradientText>
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            I am a passionate Software Developer with a knack for crafting
            intuitive and high-performing web applications in SaaS and WordPress
            environments. With over 5 years of experience, I create seamless
            user experiences using modern web technologies.
          </motion.p>

          {/* Contact Info */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 mb-10 text-sm text-slate-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Mumbai, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+91-9504358270</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold px-8"
              asChild
            >
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 hover:bg-white/10 text-white"
              asChild
            >
              <a href="#projects">View My Work</a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex items-center justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
          >
            <a
              href="https://github.com/D-Raj-Grg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/divyashwar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:clixacom@gmail.com"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <motion.div
              className="w-1.5 h-1.5 bg-white rounded-full"
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
