import {Keyboard, TouchableWithoutFeedback, View} from 'react-native';
import React, {useContext} from 'react';
import Header from 'screens/Auth/shared/Header';
import ResetForm from 'screens/Auth/Reset/ResetForm';
import ActionLinks from 'screens/Auth/Reset/ActionLinks';
import {authWrapper} from 'screens/Auth/styles/AuthStyles';
import {AuthContext} from 'context/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay/lib';

export default function Reset({navigation}: any) {
  const {isLoading} = useContext<any>(AuthContext);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={authWrapper.container}>
        <Spinner visible={isLoading} />
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
