"use client";

import { motion } from "framer-motion";
import { ReactNode, ComponentType } from "react";
import { cn } from "@/lib/utils";
import { LucideProps } from "lucide-react";

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
        className
      )}
    >
      {children}
    </div>
  );
}

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  background?: ReactNode;
  Icon?: ComponentType<LucideProps>;
  title?: string;
  description?: string;
}

export function BentoCard({
  children,
  className,
  background,
  Icon,
  title,
  description,
}: BentoCardProps) {
  return (
    <motion.div
      className={cn(
        "group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm p-6",
        "hover:border-white/20 transition-all duration-300",
        className
      )}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {background && (
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {background}
        </div>
      )}
      <div className="relative z-10">
        {Icon && (
          <div className="mb-4 w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
            <Icon className="w-6 h-6 text-blue-400" />
          </div>
        )}
        {title && (
          <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        )}
        {description && (
          <p className="text-sm text-slate-400 mb-4">{description}</p>
        )}
        {children}
      </div>
    </motion.div>
  );
}
