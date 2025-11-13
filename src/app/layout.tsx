import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Divyashwar Raj Gurung | Senior Software Engineer & AI Developer",
  description: "Portfolio of Divyashwar Raj Gurung - Senior Software Engineer with 5+ years of experience building AI-powered SaaS applications, WordPress themes, and modern web apps using React, Next.js, TypeScript, and Claude AI.",
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
    description: "Building AI-powered web applications and automation platforms. 5+ years of experience with React, Next.js, and modern web technologies.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
