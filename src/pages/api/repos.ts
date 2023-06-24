import { IRepo } from '@/types/repos';
import { NextApiRequest, NextApiResponse } from 'next';
import { octokit } from '@/clients/octokit';

export default async function ReposHandler(req: NextApiRequest, res: NextApiResponse<IRepo[]>) {
  if (req.method !== 'POST') {
    res.status(405).end();
    return;
  }
  if (!req.body) {
    res.status(400).end();
    return;
  }

  res.status(200).json(
    (
      await octokit.rest.repos.listForAuthenticatedUser({
        visibility: 'all',
        affiliation: 'owner, collaborator, organization_member',
        page: Number(JSON.parse(req.body).page),
      })
    ).data
  );
}
