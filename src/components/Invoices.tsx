"use client"

import React, { useState, useMemo } from "react"
import {
  Search,
  Plus,
  Edit2,
  Trash2,
  Clock,
} from "lucide-react"

type Invoice = {
  id: string
  customer: string
  email: string
  amount: number
  date: string
  status: "En attente" | "Payée"
  avatar: string
}

export default function Invoices() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showForm, setShowForm] = useState(false)

  const [formData, setFormData] = useState({
    customer: "",
    email: "",
    amount: 0,
    date: "",
    status: "En attente" as "En attente" | "Payée",
  })

  const [invoices, setInvoices] = useState<Invoice[]>([
    {
      id: "INV-001",
      customer: "Adame Love",
      email: "adame@love.com",
      amount: 3589758,
      date: "2022-01-05",
      status: "En attente",
      avatar: "AL",
    },
    {
      id: "INV-002",
      customer: "Jean Martin",
      email: "jean@martin.com",
      amount: 2500563,
      date: "2021-12-13",
      status: "En attente",
      avatar: "JM",
    },
  ])

  /* 🔎 Recherche */
  const filteredInvoices = useMemo(() => {
    return invoices.filter(i =>
      i.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      i.email.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [searchQuery, invoices])

  /* ➕ Ajouter facture */
  const addInvoice = () => {
    if (!formData.customer || !formData.email || !formData.date) return

    const avatar = formData.customer
      .split(" ")
      .map(n => n[0])
      .join("")
      .toUpperCase()

    setInvoices(prev => [
      ...prev,
      {
        id: `INV-${Date.now()}`,
        avatar,
        ...formData,
      },
    ])

    setFormData({
      customer: "",
      email: "",
      amount: 0,
      date: "",
      status: "En attente",
    })

    setShowForm(false)
  }

  const deleteInvoice = (id: string) => {
    setInvoices(prev => prev.filter(i => i.id !== id))
  }

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold">FACTURES</h1>
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2"
        >
          Créer une facture
          <Plus size={20} />
        </button>
      </div>

  
      {showForm && (
        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <h2 className="text-xl font-bold mb-4">Nouvelle facture</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              className="border p-2 rounded"
              placeholder="Nom du client"
              value={formData.customer}
              onChange={e => setFormData({ ...formData, customer: e.target.value })}
            />

            <input
              className="border p-2 rounded"
              placeholder="Email"
              value={formData.email}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
            />

            <input
              type="number"
              className="border p-2 rounded"
              placeholder="Montant"
              value={formData.amount}
              onChange={e => setFormData({ ...formData, amount: Number(e.target.value) })}
            />

            <input
              type="date"
              className="border p-2 rounded"
              value={formData.date}
              onChange={e => setFormData({ ...formData, date: e.target.value })}
            />

            <select
              className="border p-2 rounded"
              value={formData.status}
              onChange={e =>
                setFormData({ ...formData, status: e.target.value as any })
              }
            >
              <option value="En attente">En attente</option>
              <option value="Payée">Payée</option>
            </select>
          </div>

          <div className="flex gap-3 mt-4">
            <button
              onClick={addInvoice}
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              Enregistrer
            </button>
            <button
              onClick={() => setShowForm(false)}
              className="bg-gray-300 px-4 py-2 rounded"
            >
              Annuler
            </button>
          </div>
        </div>
      )}

      {/* Recherche */}
      <div className="relative max-w-2xl mb-6">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          className="w-full pl-12 py-3 border rounded-lg"
          placeholder="Rechercher une facture..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left">#</th>
              <th className="px-6 py-4 text-left">Client</th>
              <th className="px-6 py-4 text-left">Email</th>
              <th className="px-6 py-4 text-left">Montant</th>
              <th className="px-6 py-4 text-left">Date</th>
              <th className="px-6 py-4 text-left">Status</th>
              <th className="px-6 py-4"></th>
            </tr>
          </thead>

          <tbody>
            {filteredInvoices.map(invoice => (
              <tr key={invoice.id} className="border-t hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-600">{invoice.id}</td>

                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-medium">
                      {invoice.avatar}
                    </div>
                    {invoice.customer}
                  </div>
                </td>

                <td className="px-6 py-4 text-sm">{invoice.email}</td>
                <td className="px-6 py-4 font-semibold">
                  {invoice.amount.toLocaleString()} Fcf
                </td>
                <td className="px-6 py-4">{invoice.date}</td>

                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gray-100">
                    <Clock size={14} />
                    {invoice.status}
                  </span>
                </td>

                <td className="px-6 py-4">
                  <button onClick={() => deleteInvoice(invoice.id)}>
                    <Trash2 className="text-red-500" size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

