import { Hero } from '@/components/Hero/hero'

type Block = {
  _type: string
  _key: string
  [key: string]: unknown
}

export function PageBuilder({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((block) => {
        switch (block._type) {
          case 'hero':
            return <Hero key={block._key} {...block} />
          default:
            return null
        }
      })}
    </>
  )
}
