import AnimateOnScroll from "@/components/animate-on-scroll";
import HeroImage from "@/components/hero-image";
import HotelIntro from "@/components/modules/Rooms/HotelIntro";
import RoomsIntro from "@/components/modules/Rooms/RoomsIntro";
import WorkInProgress from "@/components/work-in-progress";
import { getDictionary } from "@/lib/dictionary";

export default async function HotelMain({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "pl");

  const title = lang === "pl" ? "Nasz Hotel" : "Our hotel";

  return (
    <>
      <HeroImage image="/hotel-hero-2.jpg" title={title} />

      <AnimateOnScroll>
        <HotelIntro dict={dict} lang={lang} />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <RoomsIntro dict={dict} lang={lang} />
      </AnimateOnScroll>
    </>
  );
}
