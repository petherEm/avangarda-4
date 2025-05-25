import Image from "next/image";
import { Container } from "@/components/container";
import { getOfferBySlug } from "@/sanity/lib/offers/getOfferBySlug";
import { getDictionary } from "@/lib/dictionary";
import { imageUrl } from "@/lib/imageUrl";
import {
  ArrowRight,
  Tag,
  Calendar,
  Utensils,
  Wifi,
  Coffee,
  SpadeIcon as Spa,
  Check,
  Clock,
  Users,
  Info,
  CalendarDays,
  BadgeCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Params {
  lang: string;
  slug: string;
}

interface Offers {
  _id: string;
  enname: string;
  plname: string;
  endescription: any[];
  pldescription: any[];
  image: any;
  price?: number;
  currency?: string;
  validUntil?: string;
  people?: number;
  minNights?: number;
  offerListing?: Array<{
    _id: string;
    name?: string;
    icon?: string;
  }>;
  amenities?: Array<{
    _id: string;
    name?: string;
    icon?: string;
  }>;
}

// Mock data only for elements that are not coming from Sanity yet
const packageDetails = {
  amenities: [
    { name: "Śniadanie w formie bufetu", icon: Coffee },
    { name: "Kolacja w restauracji hotelowej", icon: Utensils },
    { name: "Dostęp do strefy SPA & Wellness", icon: Spa },
    { name: "Bezpłatne Wi-Fi", icon: Wifi },
    { name: "Parking", icon: Check },
    { name: "Późne wymeldowanie", icon: Clock },
  ],
  terms: [
    "Oferta ważna w wybrane dni tygodnia",
    "Rezerwacja z minimum 7-dniowym wyprzedzeniem",
    "Pełna płatność wymagana przy rezerwacji",
    "Brak możliwości zwrotu w przypadku anulowania",
    "Psy są mile widziane, ale prosimy o wcześniejsze zgłoszenie",
    "Dostępność pokoi zależna od terminu rezerwacji",
  ],
  reviews: [
    {
      author: "Anna i Marek",
      rating: 5,
      text: "Wspaniały weekend! Obsługa na najwyższym poziomie, a pakiet zawierał wszystko, czego potrzebowaliśmy do relaksu.",
    },
    {
      author: "Katarzyna",
      rating: 4,
      text: "Bardzo dobry stosunek jakości do ceny. Szczególnie podobał nam się masaż i kolacja.",
    },
  ],
  relatedOffers: [
    { id: 1, name: "Pakiet Rodzinny", image: "/outdoor/out-04.jpg" },
    { id: 2, name: "Weekend SPA", image: "/spa/spa-14.jpg" },
  ],
  gallery: [
    "/spa/spa-14.jpg",
    "/restaurant/rest-03.jpg",
    "/outdoor/out-02.jpg",
    "/spa/pool-01.jpg",
  ],
  roomType: "Pokój Deluxe",
};

const OffersPageId = async ({ params }: { params: Params }) => {
  const { lang, slug } = await params;
  const dict = await getDictionary(lang as "en" | "pl");

  // Fetch the offer data using the slug
  const offer = await getOfferBySlug(slug);

  // Function to get localized content
  const getLocalizedContent = (offer: Offers) => {
    const name = lang === "pl" ? offer.plname : offer.enname;
    const description =
      lang === "pl" ? offer.pldescription : offer.endescription;

    return {
      name: name || "No title available",
      description:
        description
          ?.map((block) =>
            block._type === "block"
              ? block.children?.map((child) => child.text).join("")
              : ""
          )
          .join("") || "No description available",
      price: offer.price || 0,
      currency: offer.currency || (lang === "pl" ? "PLN" : "PLN"),
    };
  };

  // Get the localized content for the current offer
  const localizedContent = offer
    ? getLocalizedContent(offer)
    : {
        name: "Package Offer",
        description: "Details not available",
        price: 0,
        currency: lang === "pl" ? "PLN" : "USD",
      };

  // Format price with currency
  const formattedPrice = new Intl.NumberFormat(
    lang === "pl" ? "pl-PL" : "en-US",
    {
      style: "currency",
      currency: localizedContent.currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }
  ).format(localizedContent.price);

  // Format price per night (for display purposes)
  const pricePerNight = new Intl.NumberFormat(
    lang === "pl" ? "pl-PL" : "en-US",
    {
      style: "currency",
      currency: localizedContent.currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }
  ).format(localizedContent.price / (offer?.minNights || 2));

  // Calculate duration based on minNights
  const getDuration = (minNights?: number) => {
    if (!minNights || minNights <= 0) return "1 dzień / 1 noc";
    return `${minNights + 1} dni / ${minNights} noce`;
  };

  // Format validUntil date if available
  const formatValidUntil = (dateString?: string) => {
    if (!dateString) return "31.12.2025"; // Default fallback

    try {
      const date = new Date(dateString);
      return new Intl.DateTimeFormat(lang === "pl" ? "pl-PL" : "en-US", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }).format(date);
    } catch (e) {
      return "31.12.2025"; // Fallback in case of parsing error
    }
  };

  return (
    <main className="bg-gray-50 min-h-screen font-raleway">
      {/* Hero Section - Updated with solid background and new colors */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Solid background color for the content area */}
        <div className="absolute top-0 left-0 bottom-0 md:w-1/2 w-full bg-[#404042] z-0"></div>

        {/* Decorative elements - updated color */}
        <div className="absolute top-0 left-0 w-full h-1 bg-[#E31C79] z-10"></div>

        <div className="relative z-10 min-h-screen flex items-center">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {/* Left content - positioned lower */}
              <div className="mt-28 mb-10 md:col-span-5 text-white md:pt-48 py-8 pt-24 md:py-0">
                {/* Special offer badge - updated color */}
                <Badge className="mb-4 bg-[#E31C79] hover:bg-[#E31C79]/90 border-0 text-white px-3 py-1">
                  Oferta Specjalna
                </Badge>

                <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                  {localizedContent.name}
                </h1>

                <div className="flex items-center mb-6">
                  <Tag className="mr-2 h-5 w-5 text-avangarda" />
                  <span className="text-2xl md:text-3xl font-bold text-white/95">
                    {formattedPrice}
                  </span>
                  <span className="text-sm text-white/70 ml-2">/ pakiet</span>
                </div>

                {/* Key package details - updated icon colors */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <Calendar className="mr-2 h-5 w-5 text-avangarda" />
                    <span className="text-white/90">
                      {getDuration(offer?.minNights)}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Users className="mr-2 h-5 w-5 text-avangarda" />
                    <span className="text-white/90">
                      Dla {offer?.people || 2} osób
                    </span>
                  </div>
                  <div className="flex items-center">
                    <CalendarDays className="mr-2 h-5 w-5 text-avangarda" />
                    <span className="text-white/90">
                      Ważne do: {formatValidUntil(offer?.validUntil)}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <BadgeCheck className="mr-2 h-5 w-5 text-avangarda" />
                    <span className="text-white/90">
                      {packageDetails.roomType}
                    </span>
                  </div>
                </div>

                <p className="text-lg text-white/90 mb-8 line-clamp-3">
                  {localizedContent.description}
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    className="bg-[#E31C79] hover:bg-[#E31C79]/90 text-white border-0 shadow-lg shadow-[#E31C79]/20"
                  >
                    {dict?.common?.bookNow || "Book Now"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10"
                  >
                    {dict?.common?.contactUs || "Contact Us"}
                  </Button>
                </div>

                {/* Mobile-only image below buttons */}
                <div className="md:hidden mt-8">
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={
                        offer?.image
                          ? imageUrl(offer.image).url()
                          : "/placeholder.svg?height=400&width=640&query=luxury+hotel+room"
                      }
                      alt={localizedContent.name}
                      fill
                      className="object-cover"
                      sizes="100vw"
                      priority
                    />
                    {/* Subtle overlay to maintain contrast if needed */}
                    <div className="absolute inset-0 bg-black/20"></div>
                  </div>
                </div>
              </div>

              {/* Empty columns to maintain grid spacing */}
              <div className="hidden md:block md:col-span-7"></div>
            </div>
          </div>
        </div>

        {/* Full height, full width image positioned absolutely - hidden on mobile */}
        <div className="absolute top-0 right-0 bottom-0 md:w-1/2 w-full h-screen md:h-auto hidden md:block">
          {/* Gradient overlay for darkening the image from top to middle */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent z-10"></div>

          {/* Left edge transition */}
          <div className="absolute top-0 left-0 bottom-0 w-16 bg-gradient-to-r from-[#404042] to-transparent z-10 hidden md:block"></div>

          <Image
            src={
              offer?.image
                ? imageUrl(offer.image).url()
                : "/placeholder.svg?height=1200&width=800&query=luxury+hotel+room"
            }
            alt={localizedContent.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </section>

      {/* Content Section - Updated accent colors */}
      <Container className="py-12 md:py-20">
        {offer ? (
          <div className="max-w-6xl mx-auto">
            {/* Package Overview */}
            <div className="bg-white shadow-md p-8 mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-10 h-1 bg-[#E31C79] mr-4"></span>
                {dict?.common?.offerDetails || "Offer Details"}
              </h2>
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-700 leading-relaxed">
                  {localizedContent.description}
                </p>
              </div>
              {/* What's included section - Condensed */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  W pakiecie otrzymujesz
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {packageDetails.amenities.map((amenity, index) => (
                    <div
                      key={index}
                      className="flex items-center p-2 bg-gray-50"
                    >
                      <amenity.icon className="h-4 w-4 text-avangarda mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-700">
                        {amenity.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  Najważniejsze atrakcje
                </h3>
                <div className="bg-gradient-to-r from-pink-50 to-white p-6 border border-pink-100">
                  <ul className="space-y-3">
                    {offer.offerListing && offer.offerListing.length > 0 ? (
                      offer.offerListing.map((item, index) => {
                        // Display the name based on the current language
                        const displayName =
                          lang === "pl" ? item.plname : item.enname;

                        return (
                          <li
                            key={item._id || index}
                            className="flex items-start"
                          >
                            <Check className="h-5 w-5 text-avangarda mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">
                              {displayName || "Atrakcja pakietu"}
                            </span>
                          </li>
                        );
                      })
                    ) : (
                      <li className="flex items-start">
                        <Info className="h-5 w-5 text-avangarda mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">
                          Brak informacji o atrakcjach pakietu
                        </span>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>

            {/* Image Gallery */}
            <div className="bg-white shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-10 h-1 bg-[#E31C79] mr-4"></span>
                Galeria
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {packageDetails.gallery.map((image, index) => (
                  <div
                    key={index}
                    className="relative aspect-[4/3]  overflow-hidden group"
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`Gallery image ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="bg-white shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-10 h-1 bg-[#E31C79] mr-4"></span>
                Warunki rezerwacji
              </h2>

              <ul className="space-y-4">
                {packageDetails.terms.map((term, index) => (
                  <li key={index} className="flex items-start">
                    <Info className="h-5 w-5 text-gray-400 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{term}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Related Offers */}
            <div className="bg-white shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-10 h-1 bg-[#E31C79] mr-4"></span>
                Podobne oferty
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {packageDetails.relatedOffers.map((relatedOffer, index) => (
                  <div
                    key={index}
                    className="group relative  overflow-hidden shadow-md"
                  >
                    <div className="relative aspect-[16/9]">
                      <Image
                        src={relatedOffer.image || "/placeholder.svg"}
                        alt={relatedOffer.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {relatedOffer.name}
                      </h3>
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-white/10 backdrop-blur-sm border-white/50 text-white hover:bg-white/20"
                      >
                        Zobacz szczegóły
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Call to action */}
            <div className="bg-[#404042]  p-8 text-center text-white shadow-xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                {dict?.common?.interestedInOffer || "Zainteresowany tą ofertą?"}
              </h3>
              <p className="text-white/90 max-w-2xl mx-auto mb-6">
                Zarezerwuj już teraz i zapewnij sobie niezapomniane chwile w
                naszym hotelu. Liczba miejsc w tej ofercie jest ograniczona.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-[#E31C79] hover:bg-[#E31C79]/90 text-white"
                >
                  {dict?.common?.bookNow || "Zarezerwuj teraz"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  {dict?.common?.contactUs || "Skontaktuj się z nami"}
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">Offer not found.</p>
          </div>
        )}
      </Container>
    </main>
  );
};

export default OffersPageId;
