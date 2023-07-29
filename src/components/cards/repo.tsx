import {
  ArrowTrendingUpIcon,
  EyeIcon,
  StarIcon,
} from '@heroicons/react/24/solid';
import H2 from '@/components/typography/h2';
import { IRepo } from '@/types/repos';

export default function RepoCard({ repo }: { repo: IRepo }) {
  function getStatusText({
    isArchived,
    isPrivate,
  }: {
    isArchived: IRepo['archived'];
    isPrivate: IRepo['private'];
  }) {
    if (!isArchived) return isPrivate ? 'Private' : 'Public';
    return isArchived && !isPrivate ? 'Public Archive' : 'Private Archive';
  }

  function getStatusClass({
    isArchived,
    isPrivate,
  }: {
    isArchived: IRepo['archived'];
    isPrivate: IRepo['private'];
  }) {
    if (!isArchived) return isPrivate ? 'bg-red-500' : 'bg-green-500';
    return isArchived && !isPrivate ? 'bg-yellow-500' : 'bg-orange-500';
  }

  return (
    <div
      className={
        'rounded-lg bg-medium-spring-green p-4 shadow-md transition-shadow hover:shadow-lg dark:bg-prussian-blue'
      }
    >
      <div className={'mb-2 flex items-center gap-2'}>
        <span
          className={`inline-block rounded px-2 py-1 text-sm text-white ${getStatusClass(
            {
              isArchived: repo.archived,
              isPrivate: repo.private,
            },
          )}`}
        >
          {getStatusText({
            isArchived: repo.archived,
            isPrivate: repo.private,
          })}
        </span>
        <H2 className={'break-all font-medium'}>
          {repo.owner.login}/{repo.name}
        </H2>
      </div>
      <p className={'mt-1'}>{repo.description}</p>
      <div className={'mt-2 flex flex-wrap items-center gap-2'}>
        {repo.language && (
          <span
            title={'Language'}
            className={
              'rounded-full bg-keppel px-3 py-1 text-sm dark:bg-cadet-blue'
            }
          >
            <p>{repo.language}</p>
          </span>
        )}
        <span
          title={'Stars'}
          className={
            'flex flex-row space-x-2 rounded-full bg-keppel px-3 py-1 text-sm dark:bg-cadet-blue'
          }
        >
          <StarIcon className={'h-5 w-5'} />
          <p>{repo.stargazers_count}</p>
        </span>
        <span
          title={'Watchers'}
          className={
            'flex flex-row space-x-2 rounded-full bg-keppel px-3 py-1 text-sm dark:bg-cadet-blue'
          }
        >
          <EyeIcon className={'h-5 w-5'} />
          <p>{repo.watchers_count}</p>
        </span>
        <span
          title={'Forks'}
          className={
            'flex flex-row space-x-2 rounded-full bg-keppel px-3 py-1 text-sm dark:bg-cadet-blue'
          }
        >
          <ArrowTrendingUpIcon className={'h-5 w-5'} />
          <p>{repo.forks_count}</p>
        </span>
      </div>
    </div>
  );
}
