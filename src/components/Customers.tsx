import React, { useState } from 'react';
import { Search, Plus, Edit2, Trash2, Mail, Phone, MapPin } from 'lucide-react';

export default function Customers() {
  const [searchQuery, setSearchQuery] = useState('');

  const customers = [
    {
      id: '1',
      name: 'Juvenal aka',
      email: 'Aka@Juvenal.com',
      phone: '+225 07 XX XX XX XX',
      location: 'Abidjan, CI',
      totalInvoices: 12,
      totalAmount: '1.234.565 Fcf',
      avatar: 'JA',
      status: 'Active'
    },
    {
      id: '2',
      name: 'Jared Edoukou',
      email: 'jared@Edoukou.com',
      phone: '+1 555 XXX XXXX',
      location: 'New York, USA',
      totalInvoices: 8,
      totalAmount: '3.584.005 Fcf',
      avatar: 'JE',
      status: 'Inactive'
    },
    {
      id: '3',
      name: 'Lee Aka',
      email: 'lee@Aka.com',
      phone: '+225 XXX XXXX',
      location: 'San-pedro,CI',
      totalInvoices: 15,
      totalAmount: '2.342.456 Fcf',
      avatar: 'LA',
      status: 'Active'
    },
    {
      id: '4',
      name: 'Yohan Brou',
      email: 'Yohan@Brou.com',
      phone: '+1 555 XXX XXXX',
      location: 'Boston, USA',
      totalInvoices: 6,
      totalAmount: '2.563.589 Fcf',
      avatar: 'YB',
      status: 'Inactive'
    },
    {
      id: '5',
      name: 'Emil Jean',
      email: 'emil@Jean.com',
      phone: '+48 XXX XXX XXX',
      location: 'Warsaw, Poland',
      totalInvoices: 20,
      totalAmount: '1.235.265 Fcf',
      avatar: 'EJ',
      status: 'Active'
    },
    {
      id: '6',
      name: 'Adame franck',
      email: 'Adame@franck.com',
      phone: '+44 XXX XXX XXXX',
      location: 'London, UK',
      totalInvoices: 9,
      totalAmount: '255.569 Fcf',
      avatar: 'AF',
      status: 'Active'
    }
  ];

  const getAvatarColor = (index: number) => {
    const colors = [
      'from-blue-400 to-purple-500',
      'from-green-400 to-teal-500',
      'from-orange-400 to-red-500',
      'from-pink-400 to-purple-500',
      'from-indigo-400 to-blue-500',
      'from-yellow-400 to-orange-500'
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">CLIENTS</h1>
            <p className="text-gray-600 mt-2">Gérez vos relations clients</p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 font-medium transition-colors">
            Ajoutez des clients
            <Plus size={20} />
          </button>
        </div>

        <div className="grid grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-sm text-gray-600 mb-1">Totale clients</div>
            <div className="text-2xl font-bold text-gray-900">8</div>
            <div className="text-xs text-green-600 mt-1">↑ 12% du mois dernière</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-sm text-gray-600 mb-1">Clients actif</div>
            <div className="text-2xl font-bold text-gray-900">7</div>
            <div className="text-xs text-green-600 mt-1">↑ 8% du mois derniere</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-sm text-gray-600 mb-1">Total Revenue</div>
            <div className="text-2xl font-bold text-gray-900">17,088.91 Fcf</div>
            <div className="text-xs text-green-600 mt-1">↑ 23% du mois derniere</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-sm text-gray-600 mb-1">Moy. par clients</div>
            <div className="text-2xl font-bold text-gray-900">2,136.11 Fcf</div>
            <div className="text-xs text-gray-500 mt-1">Mise à jour aujourd'hui</div>
          </div>
        </div>

        <div className="mb-6">
          <div className="relative max-w-md">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="recherche clients..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {customers.map((customer, index) => (
            <div key={customer.id} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${getAvatarColor(index)} flex items-center justify-center text-white font-semibold text-lg`}>
                    {customer.avatar}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{customer.name}</h3>
                    <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${
                      customer.status === 'Active' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {customer.status}
                    </span>
                  </div>
                </div>
                <div className="flex gap-1">
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <Edit2 size={16} className="text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <Trash2 size={16} className="text-gray-600" />
                  </button>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Mail size={14} />
                  <span>{customer.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Phone size={14} />
                  <span>{customer.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin size={14} />
                  <span>{customer.location}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-gray-500 mb-1">Total facture</div>
                  <div className="text-lg font-semibold text-gray-900">{customer.totalInvoices}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Montant total</div>
                  <div className="text-lg font-semibold text-gray-900">{customer.totalAmount}</div>
                </div>
              </div>

              <button className="w-full mt-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-400 transition-colors">
                Voir les details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}