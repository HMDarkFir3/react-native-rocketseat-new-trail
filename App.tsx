import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { Routes } from '@/routes';

import { dark } from '@/themes/dark';

const App = () => {
  SplashScreen.preventAutoHideAsync();
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  SplashScreen.hideAsync();

  return (
    <NavigationContainer>
      <ThemeProvider theme={dark}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Routes />
        </GestureHandlerRootView>
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
