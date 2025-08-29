// app/company/layout.tsx
export const metadata = {
  title: "À Propos | KTS Mobility - Experts en Transport Scolaire",
  description:
    "En savoir plus sur KTS Mobility, notre mission et nos valeurs pour un transport scolaire sécurisé et fiable.",
};

export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
