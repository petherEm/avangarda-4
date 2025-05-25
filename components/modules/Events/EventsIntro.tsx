"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { Container } from "@/components/container";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import Link from "next/link";
import {
  Download,
  Users,
  CalendarIcon,
  Utensils,
  Music,
  Camera,
  MapPin,
  Heart,
  ChevronLeft,
  ChevronRight,
  Phone,
} from "lucide-react";
import { addMonths, format } from "date-fns";
import { pl, enUS } from "date-fns/locale";
import {
  VENUES_DATA,
  WEDDING_PACKAGES,
  ADDITIONAL_SERVICES,
  WEDDING_GALLERY,
} from "@/constants";

// Helper function to get nested dictionary values using dot notation
const getNestedValue = (obj: any, path: string) => {
  return path.split(".").reduce((acc, part) => acc && acc[part], obj);
};

interface EventsIntroProps {
  dict: any;
  lang: string;
}

export default function EventsIntro({ dict, lang }: EventsIntroProps) {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [calendarMonth, setCalendarMonth] = useState<Date>(new Date());
  const [isHovering, setIsHovering] = useState(false);
  const [isHoveringInquire, setIsHoveringInquire] = useState(false);
  const [isHoveringContact, setIsHoveringContact] = useState(false);
  const phoneNumber = "+48 574 383 282";

  // Add reference to the calendar section
  const calendarSectionRef = useRef<HTMLDivElement>(null);

  // Helper function for translations
  const t = (key: string) => getNestedValue(dict, key) || key;

  // Function to scroll to calendar section
  const scrollToCalendar = () => {
    calendarSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // Date formatting locale
  const dateLocale = lang === "pl" ? pl : enUS;

  // Sample available dates (in a real app, these would come from an API)
  const availableDates = [
    new Date(2025, 5, 5),
    new Date(2025, 5, 12),
    new Date(2025, 5, 19),
    new Date(2025, 5, 26),
    new Date(2025, 6, 3),
    new Date(2025, 6, 10),
    new Date(2025, 6, 17),
    new Date(2025, 6, 24),
    new Date(2025, 7, 7),
    new Date(2025, 7, 14),
    new Date(2025, 7, 21),
    new Date(2025, 7, 28),
  ];

  // Function to check if a date is in the available dates
  const isDateAvailable = (date: Date) => {
    return availableDates.some(
      (availableDate) =>
        availableDate.getDate() === date.getDate() &&
        availableDate.getMonth() === date.getMonth() &&
        availableDate.getFullYear() === date.getFullYear()
    );
  };

  // Function to navigate to previous month
  const previousMonth = () => {
    setCalendarMonth((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(newDate.getMonth() - 1);
      return newDate;
    });
  };

  // Function to navigate to next month
  const nextMonth = () => {
    setCalendarMonth((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(newDate.getMonth() + 1);
      return newDate;
    });
  };

  return (
    <Container className="mt-6 sm:mt-6 md:mt-4 lg:mt-0 mb-6 lg:mb-0 bg-white w-full text-primary lg:py-20">
      <div className="max-w-7xl mx-auto sm:px-4">
        {/* Introduction Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="uppercase text-4xl md:text-5xl font-semibold tracking-wider mb-8"
            >
              {t("events.title")}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg leading-relaxed"
            >
              {t("events.description")}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Button
                className="flex items-center gap-2"
                onClick={scrollToCalendar}
              >
                <Heart className="h-4 w-4" />
                {t("events.bookDate")}
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                {t("events.downloadOffer")}
              </Button>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative aspect-video w-full overflow-hidden"
          >
            <Image
              src="/wedding/wed-room-04.jpg"
              alt={t("events.title")}
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Venue Capacity Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            {/* <Users className="h-7 w-7 text-avangarda" /> */}
            <h2 className="text-3xl font-semibold text-center">
              {t("events.venuesTitle")}
            </h2>
          </div>

          <p className="text-center leading-relaxed max-w-3xl mx-auto mb-12 text-lg">
            {t("events.venuesDescription")}
          </p>

          <Tabs defaultValue="ballroom" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8 bg-white rounded-lg p-1">
              {Object.keys(VENUES_DATA).map((venueKey) => (
                <TabsTrigger
                  key={venueKey}
                  value={venueKey}
                  className="data-[state=active]:bg-transparent data-[state=active]:text-avangarda data-[state=active]:border-b-2 data-[state=active]:border-b-avangarda rounded-none"
                >
                  {t(VENUES_DATA[venueKey].nameKey)}
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(VENUES_DATA).map(([key, venue]) => (
              <TabsContent key={key} value={key} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      // Placeholder image for the venue
                      // In a real application, you would replace this with the actual image source
                      src="/wedding/wed-room-03.jpg"
                      alt={t(venue.nameKey)}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-semibold mb-2">
                        {t(venue.nameKey)}
                      </h3>
                      <p className="text-lg leading-relaxed">
                        {t(`events.venues.${key}.description`)}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-pink-50 p-4 rounded-none text-center">
                        <Users className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                        <p className="text-sm text-avangarda">
                          {t("events.venueInfo.maxGuests")}
                        </p>
                        <p className="text-xl font-semibold">
                          {venue.capacity} {t("events.venueInfo.people")}
                        </p>
                      </div>

                      <div className="bg-pink-50 p-4 rounded-none text-center">
                        <MapPin className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                        <p className="text-sm text-avangarda">
                          {t("events.venueInfo.area")}
                        </p>
                        <p className="text-xl font-semibold">
                          {t(venue.sizeKey)}
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">
                        {t("events.venueInfo.amenities")}:
                      </h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {venue.featuresKeys.map((featureKey, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-pink-500"></div>
                            <span>{t(featureKey)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2">
                      <Button
                        variant="outline"
                        className="flex items-center gap-2"
                      >
                        <Camera className="h-4 w-4" />
                        {t("events.venueInfo.seeGallery")}
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        {/* Calendar Section */}
        <motion.div
          ref={calendarSectionRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20 bg-pink-50 p-1 sm:p-8"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            {/* <CalendarIcon className="h-7 w-7 text-pink-500" /> */}
            <h2 className="text-3xl font-semibold text-center">
              {t("events.availableDates")}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-medium mb-4">
                {t("events.checkAvailability")}
              </h3>
              <p className="mb-6 leading-relaxed">
                {t("events.availabilityDescription")}
              </p>

              {/* Two-month calendar view */}
              <div className="bg-white p-4 shadow-sm mb-6">
                <div className="flex justify-between items-center mb-4">
                  <Button variant="outline" size="sm" onClick={previousMonth}>
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <h3 className="text-lg font-medium">
                    {format(calendarMonth, "MMMM yyyy", { locale: dateLocale })}
                    {" - "}
                    {format(addMonths(calendarMonth, 1), "MMMM yyyy", {
                      locale: dateLocale,
                    })}
                  </h3>
                  <Button variant="outline" size="sm" onClick={nextMonth}>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* First month */}
                  <div>
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      month={calendarMonth}
                      className="mx-auto"
                      locale={dateLocale}
                      modifiers={{
                        available: (date) => isDateAvailable(date),
                      }}
                      modifiersClassNames={{
                        available:
                          "bg-green-100 text-green-900 hover:bg-green-200",
                      }}
                      disabled={(date) =>
                        !isDateAvailable(date) || date < new Date()
                      }
                      fromDate={new Date()}
                      hideMonthNavigation={true}
                    />
                  </div>

                  {/* Second month */}
                  <div>
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      month={addMonths(calendarMonth, 1)}
                      className="mx-auto"
                      locale={dateLocale}
                      modifiers={{
                        available: (date) => isDateAvailable(date),
                      }}
                      modifiersClassNames={{
                        available:
                          "bg-green-100 text-green-900 hover:bg-green-200",
                      }}
                      disabled={(date) =>
                        !isDateAvailable(date) || date < new Date()
                      }
                      fromDate={new Date()}
                      hideMonthNavigation={true}
                    />
                  </div>
                </div>
              </div>

              {date && (
                <div className="bg-pink-50 p-4">
                  <h4 className="font-medium mb-2">
                    {t("events.selectedDate")}:{" "}
                    {date.toLocaleDateString(lang === "pl" ? "pl-PL" : "en-US")}
                  </h4>
                  <p className="mb-4 leading-relaxed">
                    {t("events.dateAvailable")}
                  </p>
                  <div className="flex gap-6">
                    <Link
                      href={`tel:${phoneNumber.replace(/\s+/g, "")}`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Button
                        size="sm"
                        className="flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                      >
                        <Phone className="h-4 w-4" />
                        {isHovering ? phoneNumber : t("events.reserveDate")}
                      </Button>
                    </Link>
                    <Link
                      href={`tel:${phoneNumber.replace(/\s+/g, "")}`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
                        onMouseEnter={() => setIsHoveringInquire(true)}
                        onMouseLeave={() => setIsHoveringInquire(false)}
                      >
                        <Phone className="h-4 w-4" />
                        {isHoveringInquire
                          ? phoneNumber
                          : t("events.inquireDetails")}
                      </Button>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 shadow-sm">
                <h3 className="text-xl font-medium mb-4 flex items-center gap-2">
                  <Utensils className="h-5 w-5 text-avangarda" />
                  {t("events.packages.title")}
                </h3>
                <div className="space-y-4 leading-relaxed">
                  {WEDDING_PACKAGES.map((pkg, index) => (
                    <div
                      key={index}
                      className={`flex justify-between items-center pb-2 ${
                        index < WEDDING_PACKAGES.length - 1 ? "border-b" : ""
                      }`}
                    >
                      <div>
                        <h4 className="font-medium">{t(pkg.nameKey)}</h4>
                        <p className="text-sm text-gray-600">
                          {t(pkg.descriptionKey)}
                        </p>
                      </div>
                      <p className="font-semibold">{t(pkg.priceKey)}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 shadow-sm">
                <h3 className="text-xl font-medium mb-4 flex items-center gap-2">
                  <Music className="h-5 w-5 text-avangarda" />
                  {t("events.services.title")}
                </h3>
                <ul className="space-y-2">
                  {ADDITIONAL_SERVICES.map((service, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-pink-500"></div>
                      <span>{t(service.nameKey)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Gallery Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px flex-1 bg-gray-200"></div>
            <h2 className="text-3xl font-semibold text-center">
              {t("events.galleryTitle")}
            </h2>
            <div className="h-px flex-1 bg-gray-200"></div>
          </div>

          <div className="mb-8">
            <div className="relative aspect-[16/9] w-full overflow-hidden mb-4">
              <Image
                src={WEDDING_GALLERY[selectedImage].src || "/placeholder.svg"}
                alt={t(WEDDING_GALLERY[selectedImage].altKey)}
                fill
                className="object-cover transition-all duration-500"
              />
              {/* <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
                <h3 className="text-xl font-medium">
                  {t(WEDDING_GALLERY[selectedImage].titleKey)}
                </h3>
              </div> */}
            </div>

            <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
              {WEDDING_GALLERY.map((image, index) => (
                <div
                  key={index}
                  className={`relative aspect-square cursor-pointer overflow-hidden border-2 ${
                    selectedImage === index
                      ? "border-avangarda"
                      : "border-transparent"
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={t(image.altKey)}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="text-center flex flex-col items-center justify-center">
            <p className="text-lg mb-6 max-w-3xl mx-auto leading-relaxed">
              {t("events.downloadOfferText")}
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button variant="outline" className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                {t("events.downloadOffer")}
              </Button>

              <Link
                href={`tel:${phoneNumber.replace(/\s+/g, "")}`}
                onClick={(e) => e.stopPropagation()}
              >
                <Button
                  variant="secondary"
                  className="flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
                  onMouseEnter={() => setIsHoveringContact(true)}
                  onMouseLeave={() => setIsHoveringContact(false)}
                >
                  <Phone className="h-4 w-4" />
                  {isHoveringContact ? phoneNumber : t("events.contactUs")}
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </Container>
  );
}
