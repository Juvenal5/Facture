// 'use client';

// import { useEffect, useState } from 'react';
// import Sidebar from '@/components/Sidebar';
// import Dashboard from '@/components/Dashboard';
// import Invoices from '@/components/Invoices';
// import Customers from '@/components/Customers';
// import Product from '@/components/Product';

// export default function Page() {
//   const [activeMenu, setActiveMenu] = useState('dashboard');
//   const [users, setUsers] = useState<any[]>([]);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       const res = await fetch('/api/users');
//       const data = await res.json();
//       setUsers(data);
//     };

//     fetchUsers();
//   }, []);

//   return (
//     <div className="flex min-h-screen bg-gray-50">
//       <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />

//       <div className="flex-1 overflow-auto">
//         {activeMenu === 'dashboard' && <Dashboard />}
//         {activeMenu === 'invoices' && <Invoices />}
//         {activeMenu === 'customers' && <Customers users={users} onDelete={deleteuser} />}
//         {activeMenu === 'Product' && <Product />}
//       </div>
//     </div>
//   );
// }


// 'use client';

// import { useEffect, useState } from 'react';
// import Sidebar from '@/components/Sidebar';
// import Dashboard from '@/components/Dashboard';
// import Invoices from '@/components/Invoices';
// import Customers from '@/components/Customers';
// import Product from '@/components/Product';

// export default function Page() {
//   const [activeMenu, setActiveMenu] = useState('dashboard');
//   const [users, setUsers] = useState<any[]>([]);

//   // 🔹 Charger les users depuis l'API
//   const fetchUsers = async () => {
//     const res = await fetch('/api/users');
//     const data = await res.json();
//     setUsers(data);
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   // 🔹 Créer un user
//   const createUser = async () => {
//     await fetch('/api/users', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         nom: 'Doe',
//         prenom: 'John',
//         email: `john${Date.now()}@mail.com`,
//         mot_de_passe: '123456',
//       }),
//     });

//     fetchUsers();
//   };

//   // 🔹 Supprimer un user
//   const deleteUser = async (id: number) => {
//     await fetch('/api/users', {
//       method: 'DELETE',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ id }),
//     });

//     fetchUsers();
//   };

//   return (
//     <div className="flex min-h-screen bg-gray-50">
//       <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />

//       <div className="flex-1 overflow-auto p-6">
//         {activeMenu === 'dashboard' && <Dashboard />}
//         {activeMenu === 'invoices' && <Invoices />}
//         {activeMenu === 'customers' && (
//           <>
//             <button
//               onClick={createUser}
//               className="mb-4 px-4 py-2 bg-blue-600 text-white rounded"
//             >
//               ➕ Ajouter un utilisateur
//             </button>
//             <Customers users={users} onDelete={deleteUser} />
//           </>
//         )}

//         {activeMenu === 'Product' && <Product />}
//       </div>
//     </div>
//   );
// }





// 'use client';

// import React, { useState } from 'react';
// import Sidebar from '@/components/Sidebar';
// import Dashboard from '@/components/Dashboard';
// import Invoices from '@/components/Invoices';
// import Customers from '@/components/Customers';
// import Product from '@/components/Product';
// import prisma from '@/app/lib/prisma';

// export default function Page() {
//   const [activeMenu, setActiveMenu] = useState('dashboard');
//   const users = await prisma.user.findMany();

//   return (
//     <div className="flex min-h-screen bg-gray-50">
//       <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      
//       <div className="flex-1 overflow-auto">
//         {activeMenu === 'dashboard' && <Dashboard />}
//         {activeMenu === 'invoices' && <Invoices />}
//         {activeMenu === 'customers' && <Customers />}
//         {activeMenu === 'Product' && <Product/>}
//       </div>
//     </div>
//   );
// }





// 'use client';

// import React, { useState, useEffect } from 'react';
// import Sidebar from '@/components/Sidebar';
// import Dashboard from '@/components/Dashboard';
// import Invoices from '@/components/Invoices';
// import Customers from '@/components/Customers';
// import Product from '@/components/Product';

// export default function Page() {
//   const [activeMenu, setActiveMenu] = useState('dashboard');
//   const [users, setUsers] = useState<any[]>([]);

//   useEffect(() => {
//     fetch('/api/users')
//       .then(res => res.json())
//       .then(data => setUsers(data));
//   }, []);

//   return (
//     <div className="flex min-h-screen bg-gray-50">
//       <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />

//       <div className="flex-1 overflow-auto">
//         {activeMenu === 'dashboard' && <Dashboard />}
//         {activeMenu === 'invoices' && <Invoices />}
//         {activeMenu === 'customers' && <Customers />}
//         {activeMenu === 'Product' && <Product />}
//       </div>
//     </div>
//   );
// }



