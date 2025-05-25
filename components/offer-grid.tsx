"use client";

import { motion } from "framer-motion";
import type { Offers } from "../sanity.types";
import OfferThumb from "./offer-thumb";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface OfferGridProps {
  offers: Offers[];
  lang?: string;
}

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

function OfferGrid({ offers, lang = "en" }: OfferGridProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIfMobile();

    // Listen for window resize
    window.addEventListener("resize", checkIfMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Check if offer is expired
  const isOfferExpired = (dateString?: string) => {
    if (!dateString) return false;
    try {
      const expiryDate = new Date(dateString);
      const today = new Date();
      today.setHours(0, 0, 0, 0); // Reset time to start of day
      return expiryDate < today;
    } catch (e) {
      return false;
    }
  };

  // Function to scroll the container
  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.querySelector("div")?.offsetWidth || 0;
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;

      container.scrollBy({ left: scrollAmount, behavior: "smooth" });

      // Update active index
      setTimeout(() => {
        const newPosition = container.scrollLeft;
        const newIndex = Math.round(newPosition / cardWidth);
        setScrollPosition(newPosition);
        setActiveIndex(newIndex);
      }, 300);
    }
  };

  // Handle scroll event to update indicators
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.querySelector("div")?.offsetWidth || 0;
      const newPosition = container.scrollLeft;
      const newIndex = Math.round(newPosition / cardWidth);

      setScrollPosition(newPosition);
      setActiveIndex(newIndex);
    }
  };

  // If on mobile or tablet, show the carousel view
  if (isMobile) {
    return (
      <div className="relative">
        {/* Navigation Controls - Only shown on larger screens */}
        <div className="hidden sm:flex justify-end gap-2 mb-6">
          <button
            onClick={() => scroll("left")}
            className="p-2 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors"
            aria-label="Previous offer"
            disabled={scrollPosition <= 10}
          >
            <ChevronLeft
              className={`h-5 w-5 ${scrollPosition <= 10 ? "text-gray-300" : "text-gray-700"}`}
            />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors"
            aria-label="Next offer"
          >
            <ChevronRight className="h-5 w-5 text-gray-700" />
          </button>
        </div>

        {/* Offers Carousel */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 scrollbar-hide"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {offers?.map((offer, index) => {
            const expired = isOfferExpired(offer.validUntil);
            return (
              <motion.div
                key={offer._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex-none w-[85%] sm:w-[75%] md:w-[48%] snap-start ${
                  expired ? "opacity-50 grayscale" : ""
                }`}
              >
                <OfferThumb offer={offer} lang={lang} />
              </motion.div>
            );
          })}
        </div>

        {/* Scroll Indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {offers?.map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all ${
                index === activeIndex ? "w-8 bg-avangarda" : "w-2 bg-gray-300"
              }`}
              onClick={() => {
                if (scrollContainerRef.current) {
                  const container = scrollContainerRef.current;
                  const cardWidth =
                    container.querySelector("div")?.offsetWidth || 0;
                  container.scrollTo({
                    left: cardWidth * index,
                    behavior: "smooth",
                  });
                  setActiveIndex(index);
                }
              }}
              aria-label={`Go to offer ${index + 1}`}
            />
          ))}
        </div>

        {/* Mobile scroll hint */}
        {/* <div className="sm:hidden flex items-center justify-center mt-4 text-sm text-gray-500">
          <ChevronLeft className="h-4 w-4" />
          <span className="mx-1">
            {lang === "pl" ? "Przewiń w lewo i prawo" : "Swipe left and right"}
          </span>
          <ChevronRight className="h-4 w-4" />
        </div> */}
      </div>
    );
  }

  // Desktop grid view
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
    >
      {offers?.map((offer) => {
        const expired = isOfferExpired(offer.validUntil);
        return (
          <motion.div
            key={offer._id}
            variants={item}
            layout
            className={expired ? "opacity-50 grayscale" : ""}
          >
            <OfferThumb offer={offer} lang={lang} />
          </motion.div>
        );
      })}
    </motion.div>
  );
}

export default OfferGrid;
