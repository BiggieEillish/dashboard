'use client';
import Image from 'next/image';

import { Cog6ToothIcon } from '@heroicons/react/24/outline';
import SidebarNavItem from './SidebarNavItem';
import SidebarTeamItem from './SidebarTeamItem';

export default function Sidebar({ navigation, teams }) {
  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-violet-500 px-6 pb-4">
        <div className="flex h-16 shrink-0 items-center">
          <img
            alt="Your Company"
            src="/susuncloud.png"
            className="h-8 w-auto"
          />
        </div>
        <nav className="flex flex-1 flex-col">
          <ul className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul className="-mx-2 space-y-1">
                {navigation.map((item) => (
                  <SidebarNavItem key={item.name} item={item} />
                ))}
              </ul>
            </li>
            <li>
              <div className="text-xs/6 font-semibold text-indigo-200">Your teams</div>
              <ul className="-mx-2 mt-2 space-y-1">
                {teams.map((team) => (
                  <SidebarTeamItem key={team.name} team={team} />
                ))}
              </ul>
            </li>
            <li className="mt-auto">
              <a
                href="#"
                className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-indigo-200 hover:bg-indigo-700 hover:text-white"
              >
                <Cog6ToothIcon className="size-6 shrink-0 text-indigo-200 group-hover:text-white" />
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
