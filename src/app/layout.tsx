import CustomThemeProvider from '@/providers/custom_theme_provider';
import DefaultLayout from '@/layouts/default';
import { getUser } from '@/utils/getUser';
import { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '@/styles/globals.css';

const font = Poppins({ weight: ['500'], subsets: ['latin'] });

export async function generateMetadata(): Promise<Metadata> {
  const user = await getUser();
  return {
    title: `${user.username}'s website`,
    icons: [user.social.github.avatar_url],
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={'en'}>
      <body className={font.className}>
        <CustomThemeProvider>
          <DefaultLayout>{children}</DefaultLayout>
        </CustomThemeProvider>
      </body>
    </html>
  );
}
