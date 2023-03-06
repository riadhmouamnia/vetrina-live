import {NavigationContainer} from '@react-navigation/native';
import {AuthContext} from 'context/AuthContext';
import React, {useContext, useEffect, useState} from 'react';
import AuthStack from 'navigations/AuthStack';
import RootDrawerNavigator from 'navigations/RootDrawerNavigator';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

export default function RootNavigation() {
  const {user, setUser} = useContext<FirebaseAuthTypes.User | {} | any>(
    AuthContext,
  );
  const [initializing, setInitializing] = useState<boolean>(true);

  // Handle user state changes
  function onAuthStateChanged(user: FirebaseAuthTypes.User): void {
    setUser(user);
    console.log(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '338633047574-fpfvvohtr842fk9g56c4785vr2vcvhpg.apps.googleusercontent.com',
    });

    const subscriber = auth().onAuthStateChanged(onAuthStateChanged as any);
    if (initializing) {
      setInitializing(false);
    }
    return subscriber;
  }, []);

  if (initializing) return null;

  return (
    <NavigationContainer>
      {user ? <RootDrawerNavigator /> : <AuthStack />}
    </NavigationContainer>
  );
}
