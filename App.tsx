import React from 'react';
import { Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';

const App = () => {
  SplashScreen.preventAutoHideAsync();

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  SplashScreen.hideAsync();

  return (
    <View>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
};

export default App;
