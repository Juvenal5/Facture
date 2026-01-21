"use client"

import React, { useMemo, useState } from "react"
import { Trash2 } from "lucide-react"

/* =========================
   TYPES
========================= */

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

// ✅ User reçu depuis page.tsx
type User = {
  id: number
  nom: string
  prenom: string
  email: string
  numero?: string
  adresse?: string
  role?: string
  statut?: string
  date_de_creation: string
}

type Props = {
  users: User[]
  onDelete: (id: number) => void
}

export default function Customers({ users, onDelete }: Props) {
  /* =========================
     CLIENTS (FAKE UI – OK)
  ========================= */
  const [searchQuery, setSearchQuery] = useState("")

  const customers: Customer[] = [
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
  ]

  const filteredCustomers = useMemo(() => {
    return customers.filter(c =>
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.email.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [searchQuery])

  return (
    <div className="p-8 max-w-7xl mx-auto">

      {/* =========================
          SECTION CLIENTS (UI)
      ========================= */}
      <h1 className="text-4xl font-bold mb-10">CLIENTS</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {filteredCustomers.map(customer => (
          <div key={customer.id} className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold">{customer.name}</h3>
            <p className="text-sm text-gray-500">{customer.email}</p>
          </div>
        ))}
      </div>

      {/* =========================
          TABLEAU USERS (PRISMA)
      ========================= */}
      <h2 className="text-3xl font-bold mb-4">
        Utilisateurs (Base de données)
      </h2>

      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Nom</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Téléphone</th>
              <th className="p-3 text-left">Rôle</th>
              <th className="p-3 text-left">Statut</th>
              <th className="p-3 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map(user => (
              <tr key={user.id} className="border-t hover:bg-gray-50">
                <td className="p-3">
                  {user.nom} {user.prenom}
                </td>
                <td className="p-3">{user.email}</td>
                <td className="p-3">{user.numero ?? "-"}</td>
                <td className="p-3">{user.role ?? "-"}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      user.statut === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {user.statut ?? "N/A"}
                  </span>
                </td>
                <td className="p-3 text-center">
                  <button
                    onClick={() => onDelete(user.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}

            {users.length === 0 && (
              <tr>
                <td colSpan={6} className="p-6 text-center text-gray-500">
                  Aucun utilisateur trouvé
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// "use client"

// import React, { useState, useMemo, useEffect } from "react"
// import { Search, Plus, Trash2, Mail, Phone, MapPin } from "lucide-react"

// /* =========================
//    TYPES
// ========================= */

// type Customer = {
//   id: string
//   name: string
//   email: string
//   phone: string
//   location: string
//   totalInvoices: number
//   totalAmount: number
//   avatar: string
//   status: "Active" | "Inactive"
// }

// // 🔽 NOUVEAU : User venant de Prisma
// type User = {
//   id: number
//   nom: string
//   prenom: string
//   email: string
//   numero?: string
//   adresse?: string
//   role?: string
//   statut?: string
//   date_de_creation: string
// }

// export default function Customers() {
//   /* =========================
//      CLIENTS (EXISTANT)
//   ========================= */
//   const [searchQuery, setSearchQuery] = useState("")
//   const [showForm, setShowForm] = useState(false)

//   const [customers, setCustomers] = useState<Customer[]>([
//     {
//       id: "1",
//       name: "Juvenal Aka",
//       email: "aka@juvenal.com",
//       phone: "+225 07 XX XX XX",
//       location: "Abidjan, CI",
//       totalInvoices: 12,
//       totalAmount: 1234565,
//       avatar: "JA",
//       status: "Active",
//     },
//   ])

//   /* =========================
//      USERS (API / PRISMA)
//   ========================= */
//   // 🔽 NOUVEAU
//   const [users, setUsers] = useState<User[]>([])

//   const fetchUsers = async () => {
//     const res = await fetch("/api/users")
//     const data = await res.json()
//     setUsers(data)
//   }

//   useEffect(() => {
//     fetchUsers()
//   }, [])

//   const deleteUser = async (id: number) => {
//     await fetch("/api/users", {
//       method: "DELETE",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ id }),
//     })
//     fetchUsers()
//   }

//   /* =========================
//      FILTRES
//   ========================= */
//   const filteredCustomers = useMemo(() => {
//     return customers.filter(c =>
//       c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       c.email.toLowerCase().includes(searchQuery.toLowerCase())
//     )
//   }, [searchQuery, customers])

//   /* =========================
//      UI
//   ========================= */
//   return (
//     <div className="p-8 max-w-7xl mx-auto">

//       {/* =========================
//           SECTION CLIENTS (EXISTANTE)
//       ========================= */}
//       <h1 className="text-4xl font-bold mb-6">CLIENTS</h1>

//       {/* cartes clients */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
//         {filteredCustomers.map((customer, index) => (
//           <div key={customer.id} className="bg-white p-6 rounded-lg shadow">
//             <h3 className="font-semibold">{customer.name}</h3>
//             <p className="text-sm text-gray-500">{customer.email}</p>
//           </div>
//         ))}
//       </div>

//       {/* =========================
//           🔽 NOUVELLE SECTION : TABLEAU USERS
//       ========================= */}
//       <h2 className="text-3xl font-bold mb-4">Utilisateurs (Base de données)</h2>

//       <div className="bg-white rounded-lg shadow overflow-x-auto">
//         <table className="w-full border-collapse">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="p-3 text-left">Nom</th>
//               <th className="p-3 text-left">Email</th>
//               <th className="p-3 text-left">Téléphone</th>
//               <th className="p-3 text-left">Rôle</th>
//               <th className="p-3 text-left">Statut</th>
//               <th className="p-3 text-center">Action</th>
//             </tr>
//           </thead>

//           <tbody>
//             {users.map(user => (
//               <tr key={user.id} className="border-t hover:bg-gray-50">
//                 <td className="p-3">
//                   {user.nom} {user.prenom}
//                 </td>
//                 <td className="p-3">{user.email}</td>
//                 <td className="p-3">{user.numero ?? "-"}</td>
//                 <td className="p-3">{user.role ?? "-"}</td>
//                 <td className="p-3">
//                   <span className={`px-2 py-1 text-xs rounded-full ${
//                     user.statut === "Active"
//                       ? "bg-green-100 text-green-700"
//                       : "bg-gray-200 text-gray-600"
//                   }`}>
//                     {user.statut ?? "N/A"}
//                   </span>
//                 </td>
//                 <td className="p-3 text-center">
//                   <button
//                     onClick={() => deleteUser(user.id)}
//                     className="text-red-600 hover:text-red-800"
//                   >
//                     <Trash2 size={18} />
//                   </button>
//                 </td>
//               </tr>
//             ))}

//             {users.length === 0 && (
//               <tr>
//                 <td colSpan={6} className="p-6 text-center text-gray-500">
//                   Aucun utilisateur trouvé
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   )
// }



