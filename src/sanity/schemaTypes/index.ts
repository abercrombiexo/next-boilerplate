import { type SchemaTypeDefinition } from 'sanity'
import {page} from './documents/page'
import {siteSettings} from './documents/siteSettings'
import {hero} from './objects/hero'
import {pageBuilder} from './objects/pageBuilder'
import {richTextSection} from './objects/richTextSection'
import {seo} from './objects/seo'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [page, siteSettings, hero, pageBuilder, richTextSection, seo],
}
