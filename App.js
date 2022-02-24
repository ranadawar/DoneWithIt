import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import AuthNavigation from './app/navigation/AuthNavigation';
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';


function App() {
  return (
    <NavigationContainer theme={navigationTheme} >
      <AppNavigator />
    </NavigationContainer>
  );
}

export default App;