import Footer from '@/components/layouts/footer';
import Header from '@/components/layouts/header';
import Main from '@/components/layouts/main';
import { store } from '@/store/index';
import { ILayout } from '@/types/layout';

export default async function DefaultLayout({ children }: ILayout) {
  const state = store.getState().state;
  return (
    <div className={'flex h-screen w-screen flex-col'}>
      <header className={'sticky w-full'}>
        <Header user={state.user} />
      </header>
      <main className={'m-4 flex flex-1 flex-col space-y-2 overflow-y-hidden'}>
        <Main>{children}</Main>
      </main>
      <footer className={'sticky w-full'}>
        <Footer user={state.user} />
      </footer>
    </div>
  );
}
