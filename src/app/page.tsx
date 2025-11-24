import { AnimatedGradientBackground, InteractiveBackground } from "@/components/interactive-background";
import { CursorTracker } from "@/components/cursor-tracker";
import { FloatingNavbar } from "@/components/floating-navbar";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { IntroVideoSection } from "@/components/intro-video-section";
import { SkillsSection } from "@/components/skills-section";
import { ProjectsSection } from "@/components/projects-section";
import { GitHubStatsSection } from "@/components/github-stats-section";
import { ExperienceSection } from "@/components/experience-section";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Animated Background */}
      <AnimatedGradientBackground />

      {/* Interactive Dots Background */}
      <InteractiveBackground />

      {/* Custom Cursor */}
      <CursorTracker />

      {/* Floating Navigation */}
      <FloatingNavbar />

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <IntroVideoSection />
        <SkillsSection />
        <ProjectsSection />
        <GitHubStatsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
    </div>
  );
}
