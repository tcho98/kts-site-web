import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "react-international-phone/style.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Branding from "@/components/Branding";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ktsmobility.com"),

  title: "KTS Mobility | Transport Scolaire Fiable et Sécurisé",
  description:
    "KTS Mobility propose des solutions de transport scolaire fiables, sûres et efficaces pour les élèves. Offrez à vos enfants un trajet sécurisé chaque jour.",

  keywords: [
    "transport scolaire",
    "sécurité élèves",
    "bus scolaire",
    "transport élèves fiable",
    "solution de transport scolaire",
    "KTS Mobility",
  ],

  authors: [{ name: "KTS Mobility" }],
  generator: "Next.js",
  applicationName: "KTS Mobility",

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "KTS Mobility | Transport Scolaire Fiable et Sécurisé",
    description:
      "KTS Mobility offre des services de transport scolaire sécurisés et efficaces pour assurer la tranquillité des parents et la sécurité des élèves.",
    url: "/",
    siteName: "KTS Mobility",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "KTS Mobility - Transport scolaire sécurisé",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "KTS Mobility | Transport Scolaire Fiable et Sécurisé",
    description:
      "Transport scolaire sécurisé et fiable pour les élèves, assuré par KTS Mobility.",
    images: ["/og.png"],
    // optionnel :
    // creator: "@rideKTS",
    // site: "@rideKTS",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <Branding />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
