import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
      <body className={`${inter.variable} antialiased`}>
        <Navigation />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
