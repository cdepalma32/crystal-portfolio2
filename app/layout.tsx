import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { CommandPalette } from "@/components/command-palette/command-palette"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Crystal DePalma - Full-Stack Developer",
  description:
    "Prompt-first Full-Stack (MERN) Engineer with a backend focus, building secure, AI-integrated tools with Node.js, MongoDB, and React.",
  keywords: [
    "Full-Stack Developer",
    "MERN Stack",
    "Node.js",
    "React",
    "MongoDB",
    "AI Integration",
    "Backend Development",
  ],
  authors: [{ name: "Crystal DePalma" }],
  creator: "Crystal DePalma",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://crystaldepalma.dev",
    title: "Crystal DePalma - Full-Stack Developer",
    description:
      "Prompt-first Full-Stack (MERN) Engineer with a backend focus, building secure, AI-integrated tools with Node.js, MongoDB, and React.",
    siteName: "Crystal DePalma Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crystal DePalma - Full-Stack Developer",
    description:
      "Prompt-first Full-Stack (MERN) Engineer with a backend focus, building secure, AI-integrated tools with Node.js, MongoDB, and React.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <CommandPalette />
        </ThemeProvider>
      </body>
    </html>
  )
}
