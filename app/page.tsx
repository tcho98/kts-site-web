import VideoBackground from "@/components/VideoBckground";
import ValueSection from "@/components/ValueSection";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import CarousselBackground from "@/components/CarousselBackground";
import StatSession from "@/components/StatSession";
import ScrollingCarousel from "@/components/ScrollingCarousselle";

import ImageTextCard from "@/components/ImageTextCard";

import ReadyToStart from "@/components/ReadyToStart";
import Award from "@/components/Award";

export const metadata = {
  title: "KTS Mobility | Transport Scolaire Fiable et Sécurisé",
  description:
    "KTS Mobility propose des solutions de transport scolaire fiables, sûres et efficaces pour les élèves. Offrez à vos enfants un trajet sécurisé chaque jour.",
};

export default function Home() {
  return (
    <>
      <div className="sm:h-[650px] h-[700px] overflow-x-hidden">
        {/* Video Background Component */}
        <div className="absolute inset-0 z-0">
          <VideoBackground />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto  sm:px-6 lg:px-6   items-start mt-50 text-white ">
          <div className=" w-[600px]">
            <h1 className="text-[2rem] px-8 sm:text-[4.5rem] font-bold">
              We Move Kids Forward
            </h1>
            <p className="mt-4 px-8 w-[500px] text-sm sm:text-lg ">
              This is a simple Next.js application.This is a simple Next.js
              application.This is a simple Next.js application.
            </p>
            <div className="px-8 mt-5 sm:px-8">
              <Link
                href="/experience"
                className="bg-blue-400 text-black font-semibold px-8 sm:px-8 mt-5 py-2 rounded-3xl inline-block text-sm sm:text-base"
              >
                Experience KTS Mobility
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-[400px] text-center items-center justify-center sm:mt-50 p-20 mt-37 flex bg-gray-300 ">
        <div className="flex justify-center py-10">
          <Award
            name="Central Africa Startup Awards"
            pdfUrl="/awards/cert.pdf"
            logoUrl="/Clm.webp"
            count={1}
          />
        </div>
      </div>
      <div id="section1" className="h-full bg-blue-500 py-10">
        <div className="z-50 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          {/* Titre de section */}
          <p className="pt-10 text-white text-xl sm:text-2xl">Our service</p>

          {/* Partie texte + image */}
          <div className="flex flex-col lg:flex-row gap-10 mt-10">
            {/* Bloc Texte */}
            <div className="flex flex-col gap-y-7 lg:w-[600px] w-full">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl text-white font-bold">
                As Brilliant as the Students We Serve
              </h1>
              <p className="text-white text-sm sm:text-base">
                We provide an end-to-end, future-ready transportation solution
                powered by leading-edge platform technology...
              </p>
              <div>
                <Link
                  href="/contact/"
                  className="bg-white text-black px-8 py-2 rounded-3xl inline-block text-sm sm:text-base"
                >
                  What we offer
                </Link>
              </div>
            </div>

            {/* Bloc Image */}
            <div className="flex justify-center items-center w-full lg:w-[600px] bg-amber-400">
              <Image
                src="/next.svg"
                className="w-full max-w-xs sm:max-w-md"
                width={400}
                height={200}
                alt=""
              />
            </div>
          </div>

          {/* Section avec les ValueSection */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
            {[
              {
                imageSRC: "/services/safety.webp",
                altText: "Electric Service",
                description: "An Integrated Platform for Safety & Transparency",
              },
              {
                imageSRC: "/services/electric.webp",
                altText: "Solar Service",
                description:
                  "Multi-Size Vehicle Fleets,Including Electric Vehicle",
              },
              {
                imageSRC: "/services/stat.webp",
                altText: "Plumbing Service",
                description:
                  "Peace of Mind With Real-Time Visibility and Transparency",
              },
              {
                imageSRC: "/services/sustant.webp",
                altText: "Heating Service",
                description: "Efficient Heating Systems",
              },
            ].map((item, i) => (
              <div key={i} className="border-black border-t py-6">
                <ValueSection
                  imageSRC={item.imageSRC}
                  altText={item.altText}
                  description={item.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-cover bg-center bg-no-repeat  relative">
        <CarousselBackground />
      </div>
      <div
        className="h-full bg-fixed bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/backg/turner.svg')" }}
      >
        <div className="z-10 max-w-7xl  relative mx-auto w-full  px-4 md:px-6 lg:px-8">
          {/* Titre de section */}
          <p className="pt-10 text-white text-xl sm:text-2xl">Our student</p>

          {/* Partie texte + image */}
          <div className="flex flex-col lg:flex-row gap-10 mt-10">
            {/* Bloc Texte */}
            <div className="flex flex-col gap-y-7 w-full">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl text-white font-bold">
                Zum Already Serves Over 4,000 Schools and Districts
              </h1>
              <p className="text-white text-base sm:text-lg max-w-xl">
                We provide an end-to-end, future-ready transportation solution
                powered by leading-edge platform technology...
              </p>
            </div>
          </div>

          {/* Séparateur */}
          <div className="border-t border-black mt-8" />

          {/* Texte + Image (responsive) */}
          <div className="flex flex-col lg:flex-row  w-full mt-8 gap-8">
            {/* Colonne texte */}
            <div className="w-full lg:w-[50%] p-1 flex flex-col items-start">
              <h3 className="text-gray-900 text-xl sm:text-2xl md:text-3xl font-semibold max-w-3xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                quis inventore, facilis nostrum non sapiente ullam blanditiis...
              </h3>
              <div className="flex flex-col sm:flex-row justify-center mt-15 gap-6 sm:gap-4 max-w-3xl mx-auto sm:mx-0">
                <p className="text-sm sm:text-base text-gray-900 text-center sm:text-left max-w-xs">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Sapiente, sunt illo ducimus quisquam omnis ex.
                </p>
                <div className="hidden sm:block border-r-2 border-black mx-4 h-auto" />
                <p className="text-sm sm:text-base text-gray-900 text-center sm:text-left max-w-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem quis inventore, facil
                </p>
              </div>
            </div>

            {/* Colonne image */}
            <div className="w-full lg:w-[500px]  p-1 flex justify-center items-center rounded-lg max-w-3xl mx-auto  lg:mx-0">
              <Image
                src="/images/peoplecard.png"
                className="w-full max-w-full sm:max-w-full  object-cover rounded-lg"
                width={400}
                height={100}
                alt="Next.js logo"
                loading="lazy" // Lazy load activé
                placeholder="blur" // Placeholder flou activé
                blurDataURL="/next-blur.svg" // Petite image floue (à créer)
              />
            </div>
          </div>
          {/* StatSession */}
          <div className="">
            <StatSession />
          </div>
        </div>
      </div>

      <div className="bg-gray-200 py-10">
        <div className="z-10 max-w-7xl relative mx-auto w-full px-4 md:px-6 lg:px-8">
          <ScrollingCarousel />

          <div className="relative h-screen mt-6 p-8">
            {/* Image de fond avec overlay sombre */}
            <div
              className="absolute inset-0 bg-center bg-cover bg-no-repeat"
              style={{ backgroundImage: "url('/images/driver.png')" }}
            />
            <div className="absolute inset-0 bg-black/30" />{" "}
            {/* overlay sombre */}
            {/* Contenu au-dessus de l'image */}
            <div className="relative z-20 max-w-[500px] ">
              <p className="text-white mb-4">People who Zum</p>

              <h1 className="text-3xl sm:text-4xl lg:text-6xl text-white font-bold mt-50">
                Meet Peter
              </h1>

              <h2 className="text-2xl sm:text-2xl lg:text-2xl text-white font-bold mt-8">
                Im interested in who you are as a person. I dont just see you as
                another student. I know your name. I care about you as a person.
              </h2>

              <p className="mt-8 text-white">
                School Bus Driver | Former Youngest Bus Driver in Arkansas
              </p>

              <div className="mt-10">
                <Link
                  href="#contact"
                  className="bg-white text-black px-6 py-2 rounded-3xl inline-block text-sm sm:text-base"
                >
                  What we offer
                </Link>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-4 gap-4">
            <ImageTextCard
              imageSrc="/val/value.png"
              imageAlt="Valeur Zum"
              description="Découvrez comment notre plateforme améliore la sécurité des trajets scolaires."
              linkHref="/services"
            />
            <ImageTextCard
              imageSrc="/val/value.png"
              imageAlt="Valeur Zum"
              description="Découvrez comment notre plateforme améliore la sécurité des trajets scolaires."
              linkHref="/services"
            />
            <ImageTextCard
              imageSrc="/val/value.png"
              imageAlt="Valeur Zum"
              description="Découvrez comment notre plateforme améliore la sécurité des trajets scolaires."
              linkHref="/services"
            />
          </div>
        </div>
      </div>
      <ReadyToStart />
    </>
  );
}
