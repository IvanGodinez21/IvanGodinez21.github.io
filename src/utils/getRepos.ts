import { IRepo } from '@/types/repos';

export async function getRepos(query: { page: number }): Promise<IRepo[]> {
  return await $fetch<IRepo[]>('/api/repos', {
    method: 'GET',
    query,
  });
}
