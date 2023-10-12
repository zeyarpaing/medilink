'use client';
import { NextUIProvider } from '@nextui-org/react';
import { SessionProvider } from 'next-auth/react';
import { createContext, useEffect, useState } from 'react';

const ThemeProvider = createContext({
  colorScheme: 'system',
  setColorScheme: (colorScheme: ColorScheme) => {},
});

type ColorScheme = 'dark' | 'light' | 'system';

function updateColorScheme(colorScheme: ColorScheme) {
  const html = document.querySelector('html');
  if (html) {
    html.setAttribute('class', colorScheme);
  }
}

export function Providers({ children }: { children: React.ReactNode }) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('system');

  useEffect(() => {
    const localColorScheme = localStorage.getItem('colorScheme');

    const systemColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const mode = (localColorScheme || 'system') as ColorScheme;
    setColorScheme(mode);
    updateColorScheme(mode === 'system' ? systemColorScheme : mode);

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      const systemColorScheme = e.matches ? 'dark' : 'light';
      const mode = (localColorScheme || 'system') as ColorScheme;
      setColorScheme(mode);
      updateColorScheme(mode === 'system' ? systemColorScheme : mode);
    });
  }, []);

  return (
    <ThemeProvider.Provider
      value={{
        colorScheme,
        setColorScheme: (colorScheme: ColorScheme) => {
          setColorScheme(colorScheme);
          updateColorScheme(colorScheme);
          localStorage.setItem('colorScheme', colorScheme as string);
        },
      }}
    >
      <SessionProvider>
        <NextUIProvider>{children}</NextUIProvider>
      </SessionProvider>
    </ThemeProvider.Provider>
  );
}
