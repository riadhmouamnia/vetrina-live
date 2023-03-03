import React, {FC} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {FacebookIcon, Googleicon, Headphones} from 'components/Icons';
import {
  deviderStyles,
  methodsStyles,
  supportButtonStyles,
} from 'screens/Auth/styles/AuthStyles';

interface Props {
  onFacebookSignIn: () => void;
  onGoogleSignIn: () => void;
  onSignIn: () => void;
  navigation: any;
}

const LoginMethods: FC<Props> = ({
  onFacebookSignIn,
  onGoogleSignIn,
  onSignIn,
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
          onPress={onFacebookSignIn}>
          <FacebookIcon />
          <Text style={methodsStyles.buttonText}>Sign up with Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={methodsStyles.buttonStyle}
          onPress={onGoogleSignIn}>
          <Googleicon />
          <Text style={methodsStyles.buttonText}>Sign up with Google</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={methodsStyles.footerTextContainer}
        onPress={() => navigation.navigate('Reset')}>
        <Text style={methodsStyles.text}>Did you forget your password?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={methodsStyles.footerTextContainer}
        onPress={() => navigation.navigate('Register')}>
        <Text style={methodsStyles.text}>
          Do not have an account?{' '}
          <Text style={methodsStyles.link}>Register now</Text>
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={supportButtonStyles.container}>
        <Headphones />
        <Text style={supportButtonStyles.text}>Support</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginMethods;
