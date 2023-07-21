import { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import DefaultLayout from '@/layouts/default';
import Providers from '@/providers/providers';
import '@/styles/globals.css';
import { getUser } from '@/utils/getUser';

const font = Poppins({
  display: 'auto',
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400'],
});

export async function generateMetadata(): Promise<Metadata> {
  const user = await getUser();
  return {
    title: `${user.username}'s website`,
    icons: [user.social.github.avatar_url],
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={'en'} className={`${font.variable}`}>
      <body>
        <Providers>
          <DefaultLayout>{children}</DefaultLayout>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
