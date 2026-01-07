"use client";

import { useState, useEffect } from "react";
import {
  Zap,
  Shield,
  TrendingUp,
  Clock,
  Users,
  Inbox,
  FileText,
  Home,
} from "lucide-react";

export default function Product() {
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 6);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <Zap />,
      title: "Facturation instantanée",
      description:
        "Créez et envoyez des factures professionnelles en quelques secondes.",
      stat: "3x plus rapide",
    },
    {
      icon: <TrendingUp />,
      title: "Suivi financier",
      description:
        "Analysez vos revenus et paiements en temps réel.",
      stat: "98% payés à temps",
    },
    {
      icon: <Shield />,
      title: "Conformité fiscale",
      description:
        "TVA, mentions légales et archivage automatique sécurisé.",
      stat: "100% conforme",
    },
    {
      icon: <Home />,
      title: "Paiements rapides",
      description:
        "Encaissez vos paiements plus vite et sans effort.",
      stat: "Fiabilité maximale",
    },
    {
      icon: <Inbox />,
      title: "Gestion centralisée",
      description:
        "Clients, factures et revenus au même endroit.",
      stat: "Organisation parfaite",
    },
    {
      icon: <FileText />,
      title: "Collecte intelligente",
      description:
        "Relances automatiques et suivi optimisé.",
      stat: "Efficacité x3",
    },
  ];

  return (
    <div className="bg-[#fafaf8] text-gray-900">

      {/* HERO */}
      <section className="py-24 text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Facturez simplement.
          <br /> Encaissez rapidement.
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          Une plateforme moderne pour gérer vos factures, clients et revenus en toute simplicité.
        </p>
      </section>

      {/* FEATURES */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-14">
            Tout ce dont vous avez besoin
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div
                key={i}
                onMouseEnter={() => setActiveFeature(i)}
                className={`rounded-2xl p-8 border transition-all cursor-pointer ${
                  activeFeature === i
                    ? "border-blue-400 shadow-xl bg-blue-50"
                    : "border-gray-200 bg-white"
                }`}
              >
                <div className="w-14 h-14 mb-6 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-gray-600 mb-4">{f.description}</p>
                <span className="inline-block text-sm bg-blue-600 text-white px-3 py-1 rounded-full">
                  {f.stat}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Des outils conçus pour votre succès
          </h2>
          <p className="text-gray-600 mb-16 max-w-2xl mx-auto">
            Gérez votre activité avec des solutions fiables, rapides et sécurisées.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-10">

           
            <div className="w-80 rounded-3xl bg-white shadow-xl hover:shadow-2xl transition">
              <figure className="h-48">
                <img
                  src="BSS_fr_6.png"
                  className="w-full h-full object-cover rounded-t-3xl"
                  alt="Facturation"
                />
              </figure>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">Facturation</h3>
                <p className="text-gray-600 mb-6">
                  Créez et envoyez des factures professionnelles rapidement.
                </p>
                <button className="btn btn-primary w-full">Découvrir</button>
              </div>
            </div>

          
            <div className="w-80 rounded-3xl bg-white shadow-xl hover:shadow-2xl transition">
              <figure className="h-48">
                <img
                  src="BSS_fr_7.jpg"
                  className="w-full h-full object-cover rounded-t-3xl"
                  alt="Suivi"
                />
              </figure>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">Analytique</h3>
                <p className="text-gray-600 mb-6">
                  Suivez vos revenus et paiements en temps réel.
                </p>
                <button className="btn btn-secondary w-full">Voir détails</button>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="w-80 rounded-3xl bg-white shadow-xl hover:shadow-2xl transition">
              <figure className="h-48">
                <img
                  src="BSS_fr_8.avif"
                  className="w-full h-full object-cover rounded-t-3xl"
                  alt="Clients"
                />
              </figure>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">Clients</h3>
                <p className="text-gray-600 mb-6">
                  Centralisez et gérez tous vos clients facilement.
                </p>
                <button className="btn btn-accent w-full">Commencer</button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
