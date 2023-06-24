import DefaultLayout from '@/layouts/default';
import NoneLayout from '@/layouts/none';
import { INextPageWithLayout } from '@/types/app';
import { useRouter } from 'next/router';

export default class NextTools {
  static get layout(): { [key: string]: NonNullable<INextPageWithLayout['getLayout']> } {
    return {
      default: ({ Component, font, pageProps }) => (
        <DefaultLayout Component={Component} font={font} pageProps={pageProps} />
      ),
      none: ({ Component, font, pageProps }) => <NoneLayout Component={Component} font={font} pageProps={pageProps} />,
    };
  }

  static pageName({ pathname }: { pathname: ReturnType<typeof useRouter>['pathname'] }): string {
    if (pathname === '/') return 'home';
    const pageName = pathname.split('/').pop();
    return `${pageName}`;
  }
}
