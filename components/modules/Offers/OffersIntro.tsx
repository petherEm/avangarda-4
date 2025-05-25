"use client";

import { Container } from "@/components/container";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import OfferGrid from "@/components/offer-grid";
import type { Offers } from "../../../sanity.types";

// Helper function to get nested dictionary values using dot notation
const getNestedValue = (obj: any, path: string) => {
  return path.split(".").reduce((acc, part) => acc && acc[part], obj);
};

interface OffersIntroProps {
  dict: any;
  lang: string;
  offers: Offers[];
}

const OffersIntro = ({ dict, lang, offers }: OffersIntroProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const phoneNumber = "+48 574 383 282";

  // Helper function for translations
  const t = (key: string) => getNestedValue(dict, key) || key;

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <Container className="mt-6 sm:mt-6 md:mt-4 lg:mt-0 mb-6 lg:mb-0 bg-white w-full text-primary lg:py-20">
      <div className="max-w-7xl mx-auto sm:px-4">
        {/* Header Section with Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <h1 className="text-3xl md:text-4xl font-semibold">
                {t("offers.title")}
              </h1>
            </div>

            <p className="text-lg leading-relaxed mb-8">
              {t("offers.description")}
            </p>

            <p className="text-gray-600 mb-8">{t("offers.availability")}</p>

            <Link
              href={`tel:${phoneNumber.replace(/\s+/g, "")}`}
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                variant="secondary"
                className="w-fit transition-all hover:scale-105 active:scale-95"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <Phone className="h-4 w-4 mr-2" />
                {isHovering ? phoneNumber : t("offers.knowMore")}
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative aspect-[4/3] w-full overflow-hidden"
          >
            <Image
              src="/offers/offers-0.jpg"
              alt={t("offers.imageAlt")}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>

        {/* Offers Grid Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold mb-12 text-center">
            {t("offers.browseTitle")}
          </h2>

          <OfferGrid offers={offers} lang={lang} />
        </motion.div>
      </div>
    </Container>
  );
};

export default OffersIntro;
