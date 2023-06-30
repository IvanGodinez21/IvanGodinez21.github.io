import { cache } from 'react';
import { NextRequest } from 'next/server';

export const getRepos = cache(async ({ page }: { page: number }) => {
  const repos = (await (await import('@/app/api/repos/route')).GET(new NextRequest(JSON.stringify({ page })))).json();
  return repos;
});
