'use client';

import { useState } from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import SidebarMobile from '../components/sidebar/SidebarMobile';
import Header from '../components/header/Header';
import { 
  HomeIcon, 
  UsersIcon, 
  FolderIcon, 
  CalendarIcon, 
  DocumentDuplicateIcon, 
  ChartPieIcon 
} from '@heroicons/react/24/outline';


import Table from '../components/Table';

const orders = [
  {
    date: 'Mar 6, 2023',
    name: 'Leslie Alexander',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    amount: 'CA$60.00',
    status: 'Success',
  },
  {
    date: 'Mar 6, 2023',
    name: 'Michael Foster',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    amount: 'CA$60.00',
    status: 'Success',
  },
  {
    date: 'Mar 4, 2023',
    name: 'Dries Vincent',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    amount: 'CA$60.00',
    status: 'Success',
  },
  {
    date: 'Mar 4, 2023',
    name: 'Lindsay Walton',
    avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
    amount: 'CA$75.00',
    status: 'Success',
  },
  {
    date: 'Mar 4, 2023',
    name: 'Courtney Henry',
    avatar: 'https://randomuser.me/api/portraits/women/5.jpg',
    amount: 'CA$60.00',
    status: 'Success',
  },
  {
    date: 'Mar 3, 2023',
    name: 'Tom Cook',
    avatar: 'https://randomuser.me/api/portraits/men/6.jpg',
    amount: 'CA$75.00',
    status: 'Success',
  },
];

const navigation = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
  { name: 'Customer', href: '#', icon: UsersIcon, current: false },
  { name: 'Order', href: '#', icon: FolderIcon, current: false },
  { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
  { name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false },
  { name: 'Reports', href: '#', icon: ChartPieIcon, current: false },
];


const teams = [
  { id: 1, name: 'Team Herald', href: '#', initial: 'H', current: true },
  { id: 2, name: 'Team Titan', href: '#', initial: 'T', current: false },
  { id: 3, name: 'Team Wong', href: '#', initial: 'W', current: false },
];

export default function Page() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      {/* Mobile Sidebar */}
      <SidebarMobile
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        navigation={navigation}
        teams={teams}
      />

      {/* Desktop Sidebar */}
      <Sidebar navigation={navigation} teams={teams} />

      <div className="lg:pl-72">
        {/* Header */}
        <Header setSidebarOpen={setSidebarOpen} />

        {/* Main Content */}
        <main className="py-10">
          <div className="px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-bold text-gray-100 h-16">Recent orders</h1>
            <Table orders={orders} />
          </div>
        </main>
      </div>
    </div>
  );
}
