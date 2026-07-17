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
    "Full-stack engineer from India building secure Java and Spring Boot backends, polished React interfaces, and production infrastructure.",
  keywords: [
    "Vivek Nigam",
    "Full Stack Developer",
    "Java Developer",
    "Spring Boot Developer",
    "React Developer",
    "Full Stack Engineer",
    "Software Engineer",
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
      "Full-stack engineer building secure backends, polished interfaces, and production infrastructure end to end.",
    siteName: "Vivek Nigam Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vivek Nigam | Full Stack Developer",
    description:
      "Full-stack engineer building secure Java backends, polished React interfaces, and production infrastructure.",
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
      <body>
        <div className="font-sans min-h-dvh bg-grid text-foreground">
          <StructuredData />

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
        </div>
      </body>
    </html>
  );
}
