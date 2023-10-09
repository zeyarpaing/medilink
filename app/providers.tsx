'use client';
import { createContext, useEffect, useState } from 'react';
import { NextUIProvider } from '@nextui-org/react';
import { SessionProvider } from 'next-auth/react';

const ThemeProvider = createContext({
  setColorScheme: (colorScheme: ColorScheme) => {},
  colorScheme: 'system',
});

type ColorScheme = 'system' | 'light' | 'dark';

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
        setColorScheme: (colorScheme: ColorScheme) => {
          setColorScheme(colorScheme);
          updateColorScheme(colorScheme);
          localStorage.setItem('colorScheme', colorScheme as string);
        },
        colorScheme,
      }}
    >
      <SessionProvider>
        <NextUIProvider>{children}</NextUIProvider>
      </SessionProvider>
    </ThemeProvider.Provider>
  );
}
