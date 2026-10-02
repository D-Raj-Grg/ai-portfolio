"use client";

import { motion } from "framer-motion";
import { GradientText } from "./magicui/animated-text";
import { GitBranch, Star, GitFork, Users, LucideProps } from "lucide-react";
import { Badge } from "./ui/badge";
import { ComponentType } from "react";

interface GitHubStats {
  icon: ComponentType<LucideProps>;
  label: string;
  value: string;
  color: string;
}

const stats: GitHubStats[] = [
  {
    icon: GitBranch,
    label: "Contributions",
    value: "1,648",
    color: "#22c55e",
  },
  {
    icon: Star,
    label: "Total Stars",
    value: "100+",
    color: "#84cc16",
  },
  {
    icon: GitFork,
    label: "Repositories",
    value: "50+",
    color: "#14b8a6",
  },
  {
    icon: Users,
    label: "Followers",
    color: "#10b981",
    value: "25+",
  },
];

export function GitHubStatsSection() {
  const username = "D-Raj-Grg";

  return (
    <section id="github" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <GradientText>GitHub Activity</GradientText>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Real-time contribution activity and statistics from my GitHub
            profile
          </p>
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <span>@{username}</span>
            <GitBranch className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="relative overflow-hidden rounded-xl border border-border bg-card/70 backdrop-blur-sm p-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                transitionDelay: `${index * 0.1}s`,
              }}
            >
              <div className="flex flex-col items-center text-center">
                <div
                  className="mb-3 w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${stat.color}20` }}
                >
                  <stat.icon className="w-6 h-6" style={{ color: stat.color }} />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* GitHub Contribution Graph */}
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="relative overflow-hidden rounded-xl border border-border bg-card/70 backdrop-blur-sm p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-foreground">
                Contribution Activity
              </h3>
              <Badge
                variant="outline"
                className="border-primary/30 text-primary"
              >
                Last Year
              </Badge>
            </div>

            {/* GitHub Contribution Graph Image */}
            <div className="relative w-full overflow-auto">
              <img
                src={`https://ghchart.rshah.org/10b981/${username}`}
                alt="GitHub Contribution Graph"
                className="w-full h-auto rounded-lg"
                style={{ minWidth: "600px" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent pointer-events-none rounded-lg" />
            </div>

            {/* GitHub Stats Card */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&hide_border=true&bg_color=27292e&title_color=34d399&icon_color=4ade80&text_color=ecedec`}
                  alt="GitHub Stats"
                  className="w-full h-auto hidden dark:block"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&hide_border=true&bg_color=fafbfa&title_color=059669&icon_color=16a34a&text_color=26292e`}
                  alt="GitHub Stats"
                  className="w-full h-auto dark:hidden"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&hide_border=true&bg_color=27292e&title_color=34d399&text_color=ecedec`}
                  alt="Top Languages"
                  className="w-full h-auto hidden dark:block"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&hide_border=true&bg_color=fafbfa&title_color=059669&text_color=26292e`}
                  alt="Top Languages"
                  className="w-full h-auto dark:hidden"
                />
              </div>
            </div>

            {/* GitHub Streak */}
            <div className="mt-4 rounded-lg overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&hide_border=true&background=27292e&ring=34d399&fire=4ade80&currStreakLabel=34d399&sideLabels=ecedec&currStreakNum=ecedec&sideNums=ecedec&dates=a4a8ad`}
                alt="GitHub Streak"
                className="w-full h-auto hidden dark:block"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&hide_border=true&background=fafbfa&ring=059669&fire=16a34a&currStreakLabel=059669&sideLabels=26292e&currStreakNum=26292e&sideNums=26292e&dates=5b6168`}
                alt="GitHub Streak"
                className="w-full h-auto dark:hidden"
              />
            </div>
          </div>
        </motion.div>

        {/* Activity Info */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-sm text-muted-foreground/70 italic">
            Data updates in real-time from GitHub
          </p>
        </motion.div>
      </div>
    </section>
  );
}
