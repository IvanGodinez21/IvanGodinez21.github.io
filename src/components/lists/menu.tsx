import { Dispatch, SetStateAction } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Route from '@/classes/route';

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
  const router = useRouter();
  return (
    <nav id={id}>
      <ul
        className={
          'flex flex-col rounded-lg max-md:ring-2 max-md:bg-tea-green dark:max-md:bg-gunmetal md:flex-row md:space-x-4 md:text-sm md:font-medium ring-gunmetal dark:ring-tea-green max-md:text-gunmetal dark:max-md:text-tea-green'
        }
      >
        {routes.map((route, index) => (
          <li key={index}>
            <button
              className={`btn-navbar-category text-left w-full ${
                pathname === route.path ? 'bg-cadet-blue dark:bg-keppel' : ''
              }`}
              type={'button'}
              onPointerUp={() => {
                router.push(route.path);
                setNavHidden(true);
              }}
            >
              {route.name[0].toUpperCase() + route.name.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
