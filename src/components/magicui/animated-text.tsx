"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedTextProps {
  children: string;
  className?: string;
  delay?: number;
}

export function AnimatedText({ children, className = "", delay = 0 }: AnimatedTextProps) {
  const words = children.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{ display: "inline-block", marginRight: "0.25em" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}

interface GradientTextProps {
  children: ReactNode;
  className?: string;
}

export function GradientText({ children, className = "" }: GradientTextProps) {
  return (
    <span
      className={`bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient ${className}`}
      style={{
        backgroundSize: "200% 200%",
      }}
    >
      {children}
    </span>
  );
}

interface TypewriterEffectProps {
  words: string[];
  className?: string;
  cursorClassName?: string;
}

export function TypewriterEffect({
  words,
  className = "",
  cursorClassName = "",
}: TypewriterEffectProps) {
  const text = words.join(" ");

  return (
    <div className={className}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: index * 0.05,
            duration: 0,
          }}
        >
          {char}
        </motion.span>
      ))}
      <motion.span
        className={`inline-block w-1 h-8 bg-blue-500 ml-1 ${cursorClassName}`}
        animate={{
          opacity: [1, 0, 1],
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "loop",
        }}
      />
    </div>
  );
}
