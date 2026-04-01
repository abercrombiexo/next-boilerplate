import type { Metadata } from "next"
import { PricingHero } from "@/components/pricing-hero"
import { PricingCards } from "@/components/pricing-cards"
import { PricingFaq } from "@/components/pricing-faq"

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for teams of all sizes. Start for free, scale as you grow. No hidden fees, no surprises.",
  openGraph: {
    title: "Pricing - Acme",
    description:
      "Simple, transparent pricing for teams of all sizes. Start for free, scale as you grow.",
    url: "https://acme.com/pricing",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Acme Pricing Plans",
      },
    ],
  },
  twitter: {
    title: "Pricing - Acme",
    description:
      "Simple, transparent pricing for teams of all sizes. Start for free, scale as you grow.",
  },
  alternates: {
    canonical: "https://acme.com/pricing",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  name: "Acme Pricing FAQ",
  url: "https://acme.com/pricing",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can I change plans later?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a free trial for Pro?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, every Pro plan comes with a 14-day free trial. No credit card required to start.",
      },
    },
    {
      "@type": "Question",
      name: "What payment methods do you accept?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We accept all major credit cards, including Visa, Mastercard, and American Express. Enterprise customers can also pay via invoice.",
      },
    },
    {
      "@type": "Question",
      name: "Can I cancel my subscription?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. You can cancel anytime from your account settings. Your access continues until the end of your current billing period.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer discounts for startups?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer special pricing for early-stage startups. Reach out to our sales team to learn more about our startup program.",
      },
    },
  ],
}

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <PricingHero />
      <PricingCards />
      <PricingFaq />
    </>
  )
}
