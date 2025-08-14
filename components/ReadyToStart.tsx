import Link from "next/link";

export default function ReadyToStart() {
  return (
    <div className="bg-amber-300 py-10 p-10">
      <div className="z-10 max-w-7xl relative mx-auto w-full px-4 md:px-6 lg:px-8">
        <p className="text-2xl text-gray-700 ">Ready to start ?</p>
        <Link
          href="/contact"
          className="group inline-flex items-center mt-10 space-x-4"
        >
          <span className="text-4xl sm:text-[6rem]  text-gray-900 font-semibold">
            Request a Demo
          </span>
          <span className="transform text-4xl text-black flex justify-center items-center w-12 h-12 rounded-full bg-white transition-all duration-300 group-hover:bg-gray-500 group-hover:text-white">
            →
          </span>
        </Link>
      </div>
    </div>
  );
}
