'use client';
import classNames from '../../utils/ClassNames';

export default function SidebarTeamItem({ team }) {
  return (
    <li>
      <a
        href={team.href}
        className={classNames(
          team.current
            ? 'bg-indigo-700 text-white'
            : 'text-indigo-200 hover:bg-indigo-700 hover:text-white',
          'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold'
        )}
      >
        <span className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 text-[0.625rem] font-medium text-white">
          {team.initial}
        </span>
        <span className="truncate">{team.name}</span>
      </a>
    </li>
  );
}
