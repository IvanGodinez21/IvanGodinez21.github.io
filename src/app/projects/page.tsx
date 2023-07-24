'use client';

import { ArrowTrendingUpIcon, EyeIcon, StarIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import H2 from '@/components/typography/h2';
import { content } from '@/contexts/scroll_ref';
import { IRepo } from '@/types/repos';
import { getRepos } from '@/utils/getRepos';
import { useAppDispatch, useAppSelector } from '@/store/index';
import { actions } from '@/store/state';

export default function ProjectsPage() {
  const dispatch = useAppDispatch();
  const state = useAppSelector((store) => store.state);
  const [isLoading, setIsLoading] = useState(false);

  function getStatusText({ isArchived, isPrivate }: { isArchived: IRepo['archived']; isPrivate: IRepo['private'] }) {
    if (!isArchived) return isPrivate ? 'Private' : 'Public';
    return isArchived && !isPrivate ? 'Public Archive' : 'Private Archive';
  }

  function getStatusClass({ isArchived, isPrivate }: { isArchived: IRepo['archived']; isPrivate: IRepo['private'] }) {
    if (!isArchived) return isPrivate ? 'bg-red-500' : 'bg-green-500';
    return isArchived && !isPrivate ? 'bg-yellow-500' : 'bg-orange-500';
  }

  useEffect(() => {
    async function getReposByPage() {
      setIsLoading(true);
      const newRepos = await getRepos({ page: state.reposPage });
      if (newRepos.length) {
        const uniqueRepos = newRepos.filter((repo) => !state.repos.map((prevRepo) => prevRepo.id).includes(repo.id));
        dispatch(actions.setRepos([...state.repos, ...uniqueRepos]));
        dispatch(actions.setReposPage(state.reposPage + 1));
      }
      setIsLoading(false);
    }
    async function handleScroll() {
      if (content?.current && !isLoading) {
        const scrollPosition = content.current.scrollHeight - content.current.clientHeight;
        if (Math.ceil(content.current.scrollTop) >= scrollPosition) {
          await getReposByPage();
        }
      }
    }
    (async () => {
      if (!state.repos.length) await getReposByPage();
    })();
    if (content?.current) {
      content.current.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (content?.current) {
        content.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, [dispatch, isLoading, state.repos, state.reposPage]);

  return (
    <div className={'h-fit w-fit m-2'}>
      {state.repos?.map((repo, i, repos) => (
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
        </Link>
      ))}
    </div>
  );
}
