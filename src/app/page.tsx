'use client';

import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Dashboard from '@/components/Dashboard';
import Invoices from '@/components/Invoices';
import Customers from '@/components/Customers';

export default function Page() {
  const [activeMenu, setActiveMenu] = useState('dashboard');

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      
      <div className="flex-1 overflow-auto">
        {activeMenu === 'dashboard' && <Dashboard />}
        {activeMenu === 'invoices' && <Invoices />}
        {activeMenu === 'customers' && <Customers />}
      </div>
    </div>
  );
}

