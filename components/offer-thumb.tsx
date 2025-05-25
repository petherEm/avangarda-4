"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Offers } from "../sanity.types";
import { imageUrl } from "@/lib/imageUrl";
import {
  Tag,
  Calendar,
  Users,
  Phone,
  ArrowRight,
  CalendarCheck2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const OfferThumb = ({
  offer,
  lang = "en",
}: {
  offer: Offers;
  lang?: string;
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const phoneNumber = "+48 574 383 282";
  const isOutOfStock = offer.stock != null && offer.stock <= 0;

  // Function to get localized content following the same pattern as Offers.tsx
  const getLocalizedContent = (offer: Offers) => {
    const name = lang === "pl" ? offer.plname : offer.enname;
    const description =
      lang === "pl" ? offer.pldescription : offer.endescription;
    const currency = "PLN";

    // Format price with currency
    const formattedPrice = offer.price
      ? new Intl.NumberFormat(lang === "pl" ? "pl-PL" : "en-US", {
          style: "currency",
          currency: currency,
          minimumFractionDigits: 0,
          maximumFractionDigits: 2,
        }).format(offer.price)
      : null;

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
      price: formattedPrice,
    };
  };

  const localizedContent = getLocalizedContent(offer);

  // Get actual features based on offer data
  const getFeatures = () => {
    const featureSets = [
      {
        icon: Calendar,
        text: offer.minNights
          ? lang === "pl"
            ? `Min. ${offer.minNights} ${offer.minNights === 1 ? "noc" : "noce"}`
            : `Min. ${offer.minNights} ${offer.minNights === 1 ? "night" : "nights"}`
          : lang === "pl"
            ? "Min. 1 noc"
            : "Min. 1 night",
      },
      {
        icon: Users,
        text: offer.people
          ? lang === "pl"
            ? `Dla ${offer.people} ${offer.people === 1 ? "osoby" : "osób"}`
            : `For ${offer.people} ${offer.people === 1 ? "person" : "people"}`
          : lang === "pl"
            ? "Dla 2 osób"
            : "For 2 people",
      },
      {
        icon: CalendarCheck2,
        text: offer.validUntil
          ? lang === "pl"
            ? `Ważne do ${new Date(offer.validUntil).toLocaleDateString("pl-PL", { month: "long", day: "numeric" })}`
            : `Valid until ${new Date(offer.validUntil).toLocaleDateString("en-US", { month: "long", day: "numeric" })}`
          : lang === "pl"
            ? "Dostępne przez cały rok"
            : "Available year-round",
      },
    ];
    return featureSets;
  };

  const features = getFeatures();

  return (
    <div className="h-full bg-white overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
      {/* Image container with price badge */}
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        {offer.image && (
          <Image
            className="object-cover"
            src={imageUrl(offer.image).url() || "/placeholder.svg"}
            alt={localizedContent.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>

        {/* Price badge */}
        {localizedContent.price && (
          <div className="absolute bottom-4 right-4 bg-white text-pink-600 px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 font-medium">
            <Tag className="h-4 w-4" />
            <span>
              {lang === "pl" ? "od " : "from "} {localizedContent.price}
            </span>
          </div>
        )}

        {isOutOfStock && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <span className="text-white font-bold text-xl px-6 py-3 border-2 border-white/30 rounded-full">
              {lang === "pl" ? "Niedostępne" : "Out of Stock"}
            </span>
          </div>
        )}
      </div>

      {/* Content container */}
      <div className="p-6 flex flex-col flex-grow">
        <Link
          href={`/${lang}/pakiety/${offer.slug?.current || ""}`}
          className="group"
        >
          <h2 className="text-xl md:text-2xl font-semibold mb-3 group-hover:text-avangarda transition-colors">
            {localizedContent.name}
          </h2>
        </Link>

        {/* Features */}
        <div className="flex flex-wrap gap-3 mb-4">
          {features.map((feature, i) => (
            <div
              key={i}
              className="flex items-center gap-1.5 text-sm text-gray-600"
            >
              <feature.icon className="h-4 w-4 text-avangarda" />
              <span>{feature.text}</span>
            </div>
          ))}
        </div>

        <p className="text-gray-600 text-sm md:text-base line-clamp-3 mb-4 flex-grow">
          {localizedContent.description}
        </p>

        {/* Improved button container */}
        <div className="mt-auto grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link
            href={`/${lang}/pakiety/${offer.slug?.current || ""}`}
            className="group"
          >
            <Button
              variant="outline"
              className="w-full transition-all hover:scale-105 active:scale-95"
            >
              <span className="truncate">
                {lang === "pl" ? "Szczegóły" : "View Details"}
              </span>
              <ArrowRight className="ml-2 h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>

          <Link
            href={`tel:${phoneNumber.replace(/\s+/g, "")}`}
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              variant="secondary"
              className="w-full transition-all hover:scale-105 active:scale-95"
              title={phoneNumber}
            >
              <Phone className="h-4 w-4 mr-2 shrink-0" />
              <span className="truncate">
                {lang === "pl" ? "Zarezerwuj" : "Book Now"}
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OfferThumb;
