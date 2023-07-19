import { Octokit } from 'octokit';

export type IRepo = Awaited<
  ReturnType<Octokit['rest']['repos']['listForAuthenticatedUser']>
>['data'] extends (infer R)[]
  ? R
  : never;
