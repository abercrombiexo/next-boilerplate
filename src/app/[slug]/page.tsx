import { notFound } from 'next/navigation'
import { sanityFetch } from '@/sanity/lib/live'
import { PAGE_BY_SLUG_QUERY } from '@/sanity/queries'
import { PageBuilder } from '@/components/PageBuilder/PageBuilder'

type Props = {
  params: Promise<{ slug: string }>
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const { data: page } = await sanityFetch({ query: PAGE_BY_SLUG_QUERY, params: { slug } })

  if (!page) notFound()

  const blocks = page?.pageBuilder?.blocks ?? []
  return <PageBuilder blocks={blocks} />
}
