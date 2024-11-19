'use client';

import { Dialog, DialogBackdrop, DialogPanel, TransitionChild } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import SidebarNavItem from './SidebarNavItem';
import SidebarTeamItem from './SidebarTeamItem';

export default function SidebarMobile({ sidebarOpen, setSidebarOpen, navigation, teams }) {
  return (
    <Dialog open={sidebarOpen} onClose={setSidebarOpen} className="relative z-50 lg:hidden">
      <DialogBackdrop className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0" />
      <div className="fixed inset-0 flex">
        <DialogPanel className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full">
          <TransitionChild>
            <div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
              <button
                type="button"
                onClick={() => setSidebarOpen(false)}
                className="-m-2.5 p-2.5"
              >
                <span className="sr-only">Close sidebar</span>
                <XMarkIcon className="size-6 text-white" />
              </button>
            </div>
          </TransitionChild>
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-4">
            <div className="flex h-16 shrink-0 items-center">
              <img
                alt="Your Company"
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=white"
                className="h-8 w-auto"
              />
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <SidebarNavItem key={item.name} item={item} />
                    ))}
                  </ul>
                </li>
                <li>
                  <div className="text-xs/6 font-semibold text-indigo-200">Your teams</div>
                  <ul role="list" className="-mx-2 mt-2 space-y-1">
                    {teams.map((team) => (
                      <SidebarTeamItem key={team.name} team={team} />
                    ))}
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
