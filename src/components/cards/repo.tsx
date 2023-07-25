import { ArrowTrendingUpIcon, EyeIcon, StarIcon } from '@heroicons/react/24/solid';
import H2 from '@/components/typography/h2';
import { IRepo } from '@/types/repos';

export default function RepoCard({ repo }: { repo: IRepo }) {
  function getStatusText({ isArchived, isPrivate }: { isArchived: IRepo['archived']; isPrivate: IRepo['private'] }) {
    if (!isArchived) return isPrivate ? 'Private' : 'Public';
    return isArchived && !isPrivate ? 'Public Archive' : 'Private Archive';
  }

  function getStatusClass({ isArchived, isPrivate }: { isArchived: IRepo['archived']; isPrivate: IRepo['private'] }) {
    if (!isArchived) return isPrivate ? 'bg-red-500' : 'bg-green-500';
    return isArchived && !isPrivate ? 'bg-yellow-500' : 'bg-orange-500';
  }

  return (
    <div
      className={
        'bg-medium-spring-green dark:bg-prussian-blue shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow'
      }
    >
      <div className={'flex gap-2 items-center mb-2'}>
        <span
          className={`inline-block rounded px-2 py-1 text-sm text-white ${getStatusClass({
            isArchived: repo.archived,
            isPrivate: repo.private,
          })}`}
        >
          {getStatusText({ isArchived: repo.archived, isPrivate: repo.private })}
        </span>
        <H2 className={'font-medium break-all'}>
          {repo.owner.login}/{repo.name}
        </H2>
      </div>
      <p className={'mt-1'}>{repo.description}</p>
      <div className={'flex flex-wrap gap-2 items-center mt-2'}>
        {repo.language && (
          <span title={'Language'} className={'bg-keppel dark:bg-cadet-blue rounded-full px-3 py-1 text-sm'}>
            <p>{repo.language}</p>
          </span>
        )}
        <span
          title={'Stars'}
          className={'flex flex-row space-x-2 bg-keppel dark:bg-cadet-blue rounded-full px-3 py-1 text-sm'}
        >
          <StarIcon className={'w-5 h-5'} />
          <p>{repo.stargazers_count}</p>
        </span>
        <span
          title={'Watchers'}
          className={'flex flex-row space-x-2 bg-keppel dark:bg-cadet-blue rounded-full px-3 py-1 text-sm'}
        >
          <EyeIcon className={'w-5 h-5'} />
          <p>{repo.watchers_count}</p>
        </span>
        <span
          title={'Forks'}
          className={'flex flex-row space-x-2 bg-keppel dark:bg-cadet-blue rounded-full px-3 py-1 text-sm'}
        >
          <ArrowTrendingUpIcon className={'w-5 h-5'} />
          <p>{repo.forks_count}</p>
        </span>
      </div>
    </div>
  );
}
