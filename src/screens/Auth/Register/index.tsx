import {
  ScrollView,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React, {useContext} from 'react';
import Header from 'screens/Auth/shared/Header';
import RegisterForm from 'screens/Auth/Register/RegisterForm';
import RegisterMethods from 'screens/Auth/Register/RegisterMethods';
import {authWrapper} from 'screens/Auth/styles/AuthStyles';
import {AuthContext} from 'context/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay/lib';

export default function Register({navigation}: any) {
  const {isLoading} = useContext<any>(AuthContext);
  const onSignUp = () => {
    console.log('signup');
  };
  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={authWrapper.container}>
          <Spinner visible={isLoading} />
          <Header
            title="Create your e-commerce"
            subTitle="Prova Vetrina Live gratuitamente per 7 giorni e apri il tuo negozio online in pochi minuti. Nessuna carta di credito richiesta."
          />
          <RegisterForm />
          <RegisterMethods
            onFacebookSignUp={onSignUp}
            onGoogleSignUp={onSignUp}
            navigation={navigation}
          />
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
}
