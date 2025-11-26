"use client";

import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Mail, Phone, Linkedin, Github, MapPin, FileDown } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "clixacom@gmail.com",
    href: "mailto:clixacom@gmail.com",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91-9504358270",
    href: "tel:+919504358270",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/divyashwar",
    href: "https://www.linkedin.com/in/divyashwar",
    color: "from-blue-600 to-blue-400",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/D-Raj-Grg",
    href: "https://github.com/D-Raj-Grg",
    color: "from-gray-600 to-gray-400",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Mumbai, India",
    href: "#",
    color: "from-red-500 to-orange-500",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Get In <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {contactInfo.map((contact, index) => (
              <motion.div
                key={contact.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card
                  className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm border-white/10 p-6 hover:border-white/20 transition-all duration-300 group cursor-pointer"
                  onClick={() => {
                    if (contact.href !== "#") {
                      window.open(contact.href, "_blank");
                    }
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${contact.color} opacity-80 group-hover:opacity-100 transition-all flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl`}>
                      <contact.icon className="w-6 h-6 text-white drop-shadow-lg" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-400 mb-1">
                        {contact.label}
                      </h3>
                      <p className="text-white font-medium">{contact.value}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-center"
          >
            <Card className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm border-white/10 p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Let&apos;s Work Together
              </h3>
              <p className="text-slate-400 mb-6">
                Whether you have a project in mind or just want to chat about
                web development, feel free to reach out!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold"
                  asChild
                >
                  <a href="mailto:clixacom@gmail.com">Send an Email</a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 hover:bg-white/10 text-white"
                  asChild
                >
                  <a
                    href="https://www.linkedin.com/in/divyashwar"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Connect on LinkedIn
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 hover:bg-white/10 text-white gap-2"
                  asChild
                >
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    <FileDown className="w-4 h-4" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="mt-20 text-center text-slate-500 text-sm"
      >
        <p>© 2024 Divyashwar Raj Gurung. All rights reserved.</p>
        <p className="mt-2">
          Built with Next.js, TypeScript, Tailwind CSS, and Magic UI
        </p>
      </motion.footer>
    </section>
  );
}
