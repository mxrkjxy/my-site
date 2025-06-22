import { ReactNode } from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

interface Props {
  readonly children: ReactNode;
  readonly defaultTheme?: string;
  readonly storageKey?: string;
}

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'vite-ui-theme',
}: Props) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme={defaultTheme}
      storageKey={storageKey}
    >
      {children}
    </NextThemesProvider>
  );
}
