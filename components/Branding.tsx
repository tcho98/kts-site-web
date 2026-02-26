import Link from "next/link";

export default function Branding() {
  return (
    <div className="bg-blue-400 flex h-11 justify-center text-center  items-center hover:bg-blue-500 transition ">
      <Link
        href="/contact"
        className="block  text-black font-bold lg:text-xl text-[14px]"
      >
        We&apos;re hiring bus drivers and attendants nationwide. Apply now!
      </Link>
    </div>
  );
}
