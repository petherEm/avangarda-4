import { TrolleyIcon } from "@sanity/icons";
import { defineField, defineType} from "sanity";


export const offerType = defineType({
    name: 'offers',
    title: 'Offers',
    type: 'document',
    icon: TrolleyIcon,
    groups: [
        { name: 'mainDetails', title: 'Main Details', default: true },
        { name: 'descriptions', title: 'Descriptions & Inclusions' },
        { name: 'validityStatus', title: 'Validity & Status' },
        { name: 'organization', title: 'Organization' },
    ],
    fields: [
        defineField({
            name: 'plname',
            title: 'PL-Name',
            type: 'string',
            validation: Rule => Rule.required(),
            group: 'mainDetails',
        }),
        defineField({
            name: 'enname',
            title: 'EN-Name',
            type: 'string',
            validation: Rule => Rule.required(),
            group: 'mainDetails',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'plname', // Corrected source from 'name'
                maxLength: 96,
            },
            validation: Rule => Rule.required(),
            group: 'mainDetails',
        }),
        defineField({
            name: 'image',
            title: 'Offer Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            group: 'mainDetails',
        }),
        defineField({
            name: 'price',
            title: 'Price',
            type: 'number',
            validation: Rule => Rule.required(),
            group: 'mainDetails',
        }),
        defineField({
            name: 'people',
            title: 'Number of People',
            description: 'How many people is this offer directed to',
            type: 'number',
            validation: Rule => Rule.required().min(1),
            group: 'mainDetails',
        }),
        defineField({
            name: 'minNights',
            title: 'Minimum Nights',
            description: 'Minimum number of nights for this offer',
            type: 'number',
            validation: Rule => Rule.required().min(1),
            group: 'mainDetails',
        }),
        defineField({
            name: 'offerListing',
            title: 'What is included',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'offerScope' } }],
            description: 'Select what is included in this offer',
            group: 'descriptions',
        }),
        defineField({
            name: 'pldescription',
            title: 'PL-Description',
            type: 'blockContent',
            group: 'descriptions',
        }),
        defineField({
            name: 'endescription',
            title: 'EN-Description',
            type: 'blockContent',
            group: 'descriptions',
        }),
        defineField({
            name: 'validFrom',
            type: 'datetime',
            title: 'Valid From',
            group: 'validityStatus',
        }),
        defineField({
            name: 'validUntil',
            type: 'datetime',
            title: 'Valid Until',
            group: 'validityStatus',
        }),
        defineField({
            name: 'isActive',
            type: 'boolean',
            title: 'Is Active',
            description: 'Check to activate the sale',
            initialValue: true,
            group: 'validityStatus',
        }),
        defineField({
            name: "categories",
            title: "Categories",
            type: "array",
            of: [{ type: "reference", to: { type: "category" } }],
            group: 'organization',
        }),
        defineField({
            name: "stock",
            title: "Stock",
            type: "number",
            validation: Rule => Rule.min(0),
            group: 'organization',
        }),
    ],
    preview: {
        select: {
            title: 'plname',
            media: 'image',
            price: 'price',
        },
        prepare(select) {
            return {
                title: select.title,
                subtitle: `$${select.price}`,
                media: select.media,
            };
        },
    }
});