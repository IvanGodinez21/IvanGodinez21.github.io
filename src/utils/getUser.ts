import { IUser } from '@/types/user';

export async function getUser() {
  const user = await useFetch('/api/user', { method: 'GET' });
  return user.data.value as IUser;
}
