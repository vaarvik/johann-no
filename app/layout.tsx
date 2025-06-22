import type { Metadata } from "next"
import { Geist, Meow_Script, Space_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
})

const heroFont = Meow_Script({
  variable: "--font-hero",
  weight: "400",
})

export const metadata: Metadata = {
  title: {
    default: "Johann Vårvik | Full-Stack Developer",
    template: "%s | Johann Vårvik",
  },
  description: "The portfolio of Johann, a full-stack developer specializing in React, TypeScript, and modern web technologies.",
  openGraph: {
    title: "Johann Vårvik | Full-Stack Developer",
    description: "The portfolio of Johann, a full-stack developer specializing in React, TypeScript, and modern web technologies.",
    url: "https://johann-v2.vercel.app/", // TODO: Remember to change this to your actual domain
    siteName: "Johann Vårvik",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Johann's Portfolio | Full-Stack Developer",
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      "index": true,
      "follow": true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${spaceMono.variable} ${heroFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
