import { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import DefaultLayout from '@/layouts/default';
import Providers from '@/providers/providers';
import '@/styles/globals.css';
import { getUser } from '@/utils/getUser';
import Preloader from '@/store/preloader';

const font = Poppins({
  display: 'auto',
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400'],
});

const user = await (async () => await getUser())();

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `${user.username}'s website`,
    icons: [user.social.github.avatar_url],
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={'en'} className={`${font.variable}`}>
      <body>
        <Preloader state={{ user }} />
        <Providers>
          <DefaultLayout>{children}</DefaultLayout>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
