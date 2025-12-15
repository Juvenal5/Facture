import React from "react";
import { Calendar, Clock, FileText, Users, Inbox } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default function Dashboard() {
  const recentRevenue = [
    { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Fev', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Mas', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Avl', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Mai', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Jue', uv: 3490, pv: 4300, amt: 2100 },
    { name: 'Aut', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Sept', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Oct', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Nov', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Dec', uv: 2390, pv: 3800, amt: 2500 }
  ];

  const latestInvoices = [
    {
      name: "Ane Edoukou",
      email: "Ane@Edoukou.com",
      amount: "89.45f",
      avatar: "AE",
    },
    {
      name: "Serge Aka",
      email: "Aka@Serge.com",
      amount: "448.00f",
      avatar: "AS",
    },
    {
      name: "Lee Robinson",
      email: "Franck@Ano.com",
      amount: "5.00f",
      avatar: "AF",
    },
    {
      name: "Olive Dah",
      email: "Dah@Olive.com",
      amount: "445.77f",
      avatar: "OD",
    },
    {
      name: "Erice Toulouse",
      email: "Erice@Toulouse.com",
      amount: "542.46f",
      avatar: "ET",
    },
  ];

  const getIntroOfPage = (label: string | number | undefined ) => {
    const descriptions = {
      'Jan': "Page A concerne les vêtements pour hommes",
      'Fev': "Page B concerne les robes pour femmes",
      'Mas': "Page C concerne les sacs pour femmes",
      'Avl': "Page D concerne les articles ménagers",
      'Mas': "Page E concerne l'alimentation",
      'Jun': "Page F concerne l'alimentation pour bébés",
      'Jue': "Page G concerne l'alimentation",
      'Aut': "Page A concerne les vêtements pour hommes",
      'Sept': "Page B concerne les robes pour femmes",
      'Oct': "Page C concerne les sacs pour femmes",
      'Nov': "Page D concerne les articles ménagers",
      'Dec': "Page E concerne l'alimentation",
    };
    return descriptions[label] || '';
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-200">
          <p className="font-semibold text-gray-900">{`${label}: ${payload[0].value}`}</p>
          <p className="text-sm text-gray-600 mt-1">{getIntroOfPage(label)}</p>
          <p className="text-xs text-gray-500 mt-1">Tout ce que vous voulez peut être affiché ici.</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">TABLEAU DE BORD</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-2 text-gray-600 mb-2">
            <Inbox size={16} />
            <span className="text-sm font-medium">Collecté</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">145.124.536 Fcf</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-2 text-gray-600 mb-2">
            <Clock size={16} />
            <span className="text-sm font-medium">En attente</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">546.897.123 Fcf</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-2 text-gray-600 mb-2">
            <FileText size={16} />
            <span className="text-sm font-medium">Factures totales</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">15</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-2 text-gray-600 mb-2">
            <Users size={16} />
            <span className="text-sm font-medium">Total clients</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">8</div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Recent Revenue with Recharts */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Revenus récents
          </h2>
          <div className="w-full h-64 flex items-center justify-center">
            <BarChart
              width={500}
              height={250}
              data={recentRevenue}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Bar dataKey="pv" barSize={20} fill="#99d884ff" />
            </BarChart>
          </div>
          <div className="flex items-center gap-2 text-gray-500 text-sm mt-4">
            <Calendar size={14} />
            <span>Au moins 12 mois</span>
          </div>
        </div>

        {/* Latest Invoices */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Dernières factures
          </h2>
          <div className="space-y-4">
            {latestInvoices.map((invoice, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-sm font-medium">
                    {invoice.avatar}
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">
                      {invoice.name}
                    </div>
                    <div className="text-sm text-gray-500">{invoice.email}</div>
                  </div>
                </div>
                <div className="font-semibold text-gray-900">
                  {invoice.amount}
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 text-gray-500 text-sm mt-6">
            <Clock size={14} />
            <span>Mise à jour immédiate</span>
          </div>
        </div>
      </div>
    </div>
  );
}