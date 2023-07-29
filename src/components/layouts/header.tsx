'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import MenuButton from '../buttons/menu';
import ThemeButton from '../buttons/theme';
import { routes } from '@/constants/routes';
import MenuList from '../lists/menu';
import { IUser } from '@/types/user';

export default function Header({ user }: { user?: IUser }) {
  const [navHidden, setNavHidden] = useState<boolean>(true);
  const router = useRouter();
  return (
    <div className={'bg-emerald p-2 text-gunmetal shadow'}>
      <div className={'mx-2 flex flex-wrap justify-between'}>
        <div className={'flex max-lg:order-1 max-sm:order-2'}>
          <button
            aria-label={'Redirect to start page'}
            title={'Start page'}
            className={'btn-navbar-icon flex items-center'}
            type={'button'}
            onPointerUp={() => {
              router.push('/');
              setNavHidden(true);
            }}
          >
            {(user?.username ?? user?.fullName) && (
              <span
                className={
                  'self-center whitespace-nowrap text-xl font-semibold'
                }
              >
                {user.username ? `@${user.username}` : user.fullName}
              </span>
            )}
          </button>
        </div>
        <div className={'flex max-md:order-3 md:hidden'}>
          <MenuButton id={'header-nav'} state={[navHidden, setNavHidden]} />
        </div>
        <div
          className={`w-full items-center justify-between align-middle max-md:order-4 max-md:mt-2 max-sm:order-4 md:order-4 md:flex md:w-auto lg:order-2 lg:flex lg:w-auto ${
            navHidden ? 'hidden' : ''
          }`}
        >
          <MenuList
            id={'header-nav'}
            routes={routes}
            state={[navHidden, setNavHidden]}
          />
        </div>
        <div className={'flex max-sm:order-1 md:order-4 lg:order-3'}>
          <ThemeButton />
        </div>
      </div>
    </div>
  );
}
