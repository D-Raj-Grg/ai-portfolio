import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Divyashwar Raj Gurung | Senior Software Engineer & AI Developer",
  description: "Portfolio of Divyashwar Raj Gurung - Senior Software Engineer with 6+ years of experience building AI-powered SaaS applications, WordPress themes, and modern web apps using React, Next.js, TypeScript, and Claude AI.",
  keywords: [
    "Software Engineer",
    "AI Developer",
    "React Developer",
    "Next.js",
    "Frontend Developer",
    "Full Stack Developer",
    "WordPress Developer",
    "Claude AI",
    "RAG Systems",
    "TypeScript",
    "SaaS Development",
    "Astra Theme",
    "OttoKit",
    "SureCart",
  ],
  authors: [{ name: "Divyashwar Raj Gurung", url: "https://divyashwar.vercel.app" }],
  metadataBase: new URL("https://divyashwar.vercel.app"),
  openGraph: {
    title: "Divyashwar Raj Gurung | Senior Software Engineer & AI Developer",
    description: "Building AI-powered web applications and automation platforms. 6+ years of experience with React, Next.js, and modern web technologies.",
    url: "https://divyashwar.vercel.app",
    siteName: "Divyashwar Raj Gurung Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Divyashwar Raj Gurung | Senior Software Engineer & AI Developer",
    description: "Building AI-powered web applications and automation platforms.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f2f4f3" },
    { media: "(prefers-color-scheme: dark)", color: "#1f2124" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
