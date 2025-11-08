import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Divyashwar Raj Gurung | Senior Software Engineer",
  description: "Portfolio of Divyashwar Raj Gurung - A passionate Software Developer with 5+ years of experience in building high-performing web applications using React, Next.js, and modern web technologies.",
  keywords: ["Software Engineer", "React Developer", "Next.js", "Frontend Developer", "Full Stack Developer", "WordPress Developer"],
  authors: [{ name: "Divyashwar Raj Gurung" }],
  openGraph: {
    title: "Divyashwar Raj Gurung | Senior Software Engineer",
    description: "Portfolio showcasing 5+ years of experience in web development",
    type: "website",
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
