import Link from 'next/link';
import { Bars3Icon, MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { FC, ReactNode, useEffect, useState } from 'react';
import { useAppState } from '@/contexts/app_state';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';

const Header: FC = () => {
  const { user } = useAppState();
  const { events, pathname } = useRouter();
  const { resolvedTheme, setTheme } = useTheme();
  const [themeIcon, setThemeIcon] = useState<ReactNode>(null);
  const [navHidden, setNavHidden] = useState<boolean>(true);

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
            <li>
              <Link
                className={`btn-navbar-category ${pathname === '/' ? 'bg-cadet-blue dark:bg-keppel' : ''}`}
                href={'/'}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`btn-navbar-category ${pathname === '/about' ? 'bg-cadet-blue dark:bg-keppel' : ''}`}
                href={'/about'}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className={`btn-navbar-category ${pathname === '/projects' ? 'bg-cadet-blue dark:bg-keppel' : ''}`}
                href={'/projects'}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                className={`btn-navbar-category ${pathname === '/contact' ? 'bg-cadet-blue dark:bg-keppel' : ''}`}
                href={'/contact'}
              >
                Contact
              </Link>
            </li>
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
