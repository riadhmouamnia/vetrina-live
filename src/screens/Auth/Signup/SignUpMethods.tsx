import React, {FC} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {FacebookIcon, Googleicon, Headphones} from 'components/Icons';
import {SignUpMethodsStyles, globalStyles} from 'styles/global';

interface Props {
  onFacebookSignUp: () => void;
  onGoogleSignUp: () => void;
  onSignIn: () => void;
}

const SignUpMethods: FC<Props> = ({
  onFacebookSignUp,
  onGoogleSignUp,
  onSignIn,
}) => {
  return (
    <View style={SignUpMethodsStyles.container}>
      <View style={SignUpMethodsStyles.orContainer}>
        <View style={SignUpMethodsStyles.divider} />
        <Text style={SignUpMethodsStyles.orText}>OR</Text>
        <View style={SignUpMethodsStyles.divider} />
      </View>
      <View style={SignUpMethodsStyles.signUpButtons}>
        <TouchableOpacity
          style={SignUpMethodsStyles.signUpButton}
          onPress={onFacebookSignUp}>
          <FacebookIcon />
          <Text style={SignUpMethodsStyles.signUpText}>
            Sign up with Facebook
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={SignUpMethodsStyles.signUpButton}
          onPress={onGoogleSignUp}>
          <Googleicon />
          <Text style={SignUpMethodsStyles.signUpText}>
            Sign up with Google
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={SignUpMethodsStyles.signInButton}
        onPress={onSignIn}>
        <Text style={SignUpMethodsStyles.signInText}>
          Do you have an account?{' '}
          <Text style={SignUpMethodsStyles.signInLink}>Sign in now</Text>
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{...SignUpMethodsStyles.support, ...globalStyles.shadow}}>
        <Headphones />
        <Text style={SignUpMethodsStyles.signUpText}>Support</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpMethods;
