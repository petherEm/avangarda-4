"use client";

import { Container } from "@/components/container";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

// Option 1: Center Aligned Title with Animation - Moved Down
export function HeroImageCentered({ image, title }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <div className="relative w-full h-screen">
      <Image
        src={image || "/placeholder.svg"}
        alt={`${title} hero background`}
        fill
        priority
        className="object-cover"
        sizes="100vw"
        quality={100}
      />

      {/* Gradient overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50 pointer-events-none" />

      {/* Centered Title - Moved Down */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ paddingTop: "15vh" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center px-4"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            {title}
          </h1>
          <div className="w-24 h-1 bg-avangarda mx-auto" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className={`absolute bottom-8 left-0 right-0 flex flex-col items-center justify-center z-20 ${
          isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isScrolled ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-avangarda rounded-full mb-2 flex justify-center"
          initial={{ opacity: 0.8 }}
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        >
          <motion.div
            className="w-1 h-2 bg-avangarda rounded-full mt-2"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.div>
        <motion.div
          className="cursor-pointer"
          onClick={scrollDown}
          whileHover={{ scale: 1.05 }}
        >
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          >
            <ChevronDown className="h-6 w-6 text-avangarda" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

// Option 2: Left-aligned with vertical centering - Moved Down
export function HeroImageLeftCentered({ image, title }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <div className="relative w-full h-screen">
      <Image
        src={image || "/placeholder.svg"}
        alt={`${title} hero background`}
        fill
        priority
        className="object-cover"
        sizes="100vw"
        quality={100}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent pointer-events-none" />

      {/* Left-centered title - Moved Down */}
      <Container
        className="relative h-full flex items-center"
        style={{ paddingTop: "15vh" }}
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="w-20 h-1 bg-avangarda mb-6" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            {title}
          </h1>
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        className={`absolute bottom-8 left-0 right-0 flex flex-col items-center justify-center z-20 ${
          isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isScrolled ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-avangarda rounded-full mb-2 flex justify-center"
          initial={{ opacity: 0.8 }}
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        >
          <motion.div
            className="w-1 h-2 bg-avangarda rounded-full mt-2"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.div>
        <motion.div
          className="cursor-pointer"
          onClick={scrollDown}
          whileHover={{ scale: 1.05 }}
        >
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          >
            <ChevronDown className="h-6 w-6 text-avangarda" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

// Option 3: Lower Third Placement
export function HeroImageLowerThird({ image, title }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <div className="relative w-full h-screen">
      <Image
        src={image || "/placeholder.svg"}
        alt={`${title} hero background`}
        fill
        priority
        className="object-cover"
        sizes="100vw"
        quality={100}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 pointer-events-none" />

      {/* Lower Third Title Placement */}
      <Container className="absolute inset-x-0 bottom-0 pb-24 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="w-20 h-1 bg-avangarda mb-6" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            {title}
          </h1>
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        className={`absolute bottom-8 left-0 right-0 flex flex-col items-center justify-center z-20 ${
          isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isScrolled ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-avangarda rounded-full mb-2 flex justify-center"
          initial={{ opacity: 0.8 }}
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        >
          <motion.div
            className="w-1 h-2 bg-avangarda rounded-full mt-2"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.div>
        <motion.div
          className="cursor-pointer"
          onClick={scrollDown}
          whileHover={{ scale: 1.05 }}
        >
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          >
            <ChevronDown className="h-6 w-6 text-avangarda" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

// Default export with your preferred option
export default HeroImageLowerThird;
