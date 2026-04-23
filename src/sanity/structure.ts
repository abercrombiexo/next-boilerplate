import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site Settings')
        .id('siteSettings')
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings'),
        ),
      S.documentTypeListItem('page').title('Pages'),
      ...S.documentTypeListItems().filter(
        (listItem) => listItem.getId() && !['siteSettings', 'page'].includes(listItem.getId()!),
      ),
    ])
