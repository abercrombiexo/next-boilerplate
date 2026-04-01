import type { Metadata } from "next"
import { AboutHero } from "@/components/about-hero"
import { AboutValues } from "@/components/about-values"
import { AboutTeam } from "@/components/about-team"

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Acme, our mission, values, and the team building the future of developer tools.",
  openGraph: {
    title: "About Acme",
    description:
      "Learn about Acme, our mission, values, and the team building the future of developer tools.",
    url: "https://acme.com/about",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Acme",
      },
    ],
  },
  twitter: {
    title: "About Acme",
    description:
      "Learn about Acme, our mission, values, and the team building the future of developer tools.",
  },
  alternates: {
    canonical: "https://acme.com/about",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Acme",
  description:
    "Learn about Acme, our mission, values, and the team building the future of developer tools.",
  url: "https://acme.com/about",
  mainEntity: {
    "@type": "Organization",
    name: "Acme",
    url: "https://acme.com",
    foundingDate: "2024",
    description:
      "The modern platform for teams who want to move fast without breaking things.",
    employee: [
      { "@type": "Person", name: "Alex Chen", jobTitle: "CEO & Co-founder" },
      { "@type": "Person", name: "Sarah Kim", jobTitle: "CTO & Co-founder" },
      { "@type": "Person", name: "Marcus Rivera", jobTitle: "Head of Design" },
      {
        "@type": "Person",
        name: "Emily Zhang",
        jobTitle: "Head of Engineering",
      },
      { "@type": "Person", name: "David Park", jobTitle: "Head of Product" },
      { "@type": "Person", name: "Lina Petrov", jobTitle: "Head of Growth" },
    ],
  },
}

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <AboutHero />
      <AboutValues />
      <AboutTeam />
    </>
  )
}
