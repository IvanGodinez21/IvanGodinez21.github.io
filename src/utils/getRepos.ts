import { cache } from 'react';
import { IRepo } from '@/types/repos';
import { NextRequest } from 'next/server';

export const getRepos = cache(async ({ page }: { page: number }): Promise<IRepo[]> => {
  const repos = await (
    await (await import('@/app/api/repos/route')).GET(new NextRequest(JSON.stringify({ page })))
  ).json();
  return repos;
});
