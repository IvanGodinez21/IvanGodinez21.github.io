import User from '@/classes/user';
import { useEffect, useState } from 'react';

export const useFetchUser = () => {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const user = new User(
          await (
            await fetch('/api/user', {
              method: 'POST',
            })
          ).json()
        );
        setUser(user);
      } catch (error) {
        setError('Error fetching user data');
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return { user, isLoading, error };
};
