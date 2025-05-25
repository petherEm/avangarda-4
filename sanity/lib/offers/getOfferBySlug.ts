import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";


export const getOfferBySlug = async (slug: string) => {
    const OFFER_BY_ID_QUERY = defineQuery(`
        *[_type == "offers" && slug.current == $slug] {
            _id,
            plname,
            enname,
            slug,
            image,
            price,
            currency,
            validUntil,
            people,
            minNights,
            pldescription,
            endescription,
            "offerListing": offerListing[]-> {
                _id,
                plname,
                enname,
                description
            }
        } | order(plname asc) [0]`);
    try {
        const offer = await sanityFetch({
            query: OFFER_BY_ID_QUERY,
            params: {
                slug,
            },
        });
        return offer.data || null;
    } catch (error) {
        console.error("Error fetching product by slug", error);
        return null;
    }
}