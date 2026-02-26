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
      <div className=" h-screen overflow-x-hidden">
        <div className="bg-cover min-h-[100svh]  inset-0 z-0">
          <VideoBackground />
        </div>
      </div>
      <div className="relative h-[300px] text-center items-center justify-center   flex bg-gray-300 ">
        <div className="flex justify-center ">
          <Award
            name="Central Africa Startup Awards"
            pdfUrl="/awards/cert.pdf"
            logoUrl="/awards/clm.webp"
            count={1}
          />
        </div>
      </div>
      <div id="section1" className="h-full w-full bg-white py-10 p-5">
        <div className="z-50 max-w-7xl lg:mt-10 mx-auto w-full px-4 sm:px-16 lg:px-8">
          {/* Titre de section */}
          <p className="pt-10 text-black text-2xl sm:text-[3rem]">
            Our service
          </p>

          {/* Partie texte + image */}
          <div className="flex flex-col lg:flex-row gap-10 mt-10">
            {/* Bloc Texte */}
            <div className="flex flex-col gap-y-7 lg:w-[600px] w-full">
              <h1 className="text-4xl sm:text-2xl lg:text-4xl text-black font-bold">
                <br />
                REDEFENING SCHOOL TRANSPORTATION SERVICES
              </h1>
              <p className="text-black lg:mt-5 text-sm lg:text-xl">
                We work with both public, private schools and individual parents
                to help them fulfill alternative transportation needs so that
                they can focus on their core business and achieve their full
                potential.
              </p>
              <div>
                <Link
                  href="/contact/"
                  className="bg-blue-500 lg:mt-15 text-black px-8 py-2 rounded-3xl inline-block text-sm sm:text-base"
                >
                  What we offer
                </Link>
              </div>
            </div>

            {/* Bloc Image */}
            <div className="  w-full ">
              <Image
                src="/images/people.webp"
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

          {/* Section avec les ValueSection */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
            {[
              {
                imageSRC: "/services/rent.webp",
                altText: "Electric Service",
                title: "•	Bus and car rentals.",
                description: "An Integrated Platform for Safety & Transparency",
              },
              {
                imageSRC: "/services/electric.webp",
                altText: "Solar Service",
                title: "•	Group transportation solution",
                description:
                  "We offer transportation for In-school and after school activities field trips, after school trips like music, dance, Ballet lessons, sports, Extra and STEM classes, summer camps etc.",
              },
              {
                imageSRC: "/services/stat.webp",
                altText: "Plumbing Service",
                title: "•	Personalized transportation solution: ",
                description:
                  "Some of our kids need special education transportation needs and personalized rides, so we take care of kids with health challenges and disabilities.",
              },
              {
                imageSRC: "/services/sustant.webp",
                altText: "•	Transportation Plan optimization: ",
                title: "•	Transportation Plan optimization",
                description:
                  "Our combination of smart technology and the team’s expertise will help optimize your transportation plans, save money, alleviate driver shortages, and get students safely and timely to school.",
              },
              {
                imageSRC: "/services/rate.webp",
                altText: "Plumbing Service",
                title: "•	Care driver solution:  ",
                description: "We don’t just transport, we care.",
              },
            ].map((item, i) => (
              <div key={i} className="border-black border-t py-6">
                <ValueSection
                  imageSRC={item.imageSRC}
                  altText={item.altText}
                  title={item.title}
                  description={item.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div id="section2" className="bg-cover bg-center bg-no-repeat  relative">
        <CarousselBackground />
      </div>
      <div
        className="h-full bg-fixed bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/backg/page-turner5.svg')" }}
      >
        <div className="z-10 max-w-7xl  relative mx-auto w-full  px-4 md:px-6 lg:px-8">
          {/* Titre de section */}
          {/**/}
          <p className="pt-10 text-white text-xl sm:text-2xl"></p>

          {/* Partie texte + image */}
          <div className="flex flex-col lg:flex-row gap-10 mt-10">
            {/* Bloc Texte */}
            <div className="flex flex-col gap-y-7 w-full">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl text-black font-bold">
                KTS Mobility Already Serves Over 25 Schools in Douala
              </h1>
              <p className="text-black text-base sm:text-2xl max-w-xl">
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
            <div className="w-full lg:w-[50%] mt-20 flex flex-col items-start">
              <h3 className="text-gray-900 text-xl sm:text-2xl md:text-3xl font-semibold max-w-3xl">
                We love riding with KTS Mobility! The bus is comfortable, the
                driver is kind, and we always feel safe. We enjoy going to
                school together every day.
              </h3>
              <div className="flex flex-col sm:flex-row justify-center mt-15 gap-6 sm:gap-4 max-w-3xl mx-auto sm:mx-0">
                <p className="text-xl sm:text-base text-gray-900 text-center sm:text-left max-w-xs">
                  Kevin M., 10 years
                </p>
                <div className="hidden sm:block border-r-2 border-black mx-4 h-auto" />
              </div>
            </div>

            {/* Colonne image */}
            <div className="w-full lg:w-[500px]  p-1 flex justify-center items-center rounded-lg max-w-3xl mx-auto  lg:mx-0">
              <Image
                src="/images/pexels.webp"
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
              style={{ backgroundImage: "url('/images/peter.webp')" }}
            />
            <div className="absolute inset-0 bg-black/30" />{" "}
            {/* overlay sombre */}
            {/* Contenu au-dessus de l'image */}
            <div className="relative z-20  ">
              <p className="text-white mb-4"></p>

              <h1 className="text-3xl sm:text-4xl lg:text-6xl text-white font-bold mt-50">
                Meet Peter
              </h1>

              <h2 className="text-2xl sm:text-2xl lg:text-2xl text-white font-bold mt-8">
                I am interested in who you are as a person. I dont just see you
                as another student. I know your name. I care about you as a
                person.
              </h2>

              <p className="mt-8 text-white">School Bus Driver |</p>

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
              imageSrc="/images/vision.webp"
              imageAlt="Valeur kts"
              description="Our Mission"
              linkHref="/company#mission"
            />
            <ImageTextCard
              imageSrc="/images/story.webp"
              imageAlt="Valeur kts"
              description="Our Story"
              linkHref="/company/"
            />
            <ImageTextCard
              imageSrc="/images/compan.webp"
              imageAlt="Valeur kts"
              description="Join Us"
              linkHref="/contact/"
            />
          </div>
        </div>
      </div>
      <ReadyToStart />
    </>
  );
}
