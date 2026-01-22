"use client";

import React from "react";
import {
  Calendar,
  Clock,
  FileText,
  Users,
  Inbox,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Dashboard() {
  const recentRevenue = [
    { name: "Jan", pv: 2400 },
    { name: "Fev", pv: 1398 },
    { name: "Mar", pv: 9800 },
    { name: "Avr", pv: 3908 },
    { name: "Mai", pv: 4800 },
    { name: "Jun", pv: 3800 },
    { name: "Jul", pv: 4300 },
    { name: "Aou", pv: 1398 },
    { name: "Sep", pv: 9800 },
    { name: "Oct", pv: 3908 },
    { name: "Nov", pv: 4800 },
    { name: "Dec", pv: 3800 },
  ];

  const latestInvoices = [
    { name: "Ane Edoukou", email: "ane@edoukou.com", amount: "89 450 FCFA", avatar: "AE" },
    { name: "Serge Aka", email: "aka@serge.com", amount: "448 000 FCFA", avatar: "SA" },
    { name: "Lee Robinson", email: "franck@ano.com", amount: "5 000 FCFA", avatar: "LR" },
    { name: "Olive Dah", email: "dah@olive.com", amount: "445 770 FCFA", avatar: "OD" },
    { name: "Erice Toulouse", email: "erice@toulouse.com", amount: "542 460 FCFA", avatar: "ET" },
  ];

  const descriptions: Record<string, string> = {
    Jan: "Vêtements pour hommes",
    Fev: "Robes pour femmes",
    Mar: "Sacs pour femmes",
    Avr: "Articles ménagers",
    Mai: "Alimentation",
    Jun: "Alimentation bébé",
    Jul: "Produits divers",
    Aou: "Vêtements pour hommes",
    Sep: "Robes pour femmes",
    Oct: "Sacs pour femmes",
    Nov: "Articles ménagers",
    Dec: "Alimentation",
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 rounded-lg shadow border">
          <p className="font-semibold text-gray-900">
            {label} : {payload[0].value}
          </p>
          <p className="text-sm text-gray-600">
            {label && descriptions[label]}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">TABLEAU DE BORD</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Stat icon={<Inbox size={16} />} label="Collecté" value="145 124 536 FCFA" />
        <Stat icon={<Clock size={16} />} label="En attente" value="546 897 123 FCFA" />
        <Stat icon={<FileText size={16} />} label="Factures" value="15" />
        <Stat icon={<Users size={16} />} label="Clients" value="8" />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Revenus récents</h2>

          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={recentRevenue}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Bar dataKey="pv" barSize={24} fill="#22c55e" />
            </BarChart>
          </ResponsiveContainer>

          <div className="flex items-center gap-2 text-sm text-gray-500 mt-4">
            <Calendar size={14} />
            <span>12 derniers mois</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Dernières factures</h2>

          <div className="space-y-4">
            {latestInvoices.map((invoice, i) => (
              <div key={i} className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                  <div className="w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center font-semibold">
                    {invoice.avatar}
                  </div>
                  <div>
                    <p className="font-medium">{invoice.name}</p>
                    <p className="text-sm text-gray-500">{invoice.email}</p>
                  </div>
                </div>
                <p className="font-semibold">{invoice.amount}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Stat({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center gap-2 text-gray-600 mb-2">
        {icon}
        <span className="text-sm">{label}</span>
      </div>
      <div className="text-2xl font-bold">{value}</div>
    </div>
  );
}