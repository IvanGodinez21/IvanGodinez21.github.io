import { octokit } from '@/clients/octokit';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  let body;
  if (req.body) {
    body = await req.json();
  } else if (req.url) {
    body = Object.fromEntries(new URL(req.url).searchParams);
  } else {
    return NextResponse.json({ status: 400 }, { status: 400 });
  }
  return NextResponse.json(await fetchRepos(body));
}

async function fetchRepos({ page }: { page: number }) {
  return (
    await octokit.rest.repos.listForAuthenticatedUser({
      visibility: 'all',
      affiliation: 'owner, collaborator',
      sort: 'pushed',
      page,
    })
  ).data;
}
