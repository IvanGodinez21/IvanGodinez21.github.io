import Link from 'next/link';
import Route from '@/classes/route';
import { Dispatch, SetStateAction } from 'react';
import { usePathname } from 'next/navigation';

export default function MenuList({
  id,
  routes,
  state,
}: {
  id?: string;
  routes: Route[];
  state: [boolean, Dispatch<SetStateAction<boolean>>];
}) {
  const [, setNavHidden] = state;
  const pathname = usePathname();
  return (
    <nav id={id}>
      <ul
        className={
          'flex flex-col rounded-lg max-md:ring-2 max-md:bg-tea-green dark:max-md:bg-gunmetal md:flex-row md:space-x-4 md:text-sm md:font-medium ring-gunmetal dark:ring-tea-green max-md:text-gunmetal dark:max-md:text-tea-green'
        }
      >
        {routes.map((route, index) => (
          <li key={index}>
            <Link
              className={`btn-navbar-category ${pathname === route.path ? 'bg-cadet-blue dark:bg-keppel' : ''}`}
              href={route.path}
              onClick={() => setNavHidden(true)}
            >
              {route.name[0].toUpperCase() + route.name.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
