import { useRoute } from 'nuxt/app';

export default class NuxtTools {
  static pageName({ pathname }: { pathname: ReturnType<typeof useRoute>['path'] }): string {
    if (pathname === '/') return 'about';
    const pageName = pathname.split('/').pop();
    return `${pageName}`;
  }
}
