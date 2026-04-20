import type { Metadata } from "next";
import { Orbitron, JetBrains_Mono, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600", "700"],
});

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Dravex Innovations | Custom Software & Hardware Solutions",
  description: "Building custom software and hardware solutions for real-world business and consumer problems. Specializing in web apps, mobile apps, browser extensions, and innovative hardware.",
  keywords: ["software development", "hardware solutions", "custom applications", "web development", "mobile apps", "browser extensions"],
  authors: [{ name: "Dravex Innovations" }],
  openGraph: {
    title: "Dravex Innovations | Custom Software & Hardware Solutions",
    description: "Building custom software and hardware solutions for real-world business and consumer problems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${orbitron.variable} ${jetbrainsMono.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navigation />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
