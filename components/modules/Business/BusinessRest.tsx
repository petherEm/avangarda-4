"use client";
import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Sparkles,
  Wine,
  Clock,
  Phone,
  Heart,
  Music,
  Dumbbell,
  Bath,
  Coffee,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface BusinessEntertainmentProps {
  dict?: any;
  lang?: string;
}

export default function BusinessEntertainment({
  dict,
  lang = "pl",
}: BusinessEntertainmentProps) {
  const [selectedTab, setSelectedTab] = useState<string>("spa");
  const phoneNumber = "+48 29 752 50 34";

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
              Relaks & Team Building
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg leading-relaxed mb-6"
            >
              Po intensywnym dniu pełnym spotkań i prezentacji, zapraszamy do
              strefy relaksu Hotel Avangarda. Oferujemy szeroki wybór możliwości
              odpoczynku - od relaksujących zabiegów spa po rozrywkę w Klubie
              Coola.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-lg leading-relaxed"
            >
              Nasi goście biznesowi mogą korzystać ze specjalnych pakietów
              łączących konferencje z wellness, zapewniając idealną równowagę
              między pracą a odpoczynkiem.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Button className="flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                Zarezerwuj pakiet relaksacyjny
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Kontakt
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
              src="/spa/spa-01.jpeg"
              alt="Spa & Wellness"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4">
              <Badge className="bg-pink-500 text-white border-none mb-2">
                Strefa Wellness
              </Badge>
              <h2 className="text-white text-xl font-semibold">
                Odprężenie dla ciała i umysłu
              </h2>
            </div>
          </motion.div>
        </div>

        {/* Entertainment Options Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <h2 className="text-3xl font-semibold text-center">
              Opcje relaksu i rozrywki
            </h2>
          </div>

          <p className="text-center max-w-3xl mx-auto mb-12 text-lg leading-relaxed">
            Wybierz idealną formę odpoczynku po dniu pełnym wyzwań biznesowych.
            Nasze zaplecze wellness i rozrywkowe zapewni Ci regenerację sił.
          </p>

          <Tabs
            defaultValue="spa"
            className="w-full"
            onValueChange={setSelectedTab}
          >
            <TabsList className="w-full max-w-md mx-auto mb-8 bg-white p-1 flex">
              <TabsTrigger
                value="spa"
                className="flex-1 data-[state=active]:bg-transparent data-[state=active]:text-avangarda data-[state=active]:border-b-2 data-[state=active]:border-b-avangarda/90 rounded-none"
              >
                Spa & Wellness
              </TabsTrigger>
              <TabsTrigger
                value="club"
                className="flex-1 data-[state=active]:bg-transparent data-[state=active]:text-avangarda data-[state=active]:border-b-2 data-[state=active]:border-b-avangarda/90 rounded-none"
              >
                Klub Coola
              </TabsTrigger>
              <TabsTrigger
                value="outdoor"
                className="flex-1 data-[state=active]:bg-transparent data-[state=active]:text-avangarda data-[state=active]:border-b-2 data-[state=active]:border-b-avangarda/90 rounded-none"
              >
                Outdoor
              </TabsTrigger>
            </TabsList>

            <TabsContent value="spa" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-2xl font-semibold">Spa & Wellness</h3>
                      <Badge className="bg-pink-100 text-avangarda rounded-none">
                        Strefa ciszy
                      </Badge>
                    </div>
                    <p className="text-lg leading-relaxed">
                      Nasza strefa Spa to oaza spokoju w sercu hotelu. Po
                      męczącym dniu konferencyjnym zapraszamy na relaksujące
                      zabiegi, które przywrócą równowagę i energię.
                      Profesjonalni terapeuci zadbają o Twoje samopoczucie.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <div className="bg-pink-50 p-4 text-center">
                      <Bath className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">Sauna & Jacuzzi</p>
                      <p className="text-xs">Strefa relaksu</p>
                    </div>

                    <div className="bg-pink-50 p-4 text-center">
                      <Heart className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">Masaże</p>
                      <p className="text-xs">Różne techniki</p>
                    </div>

                    <div className="bg-pink-50 p-4 text-center">
                      <Sparkles className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">Zabiegi na twarz</p>
                      <p className="text-xs">Pielęgnacja premium</p>
                    </div>

                    <div className="bg-pink-50 p-4 text-center">
                      <Dumbbell className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">Siłownia</p>
                      <p className="text-xs">24/7 dla gości</p>
                    </div>

                    <div className="bg-pink-50 p-4 text-center">
                      <Clock className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">Godziny otwarcia</p>
                      <p className="text-xs">10:00 - 22:00</p>
                    </div>

                    <div className="bg-pink-50 p-4 text-center">
                      <Coffee className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">Herbaciarnia</p>
                      <p className="text-xs">Zdrowe napoje</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">
                      Popularne zabiegi dla gości biznesowych:
                    </h4>
                    <ul className="grid grid-cols-1 gap-2">
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-avangarda"></div>
                        <span className="text-sm">
                          Masaż antystresowy (50 min)
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-avangarda"></div>
                        <span className="text-sm">
                          Ekspresowy zabieg na twarz (30 min)
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-avangarda"></div>
                        <span className="text-sm">
                          Relaks w strefie saun (bez limitu)
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-avangarda"></div>
                        <span className="text-sm">
                          Aromaterapia i relaksacja (45 min)
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-6">
                    <Link href={`/${lang}/rozrywka`}>
                      <Button className="flex items-center gap-2">
                        <Sparkles className="h-4 w-4" />
                        Więcej o Spa & Wellness
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        src="/spa/spa-06.jpg"
                        alt="Strefa relaksu"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        src="/spa/pool-01.jpg"
                        alt="Zabiegi spa"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6">
                    <h4 className="font-medium mb-3">Pakiety biznesowe Spa</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center pb-2 border-b">
                        <div>
                          <h5 className="font-medium">Quick Relax</h5>
                          <p className="text-sm text-gray-600">
                            30 min masażu + sauna
                          </p>
                        </div>
                        <p className="font-semibold">150 zł</p>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b">
                        <div>
                          <h5 className="font-medium">Executive Wellness</h5>
                          <p className="text-sm text-gray-600">
                            Pełny pakiet 2h
                          </p>
                        </div>
                        <p className="font-semibold">350 zł</p>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <h5 className="font-medium">After Conference</h5>
                          <p className="text-sm text-gray-600">
                            Masaż + zabieg + relaks
                          </p>
                        </div>
                        <p className="font-semibold">450 zł</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="club" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-2xl font-semibold">Klub Coola</h3>
                      <Badge className="bg-pink-100 text-avangarda rounded-none">
                        Rozrywka & Relaks
                      </Badge>
                    </div>
                    <p className="text-lg leading-relaxed">
                      Po dniu pełnym spotkań biznesowych zapraszamy do Klubu
                      Coola - miejsca, gdzie można się zrelaksować przy
                      kręglach, bilardzie czy dartsach. Idealne na nieformalne
                      spotkania zespołu czy networking w luźnej atmosferze.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <div className="bg-pink-50 p-4 text-center">
                      <Users className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">Kręgle</p>
                      <p className="text-xs">4 profesjonalne tory</p>
                    </div>

                    <div className="bg-pink-50 p-4 text-center">
                      <Wine className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">Bar</p>
                      <p className="text-xs">Szeroki wybór drinków</p>
                    </div>

                    <div className="bg-pink-50 p-4 text-center">
                      <Music className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">Muzyka</p>
                      <p className="text-xs">DJ w weekendy</p>
                    </div>

                    <div className="bg-pink-50 p-4 text-center">
                      <Clock className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">Godziny</p>
                      <p className="text-xs">16:00 - 22:00</p>
                    </div>

                    <div className="bg-pink-50 p-4 text-center">
                      <Users className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">Bilard</p>
                      <p className="text-xs">Stoły profesjonalne</p>
                    </div>

                    <div className="bg-pink-50 p-4 text-center">
                      <Coffee className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">Przekąski</p>
                      <p className="text-xs">Menu barowe</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Atrakcje klubu:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-avangarda"></div>
                        <span className="text-sm">Kręgle - 4 tory</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-avangarda"></div>
                        <span className="text-sm">Bilard amerykański</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-avangarda"></div>
                        <span className="text-sm">Darts elektroniczny</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-avangarda"></div>
                        <span className="text-sm">Piłkarzyki i cymbergaj</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-avangarda"></div>
                        <span className="text-sm">Strefa lounge z TV</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-avangarda"></div>
                        <span className="text-sm">
                          Bar z drinkami i przekąskami
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-6">
                    <Link href={`/${lang}/rozrywka`}>
                      <Button className="flex items-center gap-2">
                        <Sparkles className="h-4 w-4" />
                        Więcej o Klubie Coola
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        src="/klub/klub-01.jpg"
                        alt="Kręgielnia"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        src="/klub/klub-03.jpg"
                        alt="Strefa gier"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6">
                    <h4 className="font-medium mb-3">Pakiety Team Building</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center pb-2 border-b">
                        <div>
                          <h5 className="font-medium">Turniej kręgli</h5>
                          <p className="text-sm text-gray-600">2h + napoje</p>
                        </div>
                        <p className="font-semibold">80 zł/os</p>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b">
                        <div>
                          <h5 className="font-medium">Wieczór integracyjny</h5>
                          <p className="text-sm text-gray-600">3h + catering</p>
                        </div>
                        <p className="font-semibold">120 zł/os</p>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <h5 className="font-medium">VIP Business Night</h5>
                          <p className="text-sm text-gray-600">
                            Cały klub na wyłączność
                          </p>
                        </div>
                        <p className="font-semibold">Na zapytanie</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="outdoor" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-2xl font-semibold">
                        Aktywności na świeżym powietrzu
                      </h3>
                      <Badge className="bg-pink-100 text-avangarda rounded-none">
                        Rekreacja
                      </Badge>
                    </div>
                    <p className="text-lg leading-relaxed">
                      Uzupełnij swój pobyt biznesowy o aktywności na świeżym
                      powietrzu. Oferujemy szereg możliwości rekreacji, które
                      doskonale sprawdzą się jako przerwa od spotkań lub jako
                      element integracji zespołu. Bliskość natury i aktywność
                      fizyczna to doskonały sposób na odświeżenie umysłu.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <div className="bg-pink-50 p-4 text-center">
                      <Users className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">Kajaki</p>
                      <p className="text-xs">Spływy grupowe</p>
                    </div>

                    <div className="bg-pink-50 p-4 text-center">
                      <Wine className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">Restauracja Fort</p>
                      <p className="text-xs">Kuchnia regionalna</p>
                    </div>

                    <div className="bg-pink-50 p-4 text-center">
                      <Music className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">Beach Volley</p>
                      <p className="text-xs">Boisko profesjonalne</p>
                    </div>

                    <div className="bg-pink-50 p-4 text-center">
                      <Clock className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">Dostępność</p>
                      <p className="text-xs">Maj - Wrzesień</p>
                    </div>

                    <div className="bg-pink-50 p-4 text-center">
                      <Users className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">Rowery</p>
                      <p className="text-xs">Wypożyczalnia</p>
                    </div>

                    <div className="bg-pink-50 p-4 text-center">
                      <Coffee className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">Pikniki</p>
                      <p className="text-xs">Catering plenerowy</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">
                      Popularne aktywności dla grup:
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-avangarda"></div>
                        <span className="text-sm">Spływ kajakowy (2-3h)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-avangarda"></div>
                        <span className="text-sm">
                          Turniej siatkówki plażowej
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-avangarda"></div>
                        <span className="text-sm">
                          Wycieczki rowerowe z przewodnikiem
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-avangarda"></div>
                        <span className="text-sm">
                          Kolacja w Restauracji Fort
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-avangarda"></div>
                        <span className="text-sm">Piknik integracyjny</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-avangarda"></div>
                        <span className="text-sm">
                          Gry terenowe i team building
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-6">
                    <Link href={`/${lang}/rozrywka`}>
                      <Button className="flex items-center gap-2">
                        <Sparkles className="h-4 w-4" />
                        Dowiedz się więcej
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        src="/outdoor/out-01.jpg"
                        alt="Kajaki"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        src="/outdoor/out-02.jpg"
                        alt="Aktywności plenerowe"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        src="/outdoor/out-04.jpg"
                        alt="Beach Volley"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        src="/fort/fort-05.png"
                        alt="Restauracja Fort"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6">
                    <h4 className="font-medium mb-3">Pakiety Outdoor</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center pb-2 border-b">
                        <div>
                          <h5 className="font-medium">Spływ kajakowy</h5>
                          <p className="text-sm text-gray-600">
                            Grupa 10-20 osób
                          </p>
                        </div>
                        <p className="font-semibold">od 90 zł/os</p>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b">
                        <div>
                          <h5 className="font-medium">Turniej sportowy</h5>
                          <p className="text-sm text-gray-600">
                            Beach volley + catering
                          </p>
                        </div>
                        <p className="font-semibold">od 120 zł/os</p>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <h5 className="font-medium">Kolacja w Forcie</h5>
                          <p className="text-sm text-gray-600">
                            Menu degustacyjne
                          </p>
                        </div>
                        <p className="font-semibold">od 150 zł/os</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Special Business Offers Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20 bg-gray-50 sm:p-8"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <h2 className="text-3xl font-semibold text-center">
              Specjalne oferty dla grup biznesowych
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="cursor-pointer transition-all rounded-none hover:shadow-lg">
              <CardContent className="p-6">
                <div className="h-12 w-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-avangarda" />
                </div>
                <h3 className="font-medium text-lg mb-2">Conference & Spa</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Połącz konferencję z relaksem. 20% zniżki na zabiegi spa dla
                  uczestników konferencji.
                </p>
                <p className="text-xl font-semibold text-avangarda">-20%</p>
              </CardContent>
            </Card>

            <Card className="cursor-pointer transition-all rounded-none hover:shadow-lg">
              <CardContent className="p-6">
                <div className="h-12 w-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-avangarda" />
                </div>
                <h3 className="font-medium text-lg mb-2">Team Building Plus</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Zarezerwuj salę konferencyjną i otrzymaj 2h w Klubie Coola
                  gratis dla całej grupy.
                </p>
                <p className="text-xl font-semibold text-avangarda">
                  2h GRATIS
                </p>
              </CardContent>
            </Card>

            <Card className="cursor-pointer transition-all rounded-none hover:shadow-lg">
              <CardContent className="p-6">
                <div className="h-12 w-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-avangarda" />
                </div>
                <h3 className="font-medium text-lg mb-2">After Hours</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Specjalne godziny otwarcia spa i klubu dla grup biznesowych po
                  wcześniejszej rezerwacji.
                </p>
                <p className="text-xl font-semibold text-avangarda">VIP</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="mb-6 text-lg">
              Skontaktuj się z nami, aby omówić indywidualną ofertę dla Twojej
              firmy
            </p>
            <div className="flex justify-center gap-4">
              <Link href={`tel:${phoneNumber.replace(/\s+/g, "")}`}>
                <Button variant="outline" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  {phoneNumber}
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </Container>
  );
}
