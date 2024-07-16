import AppProvider from '@hooks/index';
import React, { useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { AuthProvider } from '@hooks/useAuth';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Poppins-Thin': require('./public/assets/fonts/Poppins-Thin.ttf'),
    'Poppins-ExtraLight': require('./public/assets/fonts/Poppins-ExtraLight.ttf'),
    'Poppins-Light': require('./public/assets/fonts/Poppins-Light.ttf'),
    'Poppins-Medium': require('./public/assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Regular': require('./public/assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Italic': require('./public/assets/fonts/Poppins-Italic.ttf'),
    'Poppins-MediumItalic': require('./public/assets/fonts/Poppins-MediumItalic.ttf'),
    'Poppins-SemiBold': require('./public/assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Bold': require('./public/assets/fonts/Poppins-Bold.ttf'),
    'Poppins-ExtraBold': require('./public/assets/fonts/Poppins-ExtraBold.ttf'),
    'Poppins-Black': require('./public/assets/fonts/Poppins-Black.ttf'),
  });

  if (!fontsLoaded) return null;
}