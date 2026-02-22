// app/page.tsx (ou pages/index.tsx si tu es en Pages Router)
import ContentSectionF from "@/components/ContentSectionF";
import ContentSectionfr from "@/components/ContentSectionfr";
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
      title: "Safety is built in everything we do to give you peace of mind.",
      description:
        "KTS Mobility delivers the peace of mind that comes from knowing where your kids are, and that they’re getting the safest, most reliable rides possible. A convenient app lets you see when the bus is coming, know your drivers, send feedback, and get your kids to school on-time and stress-free.",
      services: [
        "RFID check-ins and check-outs track attendance.",
        "Support for students with special needs.",
        "Useful alerts notify you about things like bus arrival time.",
        "Track the bus while in transit.",

      ],  
      imageUrl: "/images/parentex.webp",
    },
    {
      id: 2,
      smallText: "For Drivers & Operators",
      title:
        "Gone are the days of passing your child to a stranger who drives them to school ",
      description:
        "KTS Mobility lets you know the identity of the driver and student profile lets the driver know your child. We ensure each child has a unique experience.As a company, we ensure the following:",
      services: [
        "Parents feedback and rate drivers via the app.",
        "Drivers are vetted above and beyond national standards",
        "Safe driving performance tracking.",
        "Onboard monitoring reduces potential incidents"
        
        
      ],  
      imageUrl: "/images/drivelo.webp",
    },
  ];
const sectionsfr = [
  {
    id: 1,
    smallText: "For Schools",
    title: "Seamless Communication & Transparency",
    description:
      "We optimize your transportation so that you can optimize your education. KTS Mobility technology can be implemented in hours, reducing costs and increasing efficiency by optimizing each route resulting in a 30% reduction in transit time. A system dashboard gives administrators access to real time data for smarter decision making.",
    services: [
      "A platform for safety, efficiency and transparency",
      "Flexible fleet of vehicles to accommodate any use case",
      "Optimized routes ensuring efficiency",
      "Operational support involving continuous customer service and operational teams to meet your changing needs",
    ],
    imageUrl: "/images/seam.webp",
  },
  {
    id: 2,
    smallText: "For Communities",
    title: "Better schools, better roads and a better environment for everyone.",
    description:
      "By saving schools money, KTS Mobility empowers communities to invest more in education, reduce traffic congestion and noise pollution, and enjoy cleaner and healthier air quality. Sustainable school transportation creates green jobs, contributes less to climate change, securing a better future for kids everywhere.Positive impact for everyone means:",
    services: [
      "Reducing students’ exposure to diesel exhaust and harmful pollution significantly reduces students’ risk of asthma and other respiratory illnesses",
      "Eliminating noise and air pollution to ensure clean rides for students.",
      "Replacing school buses dramatically reduces fuel and maintenance costs and provides long tern savings to schools and communities.",
      "Reducing traffic and carbon footprints.",
    ],  
    imageUrl: "/images/org.webp",
  },
];


  return (
    <main className="  bg-white overflow-x-hidden ">
      <div className=" bg-cover absolute inset-0 z-0 top-17">
        <HeroSection
          backgroundImage="/images/login.webp"
          title="Safe & Reliable School Transportation Solution"
          description=""

        />
      </div>


      <div className="sm:max-w-7xl max-w-md sm:mt-200 mt-140   mx-auto p-4">
        <ContentSectionF items={sections} reverse />


        <div className="bg-gray-500  mt-15 ">
          <h1 className="text-xl sm:text-4xl text-center mt-10 p-10 sm:p-15">
            “ I have worked closely with the KTS Mobility team over the last 6 years and have observed firsthand the benefits 
            of applying technology to solve our complex day-to-day operation needs.”
          </h1>
          <div className="flex items-center justify-center gap-5 ">
            <Image
              src="/images/Etah.webp"
              alt="Logo"
              width={80}
              height={80}
              className="rounded-3xl"
            />
            <div className="hidden sm:block border border-b-2 h-15 border-black " />
            <p> Etah Eno, CEO of KTS Mobility</p>
          </div>


          
          
        </div>
        <div className="md:mt-10 mt-5 ">
            <ContentSectionfr items={sectionsfr} reverse />
          </div>

        
      </div>
      <ReadyToStart />
    </main>
  );
}
