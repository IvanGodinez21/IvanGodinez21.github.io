import NextTools from '@/classes/next_tools';
import { AppStateProvider } from '@/contexts/app_state';
import { FC } from 'react';
import { IAppPropsWithLayout } from '@/types/app';
import { Poppins } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import '@/styles/globals.css';

const font = Poppins({ weight: ['500'], subsets: ['latin'] });

const App: FC<IAppPropsWithLayout> = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout ?? NextTools.layout.none;

  return (
    <AppStateProvider>
      <ThemeProvider attribute={'class'} enableSystem>
        {getLayout({ Component, pageProps, font })}
      </ThemeProvider>
    </AppStateProvider>
  );
};

export default App;
