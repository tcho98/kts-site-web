import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contactez-Nous | KTS Mobility",
  description:
    "Contactez l'équipe KTS Mobility pour toute demande d'information ou pour souscrire à nos services de transport scolaire.",
};

export default function Contact() {
  return (
    <>
      <div className="w-full  bg-blue-900 absolute min-h-[360px] top-22 sm:top-15 left-0 z-0">
        <div className="sm:max-w-7xl max-w-sm  mx-auto text-start pt-30 pb-10">
          <h1 className="text-white mt-14 text-3xl sm:text-5xl font-bold">
            Contact Us
          </h1>
          <p className="text-white text-sm sm:text-lg  font-normal mt-6">
            Office : 3rd Floor, AZICCUL Building,Feu Rouge Bessengue, Douala -
            Cameroon
          </p>
        </div>
      </div>
      <div className=" bg-blue-100  text-black text-center relative mt-60">
        <div className=" sm:max-w-5xl max-w-md  mx-auto">
          <div className="flex flex-col justify-center items-center mt-20 space-y-4">
            <p className="text-xl sm:mt-26 mt-10">Hello !</p>
            <h1 className="text-4xl sm:text-5xl font-bold mt-6">
              We had Love To Hear From You
            </h1>
            <p className="text-xl sm:text-2xl mt-10"></p>
          </div>
          <ContactForm />
        </div>
      </div>
    </>
  );
}
