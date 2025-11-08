"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  link: string;
}

const navItems: NavItem[] = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Experience", link: "#experience" },
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#skills" },
  { name: "Contact", link: "#contact" },
];

export function FloatingNavbar() {
  const [visible, setVisible] = useState(true);
  const lastScrollYRef = useRef(0);

  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(15, 23, 42, 0.0)", "rgba(15, 23, 42, 0.8)"]
  );

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          if (currentScrollY > lastScrollYRef.current && currentScrollY > 100) {
            setVisible(false);
          } else {
            setVisible(true);
          }

          lastScrollYRef.current = currentScrollY;
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 z-50",
        "px-6 py-3 rounded-full",
        "border border-white/10 backdrop-blur-md",
        "shadow-lg"
      )}
      style={{ backgroundColor }}
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: visible ? 0 : -100,
        opacity: visible ? 1 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <ul className="flex items-center gap-6">
        {navItems.map((item) => (
          <li key={item.name}>
            <a
              href={item.link}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300" />
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
