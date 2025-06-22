import type { Metadata } from "next"
import HowItWasMade from "@/components/how-it-was-made/how-it-was-made"

export const metadata: Metadata = {
  title: "How This Site Was Made | Johann Vårvik",
  description: "A detailed breakdown of the design, development, and technology stack used to build this portfolio website.",
}

export default function HowItWasMadePage() {
  return <HowItWasMade />
}
