'use client';

import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { ReactNode, useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export default function ThemeButton() {
  const { resolvedTheme, setTheme } = useTheme();
  const [themeIcon, setThemeIcon] = useState<ReactNode>(null);

  useEffect(() => {
    const className = 'h-6 w-6 text-gunmetal';
    setThemeIcon(resolvedTheme === 'dark' ? <MoonIcon className={className} /> : <SunIcon className={className} />);
  }, [resolvedTheme]);

  return (
    <button
      aria-label={'Toggle theme mode button'}
      className={'btn-navbar-icon'}
      title={'Toggle theme'}
      type={'button'}
      onClick={() => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
      }}
      onContextMenu={(e) => {
        e.preventDefault();
        setTheme('system');
      }}
    >
      {themeIcon}
    </button>
  );
}
