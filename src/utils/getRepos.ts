import { IRepo } from '@/types/repos';

export async function getRepos(query: { page: number }) {
  const repos = await useFetch('/api/repos', {
    method: 'GET',
    query,
  });
  if (repos.data.value) return repos.data.value as IRepo[];
}
