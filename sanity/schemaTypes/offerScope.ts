import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const offerScope = defineType({
  name: 'offerScope',
  title: 'Offer Scope',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'plname',
      title: 'PL-Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'enname',
      title: 'EN-Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
  preview: {
    select: {
      title: 'plname',
    },
  },
});