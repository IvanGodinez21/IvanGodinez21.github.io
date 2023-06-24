import NextTools from '@/classes/next_tools';
import { content } from '@/contexts/scroll_ref';
import { INextPageWithLayout } from '@/types/app';
import { IRepo } from '@/types/repos';
import { useEffect, useState } from 'react';
import { useFetchRepos } from '@/hooks/useFetchRepos';

const ProjectsPage: INextPageWithLayout = ({ className }) => {
  const [page, setPage] = useState<number>(1);
  const { repos, isLoading } = useFetchRepos({ page });

  useEffect(() => {
    const handleScroll = () => {
      if (content?.current) {
        const scrollPosition = content.current.scrollHeight - content.current.clientHeight;
        if (Math.ceil(content.current.scrollTop) >= scrollPosition) {
          if (!isLoading) setPage((currentPage) => currentPage + 1);
        }
      }
    };
    if (content?.current) {
      content.current.addEventListener('scroll', handleScroll);
      return () => {
        if (content?.current) content.current.removeEventListener('scroll', handleScroll);
      };
    }
  }, [isLoading]);

  const isPrivate = ({ privacy }: { privacy: IRepo['private'] }) => {
    return (
      <span className={`inline-block rounded px-2 py-1 text-sm text-white ${privacy ? 'bg-red-500' : 'bg-green-500'}`}>
        {privacy ? 'Private' : 'Public'}
      </span>
    );
  };

  const status = ({ archived, privacy }: { archived: IRepo['archived']; privacy: IRepo['private'] }) => {
    if (!archived) return isPrivate({ privacy });
    return (
      <span
        className={`inline-block rounded px-2 py-1 text-sm  text-white ${
          archived && !privacy ? 'bg-yellow-500' : 'bg-orange-500'
        }`}
      >
        {archived && !privacy ? 'Public Archive' : 'Private Archive'}
      </span>
    );
  };

  return (
    <div className={[className, 'h-fit w-full'].filter(Boolean).join(' ')}>
      {repos?.map((repo, i, repos) => (
        <a key={repo.id} href={repo.html_url} className={`${repo.private ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
          <div
            className={`bg-medium-spring-green dark:bg-prussian-blue shadow-md rounded-md p-4 hover:shadow-lg transition-shadow ${
              i !== repos.length - 1 ? 'mb-2' : ''
            } ${i !== 0 ? 'mt-2' : ''}`}
          >
            <div className={'flex items-center mb-2'}>
              {status({ privacy: repo.private, archived: repo.archived })}
              <h3 className={'text-gunmetal dark:text-tea-green text-lg font-medium ml-2'}>
                {repo.owner.login}/{repo.name}
              </h3>
            </div>
            <p className={'mt-1'}>{repo.description}</p>
            <div className={'flex items-center mt-2'}>
              {repo.language && (
                <span className={'inline-block bg-keppel dark:bg-cadet-blue rounded-full px-3 py-1 text-sm mr-2'}>
                  {repo.language}
                </span>
              )}
              <span className={'inline-block bg-keppel dark:bg-cadet-blue rounded-full px-3 py-1 text-sm mr-2'}>
                {repo.stargazers_count} stars
              </span>
              <span className={'inline-block bg-keppel dark:bg-cadet-blue rounded-full px-3 py-1 text-sm mr-2'}>
                {repo.watchers_count} watchers
              </span>
              <span className={'inline-block bg-keppel dark:bg-cadet-blue rounded-full px-3 py-1 text-sm mr-2'}>
                {repo.forks_count} forks
              </span>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

ProjectsPage.getLayout = NextTools.layout.default;

export default ProjectsPage;