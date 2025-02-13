'use client';

import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Sign Out', href: '#' },
];

export default function ProfileMenu() {
  return (
    <Menu as="div" className="relative">
      <MenuButton className="-m-1.5 flex items-center p-1.5">
        <span className="sr-only">Open user menu</span>
        <img
          alt=""
          src="https://images.unsplash.com/photo-1628526498666-add5eddf65df?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="h-8 w-8 rounded-full bg-gray-50"
        />
        <span className="hidden lg:flex lg:items-center">
          <span aria-hidden="true" className="ml-4 text-sm font-semibold text-gray-900">
            Rigid Trainer
          </span>
          <ChevronDownIcon aria-hidden="true" className="ml-2 h-5 w-5 text-gray-400" />
        </span>
      </MenuButton>
      <MenuItems
        className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none"
      >
        {userNavigation.map((item) => (
          <MenuItem key={item.name}>
            <a
              href={item.href}
              className="block px-3 py-1 text-sm text-gray-900 hover:bg-gray-50"
            >
              {item.name}
            </a>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
}
