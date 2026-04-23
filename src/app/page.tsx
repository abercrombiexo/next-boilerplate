import { sanityFetch } from '@/sanity/lib/live'
import { HOME_PAGE_QUERY } from '@/sanity/queries'
import { PageBuilder } from '@/components/PageBuilder/PageBuilder'
import { Hero } from '@/components/Hero/hero'

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

export default async function Home() {
  const { data: page } = await sanityFetch({ query: HOME_PAGE_QUERY })
  const blocks = page?.pageBuilder?.blocks ?? []

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      {blocks.length > 0 ? <PageBuilder blocks={blocks} /> : <Hero />}
    </>
  )
}
