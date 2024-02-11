import React, { createContext, useState } from 'react';
import {
  ThemeProvider as StyledThemeProvider,
  DefaultTheme,
} from 'styled-components';

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

  const onToggleTheme = () => {
    setTheme((prevState) => (prevState.title === 'light' ? dark : light));
  };

  return (
    <ThemeContext.Provider value={{ theme, onToggleTheme }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
