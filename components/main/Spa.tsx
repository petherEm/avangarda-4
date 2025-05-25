"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "../container";
import { Button } from "../ui/button";
import Link from "next/link";

const attractions = ["Basen", "Jacuzzi", "Masaże", "Grota Solna"];

interface SpaProps {
  lang?: string;
  dict?: any;
}

const Spa = ({ lang = "pl", dict }: SpaProps) => {
  // Determine the spa URL based on language
  const spaUrl = lang === "en" ? "/en/spa" : "/pl/spa";

  return (
    <Container className="w-full text-primary py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto sm:px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Images Container - Left Side */}
          <div className="w-full space-y-4 md:space-y-6">
            {/* First Image - Larger */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[3/2] w-full"
            >
              <Image
                src="/spa/spa-09.jpg"
                alt="Spa 1"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={100}
              />
            </motion.div>
          </div>

          {/* Text Content - Right Side */}
          <div className="w-full space-y-6 lg:pl-8 flex flex-col justify-start">
            <motion.h2
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl font-alata md:text-5xl font-semibold uppercase tracking-wider"
            >
              SPA & Wellness
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-base md:text-lg leading-relaxed text-primary"
            >
              Odkryj oazę spokoju w naszym SPA, gdzie ciało i umysł znajdują
              pełne odprężenie. Hotel Avangarda oferuje wyjątkowe atrakcje:
            </motion.p>

            {/* Attractions List */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="space-y-3"
            >
              {attractions.map((attraction, index) => (
                <motion.div
                  key={attraction}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-2 h-2 bg-avangarda rounded-full flex-shrink-0"></div>
                  <span className="text-lg md:text-xl font-medium">
                    {attraction}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="pt-4"
            >
              <Link href={spaUrl}>
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-fit transition-all hover:scale-105 active:scale-95"
                >
                  Dowiedz się więcej
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Spa;
