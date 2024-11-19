'use client';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function SidebarNavItem({ item }) {
  return (
    <li>
      <a
        href={item.href}
        className={classNames(
          item.current
            ? 'bg-indigo-700 text-white'
            : 'text-indigo-200 hover:bg-indigo-700 hover:text-white',
          'group flex gap-x-3 rounded-md p-2 text-sm font-semibold'
        )}
      >
        <item.icon
          aria-hidden="true"
          className={classNames(
            item.current ? 'text-white' : 'text-indigo-200 group-hover:text-white',
            'h-6 w-6 shrink-0'
          )}
        />
        {item.name}
      </a>
    </li>
  );
}
