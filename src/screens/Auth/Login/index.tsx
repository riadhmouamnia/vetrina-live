import {
  Keyboard,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {globalStyles} from 'styles/global';

import LoginMethods from 'screens/Auth/Login/LoginMethods';
import React from 'react';
import Header from 'screens/Auth/shared/Header';
import LoginForm from 'screens/Auth/Login/LoginForm';
import {authWrapper} from 'screens/Auth/styles/AuthStyles';

export default function Login() {
  const onSignin = () => {
    console.log('logged in');
  };
  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={authWrapper.container}>
          <Header
            title="Welcome"
            subTitle="Enter your email and password to 
            access your account"
          />
          <LoginForm />
          <LoginMethods
            onFacebookSignIn={onSignin}
            onGoogleSignIn={onSignin}
            onSignIn={onSignin}
          />
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
}
