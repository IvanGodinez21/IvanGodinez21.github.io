import { IUser } from '@/types/user';

export async function getUser(): Promise<IUser> {
  return await $fetch<IUser>('/api/user', {
    method: 'GET',
  });
}
