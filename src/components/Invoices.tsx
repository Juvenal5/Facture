import React, { useState } from "react";
import {
  Search,
  Plus,
  ChevronLeft,
  ChevronRight,
  Edit2,
  Trash2,
  Clock,
} from "lucide-react";

export default function Invoices() {
  const [searchQuery, setSearchQuery] = useState("");

  const invoices = [
    {
      id: "85842ba0...",
      customer: "Adame Love",
      email: "adame@love...",
      amount: "3.589.758Fcf",
      date: "Jan 5, 2022",
      status: "En attents",
      avatar: "AL",
    },
    {
      id: "59874gh02...",
      customer: "Jean-Martin",
      email: "Jean@mart...",
      
      amount: "2.500.563Fcf",
      date: "Dec 13, 2021",
      status: "En attents",
      avatar: "JM",
    },
    {
      id: "78954az2...",
      customer: "Aka Martin",
      email: "Aka@mart...",
      amount: "2.365.987Fcf",
      date: "Mai 01, 2022",
      status: "En attents",
      avatar: "AM",
    },
    {
      id: "67543hra12...",
      customer: "Anzara Kacou",
      email: "Kacou@Anz...",
      amount: "321.325Fcf",
      date: "Dec 6, 2022",
      status: "En attents",
      avatar: "AK",
    },
    {
      id: "35264zr03...",
      customer: "David Affali",
      email: "Dvid@Af...",
      amount: "254.458Fcf",
      date: "jun 6, 2022",
      status: "En attents",
      avatar: "DA",
    },
    {
      id: "85842ba0...",
      customer: "Ada Love",
      email: "ada@love...",
      amount: "157.954Fcf",
      date: "Dec 22, 2012",
      status: "En attents",
      avatar: "AL",
    },
    {
      id: "12547hj12...",
      customer: "Adiko Christ",
      email: "Adiko@Chr...",
      amount: "4.233.659fcf",
      date: "jue 6, 2022",
      status: "En attents",
      avatar: "AC",
    },
    {
      id: "85842ba0...",
      customer: "Adame Love",
      email: "adame@love...",
      amount: "157.951.212fcf",
      date: "Dec 6, 2022",
      status: "En attents",
      avatar: "AL",
    },
    {
      id: "85842ed23...",
      customer: "Diane Brou",
      email: "Diane@Brou",
      amount: "157.952Fcf",
      date: "mar 12, 2023",
      status: "En attents",
      avatar: "DB",
    },
  ];

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">FACTURES</h1>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 font-medium transition-colors">
            Crée une facture
            <Plus size={20} />
          </button>
        </div>

        {/* Search and Pagination Container */}
        <div className="flex justify-between items-center mb-6 gap-4">
          {/* Search Bar */}
          <div className="flex-1 max-w-2xl">
            <div className="relative">
              <Search
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search invoices"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Pagination */}
          <div className="flex items-center gap-2">
            <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
              <ChevronLeft size={20} className="text-gray-600" />
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium">
              1
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
              2
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
              ...
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
              5
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
              6
            </button>
            <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
              <ChevronRight size={20} className="text-gray-600" />
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  #
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Clients
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Email
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Montante
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Date
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Status
                </th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((invoice, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {invoice.id}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-medium">
                        {invoice.avatar}
                      </div>
                      <span className="text-sm font-medium text-gray-900">
                        {invoice.customer}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {invoice.email}
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    {invoice.amount}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {invoice.date}
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-gray-100 text-gray-600">
                      <Clock size={14} />
                      {invoice.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <Edit2 size={18} className="text-gray-600" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <Trash2 size={18} className="text-gray-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
