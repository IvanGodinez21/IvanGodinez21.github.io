'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import MenuButton from '../buttons/menu';
import ThemeButton from '../buttons/theme';
import { routes } from '@/constants/routes';
import MenuList from '../lists/menu';
import { IUser } from '@/types/user';

export default function Header({ user }: { user: IUser }) {
  const [navHidden, setNavHidden] = useState<boolean>(true);
  const router = useRouter();
  return (
    <div className={'p-2 shadow bg-emerald text-gunmetal'}>
      <div className={'flex flex-wrap justify-between mx-2'}>
        <div className={'flex max-lg:order-1 max-sm:order-2'}>
          <button
            aria-label={'Redirect to start page'}
            title={'Start page'}
            className={'flex items-center btn-navbar-icon'}
            type={'button'}
            onClick={() => {
              router.push('/');
              setNavHidden(true);
            }}
          >
            {(user.username ?? user.fullName) && (
              <span className={'self-center text-xl font-semibold whitespace-nowrap'}>
                {user.username ? `@${user.username}` : user.fullName}
              </span>
            )}
          </button>
        </div>
        <div className={'flex md:hidden max-md:order-3'}>
          <MenuButton id={'header-nav'} state={[navHidden, setNavHidden]} />
        </div>
        <div
          className={`lg:order-2 md:order-4 max-md:order-4 max-sm:order-4 max-md:mt-2 justify-between items-center align-middle w-full md:flex lg:flex md:w-auto lg:w-auto ${
            navHidden ? 'hidden' : ''
          }`}
        >
          <MenuList id={'header-nav'} routes={routes} state={[navHidden, setNavHidden]} />
        </div>
        <div className={'flex lg:order-3 md:order-4 max-sm:order-1'}>
          <ThemeButton />
        </div>
      </div>
    </div>
  );
}
