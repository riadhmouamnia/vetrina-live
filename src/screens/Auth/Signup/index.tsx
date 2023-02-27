import {
  ScrollView,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React from 'react';
import {globalStyles} from 'styles/global';
import Header from 'screens/Auth/shared/Header';
import CreateAccountForm from 'screens/Auth/Signup/CreateAccountForm';
import SignUpMethods from 'screens/Auth/Signup/SignUpMethods';

export default function Signup() {
  const onSignUp = () => {
    console.log('signup');
  };
  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={globalStyles.container}>
          <Header
            title="Create your e-commerce"
            subTitle="Prova Vetrina Live gratuitamente per 7 giorni e apri il tuo negozio online in pochi minuti. Nessuna carta di credito richiesta."
          />
          <CreateAccountForm />
          <SignUpMethods
            onFacebookSignUp={onSignUp}
            onGoogleSignUp={onSignUp}
            onSignIn={onSignUp}
          />
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
}
