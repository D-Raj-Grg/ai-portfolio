# Divyashwar Raj Gurung - Portfolio

A stunning, modern portfolio website showcasing my work as a Senior Software Engineer, built with cutting-edge web technologies and AI-powered features.

🔗 **Live Site:** [https://divyashwar.vercel.app/](https://divyashwar.vercel.app/)

## 🚀 Features

- **Interactive Animations** - Smooth 60fps animations powered by Framer Motion
- **Custom Cursor Tracker** - Hardware-accelerated custom cursor with spring physics
- **Interactive Background** - Canvas-based particle system that responds to mouse movement
- **Floating Navigation** - Auto-hiding navbar with scroll detection
- **Magic UI Components** - Beautiful glassmorphism cards with Bento Grid layout
- **Fully Responsive** - Optimized for mobile, tablet, and desktop
- **Performance First** - Optimized animations with RAF throttling and debouncing
- **AI-Focused Showcase** - Highlighting expertise in AI/ML technologies

## 🎨 Design Highlights

- Modern dark theme with gradient backgrounds
- Glassmorphism effects and backdrop blur
- Smooth scroll animations with viewport detection
- Brand-specific color schemes for each project
- Gradient text effects and animated sparkles

## 🛠️ Tech Stack

### Frontend
- **Next.js 16** - React framework with App Router
- **React 19** - Latest React with server components
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **Lucide Icons** - Beautiful icon library

### UI Components
- **shadcn/ui** - Re-usable component library
- **Magic UI** - Custom animated components
  - Bento Grid
  - Animated Text
  - Sparkles Effect

### Performance
- Canvas optimization with device pixel ratio support
- RequestAnimationFrame throttling for event handlers
- Debounced resize events
- Passive event listeners
- Hardware-accelerated transforms

## 📂 Project Structure

```
ai-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx            # Main portfolio page
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── hero-section.tsx         # Hero with name and intro
│   │   ├── skills-section.tsx       # Technical skills showcase
│   │   ├── projects-section.tsx     # Featured projects
│   │   ├── experience-section.tsx   # Work experience
│   │   ├── contact-section.tsx      # Contact information
│   │   ├── floating-navbar.tsx      # Navigation bar
│   │   ├── cursor-tracker.tsx       # Custom cursor
│   │   ├── interactive-background.tsx # Particle system
│   │   ├── magicui/
│   │   │   ├── animated-text.tsx    # Text animations
│   │   │   ├── bento-grid.tsx       # Grid layout
│   │   │   └── sparkles.tsx         # Sparkle effect
│   │   └── ui/                      # shadcn components
│   └── lib/
│       └── utils.ts            # Utility functions
├── public/                     # Static assets
├── tailwind.config.ts         # Tailwind configuration
└── package.json               # Dependencies
```

## 🎯 Featured Projects

1. **PDF Q&A AI SaaS** - Claude AI-powered PDF analysis with RAG
2. **Astra Theme** - World's most popular WordPress theme (7M+ active)
3. **OttoKit** - No-code AI automation platform
4. **SureCart** - Next.js e-commerce with AI insights
5. **Sigmize** - AI-powered A/B testing platform

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and pnpm installed

### Installation

```bash
# Clone the repository
git clone https://github.com/D-Raj-Grg/ai-portfolio.git

# Navigate to project directory
cd ai-portfolio

# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

### Build for Production

```bash
# Create optimized production build
pnpm build

# Start production server
pnpm start
```

## 📊 Performance Optimizations

### Interactive Background
- Increased dot spacing from 40px to 50px (fewer particles)
- Removed expensive gradient fills
- Added RAF throttling for mousemove events
- Debounced resize events (150ms)
- Proper cleanup of animation frames

### Cursor Tracker
- Using Framer Motion `useMotionValue` and `useSpring`
- Hardware-accelerated CSS transforms
- RAF throttling for cursor updates
- Optimized clickable element detection

### Floating Navbar
- Ref-based scroll position (prevents re-renders)
- RAF-based scroll throttling
- Passive event listeners

## 🎨 Color Palette

- **Primary:** Blue (#3b82f6) to Purple (#a855f7) gradients
- **Background:** Dark slate (#0f172a, #1e293b)
- **Text:** White/Slate variations
- **Accents:** Project-specific brand colors

## 📱 Responsive Breakpoints

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Add any environment variables here
NEXT_PUBLIC_SITE_URL=https://divyashwar.vercel.app
```

### Tailwind Config

The project uses Tailwind CSS 4 with custom configuration for animations, colors, and plugins.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 About Me

I'm Divyashwar Raj Gurung, a Senior Software Engineer with 5+ years of experience building high-performance web applications. I specialize in:

- Frontend Development (React, Next.js, TypeScript)
- AI/ML Integration (Claude AI, RAG systems)
- WordPress Development (Theme & Plugin)
- SaaS Product Development
- Performance Optimization

## 🔗 Links

- **Portfolio:** [https://divyashwar.vercel.app/](https://divyashwar.vercel.app/)
- **LinkedIn:** [linkedin.com/in/divyashwar](https://www.linkedin.com/in/divyashwar/)
- **GitHub:** [github.com/D-Raj-Grg](https://github.com/D-Raj-Grg/)
- **Email:** clixacom@gmail.com

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Icons by [Lucide](https://lucide.dev/)
- Deployed on [Vercel](https://vercel.com/)

---

⭐ Star this repo if you found it helpful!
