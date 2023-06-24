import Link from 'next/link';
import { Bars3Icon, MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { FC, ReactNode, useEffect, useState } from 'react';
import { IRoute } from '@/types/route';
import { useAppState } from '@/contexts/app_state';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';

const Header: FC = () => {
  const { user } = useAppState();
  const { events, pathname } = useRouter();
  const { resolvedTheme, setTheme } = useTheme();
  const [themeIcon, setThemeIcon] = useState<ReactNode>(null);
  const [navHidden, setNavHidden] = useState<boolean>(true);
  const routes: IRoute[] = [
    {
      name: 'home',
      path: function () {
        return '/';
      },
    },
    {
      name: 'about',
      path: function () {
        return `/${this.name}`;
      },
    },
    {
      name: 'projects',
      path: function () {
        return `/${this.name}`;
      },
    },
    {
      name: 'contact',
      path: function () {
        return `/${this.name}`;
      },
    },
  ];

  useEffect(() => {
    setThemeIcon(
      resolvedTheme === 'dark' ? (
        <MoonIcon className={'h-6 w-6 text-gunmetal'} />
      ) : (
        <SunIcon className={'h-6 w-6 text-gunmetal'} />
      )
    );
  }, [resolvedTheme]);

  useEffect(() => {
    const handleRouteChange = () => {
      setNavHidden(true);
    };
    events.on('routeChangeStart', handleRouteChange);
    return () => {
      events.off('routeChangeStart', handleRouteChange);
    };
  }, [events]);

  return (
    <div className={'p-2 shadow bg-emerald text-gunmetal'}>
      <div className={'flex flex-wrap justify-between mx-auto'}>
        <div className={'flex max-lg:order-1 max-sm:order-2'}>
          <Link className={'flex items-center btn-navbar-icon'} href={'/'} aria-label={'Redirect to home page'}>
            {(user.username ?? user.fullName) && (
              <span className={'self-center text-xl font-semibold whitespace-nowrap'}>
                {user.username ? `@${user.username}` : user.fullName}
              </span>
            )}
          </Link>
        </div>
        <div className={'flex md:hidden max-md:order-3'}>
          <button
            aria-label='Open main menu'
            className={'btn-navbar-icon'}
            type={'button'}
            data-collapse-toggle={'navbar-sticky'}
            aria-controls={'navbar-sticky'}
            aria-expanded={false}
            onClick={() => setNavHidden(!navHidden)}
            onBlur={(e) => {
              if (!e.relatedTarget) setNavHidden(true);
            }}
          >
            <Bars3Icon className={'h-6 w-6'} />
          </button>
        </div>
        <nav
          className={`lg:order-2 md:order-4 max-md:order-4 max-md:mt-4 max-sm:order-4 justify-between items-center w-full lg:flex lg:w-auto md:flex md:w-auto${
            navHidden ? ' hidden' : ''
          }`}
          id={'navbar-sticky'}
        >
          <ul
            className={
              'flex flex-col rounded-lg max-md:ring-2 max-md:bg-tea-green dark:max-md:bg-gunmetal md:flex-row md:space-x-4 md:text-sm md:font-medium md:border-0 ring-gunmetal dark:ring-tea-green max-md:text-gunmetal dark:max-md:text-tea-green'
            }
          >
            {routes.map((route, index) => (
              <li key={index}>
                <Link
                  className={`btn-navbar-category ${pathname === route.path() ? 'bg-cadet-blue dark:bg-keppel' : ''}`}
                  href={route.path()}
                >
                  {route.name[0].toUpperCase() + route.name.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={'flex lg:order-3 md:order-4 max-sm:order-1'}>
          <button
            className={'btn-navbar-icon'}
            type={'button'}
            aria-label={'Toggle theme mode button'}
            onClick={() => {
              setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
            }}
          >
            {themeIcon}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
