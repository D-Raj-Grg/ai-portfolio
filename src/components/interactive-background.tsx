"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Dot {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  size: number;
}

export function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const dotsRef = useRef<Dot[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Reinitialize dots on resize
      initializeDots();
    };

    const initializeDots = () => {
      dotsRef.current = [];
      const spacing = 40;
      const cols = Math.floor(canvas.width / spacing);
      const rows = Math.floor(canvas.height / spacing);

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * spacing + spacing / 2;
          const y = j * spacing + spacing / 2;
          dotsRef.current.push({
            x,
            y,
            baseX: x,
            baseY: y,
            size: Math.random() * 2 + 1,
          });
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dotsRef.current.forEach((dot) => {
        const dx = mousePosition.x - dot.baseX;
        const dy = mousePosition.y - dot.baseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 200;

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          const angle = Math.atan2(dy, dx);
          dot.x = dot.baseX - Math.cos(angle) * force * 30;
          dot.y = dot.baseY - Math.sin(angle) * force * 30;
        } else {
          // Spring back to original position
          dot.x += (dot.baseX - dot.x) * 0.05;
          dot.y += (dot.baseY - dot.y) * 0.05;
        }

        // Draw dot with gradient
        const gradient = ctx.createRadialGradient(dot.x, dot.y, 0, dot.x, dot.y, dot.size);
        gradient.addColorStop(0, "rgba(255, 255, 255, 0.8)");
        gradient.addColorStop(1, "rgba(255, 255, 255, 0.1)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [mousePosition]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-40"
      style={{ zIndex: 1 }}
    />
  );
}

// Gradient background with animated mesh
export function AnimatedGradientBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-900 to-purple-950"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-cyan-500/10 via-transparent to-purple-500/10"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent" />
    </div>
  );
}
