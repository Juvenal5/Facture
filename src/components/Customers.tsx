"use client"

import React, { useState, useMemo } from "react"
import { Search, Plus, Trash2, Mail, Phone, MapPin } from "lucide-react"

type Customer = {
  id: string
  name: string
  email: string
  phone: string
  location: string
  totalInvoices: number
  totalAmount: number
  avatar: string
  status: "Active" | "Inactive"
}

export default function Customers() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showForm, setShowForm] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    totalInvoices: 0,
    totalAmount: 0,
    status: "Active" as "Active" | "Inactive",
  })

  const [customers, setCustomers] = useState<Customer[]>([
    {
      id: "1",
      name: "Juvenal Aka",
      email: "aka@juvenal.com",
      phone: "+225 07 XX XX XX",
      location: "Abidjan, CI",
      totalInvoices: 12,
      totalAmount: 1234565,
      avatar: "JA",
      status: "Active",
    },
    {
      id: "2",
      name: "Jared Edoukou",
      email: "jared@edoukou.com",
      phone: "+1 555 XXX XXXX",
      location: "New York, USA",
      totalInvoices: 8,
      totalAmount: 3584005,
      avatar: "JE",
      status: "Inactive",
    },
  ])

  const filteredCustomers = useMemo(() => {
    return customers.filter(c =>
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.email.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [searchQuery, customers])

  const totalClients = customers.length
  const activeClients = customers.filter(c => c.status === "Active").length
  const totalRevenue = customers.reduce((sum, c) => sum + c.totalAmount, 0)
  const averageRevenue = totalClients ? totalRevenue / totalClients : 0

  const addCustomer = () => {
    if (!formData.name || !formData.email) return

    const avatar = formData.name
      .split(" ")
      .map(n => n[0])
      .join("")
      .toUpperCase()

    setCustomers(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        avatar,
        ...formData,
      },
    ])

    setFormData({
      name: "",
      email: "",
      phone: "",
      location: "",
      totalInvoices: 0,
      totalAmount: 0,
      status: "Active",
    })

    setShowForm(false)
  }

  const deleteCustomer = (id: string) => {
    setCustomers(prev => prev.filter(c => c.id !== id))
  }

  const getAvatarColor = (index: number) => {
    const colors = [
      "from-blue-400 to-purple-500",
      "from-green-400 to-teal-500",
      "from-orange-400 to-red-500",
      "from-pink-400 to-purple-500",
    ]
    return colors[index % colors.length]
  }

  return (
    <div className="p-8 max-w-7xl mx-auto">
   
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-4xl font-bold">CLIENTS</h1>
          <p className="text-gray-600">Gérez vos relations clients</p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg flex items-center gap-2"
        >
          Ajouter
          <Plus size={20} />
        </button>
      </div>

      {/* Formulaire */}
      {showForm && (
        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <h2 className="text-xl font-bold mb-4">Nouveau client</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input className="border p-2 rounded" placeholder="Nom"
              value={formData.name}
              onChange={e => setFormData({ ...formData, name: e.target.value })}
            />

            <input className="border p-2 rounded" placeholder="Email"
              value={formData.email}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
            />

            <input className="border p-2 rounded" placeholder="Téléphone"
              value={formData.phone}
              onChange={e => setFormData({ ...formData, phone: e.target.value })}
            />

            <input className="border p-2 rounded" placeholder="Localisation"
              value={formData.location}
              onChange={e => setFormData({ ...formData, location: e.target.value })}
            />

            <input type="number" className="border p-2 rounded" placeholder="Nombre de factures"
              value={formData.totalInvoices}
              onChange={e => setFormData({ ...formData, totalInvoices: Number(e.target.value) })}
            />

            <input type="number" className="border p-2 rounded" placeholder="Montant total"
              value={formData.totalAmount}
              onChange={e => setFormData({ ...formData, totalAmount: Number(e.target.value) })}
            />

            <select className="border p-2 rounded"
              value={formData.status}
              onChange={e => setFormData({ ...formData, status: e.target.value as any })}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="Neutre">Neutre</option>
            </select>
          </div>

          <div className="flex gap-3 mt-4">
            <button onClick={addCustomer} className="bg-green-600 text-white px-4 py-2 rounded">
              Enregistrer
            </button>
            <button onClick={() => setShowForm(false)} className="bg-gray-300 px-4 py-2 rounded">
              Annuler
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Stat title="Total clients" value={totalClients} />
        <Stat title="Clients actifs" value={activeClients} />
        <Stat title="Revenu total" value={`${totalRevenue.toLocaleString()} Fcf`} />
        <Stat title="Moyenne/client" value={`${averageRevenue.toLocaleString()} Fcf`} />
      </div>

      <div className="relative max-w-md mb-8">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          className="w-full pl-12 py-3 border rounded-lg"
          placeholder="Rechercher un client..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Cartes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCustomers.map((customer, index) => (
          <div key={customer.id} className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${getAvatarColor(index)} flex items-center justify-center text-white font-bold`}>
                  {customer.avatar}
                </div>
                <div>
                  <h3 className="font-semibold">{customer.name}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    customer.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-200 text-gray-600"
                  }`}>
                    {customer.status}
                  </span>
                </div>
              </div>

              <button onClick={() => deleteCustomer(customer.id)}>
                <Trash2 className="text-red-500" size={18} />
              </button>
            </div>

            <Info icon={<Mail size={14} />} text={customer.email} />
            <Info icon={<Phone size={14} />} text={customer.phone} />
            <Info icon={<MapPin size={14} />} text={customer.location} />

            <div className="grid grid-cols-2 gap-4 mt-4 border-t pt-4">
              <div>
                <p className="text-xs text-gray-500">Factures</p>
                <p className="font-bold">{customer.totalInvoices}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Montant</p>
                <p className="font-bold">{customer.totalAmount.toLocaleString()} Fcf</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const Stat = ({ title, value }: { title: string; value: any }) => (
  <div className="bg-white p-6 rounded-lg shadow">
    <p className="text-sm text-gray-500">{title}</p>
    <p className="text-2xl font-bold">{value}</p>
  </div>
)

const Info = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center gap-2 text-sm text-gray-600">
    {icon}
    {text}
  </div>
)

