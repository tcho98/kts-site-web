import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contactez-Nous | KTS Mobility",
  description:
    "Contactez l'équipe KTS Mobility pour toute demande d'information ou pour souscrire à nos services de transport scolaire.",
};

export default function Contact() {
  return (
    <>
      {/* Fix: l'ancien bloc était en "absolute" (sorti du flux normal), et le
          bloc suivant compensait avec un "mt-90" codé en dur pour ne pas le
          chevaucher. Ça casse dès que la hauteur du hero change (traduction,
          texte plus long, petit écran). On repasse en flux normal. */}
      <div className="w-full bg-gray-900 relative z-0 pt-16">
        <div className="sm:max-w-7xl px-4 mx-auto text-start pt-3 pb-12 min-h-[350px]">
          <h1 className="text-white mt-15 text-3xl sm:text-5xl font-bold">
            Contact Us
          </h1>
          <p className="text-white text-sm sm:text-lg font-normal mt-6">
            Office : 3rd Floor, AZICCUL Building, Feu Rouge Bessengue, Douala -
            Cameroon
          </p>
        </div>
      </div>
      <div className="bg-blue-100 text-black text-center relative">
        <div className="sm:max-w-5xl max-w-md mx-auto">
          <div className="flex flex-col justify-center items-center pt-16 pb-10 space-y-4">
            <p className="text-xl sm:text-3xl">Hello !</p>
            <h2 className="text-4xl sm:text-5xl font-bold mt-6">
              We&apos;d Love to Hear from You
            </h2>
          </div>
          <ContactForm />
        </div>
      </div>
    </>
  );
}
