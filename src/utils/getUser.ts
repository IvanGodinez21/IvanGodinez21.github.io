import { cache } from 'react';
import { IUser } from '@/types/user';

export const getUser = cache(async (): Promise<IUser> => {
  const user = await (
    await (await import('@/app/api/user/route')).GET()
  ).json();
  return user;
});
