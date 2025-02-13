'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';

export default function SearchBar() {
  return (
    <form action="#" method="GET" className="relative flex flex-1">
      <label htmlFor="search-field" className="sr-only">
        Search
      </label>
      <MagnifyingGlassIcon
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
      />
      <input
        id="search-field"
        name="search"
        type="search"
        placeholder="Search..."
        className="block w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder-gray-400 focus:ring-0 sm:text-sm"
      />
    </form>
  );
}
