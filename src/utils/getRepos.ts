import { cache } from 'react';
import { IRepo } from '@/types/repos';

export const getRepos = cache(async ({ page }: { page: number }): Promise<IRepo[]> => {
  const repos = await (
    await fetch(
      `/api/repos?${new URLSearchParams(
        Object.entries({ page }).map(([key, value]) => [key, String(value)])
      ).toString()}`,
      {
        method: 'GET',
      }
    )
  ).json();
  return repos;
});
