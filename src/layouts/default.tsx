import Footer from '@/components/layouts/footer';
import Header from '@/components/layouts/header';
import Main from '@/components/layouts/main';
import { store } from '@/store/index';
import { ILayout } from '@/types/layout';

export default async function DefaultLayout({ children }: ILayout) {
  const state = store.getState().state;
  return (
    <div className={'flex flex-col h-screen w-screen'}>
      <header className={'sticky w-full'}>
        <Header user={state.user} />
      </header>
      <main className={'flex flex-col flex-1 m-4 space-y-2 overflow-y-hidden'}>
        <Main>{children}</Main>
      </main>
      <footer className={'sticky w-full'}>
        <Footer user={state.user} />
      </footer>
    </div>
  );
}
