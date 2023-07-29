import { IRepo } from '@/types/repos';
import { useEffect, useState } from 'react';

export function useFetchRepos({ page }: { page: number }): {
  repos: IRepo[] | undefined;
  isLoading: boolean;
  error: string | undefined;
} {
  const [repos, setRepos] = useState<IRepo[] | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `/api/repos?${new URLSearchParams(
            Object.entries({ page }).map(([key, value]) => [
              key,
              String(value),
            ]),
          ).toString()}`,
          {
            method: 'GET',
          },
        );
        if (response.ok) {
          const data = await response.json();
          setRepos((prevRepos) => {
            if (!prevRepos) return data;
            const uniqueRepos = data.filter(
              (repo: IRepo) =>
                !prevRepos.map((prevRepo) => prevRepo.id).includes(repo.id),
            );
            return [...prevRepos, ...uniqueRepos];
          });
        } else {
          setError('Error fetching user data');
        }
      } catch (error) {
        setError('Error fetching user data');
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [page]);

  return { repos, isLoading, error };
}
