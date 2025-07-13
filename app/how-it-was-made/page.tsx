import type { Metadata } from "next"
import HowItWasMade from "@/components/how-it-was-made/how-it-was-made"

export const metadata: Metadata = {
  title: "How This Site Was Made | Johann Vårvik",
  description: "A detailed breakdown of the design, development, and technology stack used to build this portfolio website. Learn about the Next.js, React, TypeScript, and Tailwind CSS implementation.",
  keywords: ["portfolio development", "Next.js", "React", "TypeScript", "Tailwind CSS", "web design", "development process"],
  openGraph: {
    title: "How This Site Was Made | Johann Vårvik",
    description: "A detailed breakdown of the design, development, and technology stack used to build this portfolio website.",
    type: "article",
  },
  alternates: {
    canonical: "/how-it-was-made",
  },
}

export default function HowItWasMadePage() {
  return <HowItWasMade />
}
