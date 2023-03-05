import {Keyboard, TouchableWithoutFeedback, View} from 'react-native';
import React from 'react';
import Header from 'screens/Auth/shared/Header';
import ResetForm from 'screens/Auth/Reset/ResetForm';
import ActionLinks from 'screens/Auth/Reset/ActionLinks';
import {authWrapper} from 'screens/Auth/styles/AuthStyles';

export default function Reset({navigation}: any) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={authWrapper.container}>
        <Header
          title="Forgot Password"
          subTitle="Enter your email and you will receive an email 
            to recover your password"
        />
        <ResetForm />
        <ActionLinks navigation={navigation} />
      </View>
    </TouchableWithoutFeedback>
  );
}
