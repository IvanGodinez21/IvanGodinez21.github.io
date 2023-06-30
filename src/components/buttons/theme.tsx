'use client';

import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { useTheme } from 'next-themes';
import { ReactNode, useEffect, useState } from 'react';

export default function ThemeButton() {
  const { resolvedTheme, setTheme } = useTheme();
  const [themeIcon, setThemeIcon] = useState<ReactNode>(null);

  useEffect(() => {
    setThemeIcon(
      resolvedTheme === 'dark' ? (
        <MoonIcon className={'h-6 w-6 text-gunmetal'} />
      ) : (
        <SunIcon className={'h-6 w-6 text-gunmetal'} />
      )
    );
  }, [resolvedTheme]);

  return (
    <button
      className={'btn-navbar-icon'}
      type={'button'}
      aria-label={'Toggle theme mode button'}
      onClick={() => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
      }}
    >
      {themeIcon}
    </button>
  );
}
