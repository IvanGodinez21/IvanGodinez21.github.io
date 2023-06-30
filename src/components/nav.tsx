import { IRoute } from '@/types/route';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Dispatch, SetStateAction } from 'react';

export default function Nav({
  routes,
  state,
}: {
  routes: IRoute[];
  state: [boolean, Dispatch<SetStateAction<boolean>>];
}) {
  const [navHidden, setNavHidden] = state;
  const pathname = usePathname();
  return (
    <nav
      className={`lg:order-2 md:order-4 max-md:order-4 max-md:mt-4 max-sm:order-4 justify-between items-center w-full lg:flex lg:w-auto md:flex md:w-auto${
        navHidden ? ' hidden' : ''
      }`}
      id={'navbar-sticky'}
    >
      <ul
        className={
          'flex flex-col rounded-lg max-md:ring-2 max-md:bg-tea-green dark:max-md:bg-gunmetal md:flex-row md:space-x-4 md:text-sm md:font-medium ring-gunmetal dark:ring-tea-green max-md:text-gunmetal dark:max-md:text-tea-green'
        }
      >
        {routes.map((route, index) => (
          <li key={index}>
            <Link
              className={`btn-navbar-category ${pathname === route.path() ? 'bg-cadet-blue dark:bg-keppel' : ''}`}
              href={route.path()}
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
