// app/page.tsx (ou pages/index.tsx si tu es en Pages Router)
import ContentSectionF from "@/components/ContentSectionF";
import HeroSection from "@/components/HeroSectionF";
import ReadyToStart from "@/components/ReadyToStart";
import Image from "next/image";

export default function Home() {
  const sections = [
    {
      id: 1,
      smallText: "For Parents & Students",
      title: "A Completely New Experience Built Around Families' Needs",
      description:
        "Zum delivers the peace of mind that comes from knowing where your kids are, and that they’re getting the safest, most reliable rides possible. A convenient app lets you see when the bus is coming, know your drivers, send feedback, and get your kids to school on-time and stress-free.",
      imageUrl: "/logos/logo3.jpg",
    },
    {
      id: 2,
      smallText: "For Drivers & Operators",
      title:
        "An Integrated Platform Unites All Operations to Deliver the Best Possible Service ",
      description:
        "Zum helps manage all aspects of operations to make it easy for drivers and operators to focus on what matters most: safe, efficient, and sustainable transportation. Deploying fleets of multi-size vehicles, we monitor vehicle health and driver performance, offer tools to manage staffing, and optimize routes for less miles on the road.",
      imageUrl: "/logos/logo3.jpg",
    },
  ];

  return (
    <main className="  bg-gray-300 overflow-x-hidden ">
      <div className=" absolute inset-0 z-0 top-18">
        <HeroSection
          backgroundImage="/pho.jpg"
          title="Safe & Reliable School Transport"
          description="Providing safe, comfortable, and reliable transportation for children every day."
          buttonText="Learn More"
          buttonLink="/about"
        />
      </div>
      <div className="sm:max-w-7xl max-w-md mt-210 sm:mt-230  sm:h-[300vh] h-[420vh] mx-auto p-4">
        <ContentSectionF items={sections} reverse />
        <div className="bg-gray-500 h-[400px] mt-15 ">
          <h1 className="text-xl sm:text-4xl text-center mt-10 p-10 sm:p-15">
            “I have closely worked with the Zum team over the last 3 years, and
            have observed first-hand the benefit of applying their technology to
            solve our complex day-to-day operations needs.”
          </h1>
          <div className="flex items-center justify-center gap-5 ">
            <Image
              src="/logos/logo3.jpg"
              alt="Logo"
              width={50}
              height={50}
              className="rounded-3xl"
            />
            <div className="hidden sm:block border-r-2 border-black mx-4 h-auto" />
            <p> John Doe, CEO of Zum</p>
          </div>
          <div className="md:mt-30 mt-10 ">
            <ContentSectionF items={sections} reverse />
          </div>

          <div className="bg-gray-300 sm:h-[200px]  mt-15 ">
            <h1 className="text-3xl text-black font-bold sm:text-5xl text-center mt-10 p-15">
              &quot;Let &apos;s act now to reinvent student transportation for
              the future that we want to live, learn and travel in.&quot;
            </h1>
            <div className=" flex items-center justify-center gap-5 ">
              <Image
                src="/logos/logo3.jpg"
                alt="Logo"
                width={50}
                height={50}
                className="rounded-3xl"
              />
              <div className="hidden sm:block border-r-2 border-black mx-4 h-auto" />
              <p className="text-black"> John Doe, CEO of Zum</p>
            </div>
          </div>
        </div>
      </div>
      <ReadyToStart />
    </main>
  );
}
