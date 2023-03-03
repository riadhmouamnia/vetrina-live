import React, {FC} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {FacebookIcon, Googleicon, Headphones} from 'components/Icons';
import {
  deviderStyles,
  methodsStyles,
  supportButtonStyles,
} from 'screens/Auth/styles/AuthStyles';

interface Props {
  onFacebookSignUp: () => void;
  onGoogleSignUp: () => void;
  navigation: any;
}

const RegisterMethods: FC<Props> = ({
  onFacebookSignUp,
  onGoogleSignUp,
  navigation,
}) => {
  return (
    <View style={methodsStyles.container}>
      <View style={deviderStyles.container}>
        <View style={deviderStyles.divider} />
        <Text style={deviderStyles.text}>OR</Text>
        <View style={deviderStyles.divider} />
      </View>
      <View style={methodsStyles.buttonsContainer}>
        <TouchableOpacity
          style={methodsStyles.buttonStyle}
          onPress={onFacebookSignUp}>
          <FacebookIcon />
          <Text style={methodsStyles.buttonText}>Sign up with Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={methodsStyles.buttonStyle}
          onPress={onGoogleSignUp}>
          <Googleicon />
          <Text style={methodsStyles.buttonText}>Sign up with Google</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={methodsStyles.footerTextContainer}
        onPress={() => navigation.goBack()}>
        <Text style={methodsStyles.text}>
          Do you have an account?{' '}
          <Text style={methodsStyles.link}>Sign in now</Text>
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={supportButtonStyles.container}>
        <Headphones />
        <Text style={supportButtonStyles.text}>Support</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterMethods;
