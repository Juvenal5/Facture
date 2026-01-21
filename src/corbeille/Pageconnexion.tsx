// 'use client';

// import { useState } from 'react';

// export default function PageConnexion() {
//   const [showLoginModal, setShowLoginModal] = useState(false);
//   const [showSignupModal, setShowSignupModal] = useState(false);

//   const handleLoginSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.currentTarget);
//     console.log('Connexion:', {
//       email: formData.get('email'),
//       password: formData.get('password'),
//     });
//     alert('Connexion en cours...');
//   };

//   const handleSignupSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.currentTarget);
    
//     const password = formData.get('password');
//     const confirmPassword = formData.get('confirmPassword');
    
//     if (password !== confirmPassword) {
//       alert('Les mots de passe ne correspondent pas!');
//       return;
//     }
    
//     console.log('Inscription:', {
//       nom: formData.get('nom'),
//       prenom: formData.get('prenom'),
//       telephone: formData.get('telephone'),
//       dateNaissance: formData.get('dateNaissance'),
//       email: formData.get('email'),
//     });
//     alert('Inscription réussie!');
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden">
//       {/* Ornements décoratifs */}
//       <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl"></div>
//       <div className="absolute bottom-20 right-10 w-80 h-80 bg-amber-200/20 rounded-full blur-3xl"></div>

//       {/* Header */}
//       <header className="relative z-10 max-w-7xl mx-auto px-6 pt-8 pb-4">
//         <div className="flex justify-between items-center">
//           {/* Logo */}
//           <div className="flex items-center gap-3 animate-fade-in">
//             <div className="w-14 h-14 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-900/30">
//               <span className="text-3xl font-bold text-amber-400">₣</span>
//             </div>
//             <span className="text-sm font-bold text-slate-800 tracking-wide uppercase">
//               FinBoard
//             </span>
//           </div>

//           {/* Bouton Connexion */}
//           <button
//             onClick={() => setShowLoginModal(true)}
//             className="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-3 rounded-xl font-semibold shadow-lg shadow-emerald-900/30 transition-all duration-300 hover:scale-105 hover:shadow-xl"
//           >
//             Connexion
//           </button>
//         </div>
//       </header>

//       {/* Contenu principal */}
//       <main className="relative z-10 max-w-7xl mx-auto px-6 py-20">
//         <div className="max-w-4xl">
//           <h1 className="text-7xl font-bold text-slate-900 mb-6 leading-tight animate-slide-up">
//             Bienvenue dans le
//             <br />
//             Tableau de Bord
//             <br />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-amber-500">
//               Financier
//             </span>
//           </h1>
//           <p className="text-xl text-slate-600 mb-12 max-w-2xl leading-relaxed animate-slide-up-delay">
//             Gérez vos finances intelligemment. Suivez vos investissements, analysez vos dépenses 
//             et prenez des décisions éclairées avec notre plateforme intuitive et sécurisée.
//           </p>

//           <div className="flex gap-6 animate-slide-up-delay-2">
//             <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-6 py-4 rounded-xl shadow-lg">
//               <span className="text-3xl">📊</span>
//               <span className="font-semibold text-slate-800">Analyses en temps réel</span>
//             </div>
//             <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-6 py-4 rounded-xl shadow-lg">
//               <span className="text-3xl">🔒</span>
//               <span className="font-semibold text-slate-800">Sécurité maximale</span>
//             </div>
//           </div>

//           {/* Bouton d'inscription */}
//           <div className="mt-16">
//             <button
//               onClick={() => setShowSignupModal(true)}
//               className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-xl shadow-amber-900/30 transition-all duration-300 hover:scale-105"
//             >
//               Inscription
//             </button>
//             <p className="text-sm text-slate-500 mt-4">
//               Nouveau sur FinBoard ? Inscrivez-vous gratuitement en quelques secondes.
//             </p>
//           </div>
//         </div>
//       </main>

//       {/* Modal de Connexion */}
//       {showLoginModal && (
//         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
//           <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-scale-in">
//             <button
//               onClick={() => setShowLoginModal(false)}
//               className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-2xl"
//             >
//               ×
//             </button>

//             <h2 className="text-3xl font-bold text-slate-900 mb-2">Connexion</h2>
//             <p className="text-slate-600 mb-8">Accédez à votre espace personnel</p>

//             <form onSubmit={handleLoginSubmit} className="space-y-6">
//               <div>
//                 <label htmlFor="login-email" className="block text-sm font-semibold text-slate-700 mb-2">
//                   Entrez votre email
//                 </label>
//                 <input
//                   type="email"
//                   id="login-email"
//                   name="email"
//                   required
//                   placeholder="votre@email.com"
//                   className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="login-password" className="block text-sm font-semibold text-slate-700 mb-2">
//                   Votre mot de passe
//                 </label>
//                 <input
//                   type="password"
//                   id="login-password"
//                   name="password"
//                   required
//                   placeholder="••••••••"
//                   className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
//                 />
//               </div>

//               <div className="flex items-center justify-between">
//                 <label className="flex items-center gap-2 text-sm text-slate-600">
//                   <input type="checkbox" className="w-4 h-4 rounded" />
//                   Se souvenir de moi
//                 </label>
//                 <a href="#" className="text-sm font-semibold text-emerald-600 hover:text-emerald-700">
//                   Mot de passe oublié ?
//                 </a>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white py-3 rounded-xl font-semibold shadow-lg transition-all duration-300 hover:scale-105"
//               >
//                 Se connecter
//               </button>
//             </form>

//             <div className="mt-6 text-center">
//               <p className="text-sm text-slate-600">
//                 Pas encore de compte ?{' '}
//                 <button
//                   onClick={() => {
//                     setShowLoginModal(false);
//                     setShowSignupModal(true);
//                   }}
//                   className="font-semibold text-emerald-600 hover:text-emerald-700"
//                 >
//                   Créer un compte
//                 </button>
//               </p>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Modal d'Inscription */}
//       {showSignupModal && (
//         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in overflow-y-auto">
//           <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 relative my-8 animate-scale-in">
//             <button
//               onClick={() => setShowSignupModal(false)}
//               className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-2xl"
//             >
//               ×
//             </button>

//             <h2 className="text-3xl font-bold text-slate-900 mb-2">Inscription</h2>
//             <p className="text-slate-600 mb-8">Créez votre compte en quelques instants</p>

//             <form onSubmit={handleSignupSubmit} className="space-y-5">
//               {/* Nom et Prénom */}
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label htmlFor="nom" className="block text-sm font-semibold text-slate-700 mb-2">
//                     Nom
//                   </label>
//                   <input
//                     type="text"
//                     id="nom"
//                     name="nom"
//                     required
//                     placeholder="Votre nom"
//                     className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-amber-500 focus:outline-none transition-colors"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="prenom" className="block text-sm font-semibold text-slate-700 mb-2">
//                     Prénom
//                   </label>
//                   <input
//                     type="text"
//                     id="prenom"
//                     name="prenom"
//                     required
//                     placeholder="Votre prénom"
//                     className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-amber-500 focus:outline-none transition-colors"
//                   />
//                 </div>
//               </div>

//               {/* Téléphone et Date de naissance */}
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label htmlFor="telephone" className="block text-sm font-semibold text-slate-700 mb-2">
//                     Numéro de téléphone
//                   </label>
//                   <input
//                     type="tel"
//                     id="telephone"
//                     name="telephone"
//                     required
//                     placeholder="+225 XX XX XX XX XX"
//                     className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-amber-500 focus:outline-none transition-colors"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="dateNaissance" className="block text-sm font-semibold text-slate-700 mb-2">
//                     Date de naissance
//                   </label>
//                   <input
//                     type="date"
//                     id="dateNaissance"
//                     name="dateNaissance"
//                     required
//                     className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-amber-500 focus:outline-none transition-colors"
//                   />
//                 </div>
//               </div>

//               {/* Email */}
//               <div>
//                 <label htmlFor="signup-email" className="block text-sm font-semibold text-slate-700 mb-2">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="signup-email"
//                   name="email"
//                   required
//                   placeholder="votre@email.com"
//                   className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-amber-500 focus:outline-none transition-colors"
//                 />
//               </div>

//               {/* Mot de passe */}
//               <div>
//                 <label htmlFor="signup-password" className="block text-sm font-semibold text-slate-700 mb-2">
//                   Entrer un mot de passe
//                 </label>
//                 <input
//                   type="password"
//                   id="signup-password"
//                   name="password"
//                   required
//                   placeholder="••••••••"
//                   className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-amber-500 focus:outline-none transition-colors"
//                 />
//               </div>

//               {/* Confirmer mot de passe */}
//               <div>
//                 <label htmlFor="confirm-password" className="block text-sm font-semibold text-slate-700 mb-2">
//                   Confirmer le mot de passe
//                 </label>
//                 <input
//                   type="password"
//                   id="confirm-password"
//                   name="confirmPassword"
//                   required
//                   placeholder="••••••••"
//                   className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-amber-500 focus:outline-none transition-colors"
//                 />
//               </div>

//               {/* Conditions d'utilisation */}
//               <div className="flex items-start gap-2">
//                 <input type="checkbox" required className="w-4 h-4 mt-1 rounded" />
//                 <label className="text-sm text-slate-600">
//                   J'accepte les{' '}
//                   <a href="#" className="text-amber-600 hover:text-amber-700 font-semibold">
//                     conditions d'utilisation
//                   </a>{' '}
//                   et la{' '}
//                   <a href="#" className="text-amber-600 hover:text-amber-700 font-semibold">
//                     politique de confidentialité
//                   </a>
//                 </label>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white py-3 rounded-xl font-semibold shadow-lg transition-all duration-300 hover:scale-105"
//               >
//                 Créer mon compte
//               </button>
//             </form>

//             <div className="mt-6 text-center">
//               <p className="text-sm text-slate-600">
//                 Vous avez déjà un compte ?{' '}
//                 <button
//                   onClick={() => {
//                     setShowSignupModal(false);
//                     setShowLoginModal(true);
//                   }}
//                   className="font-semibold text-emerald-600 hover:text-emerald-700"
//                 >
//                   Se connecter
//                 </button>
//               </p>
//             </div>
//           </div>
//         </div>
//       )}

//       <style jsx>{`
//         @keyframes fade-in {
//           from {
//             opacity: 0;
//           }
//           to {
//             opacity: 1;
//           }
//         }

//         @keyframes scale-in {
//           from {
//             opacity: 0;
//             transform: scale(0.9);
//           }
//           to {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }

//         @keyframes slide-up {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-fade-in {
//           animation: fade-in 0.5s ease-out;
//         }

//         .animate-scale-in {
//           animation: scale-in 0.3s ease-out;
//         }

//         .animate-slide-up {
//           animation: slide-up 0.6s ease-out;
//         }

//         .animate-slide-up-delay {
//           animation: slide-up 0.6s ease-out 0.2s both;
//         }

//         .animate-slide-up-delay-2 {
//           animation: slide-up 0.6s ease-out 0.4s both;
//         }
//       `}</style>
//     </div>
//   );
// }

