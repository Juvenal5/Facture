// "use client";

// import { useState, useEffect } from "react";
// import {
//   Zap,
//   Shield,
//   TrendingUp,
//   Clock,
//   Users,
//   Inbox,
//   FileText,
//   Home,
// } from "lucide-react";

// export default function Product() {
//   const [scrolled, setScrolled] = useState(false);
//   const [activeFeature, setActiveFeature] = useState(0);
//   const [hoveredPrice, setHoveredPrice] = useState(null);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveFeature((prev) => (prev + 1) % 3);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   const features = [
//     {
//       icon: <Zap className="w-6 h-6" />,
//       title: "Facturation Instantanée",
//       description:
//         "Créez et envoyez des factures professionnelles en moins de 30 secondes. Modèles personnalisables et conformes aux normes fiscales.",
//       stats: "3x plus rapide",
//     },
//     {
//       icon: <TrendingUp className="w-6 h-6" />,
//       title: "Suivi en Temps Réel",
//       description:
//         "Visualisez vos paiements, relances automatiques et tableaux de bord analytiques pour piloter votre trésorerie.",
//       stats: "98% de paiements à temps",
//     },
//     {
//       icon: <Shield className="w-6 h-6" />,
//       title: "Conformité Garantie",
//       description:
//         "Respect automatique des réglementations fiscales (TVA, mentions légales) et archivage sécurisé pendant 10 ans.",
//       stats: "100% conforme",
//     },

//     {
//       icon: <Home className="w-6 h-6" />,
//       title: "Tarifs et frais",
//       description: "Payé vos frais plus rapidement et fiablement",
//       stats: "97% de paiements à temps",
//     },
//     {
//       icon: <Inbox className="w-6 h-6" />,
//       title: "Service et facturation",
//       description: "Les services sont fiable et rentabler",
//       stats: "100% conforme",
//     },
//     {
//       icon: <FileText className="w-6 h-6" />,
//       title: "Collecte des revenus",
//       description:
//         "Vous pouvez colleté des revenus rapidement et efficassement",

//       stats: "3x plus rapide",
//     },
//   ];

//   const testimonials = [
//     {
//       quote:
//         "Nous avons réduit notre temps de facturation de 75%. L'interface est intuitive et les relances automatiques ont transformé notre trésorerie.",
//       author: "Sophie Mercier",
//       role: "Directrice Financière",
//       company: "TechVision SAS",
//     },
//     {
//       quote:
//         "Enfin un outil qui comprend les besoins des TPE françaises. La conformité fiscale automatique nous fait gagner un temps précieux.",
//       author: "Marc Dubois",
//       role: "Gérant",
//       company: "Dubois Conseil",
//     },
//   ];

//   return (
//     <div
//       className="min-h-screen bg-[#fafaf8] text-[#1a1a1a]"
//       style={{ fontFamily: "'Instrument Serif', 'Georgia', serif" }}
//     >
//       <section id="features" className="py-24 px-6">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-5xl md:text-6xl font-bold mb-6">
//               Tout ce dont vous avez
//               <br />
//               besoin pour facturer
//             </h2>
//             <p className="text-xl text-gray-600 font-sans font-light max-w-2xl mx-auto">
//               Une suite complète d'outils pensés pour simplifier votre gestion
//               financière
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {features.map((feature, i) => (
//               <div
//                 key={i}
//                 className={`bg-white rounded-2xl p-8 hover-lift cursor-pointer transition-all duration-500 border ${
//                   activeFeature === i
//                     ? "border-blue-200 shadow-xl"
//                     : "border-gray-200"
//                 }`}
//                 onMouseEnter={() => setActiveFeature(i)}
//               >
//                 <div
//                   className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors ${
//                     activeFeature === i
//                       ? "bg-blue-200 text-white"
//                       : "bg-gray-200 text-[#1a1a1a]"
//                   }`}
//                 >
//                   {feature.icon}
//                 </div>
//                 <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
//                 <p className="text-gray-600 font-sans leading-relaxed mb-4">
//                   {feature.description}
//                 </p>

//                 <div
//                   className={`inline-block px-3 py-1 rounded-full text-sm font-sans font-medium ${
//                     activeFeature === i
//                       ? "bg-blue-200 text-gray-100"
//                       : "bg-gray-100 text-gray-600"
//                   }`}
//                 >
//                   {feature.stats}
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[
//               {
//                 icon: <Clock />,
//                 title: "Relances auto",
//                 desc: "Planifiez vos rappels",
//               },
//               {
//                 icon: <Users />,
//                 title: "Multi-équipes",
//                 desc: "Collaboration fluide",
//               },
//               {
//                 icon: <Shield />,
//                 title: "Sécurité max",
//                 desc: "Données chiffrées",
//               },
//               {
//                 icon: <TrendingUp />,
//                 title: "Analytics",
//                 desc: "Tableaux de bord",
//               },
//             ].map((item, i) => (
//               <div
//                 key={i}
//                 className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-100 hover:border-blue-200 transition-colors"
//               >
//                 <div className="text-blue-150 mb-3">{item.icon}</div>
//                 <h4 className="font-bold mb-1 font-sans">{item.title}</h4>
//                 <p className="text-sm text-gray-600 font-sans">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <div className="flex flex-row  justify-center gap-4 p-6 mt-8">
        
//         <div className="card bg-base-100 shadow-2xl w-60 h-80 rounded-3xl flex flex-col items-center">
  
//   {/* Image */}
//   <figure className="w-full h-1/2 flex items-center justify-center">
//     <img
//       src="https://via.placeholder.com/400"
//       alt="Produit 1"
//       className="w-full h-full object-cover rounded-t-3xl"
//     />
//   </figure>

//   {/* Contenu */}
//   <div className="card-body flex flex-col items-center justify-center text-center p-4 h-1/2">
//     <h2 className="card-title">Produit 1</h2>
//     <p className="text-sm">Description du produit 1</p>

//     <div className="card-actions mt-3">
//       <button className="btn btn-primary btn-sm">Voir plus</button>
//     </div>
//   </div>

// </div>       
//         <div className="card bg-base-100 shadow-2xl w-60 rounded-3xl">
//           <figure>
//             <img
//               src="https://via.placeholder.com/400"
//               alt="Produit 2"
//               width={400}
//               height={250}
//               className="object-cover"
//             />
//           </figure>
//           <div className="card-body">
//             <h2 className="card-title">Produit 2</h2>
//             <p>Description du produit 2</p>
//             <div className="card-actions justify-end">
//               <button className="btn btn-secondary">Voir plus</button>
//             </div>
//           </div>
//         </div>

        
//         <div className="card bg-base-100 shadow-2xl w-60 rounded-3xl">
//           <figure>
//             <img
//               src="https://via.placeholder.com/400"
//               alt="Produit 3"
//               width={400}
//               height={250}
//               className="object-cover"
//             />
//           </figure>
//           <div className="card-body">
//             <h2 className="card-title">Produit 3</h2>
//             <p>Description du produit 3</p>
//             <div className="card-actions justify-end">
//               <button className="btn btn-accent">Voir plus</button>
//             </div>
//           </div>
//         </div>
//       </div>


//     </div>
//   );
// }


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

      {/* PRODUCTS / CTA */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Des outils conçus pour votre succès
          </h2>
          <p className="text-gray-600 mb-16 max-w-2xl mx-auto">
            Gérez votre activité avec des solutions fiables, rapides et sécurisées.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-10">

            {/* CARD 1 */}
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

            {/* CARD 2 */}
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
