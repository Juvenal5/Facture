import React from 'react';
import { Home, FileText, Users, LogOut, TrendingUp, Inbox } from 'lucide-react';

interface SidebarProps { 
  activeMenu: string;
  setActiveMenu: (menu: string) => void;
  onLogout: () => void;
}

export default function Sidebar({ activeMenu, setActiveMenu, onLogout }: SidebarProps) {
  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="bg-blue-600 p-6">
        <div className="flex items-center gap-2 text-white">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <TrendingUp size={20} className="text-blue-600"/>
          </div>
          <span className="text-2xl font-bold">Acme</span>
        </div>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 p-4">
        <button
          onClick={() => setActiveMenu('dashboard')}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
            activeMenu === 'dashboard' ? 'bg-blue-100 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
          }`}
        >
          <Home size={20} />
          <span className="font-medium">Accueil</span>
        </button>
        <button
          onClick={() => setActiveMenu('invoices')}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
            activeMenu === 'invoices' ? 'bg-blue-100 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
          }`}
        >
          <FileText size={20} />
          <span className="font-medium">Facture</span>
        </button>
        <button
          onClick={() => setActiveMenu('customers')}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
            activeMenu === 'customers' ? 'bg-blue-100 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
          }`}
        >
          <Users size={20} />
          <span className="font-medium">Clientes</span>
        </button>
        <button
          onClick={() => setActiveMenu('Product')}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
            activeMenu === 'Product' ? 'bg-blue-100 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
          }`}
        >
          <Inbox size={20} />
          <span className="font-medium">Produit</span>
        </button>
      </nav>

      {/* Sign Out */}
      <div className="p-4 border-t border-gray-200">
        <button 
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
        >
          <LogOut size={20} />
          <span className="font-medium">Se déconnecter</span>
        </button>
      </div>
    </div>
  );
}

