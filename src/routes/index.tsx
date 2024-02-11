import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { AppRoutes } from './app.routes';

export const Routes = () => {
  return (
    <>
      <StatusBar />
      <AppRoutes />
    </>
  );
};
