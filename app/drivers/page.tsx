import ReadyToOpportunities from "@/components/ReadyToOpportunities";
import Link from "next/link";
import Image from "next/image";

import NewPartnerSchool from "@/components/NewPartnerSchool";
import InfoGridSection from "@/components/InfoGridSection";
import HeroSection from "@/components/HeroSectionF";

export const metadata = {
  title: "Conducteurs | KTS Mobility - Transport Scolaire Professionnel",
  description:
    "Rejoignez notre équipe de conducteurs professionnels et contribuez à offrir un transport scolaire sécurisé et de qualité avec KTS Mobility.",
};





const sectionData = {
  introText: "Our Services",
  title: "What We Offer",
  description:
    "We provide top-notch services to meet your needs, ensuring quality, safety, and comfort at every step.",
  cards: [
    {
      imageUrl: "/images/confort1.webp",
      title: "Safe Transportation",
      description:
        "Ensuring children's safety with professional drivers and monitored routes.",
    },
    {
      imageUrl: "/images/confort3.webp",
      title: "Comfortable Rides",
      description:
        "Clean and comfortable vehicles designed for a pleasant journey.",
    },
    {
      imageUrl: "/images/carkts.webp",
      title: "Reliable Service",
      description: "We guarantee timely pickups and drop-offs, every time.",
    },
  ],
};

const partners = [
  { name: "Dewey International School Applied for Science", logoSrc: "/schools/6.png" },
  { name: "SMART College of Technology", logoSrc: "/schools/12.png" },
  { name: "SMART Complex", logoSrc: "/schools/11.png" },
  {name: "New Vision International Kindergarten Nursery and Primary School", logoSrc: "/schools/9.png" },



];



export default function DriversPage() {
  return (
    <main className="bg-white overflow-x-hidden">
      <div className=" absolute left-0 right-0 top-17 z-0 ">
        <HeroSection
          backgroundImage="/images/driver.webp"
          title="Modernising Student Transportation to make it Safe, Reliable, Efficient, and Accessible for All."
          description="Providing safe, comfortable, and reliable transportation for children every day."

        />
      </div>

      <div className="bg-gray-300 sm:mt-200 mt-180">
        <div className="sm:max-w-7xl max-w-md mx-auto pt-18 pb-18  ">
          <NewPartnerSchool title="Our Partner Schools" partners={partners} />
        </div>
      </div>
      <section className="sm:max-w-7xl max-w-md sm:h-[88vh] mx-auto ">
        <InfoGridSection {...sectionData} />
      </section>
      <div className="bg-gray-300">
        <div className="max-w-7xl mx-auto pt-18 pb-18 mt-18 ">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Texte */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1 className="text-3xl sm:text-5xl text-black font-bold mb-5">
                Attentive Care at Every Step
              </h1>
              <p className="text-gray-700 text-lg px-4 sm:px-0 sm:text-xl">
                Our drivers go beyond transportation — they provide personalized care. 
                From safely seating each child to carefully handling their belongings, every detail matters. 
                With a strong sense of responsibility and professionalism, they ensure that every student is comfortably settled before departure. 
                At KTS Mobility, attention and care are part of the journey.
              </p>

              
            </div>

            {/* Image */}
            <div className="w-md md:w-1/2 flex justify-center">
              <Image
                src="/images/serv.webp"
                alt="Logo"
                width={500}
                height={500}
                className="rounded-3xl object-cover w-full h-auto"
              />
            </div>
          </div>
          <div className="bg-blue-500 flex flex-col justify-center items-center text-white text-center  mt-25 h-[500px]">
            <h1 className="w-sm sm:w-xl text-3xl sm:text-4xl">
              ”Wow !!, many thanks to the KTS team for their professionalism and care. 
              Your service is quite commendable,
               and we look forward to reaching out to you next academic year. ”
            </h1>
            <h4 className="mt-7 text-xl ">Mr. Julius C</h4>
            <p> Douala</p>
          </div>
        </div>
      </div>
      <section className="sm:max-w-7xl max-w-md sm:h-[70vh]  mx-auto mt-20">
        <div className="flex flex-col md:flex-row items-center md:items-start sm:pt-25 gap-8">
          {/* Image */}
          <div className="w-md md:w-1/2 flex justify-center">
            <Image
              src="/images/dri.webp"
              alt="Logo"
              width={500}
              height={500}
              className="rounded-3xl border-2 object-cover w-full h-auto"
            />
          </div>

          {/* Texte */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl sm:text-5xl text-black font-bold mb-5">
              Professional & Dedicated Drivers
            </h1>
            <p className="text-gray-700 text-lg px-4 sm:px-0 sm:text-xl">
              At KTS Mobility, our drivers are more than just transport operators — 
              they are trained professionals committed to the safety, comfort, and well-being of every child.
               Courteous, punctual, and highly experienced, they assist each student with care, ensuring smooth boarding and secure journeys every day.
                With strict adherence to safety protocols and a 
              child-first mindset, our drivers deliver not just transportation, but peace of mind.
            </p>
          </div>
        </div>
      </section>
      <div className="bg-yellow-300 flex flex-col justify-center items-center text-white text-center  mt-25 h-[500px]">
            <h1 className="w-sm sm:w-xl text-3xl sm:text-4xl text-black">
              ”Merci a vous pour la qualité du service. Michael est vraiment content et amis avec son chauffeur.
               RDV l’année prochaine par la Grace de Dieu. Mme.  ”
            </h1>
            <h4 className="mt-7 text-xl text-black ">Hayati. B</h4>
            <p className="text-xl text-black"> Douala</p>
        </div>
      <section className="sm:max-w-7xl max-w-md lg:h-[80vh] h-[90vh] mx-auto ">
        <div className="flex flex-col md:flex-row items-center md:items-start pt-25 gap-8">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl sm:text-5xl text-black font-bold mb-5">
              Our Team
            </h1>
            <p className="text-gray-700 text-lg px-4 sm:px-0 sm:text-xl">
              Meet the dedicated team behind KTS Mobility, committed to ensuring
              safe and reliable transportation for children.
            </p>
            <Link
                href="/contact"
                className="bg-blue-500 text-white mt-15 px-15 py-2 rounded-3xl inline-block text-sm sm:text-base"
              >
                Join Us
              </Link>
          </div>

          {/* Image */}
          <div className="w-md md:w-1/2 p-4 flex justify-center">
            <Image
              src="/images/team.webp"
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
