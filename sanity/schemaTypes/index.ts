import { type SchemaTypeDefinition } from 'sanity'

import {offerType} from './offerType'
import {blockContentType} from './blockContentType'
import { offerScope } from './offerScope'
import { categoryType } from './categoryType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, offerType, categoryType, offerScope],
}
