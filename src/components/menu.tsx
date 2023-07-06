'use client';

import Link from 'next/link';
import MenuButton from './buttons/menu';
import Nav from './nav';
import ThemeButton from './buttons/theme';
import { IRoute } from '@/types/route';
import { IUser } from '@/types/user';
import { useState } from 'react';

export default function Menu({ user }: { user: IUser }) {
  const useNavHidden = useState<boolean>(true);
  const [, setNavHidden] = useNavHidden;
  const routes: IRoute[] = [
    {
      name: 'about',
      path: function () {
        return '/';
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

  return (
    <div className={'flex flex-wrap justify-between mx-2'}>
      <div className={'flex max-lg:order-1 max-sm:order-2'}>
        <Link
          aria-label={'Redirect to start page'}
          title={'Start page'}
          className={'flex items-center btn-navbar-icon'}
          href={'/'}
          onClick={() => setNavHidden(true)}
        >
          {(user.username ?? user.fullName) && (
            <span className={'self-center text-xl font-semibold whitespace-nowrap'}>
              {user.username ? `@${user.username}` : user.fullName}
            </span>
          )}
        </Link>
      </div>
      <div className={'flex md:hidden max-md:order-3'}>
        <MenuButton state={useNavHidden} />
      </div>
      <Nav routes={routes} state={useNavHidden} />
      <div className={'flex lg:order-3 md:order-4 max-sm:order-1'}>
        <ThemeButton />
      </div>
    </div>
  );
}
