"use client";
import Image from "next/image";
import ContentSection from "@/components/ContentSection";
import ReadyToStart from "@/components/ReadyToStart";
import ValuesGrid from "@/components/ValuesGrid";
import Link from "next/link";
import ContentOptimise from "@/components/contentOptimise";
import HeroSection from "@/components/HeroSectionF";
import PickupLocations from "@/components/PickUpLocation";

export default function CompanyPage() {
  
  const contentBlocks = [
    {
      type: "stats",
      items: [
        {
          id: 1,
          smallText: "Story",
          title: "We Move Kids Forward",
          description:
            "KTS Mobility was Founded with Parents in Mind. Back in 2017, the seed for KTS Mobility was planted. As new parents juggling demanding careers, we faced a common dilemma – ensuring our son's safe, reliable, and comfortable journey to school amidst our busy schedules. This challenge wasn t ours alone; it also resonated with many colleagues and fellow parents. In 2020, KTS Mobility came to life, fueled by our parental instincts and a commitment to safety and meticulousness. Our aim was not just to create a transportation service but to offer peace of mind to parents while offering delightful, secure travel experiences for children. Today, we are privileged to connect with hundreds of parents, kids and schools every day. (Use my single picture)",
          imageUrl: "/images/foundator.webp",
          stats: [
            { value: 95, suffix: "%", description: "Client Satisfaction" },
            { value: 80, suffix: "%", description: "Retention Rate" },
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
          imageUrl: "/images/parents.webp",
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
          imageUrl: "/images/drivers.webp",
          stats: [
            { value: 97, suffix: "%", description: " Client Satisfaction" },
            { value: 25, suffix: "%", description: "Reduction in Transit Time" },
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
          title: "Dedicated Experts Behind Every Journey",
          description:
            "At KTS Mobility, every ride is carefully monitored by a team of passionate professionals committed to excellence. From our operations center, our experts track routes in real time, coordinate drivers, and ensure that every child’s journey is smooth and secure.With advanced technology and a deep sense of responsibility, our team works tirelessly behind the scenes to deliver precision, responsiveness, and peace of mind to families every day.",
          imageUrl: "/images/expert.webp",
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
      iconUrl: "/icons/securite.webp",
    },
    {
      id: 2,
      label: "Comfort",
      description:
        "We provide comfortable transportation services for children.",
      iconUrl: "/icons/commodite.webp",
    },
    {
      id: 3,
      label: "Reliability",
      description: "We ensure the reliability of transportation services.",
      iconUrl: "/icons/fiabilite.webp",
    },
    {
      id: 4,
      label: "Quality of Service",
      description: "We offer high quality transportation services.",
      iconUrl: "/icons/la-revue.webp",
    },
    {
      id: 5,
      label: "Sustainable Development",
      description: "We contribute to the sustainable development of Cameroon.",
      iconUrl: "/icons/le-progres.webp",
    },
  ];

 const sections = {
  title: "Why work with us ",
  description:
    "",
  locations: [
    " We deliver the peace of mind that comes from knowing where your kids are at any given time, and that hey are getting the safest and most reliable rides possible. Our technology lets you see when the bus is coming, know your drivers, send feedback, and gets kids to school on time and stress free",
    "We manage all aspects of operations so the parents and school can focus on their core business, monitor vehicle health and driver performance, and optimize routes so that kids spend less time on the road.",
    "Our technology and multi-sized vehicle approach helps reduce costs and increase efficiency by optimizing routes resulting in reduced transit time. Thereby saving parents and schools money so they can invest more in education.",
    "Sustainable transportation reduces traffic congestion, noise pollution and the kids enjoy cleaner and healthier air, securing a better and healthier future for them.",
    "The safety and security of every child is at the core of our business. All drivers are subject to comprehensive background checks and First-aid training. The vehicles are thoroughly Verified and insured.",

  ],
  };

  return (
    <main className="bg-gray-300  overflow-x-hidden">
      <div className=" absolute inset-0  z-0  top-17">
        <HeroSection
          backgroundImage="/images/company.webp"
          title=" School bus and Passenger van rentals."
             
          description="Book a rental and plan your next trip. Email us at : info@ktsmobility.com or Call us at (+237) 640204282"
         
          
        />
      </div>
      <div
        id="#story"
        className="sm:max-w-7xl p-4  sm:mt-200 mt-170  mx-auto "
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
      <div className="bg-blue-500 flex flex-col justify-center items-center text-white text-center p-15  mt-25 ">
            <h1 className="w-sm sm:w-5xl text-3xl sm:text-4xl">
              ”C’est nous qui vous remercions pour le grand soulagement que votre service nous a apporter tout au long de cette 
                      année scolaire. Ma femme est moi n’avions jamais été en paix comme cette année car votre équipe est super 
              professionnel et ponctuel Nous vous remercions une fois de plus. ”
            </h1>
            <h4 className="mt-7 text-xl ">Mr. Moustapha</h4>
            <p> Douala</p>
            <br />
              <h1 className="w-sm sm:w-xl text-3xl sm:text-4xl">
              ”Thanks, KTS team for taking good care of the kids.  ”
            </h1>
            <h4 className="mt-7 text-xl ">Mrs. Nji</h4>
            <p> Douala</p>
            <br />
            <h1 className="w-sm sm:w-xl text-3xl sm:text-4xl">
              ”The kids expressed their Gratitude for the excellent service, and they are looking forward to next academic year ”
            </h1>
            <h4 className="mt-7 text-xl ">Mrs. Laura M</h4>
            <p> Douala</p>
            <br />
            <h1 className="w-sm sm:w-xl text-3xl sm:text-4xl">
              ”We are so blessed by the quality of your services and your staff. The kids enjoyed every ride to school, and we are 
                looking forward to working with them again. ”
            </h1>
            <h4 className="mt-7 text-xl ">Mrs. Mrs. Jamba D</h4>
            <p> Douala</p>

      </div>
      <div className="bg-yellow-300">
        <PickupLocations {...sections}/>
      </div>

      <section className="sm:max-w-5xl max-w-lg mx-auto p-4">
        <h1 className="text-3xl text-gray-700 font-bold text-center mt-10 mb-5" id="mission">
          Our Mission
        </h1>
        <p className="text-center text-gray-700 text-4xl font-bold">
         Partnering with parents to provide safe, reliable, 
         and high-quality mobility and education services together 
         with customized concierge solutions that give them freedom and flexibility in the management of their kids.
        </p>
      </section>

      <section
        
        className="sm:max-w-7xl max-w-lg mx-auto p-4 bg-white mt-10"
      >
        <p className="text-center text-black font-bold lg:text-3xl" id="values">Our Values</p>
        <h1 className="text-3xl sm:text-5xl text-black font-bold text-center mt-10 mb-5">
          We Are Driven to Serve
        </h1>
        <ValuesGrid items={values} />
      </section>

      <div className="max-w-7xl mx-auto sm:p-18 p-5 mt-18">
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
          <section
            className="w-full md:w-1/2 text-center md:text-left" id="team"
          >
            <h1 className="text-3xl sm:text-5xl font-bold mb-5">Our Team</h1>
            <p className="text-gray-700 text-lg sm:text-xl">
             Our employees, who we call partners, are at the heart of the business. 
             Every person in our organization is dedicated to helping kids get to their full potential.
              We’re seasoned professionals, caring parents, 
              and committed advocates that believe we can make a difference by eliminating transportation challenges as a barrier to opportunity.
              (use KTS Group Picture with drivers)
            </p>
            <Link
              href="#contact"
              className="bg-blue-500 text-white mt-15 px-15 py-2 rounded-3xl inline-block text-sm sm:text-base"
            >
              Join Us
            </Link>
          </section>
        </div>
      </div>

      <ReadyToStart />
    </main>
  );
}
