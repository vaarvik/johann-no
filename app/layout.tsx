import type { Metadata } from "next"
import { Geist, Meow_Script, Space_Mono } from "next/font/google"
import Script from "next/script"
import { PosthogProvider } from "@/components/providers/posthog-provider"
import CookieConsent from "@/components/ui/cookie-consent"
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
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: "Johann Vårvik | Full-Stack Developer & IT Manager",
    template: "%s | Johann Vårvik",
  },
  description: "Full-stack developer and IT manager specializing in React, TypeScript, Node.js, and modern web technologies. Leading technical teams and building scalable applications.",
  keywords: ["full-stack developer", "React", "TypeScript", "Node.js", "IT manager", "web development", "portfolio"],
  authors: [{ name: "Johann Vårvik" }],
  creator: "Johann Vårvik",
  publisher: "Johann Vårvik",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://johann.no"), // TODO: Update to your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Johann Vårvik | Full-Stack Developer & IT Manager",
    description: "Full-stack developer and IT manager specializing in React, TypeScript, Node.js, and modern web technologies. Leading technical teams and building scalable applications.",
    url: "https://johann.no/", // TODO: Remember to change this to your actual domain
    siteName: "Johann Vårvik",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // TODO: Create and add this image
        width: 1200,
        height: 630,
        alt: "Johann Vårvik - Full-Stack Developer & IT Manager",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Johann Vårvik | Full-Stack Developer & IT Manager",
    description: "Full-stack developer and IT manager specializing in React, TypeScript, Node.js, and modern web technologies.",
    creator: "@johann_vaarvik", // TODO: Update with your actual Twitter handle
    images: ["/og-image.jpg"], // TODO: Create and add this image
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
  verification: {
    google: "TODO", // TODO: Add Google Search Console verification code
  },
  manifest: "/manifest.json",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Johann Vårvik",
    "jobTitle": "Full-Stack Developer & IT Manager",
    "description": "Full-stack developer and IT manager specializing in React, TypeScript, Node.js, and modern web technologies.",
    "url": "https://johann.no",
    "sameAs": [
      "https://github.com/vaarvik",
      "https://www.linkedin.com/in/johann-v%C3%A5rvik-9114a7163/"
    ],
    "knowsAbout": [
      "React",
      "TypeScript",
      "Node.js",
      "Java",
      "Kotlin",
      "PostgreSQL",
      "Kubernetes",
      "Azure",
      "Web Development",
      "System Architecture",
      "Team Management"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Aevy"
    }
  }

  return (
    <html lang="en">
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          // eslint-disable-next-line react-dom/no-dangerously-set-innerhtml
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}

        />
      </head>
      <body
        className={`${geistSans.variable} ${spaceMono.variable} ${heroFont.variable} antialiased`}
      >
        <PosthogProvider>
          {children}
          {/** Cookie consent banner (client-only) */}
          <CookieConsent />
        </PosthogProvider>
      </body>
    </html>
  )
}
