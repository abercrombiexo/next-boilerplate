import {defineQuery} from 'next-sanity'

const PAGE_BUILDER_FRAGMENT = `
  pageBuilder {
    blocks[] {
      _type,
      _key,
      headline,
      subheadline,
      ctaLabel,
      ctaHref,
      secondaryCtaLabel,
      secondaryCtaHref,
      content,
    }
  }
`

export const HOME_PAGE_QUERY = defineQuery(`
  *[_type == "page" && slug.current == "home"][0] {
    _id,
    title,
    ${PAGE_BUILDER_FRAGMENT}
  }
`)

export const PAGE_BY_SLUG_QUERY = defineQuery(`
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    seo,
    ${PAGE_BUILDER_FRAGMENT}
  }
`)
