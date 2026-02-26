import Link from "next/link";

export default function Branding() {
  return (
    <Link
      href="/contact"
      className="block bg-blue-400 text-black font-bold lg:text-xl text-[12px]  flex justify-center text-center  items-center p-3  lg:p-2 hover:bg-blue-500 transition"
    >
      We&apos;re hiring bus drivers and attendants nationwide. Apply now!
    </Link>
  );
}
