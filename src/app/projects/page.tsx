'use client';

import H2 from '@/components/typography/h2';
import Link from 'next/link';
import { ArrowTrendingUpIcon, EyeIcon, StarIcon } from '@heroicons/react/24/solid';
import { content } from '@/contexts/scroll_ref';
import { IRepo } from '@/types/repos';
import { useEffect, useState } from 'react';
import { useFetchRepos } from '@/hooks/useFetchRepos';

export default function ProjectsPage() {
  const [page, setPage] = useState<number>(1);
  const { repos, isLoading } = useFetchRepos({ page });

  useEffect(() => {
    function handleScroll() {
      if (content?.current) {
        const scrollPosition = content.current.scrollHeight - content.current.clientHeight;
        if (Math.ceil(content.current.scrollTop) >= scrollPosition) {
          if (!isLoading) setPage((currentPage) => currentPage + 1);
        }
      }
    }
    if (content?.current) {
      content.current.addEventListener('scroll', handleScroll);
      return () => {
        if (content?.current) content.current.removeEventListener('scroll', handleScroll);
      };
    }
  }, [isLoading]);

  function isPrivate({ privacy }: { privacy: IRepo['private'] }) {
    return (
      <span className={`inline-block rounded px-2 py-1 text-sm text-white ${privacy ? 'bg-red-500' : 'bg-green-500'}`}>
        {privacy ? 'Private' : 'Public'}
      </span>
    );
  }

  function status({ archived, privacy }: { archived: IRepo['archived']; privacy: IRepo['private'] }) {
    if (!archived) return isPrivate({ privacy });
    return (
      <span
        className={`inline-block rounded px-2 py-1 text-sm text-white text-center ${
          archived && !privacy ? 'bg-yellow-500' : 'bg-orange-500'
        }`}
      >
        {archived && !privacy ? 'Public Archive' : 'Private Archive'}
      </span>
    );
  }

  return (
    <div className={'h-fit w-fit m-2'}>
      {repos?.map((repo, i, repos) => (
        <Link
          key={repo.id}
          href={repo.html_url}
          target={'_blank'}
          rel={'noopener noreferrer'}
          className={`${repo.private ? 'cursor-not-allowed' : 'cursor-pointer'}`}
        >
          <div
            className={`bg-medium-spring-green dark:bg-prussian-blue shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow ${
              i !== repos.length - 1 ? 'mb-2' : ''
            } ${i !== 0 ? 'mt-2' : ''}`}
          >
            <div className={'flex gap-2 items-center mb-2'}>
              {status({ privacy: repo.private, archived: repo.archived })}
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
        </Link>
      ))}
    </div>
  );
}
