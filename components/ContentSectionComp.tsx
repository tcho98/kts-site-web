// pages/index.tsx
"use client";
import React from "react";
import ContentSection from "../components/ContentSection";

const HomePage: React.FC = () => {
  // Exemple de données pour les sections
  const sections = [
    {
      id: 1,
      smallText: "Statistiques clés",
      title: "Nos utilisateurs en croissance",
      description:
        "Découvrez combien de personnes ont souscrit à notre service ce mois-ci et le pourcentage de satisfaction.",
      imageUrl: "/images/users.jpg", // mets le chemin de ton image
      numberTarget: 2500, // nombre d'utilisateurs
      percentageTarget: 85, // pourcentage de satisfaction
    },
    {
      id: 2,
      smallText: "Impact global",
      title: "Notre portée mondiale",
      description:
        "Nos services sont utilisés dans plusieurs pays à travers le monde.",
      imageUrl: "/images/world.jpg",
      numberTarget: 120, // nombre de pays
      percentageTarget: 75, // pourcentage de couverture globale
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <ContentSection items={sections} />
    </div>
  );
};

export default HomePage;
