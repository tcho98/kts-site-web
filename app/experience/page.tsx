// app/page.tsx (ou pages/index.tsx si tu es en Pages Router)
import ContentSectionF from "@/components/ContentSectionF";
import HeroSection from "@/components/HeroSectionF";
import ReadyToStart from "@/components/ReadyToStart";
import Image from "next/image";

export const metadata = {
  title: "Expérience | KTS Mobility - Transport Scolaire Fiable",
  description:
    "Découvrez l'expérience unique de KTS Mobility dans le transport scolaire sécurisé et fiable.",
};

export default function Home() {
  const sections = [
    {
      id: 1,
      smallText: "For Parents & Students",
      title: "A Completely New Experience Built Around Families' Needs",
      description:
        "KTS Mobility delivers the peace of mind that comes from knowing where your kids are, and that they’re getting the safest, most reliable rides possible. A convenient app lets you see when the bus is coming, know your drivers, send feedback, and get your kids to school on-time and stress-free.",
      imageUrl: "/images/parentex.jpg",
    },
    {
      id: 2,
      smallText: "For Drivers & Operators",
      title:
        "An Integrated Platform Unites All Operations to Deliver the Best Possible Service ",
      description:
        "KTS Mobility helps manage all aspects of operations to make it easy for drivers and operators to focus on what matters most: safe, efficient, and sustainable transportation. Deploying fleets of multi-size vehicles, we monitor vehicle health and driver performance, offer tools to manage staffing, and optimize routes for less miles on the road.",
      imageUrl: "/images/drivelo.jpg",
    },
  ];

  return (
    <main className="  bg-white overflow-x-hidden ">
      <div className=" absolute inset-0 z-0 top-18">
        <HeroSection
          backgroundImage="/pho.jpg"
          title="Safe & Reliable School Transport"
          description="Providing safe, comfortable, and reliable transportation for children every day."
          buttonText="Learn More"
          buttonLink="/about"
        />
      </div>
      <div className="sm:max-w-7xl max-w-md mt-210 sm:mt-230  sm:h-[340vh] h-[500vh] mx-auto p-4">
        <ContentSectionF items={sections} reverse />
        <div className="bg-gray-500 h-[400px] mt-15 ">
          <h1 className="text-xl sm:text-4xl text-center mt-10 p-10 sm:p-15">
            “I have closely worked with the KTS Mobility team over the last 3
            years, and have observed first-hand the benefit of applying their
            technology to solve our complex day-to-day operations needs.”
          </h1>
          <div className="flex items-center justify-center gap-5 ">
            <Image
              src="/images/Etah.png"
              alt="Logo"
              width={80}
              height={80}
              className="rounded-3xl"
            />
            <div className="hidden sm:block border border-b-2 h-15 border-black " />
            <p> Etah Eno, CEO of KTS Mobility</p>
          </div>
          <div className="md:mt-30 mt-10 ">
            <ContentSectionF items={sections} reverse />
          </div>

          <div className="bg-gray-300 sm:h-[400px]  mt-15 ">
            <h1 className="text-3xl text-black font-bold sm:text-5xl text-center mt-10 p-15">
              &quot;Let &apos;s act now to reinvent student transportation for
              the future that we want to live, learn and travel in.&quot;
            </h1>
            <div className=" flex items-center justify-center gap-5 ">
              <Image
                src="/images/Etah.png"
                alt="Logo"
                width={80}
                height={80}
                className="rounded-3xl"
              />
              <div className="hidden sm:block border border-b-2 h-15 border-black " />
              <p className="text-black"> John Doe, CEO of Zum</p>
            </div>
          </div>
        </div>
      </div>
      <ReadyToStart />
    </main>
  );
}
