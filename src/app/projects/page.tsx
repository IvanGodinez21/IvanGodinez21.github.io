'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import RepoCard from '@/components/cards/repo';
import { content } from '@/contexts/scroll_ref';
import { getRepos } from '@/utils/getRepos';
import { useAppDispatch, useAppSelector } from '@/store/index';
import { actions } from '@/store/state';

export default function ProjectsPage() {
  const dispatch = useAppDispatch();
  const state = useAppSelector((store) => store.state);
  const [isLoading, setIsLoading] = useState(false);

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
    <div className={'h-fit w-fit grid m-2 gap-2'}>
      {state.repos?.map((repo) => (
        <Link
          key={repo.id}
          href={repo.html_url}
          target={'_blank'}
          rel={'noopener noreferrer'}
          className={`${repo.private ? 'cursor-not-allowed' : 'cursor-pointer'}`}
        >
          <RepoCard repo={repo} />
        </Link>
      ))}
    </div>
  );
}
