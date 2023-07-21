import CustomThemeProvider from '@/providers/custom_theme_provider';
import DefaultLayout from '@/layouts/default';
import { Analytics } from '@vercel/analytics/react';
import { getUser } from '@/utils/getUser';
import { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '@/styles/globals.css';

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
        <CustomThemeProvider>
          <DefaultLayout>{children}</DefaultLayout>
        </CustomThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
