import AnimateOnScroll from "@/components/animate-on-scroll";
import { Container } from "@/components/container";
import HeroImage from "@/components/hero-image";
import OffersIntro from "@/components/modules/Offers/OffersIntro";
import OfferGrid from "@/components/offer-grid";
import { getDictionary } from "@/lib/dictionary";

import { getAllOffers } from "@/sanity/lib/offers/getOffers";

const Pakiety = async ({ params }: { params: Promise<{ lang: string }> }) => {
  const offers = await getAllOffers();

  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "pl");

  const title = lang === "pl" ? "Nasze Pakiety" : "Current Offers";

  return (
    <>
      <HeroImage image="/offers/offers-4.jpg" title={title} />

      <AnimateOnScroll>
        <OffersIntro dict={dict} lang={lang} offers={offers} />
      </AnimateOnScroll>
    </>
  );
};

export default Pakiety;
