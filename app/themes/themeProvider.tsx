import React, { createContext, ReactNode, useContext } from 'react';
import { useColorScheme } from 'react-native';
import { darkTheme, lightTheme, Theme } from './index';

type ThemeContextValue = {
  theme: Theme;
  mode: 'light' | 'dark';
};

const ThemeContext = createContext<ThemeContextValue>({
  theme: lightTheme,
  mode: 'light',
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const systemScheme = useColorScheme();
  const mode = systemScheme === 'dark' ? 'dark' : 'light';

  const theme = mode === 'dark' ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, mode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext).theme;
export const useThemeMode = () => useContext(ThemeContext).mode;
