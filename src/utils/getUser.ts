import User from '@/classes/user';
import { cache } from 'react';

export const getUser = cache(async () => {
  const user = await (await (await import('@/app/api/user/route')).GET()).json();
  return new User(user);
});
