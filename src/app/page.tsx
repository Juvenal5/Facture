'use client';

import React, { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import Dashboard from '@/components/Dashboard';
import Invoices from '@/components/Invoices';
import Customers from '@/components/Customers';
import Product from '@/components/Product';
import Pageconnexion from '@/components/Pageconnexion';
import Transaction from '@/components/Transaction';
import Budget from '@/components/Budget';

export default function Page() {
  const [activeMenu, setActiveMenu] = useState('dashboard');
  const [users, setUsers] = useState<any[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Vérifier si l'utilisateur est déjà connecté (localStorage)
    const authStatus = localStorage.getItem('isAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      fetch('/api/users')
        .then(res => res.json())
        .then(data => setUsers(data))
        .catch(err => console.error('Erreur lors du chargement des utilisateurs:', err));
    }
  }, [isAuthenticated]);

  // Fonction appelée après connexion/inscription réussie
  const handleAuthSuccess = () => {
    console.log('Authentification réussie - accès autorisé');
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
  };

  // Fonction de déconnexion
  const handleLogout = () => {
    console.log('Déconnexion...');
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
    setActiveMenu('dashboard');
  };

  // Si non authentifié, afficher la page de connexion
  if (!isAuthenticated) {
    return <Pageconnexion onAuthSuccess={handleAuthSuccess} />;
  }

  // Si authentifié, afficher l'application principale
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar 
        activeMenu={activeMenu} 
        setActiveMenu={setActiveMenu}
        onLogout={handleLogout}
      />

      <div className="flex-1 overflow-auto">
        {activeMenu === 'dashboard' && <Dashboard />}
        {activeMenu === 'invoices' && <Invoices />}
        {activeMenu === 'customers' && <Customers />}
        {activeMenu === 'Product' && <Product />}
        {activeMenu === 'Transaction' && <Transaction />}
        {activeMenu === 'Budget' && <Budget />}
      </div>
    </div>
  );
}


