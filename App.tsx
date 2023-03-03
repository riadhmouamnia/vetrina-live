import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import AuthStack from 'routes/AuthStack';
import RootDrawerNavigator from 'routes/RootDrawerNavigator';

function App() {
  return (
    <NavigationContainer>
      {/* <AuthStack /> */}
      <RootDrawerNavigator />
    </NavigationContainer>
  );
}

export default App;
