import { IUser } from '@/types/user';
import { useEffect, useState } from 'react';

export function useFetchUser(): { user: IUser | undefined; isLoading: boolean; error: string | undefined } {
  const [user, setUser] = useState<IUser | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('/api/user', {
          method: 'GET',
        });
        if (response.ok) {
          const data = await response.json();
          setUser(data);
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
  }, []);

  return { user, isLoading, error };
}
