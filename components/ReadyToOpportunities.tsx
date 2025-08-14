import Link from "next/link";

export default function ReadyToStart() {
  return (
    <main className="bg-amber-300 py-10 p- h-[400px]">
      <section className="z-10 max-w-7xl relative mx-auto w-full px-4 md:px-6 lg:px-8">
        <p className="text-2xl text-gray-700 ">Ready to Get Start ?</p>
        <Link
          href="/contact"
          className="group inline-flex items-center mt-10 space-x-4"
        >
          <span className="text-4xl sm:text-[6rem]  text-gray-900 font-semibold">
            Explore opportunities
          </span>
          <span className="transform text-4xl text-black flex justify-center items-center w-12 h-12 rounded-full bg-white transition-all duration-300 group-hover:bg-gray-500 group-hover:text-white">
            →
          </span>
        </Link>
      </section>
    </main>
  );
}
