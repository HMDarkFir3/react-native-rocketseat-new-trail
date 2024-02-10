import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';

import { Routes } from '@/routes';

import { dark } from '@/themes/dark';

const App = () => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={dark}>
        <Routes />
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
