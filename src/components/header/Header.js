'use client';

import { Bars3Icon } from '@heroicons/react/24/outline';
import SearchBar from './SearchBar';
import ProfileMenu from './ProfileMenu';

export default function Header({ setSidebarOpen }) {
  return (
    <div className="sticky top-0 z-40 flex h-16 items-center gap-x-4 border-b border-gray-200 bg-gray-100 px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
      <button
        type="button"
        onClick={() => setSidebarOpen(true)}
        className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
      >
        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        <span className="sr-only">Open sidebar</span>
      </button>

      <SearchBar />
      <div className="flex items-center gap-x-4 lg:gap-x-6">
        <ProfileMenu />
      </div>
    </div>
  );
}
