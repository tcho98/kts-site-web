import ReadyToOpportunities from "@/components/ReadyToOpportunities";
import Link from "next/link";
import Image from "next/image";
import PickupLocations from "@/components/PickUpLocation";
import NewPartnerSchool from "@/components/NewPartnerSchool";
import InfoGridSection from "@/components/InfoGridSection";
import HeroSection from "@/components/HeroSectionF";

export const metadata = {
  title: "Conducteurs | KTS Mobility - Transport Scolaire Professionnel",
  description:
    "Rejoignez notre équipe de conducteurs professionnels et contribuez à offrir un transport scolaire sécurisé et de qualité avec KTS Mobility.",
};

const sections = {
  title: "Hiring Now in Multiple Locations",
  description:
    "We’re always seeking qualified and passionate candidates to join us in making a difference in the lives of students, families and school districts across the country.Here are the different pickup locations and roles available.",
  locations: [
    "School bus drivers",
    "Bus attendants",
    "Non-CDL van drivers",
    "Operations supervisors",
    "Dispatchers",
    "Field and safety supervisors",
    "Location managers",
    "Trainers",
    "Additional yard roles",
  ],
};

const sections2 = {
  title: "Welcoming Our News Patners Schools",
  schoolName: [
    "Bilingual Nursery and primary school",
    "Smart college of technology",
    "KTS Mobility",
  ],
};
const sectionData = {
  introText: "Our Services",
  title: "What We Offer",
  description:
    "We provide top-notch services to meet your needs, ensuring quality, safety, and comfort at every step.",
  cards: [
    {
      imageUrl: "/pho.jpg",
      title: "Safe Transportation",
      description:
        "Ensuring children's safety with professional drivers and monitored routes.",
    },
    {
      imageUrl: "/pho.jpg",
      title: "Comfortable Rides",
      description:
        "Clean and comfortable vehicles designed for a pleasant journey.",
    },
    {
      imageUrl: "/pho.jpg",
      title: "Reliable Service",
      description: "We guarantee timely pickups and drop-offs, every time.",
    },
  ],
};

export default function DriversPage() {
  return (
    <main className="bg-white overflow-x-hidden">
      <div className=" absolute left-0 right-0 top-16 z-0 ">
        <HeroSection
          backgroundImage="/pho.jpg"
          title="Safe & Reliable School Transport"
          description="Providing safe, comfortable, and reliable transportation for children every day."
          buttonText="Learn More"
          buttonLink="/about"
        />
      </div>
      <div className="bg-yellow-300 mt-220">
        <div className="sm:max-w-7xl max-w-md mx-auto  pt-18 pb-18 mt-18 ">
          <PickupLocations {...sections} />
        </div>
      </div>
      <div className="bg-gray-300">
        <div className="sm:max-w-7xl max-w-md mx-auto pt-18 pb-18  ">
          <NewPartnerSchool {...sections2} />
        </div>
      </div>
      <section className="sm:max-w-7xl max-w-md sm:h-[80vh] mx-auto mt-20">
        <InfoGridSection {...sectionData} />
      </section>
      <div className="bg-gray-300">
        <div className="max-w-7xl mx-auto pt-18 pb-18 mt-18 ">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Texte */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1 className="text-3xl sm:text-5xl text-black font-bold mb-5">
                Our Team
              </h1>
              <p className="text-gray-700 text-lg px-4 sm:px-0 sm:text-xl">
                Meet the dedicated team behind KTS Mobility, committed to
                ensuring safe and reliable transportation for children.
              </p>

              <Link
                href="#contact"
                className="bg-blue-500 text-white mt-15 px-15 py-2 rounded-3xl inline-block text-sm sm:text-base"
              >
                Join Us
              </Link>
            </div>

            {/* Image */}
            <div className="w-md md:w-1/2 flex justify-center">
              <Image
                src="/pho.jpg"
                alt="Logo"
                width={500}
                height={500}
                className="rounded-3xl object-cover w-full h-auto"
              />
            </div>
          </div>
          <div className="bg-blue-500 flex flex-col justify-center items-center text-white text-center  mt-25 h-[500px]">
            <h1 className="w-sm sm:w-xl text-3xl sm:text-4xl">
              ”In my three years at Zum, I’ve had the opportunity to grow from
              being a driver, to a trainer and classroom instructor then to be
              promoted to Field Supervisor. I’m grateful for all the
              opportunities that have helped to nurture my career at Zum.”
            </h1>
            <h4 className="mt-7 text-xl ">Dolly l.</h4>
            <p>supervisors, Bessengue</p>
          </div>
        </div>
      </div>
      <section className="sm:max-w-7xl max-w-md sm:h-[70vh]  mx-auto mt-20">
        <div className="flex flex-col md:flex-row items-center md:items-start sm:pt-25 gap-8">
          {/* Image */}
          <div className="w-md md:w-1/2 flex justify-center">
            <Image
              src="/pho.jpg"
              alt="Logo"
              width={500}
              height={500}
              className="rounded-3xl object-cover w-full h-auto"
            />
          </div>

          {/* Texte */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl sm:text-5xl text-black font-bold mb-5">
              Our Team
            </h1>
            <p className="text-gray-700 text-lg px-4 sm:px-0 sm:text-xl">
              Meet the dedicated team behind KTS Mobility, committed to ensuring
              safe and reliable transportation for children.
            </p>
          </div>
        </div>
      </section>
      <div className="bg-yellow-300">
        <div className="max-w-7xl  mx-auto  pt-18 pb-18 mt-18 ">
          <PickupLocations {...sections} />
        </div>
      </div>
      <section className="sm:max-w-7xl max-w-md h-[70vh] mx-auto  sm:mt-20">
        <div className="flex flex-col md:flex-row items-center md:items-start pt-25 gap-8">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl sm:text-5xl text-black font-bold mb-5">
              Our Team
            </h1>
            <p className="text-gray-700 text-lg px-4 sm:px-0 sm:text-xl">
              Meet the dedicated team behind KTS Mobility, committed to ensuring
              safe and reliable transportation for children.
            </p>
          </div>

          {/* Image */}
          <div className="w-md md:w-1/2 flex justify-center">
            <Image
              src="/images/team.png"
              alt="Logo"
              width={500}
              height={500}
              className="rounded-3xl object-cover w-full h-auto"
            />
          </div>

          {/* Texte */}
        </div>
      </section>
      <ReadyToOpportunities />
    </main>
  );
}
