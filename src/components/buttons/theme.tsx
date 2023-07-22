'use client';

import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export default function ThemeButton() {
  const [showThemeIcon, setShowThemeIcon] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const ThemeIcon = resolvedTheme === 'dark' ? MoonIcon : SunIcon;

  useEffect(() => {
    setShowThemeIcon(true);
  }, []);

  return (
    showThemeIcon && (
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
        <ThemeIcon className={'h-6 w-6 text-gunmetal'} />
      </button>
    )
  );
}
