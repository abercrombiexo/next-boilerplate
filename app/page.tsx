import { Hero } from "@/components/hero"

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Acme",
  url: "https://acme.com",
  logo: "https://acme.com/icon.svg",
  description:
    "The modern platform for teams who want to move fast without breaking things.",
  sameAs: [
    "https://twitter.com/acme",
    "https://github.com/acme",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    url: "https://acme.com/#contact",
  },
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Hero />
    </>
  )
}
