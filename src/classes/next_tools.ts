import { useRouter } from 'next/router';

export default class NextTools {
  static pageName({
    pathname,
  }: {
    pathname: ReturnType<typeof useRouter>['pathname'];
  }): string {
    if (pathname === '/') return 'about';
    const pageName = pathname.split('/').pop();
    return `${pageName}`;
  }
}
