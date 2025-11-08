import { AnimatedGradientBackground, InteractiveBackground } from "@/components/interactive-background";
import { CursorTracker } from "@/components/cursor-tracker";
import { FloatingNavbar } from "@/components/floating-navbar";
import { HeroSection } from "@/components/hero-section";
import { SkillsSection } from "@/components/skills-section";
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
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
    </div>
  );
}
