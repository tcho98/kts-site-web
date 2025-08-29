"use client";
import Image from "next/image";
import ContentSection from "@/components/ContentSection";
import ReadyToStart from "@/components/ReadyToStart";
import ValuesGrid from "@/components/ValuesGrid";
import Link from "next/link";
import { useEffect } from "react";
import ContentOptimise from "@/components/contentOptimise";
import HeroSection from "@/components/HeroSectionF";

export const metadata = {
  title: "À Propos | KTS Mobility - Experts en Transport Scolaire",
  description:
    "En savoir plus sur KTS Mobility, notre mission et nos valeurs pour un transport scolaire sécurisé et fiable.",
};

export default function CompanyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const contentBlocks = [
    {
      type: "stats",
      items: [
        {
          id: 1,
          smallText: "About Us",
          title: "We Move Kids Forward",
          description:
            "Our story started in 2017 when we, like many new parents, navigated the demands of our careers while trying to ensure our son had a safe and reliable journey to school. Balancing our busy schedules made this challenge even more daunting, but it wasn't just our struggle; it resonated with countless colleagues and fellow parents who shared the same concerns.In 2020, our vision transformed into reality as Kids Transportation Service was born. Driven by our instincts as parents and a deep commitment to safety and meticulous care, we set out to create more than just a transportation service. Our goal was to provide peace of mind for parents while delivering delightful and secure travel experiences for children, ensuring that every ride was safe and enjoyable.",
          imageUrl: "/images/founded.png",
          stats: [
            { value: 85, suffix: "%", description: "Satisfaction clients" },
            { value: 3, suffix: "M+", description: "Enfants transportés" },
          ],
        },
      ],
    },
    {
      type: "section",
      items: [
        {
          id: 1,
          smallText: "For Parents & Students",
          title: "A Completely New Experience Built Around Families' Needs",
          description:
            "KTS Mobility delivers the peace of mind that comes from knowing where your kids are, and that they’re getting the safest, most reliable rides possible. A convenient app lets you see when the bus is coming, know your drivers, send feedback, and get your kids to school on-time and stress-free.",
          imageUrl: "/logos/logo3.jpg",
        },
      ],
      reverse: true,
    },
    {
      type: "stats",
      items: [
        {
          id: 1,
          smallText: "About Us",
          title: "We Move Kids Forward",
          description:
            "Safe, reliable, and efficient transportation solutions.",
          imageUrl: "/imagesc/p1.jpg",
          stats: [
            { value: 4000, suffix: "", description: "Satisfaction clients" },
            { value: 3, suffix: "M+", description: "Enfants transportés" },
          ],
        },
      ],
    },
    {
      type: "section",
      items: [
        {
          id: 1,
          smallText: "For Parents & Students",
          title: "A Completely New Experience Built Around Families' Needs",
          description:
            "Zum delivers the peace of mind that comes from knowing where your kids are, and that they’re getting the safest, most reliable rides possible. A convenient app lets you see when the bus is coming, know your drivers, send feedback, and get your kids to school on-time and stress-free.",
          imageUrl: "/logos/logo3.jpg",
        },
      ],
      reverse: true,
    },
  ];

  const values = [
    {
      id: 1,
      label: "Safety",
      description: "The safety of children is our top priority.",
      iconUrl: "/icons/securite.png",
    },
    {
      id: 2,
      label: "Comfort",
      description:
        "We provide comfortable transportation services for children.",
      iconUrl: "/icons/commodite.png",
    },
    {
      id: 3,
      label: "Reliability",
      description: "We ensure the reliability of transportation services.",
      iconUrl: "/icons/fiabilite.png",
    },
    {
      id: 4,
      label: "Quality of Service",
      description: "We offer high quality transportation services.",
      iconUrl: "/icons/la-revue.png",
    },
    {
      id: 5,
      label: "Sustainable Development",
      description: "We contribute to the sustainable development of Cameroon.",
      iconUrl: "/icons/le-progres.png",
    },
  ];

  return (
    <main className="bg-gray-300  overflow-x-hidden">
      <div className=" absolute inset-0  z-0  top-18">
        <HeroSection
          backgroundImage="/pho.jpg"
          title="Safe & Reliable School Transport"
          description="Providing safe, comfortable, and reliable transportation for children every day."
          buttonText="Learn More"
          buttonLink="/about"
        />
      </div>
      <div
        id="#section3"
        className="sm:max-w-7xl max-w-md sm:h-[220vh] h-[330vh]  mt-220  mx-auto p-4"
      >
        {contentBlocks.map((block, idx) => {
          if (block.type === "stats") {
            return <ContentOptimise key={idx} items={block.items} />;
          }
          if (block.type === "section") {
            return (
              <ContentSection
                key={idx}
                items={block.items}
                reverse={block.reverse}
              />
            );
          }
        })}
      </div>
      <div className="bg-blue-500 h-[300px] sm:h-[600px] sm:mt-15 mt-45 p-2 sm:p-20">
        <div className="sm:w-3xl mx-auto text-center">
          <h1 className="text-xl sm:text-5xl font-bold text-white">
            “I have closely worked with the KTS Mobility team over the last 3
            years, and have observed first-hand the benefit of applying their
            technology to solve our complex day-to-day operations needs.”
          </h1>
        </div>
        <div className="flex items-center justify-center gap-5 mt-10">
          <div className="rounded-full">
            <Image
              src="/images/Etah.png"
              alt="Logo"
              width={80}
              height={80}
              className="rounded-full object-covers"
            />
          </div>
          <div className="hidden sm:block border border-b-2 h-15 border-black " />
          <p>Etah Eno, CEO of KTS Mobility</p>
        </div>
      </div>

      <div id="section2" className="sm:max-w-5xl max-w-lg mx-auto p-4">
        <h1 className="text-2xl font-bold text-center mt-10 mb-5">
          Our Mission
        </h1>
        <p className="text-center text-gray-700 text-4xl font-bold">
          Our mission is to provide safe, comfortable and reliable
          transportation services for children in Cameroon, while contributing
          to road safety and the quality of life of Cameroonian families.
        </p>
      </div>

      <div
        id="section4"
        className="sm:max-w-7xl max-w-lg mx-auto p-4 bg-white mt-30"
      >
        <p className="text-center text-black">Our Values</p>
        <h1 className="text-3xl sm:text-5xl text-black font-bold text-center mt-10 mb-5">
          We Are Driven to Serve
        </h1>
        <ValuesGrid items={values} />
      </div>

      <div className="max-w-7xl mx-auto pt-18 pb-18 mt-18">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src="/images/team.png"
              alt="Team"
              width={500}
              height={500}
              className="rounded-3xl object-cover w-full h-auto"
            />
          </div>
          <div
            id="section5"
            className="w-full md:w-1/2 text-center md:text-left"
          >
            <h1 className="text-3xl sm:text-5xl font-bold mb-5">Our Team</h1>
            <p className="text-gray-700 text-lg sm:text-xl">
              Meet the dedicated team behind KTS Mobility, committed to ensuring
              safe and reliable transportation for children.
            </p>
            <Link
              href="#contact"
              className="bg-blue-500 text-white mt-15 px-15 py-2 rounded-3xl inline-block text-sm sm:text-base"
            >
              Join Us
            </Link>
          </div>
        </div>
      </div>

      <ReadyToStart />
    </main>
  );
}
