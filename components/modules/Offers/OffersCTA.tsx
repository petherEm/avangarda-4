"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Phone, ChefHat, Utensils } from "lucide-react";
import { useState } from "react";

// Helper function to get nested dictionary values using dot notation
const getNestedValue = (obj: any, path: string) => {
  return path.split(".").reduce((acc, part) => acc && acc[part], obj);
};

const OffersCTA = ({ dict, lang }) => {
  const [isHovering, setIsHovering] = useState(false);
  const phoneNumber = "+48 574 383 282";

  // Helper function for translations
  const t = (key: string) => getNestedValue(dict, key) || key;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-black text-white p-8 md:p-12 "
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Zadzwoń aby zarezerwować! Oferta ograniczona liczbą miejsc.
        </h2>

        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Opowiemy Ci o szczegółach oferty, dopasujemy ofertę do Twoich potrzeb
          i zarezerwujemy dla Ciebie miejsce.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={`tel:${phoneNumber.replace(/\s+/g, "")}`}
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <Phone className="h-5 w-5" />
              {isHovering ? phoneNumber : "Zadzwoń"}
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default OffersCTA;
