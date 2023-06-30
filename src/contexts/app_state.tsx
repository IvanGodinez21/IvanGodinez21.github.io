'use client';

import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { IAppState } from '@/types/app';
import { useFetchUser } from '@/hooks/useFetchUser';

const AppStateContext = createContext<IAppState | null>(null);

export function AppStateProvider({ children }: { children: ReactNode }) {
  const { user } = useFetchUser();
  const [appState, setAppState] = useState<IAppState>();

  useEffect(() => {
    if (!user) return;
    setAppState((prevState) => ({
      ...prevState,
      user,
    }));
  }, [user]);

  if (!appState) return;
  return <AppStateContext.Provider value={appState}>{children}</AppStateContext.Provider>;
}

export const useAppState = (): IAppState => {
  const appState = useContext(AppStateContext);
  if (!appState) {
    throw new Error('useAppContext must be used within a AppStateProvider');
  }
  return appState;
};
