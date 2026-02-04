import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import StructuredData from "@/components/structured-data";
import { ErrorBoundary } from "@/components/error-boundary";

const geistSans = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Vivek Nigam | Full Stack Developer",
  description:
    "Final-year B.Tech Computer Science student and Full Stack Developer from India, working with Java, Spring Boot, React, and modern web technologies.",
  keywords: [
    "Vivek Nigam",
    "Full Stack Developer",
    "Java Developer",
    "Spring Boot Developer",
    "React Developer",
    "B.Tech CSE",
    "Student Developer",
    "Backend Developer",
    "Frontend Developer",
    "Developer Portfolio",
    "India",
  ],
  authors: [{ name: "Vivek Nigam" }],
  creator: "Vivek Nigam",
  publisher: "Vivek Nigam",
  applicationName: "Vivek Nigam Portfolio",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    title: "Vivek Nigam | Full Stack Developer",
    description:
      "Final-year Computer Science student and Full Stack Developer skilled in Java, Spring Boot, React, and databases.",
    siteName: "Vivek Nigam Portfolio",
    images: [
      {
        url: "/pfp.jpg",
        width: 1200,
        height: 630,
        alt: "Vivek Nigam - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vivek Nigam | Full Stack Developer",
    description:
      "Final-year B.Tech CSE student and Full Stack Developer from India.",
    images: ["/pfp.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <StructuredData />
      </head>
      <body className="font-sans min-h-dvh bg-grid text-foreground">
        <ErrorBoundary>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="min-h-dvh">{children}</div>
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}