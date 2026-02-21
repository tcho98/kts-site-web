import Link from "next/link";

export default function Branding() {
  return (
    <Link
      href="/contact"
      className="block bg-blue-400 text-black font-bold text-xl text-center p-7 hover:bg-blue-500 transition"
    >
      We&apos;re hiring bus drivers and attendants nationwide. Apply now!
    </Link>
  );
}