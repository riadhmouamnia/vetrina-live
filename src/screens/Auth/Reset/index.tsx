import {
  Keyboard,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {globalStyles} from 'styles/global';
import React from 'react';
import Header from 'screens/Auth/shared/Header';
import ResetForm from 'screens/Auth/Reset/ResetForm';
import ActionLinks from 'screens/Auth/Reset/ActionLinks';

export default function Reset() {
  const onReset = () => {
    console.log('Reseted');
  };
  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={globalStyles.container}>
          <Header
            title="Forgot Password"
            subTitle="Enter your email and you will receive an email 
            to recover your password"
          />
          <ResetForm />
          <ActionLinks onReset={onReset} />
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
}
