"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { Home, User, Briefcase, FolderKanban, Wrench, Mail } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

interface NavItem {
  name: string;
  link: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  { name: "Home", link: "#home", icon: Home },
  { name: "About", link: "#about", icon: User },
  { name: "Experience", link: "#experience", icon: Briefcase },
  { name: "Projects", link: "#projects", icon: FolderKanban },
  { name: "Skills", link: "#skills", icon: Wrench },
  { name: "Contact", link: "#contact", icon: Mail },
];

export function FloatingNavbar() {
  const { scrollY } = useScroll();
  // Backdrop fades in as the page scrolls; the colour itself comes from the theme.
  const backdropOpacity = useTransform(scrollY, [0, 100], [0, 1]);

  return (
    <motion.nav
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 z-50",
        "px-4 md:px-6 py-2 md:py-3 rounded-full",
        "border border-border backdrop-blur-md",
        "shadow-lg overflow-hidden"
      )}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <motion.div
        aria-hidden
        className="absolute inset-0 -z-10 bg-background/90"
        style={{ opacity: backdropOpacity }}
      />
      <ul className="flex items-center gap-3 md:gap-6">
        {navItems.map((item) => (
          <li key={item.name}>
            <a
              href={item.link}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors relative group flex items-center gap-1.5"
              title={item.name}
            >
              {/* Icon - visible on mobile, hidden on desktop */}
              <item.icon className="w-5 h-5 md:hidden" />
              {/* Text - hidden on mobile, visible on desktop */}
              <span className="hidden md:inline">{item.name}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brand to-brand-2 group-hover:w-full transition-all duration-300" />
            </a>
          </li>
        ))}
        <li className="pl-3 md:pl-4 border-l border-border">
          <ThemeToggle />
        </li>
      </ul>
    </motion.nav>
  );
}
