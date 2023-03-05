import {
  Keyboard,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import LoginMethods from 'screens/Auth/Login/LoginMethods';
import React, {useContext} from 'react';
import Header from 'screens/Auth/shared/Header';
import LoginForm from 'screens/Auth/Login/LoginForm';
import {authWrapper} from 'screens/Auth/styles/AuthStyles';
import {AuthContext} from 'context/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay/lib';

export default function Login({navigation}: any) {
  const {isLoading} = useContext<any>(AuthContext);
  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={authWrapper.container}>
          <Spinner visible={isLoading} />
          <Header
            title="Welcome"
            subTitle="Enter your email and password to access your account"
          />
          <LoginForm />
          <LoginMethods navigation={navigation} />
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
}
