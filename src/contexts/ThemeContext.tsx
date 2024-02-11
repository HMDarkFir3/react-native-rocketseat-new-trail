import React, { createContext, useState, useEffect } from 'react';
import {
  ThemeProvider as StyledThemeProvider,
  DefaultTheme,
} from 'styled-components';
import AsyncSorage from '@react-native-async-storage/async-storage';

import { THEME_COLLECTION } from '@/storages';

import { dark } from '@/themes/dark';
import { light } from '@/themes/light';

export const ThemeContext = createContext({} as ThemeContextData);

interface ThemeContextData {
  theme: DefaultTheme;
  onToggleTheme: () => void;
}

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState(dark);

  const onToggleTheme = async () => {
    setTheme(theme.title === 'light' ? dark : light);

    await AsyncSorage.setItem(
      THEME_COLLECTION,
      JSON.stringify(theme.title === 'light' ? dark : light),
    );
  };

  useEffect(() => {
    const loadTheme = async () => {
      const themeStoraged = await AsyncSorage.getItem(THEME_COLLECTION);

      console.log(themeStoraged);

      if (themeStoraged) {
        setTheme(JSON.parse(themeStoraged));
      }
    };

    loadTheme();
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, onToggleTheme }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
