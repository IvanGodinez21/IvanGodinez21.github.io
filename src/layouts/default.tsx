import Footer from '@/components/layouts/footer';
import Header from '@/components/layouts/header';
import Main from '@/components/layouts/main';
import { ILayout } from '@/types/layout';
import { getUser } from '@/utils/getUser';

export default async function DefaultLayout({ children }: ILayout) {
  const user = await getUser();

  return (
    <div className={'flex flex-col h-screen w-screen'}>
      <header className={'sticky w-full'}>
        <Header user={user} />
      </header>
      <main className={'flex flex-col flex-1 m-4 space-y-2 overflow-y-hidden'}>
        <Main>{children}</Main>
      </main>
      <footer className={'sticky w-full'}>
        <Footer user={user} />
      </footer>
    </div>
  );
}
