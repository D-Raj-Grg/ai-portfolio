"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function CursorTracker() {
  const [isPointer, setIsPointer] = useState(false);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const ringX = useMotionValue(0);
  const ringY = useMotionValue(0);
  const ringXSpring = useSpring(ringX, { damping: 20, stiffness: 400 });
  const ringYSpring = useSpring(ringY, { damping: 20, stiffness: 400 });

  useEffect(() => {
    let rafId: number;
    let lastTarget: HTMLElement | null = null;

    const handleMouseMove = (e: MouseEvent) => {
      if (rafId) return;

      rafId = requestAnimationFrame(() => {
        cursorX.set(e.clientX - 8);
        cursorY.set(e.clientY - 8);
        ringX.set(e.clientX - 20);
        ringY.set(e.clientY - 20);

        // Only check clickable element when target changes
        const target = e.target as HTMLElement;
        if (target !== lastTarget) {
          const isClickable =
            target.tagName === "A" ||
            target.tagName === "BUTTON" ||
            target.onclick !== null ||
            target.closest("a, button") !== null;

          setIsPointer(isClickable);
          lastTarget = target;
        }

        rafId = 0;
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [cursorX, cursorY, ringX, ringY]);

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-primary rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{
          scale: { duration: 0.15 },
        }}
      />

      {/* Cursor ring/outline */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border-2 border-primary/50 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          x: ringXSpring,
          y: ringYSpring,
        }}
        animate={{
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{
          scale: { duration: 0.15 },
        }}
      />
    </>
  );
}
