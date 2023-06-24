import Footer from '@/components/footer';
import Head from 'next/head';
import Header from '@/components/header';
import NextTools from '@/classes/next_tools';
import { content } from '@/contexts/scroll_ref';
import { H1 } from '@/components/typography/h1';
import { ILayout } from '@/types/layout';
import { useAppState } from '@/contexts/app_state';
import { useRouter } from 'next/router';

const DefaultLayout: ILayout = ({ Component, font, pageProps }) => {
  const { user } = useAppState();
  const { pathname } = useRouter();

  return (
    <div className={`${font.className} flex flex-col h-screen`}>
      <Head>
        <title>
          {`${
            user.username
              ? `${user.username} | ${NextTools.pageName({ pathname })}`
              : `${NextTools.pageName({ pathname })}`
          }`}
        </title>
        <meta name={'description'} content={`${user.fullName} website`} />
        <link rel={'icon'} href={user.social.github.avatar_url} sizes={'any'} />
      </Head>
      <header className={'w-full sticky top-0'}>
        <Header />
      </header>
      <main className={'p-4 flex-1 space-y-2 overflow-y-hidden h-fit flex flex-col'}>
        <div className={'bg-granny-smith-apple dark:bg-indigo-dye rounded-lg flex-1 flex items-center justify-center'}>
          <H1>{NextTools.pageName({ pathname })}</H1>
        </div>
        <div
          className={'bg-granny-smith-apple dark:bg-indigo-dye rounded-lg flex-[9_9_0%] flex overflow-y-auto'}
          ref={content}
        >
          <Component {...pageProps} className={'m-2'} />
        </div>
      </main>
      <footer className={'w-full sticky bottom-0'}>
        <Footer />
      </footer>
    </div>
  );
};

export default DefaultLayout;
