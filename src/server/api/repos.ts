import { H3Event } from 'h3';
import { octokit } from '@/clients/octokit';
import { IRepo } from '@/types/repos';

export default defineEventHandler(async (event) => {
  switch (event.node.req.method) {
    case 'GET':
      return await GET({ event });
    default:
      throw createError({
        statusCode: 405,
        statusMessage: 'Method Not Allowed',
      });
  }
});

async function GET({ event }: { event: H3Event }): Promise<IRepo[]> {
  const body = await getQuery(event);
  return await fetchRepos(body as unknown as Parameters<typeof fetchRepos>[0]);
}

async function fetchRepos({ page }: { page: number }): Promise<IRepo[]> {
  return (
    await octokit.rest.repos.listForAuthenticatedUser({
      visibility: 'all',
      affiliation: 'owner, collaborator',
      sort: 'pushed',
      page,
    })
  ).data satisfies IRepo[];
}
