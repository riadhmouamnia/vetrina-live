import React, {FC} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Headphones} from 'components/Icons';
import {
  SignUpMethodsStyles,
  globalStyles,
  LoginMethodsStyles,
} from 'styles/global';

interface Props {
  onReset: () => void;
}

const ActionLinks: FC<Props> = ({onReset}) => {
  return (
    <View style={LoginMethodsStyles.container}>
      <TouchableOpacity
        style={SignUpMethodsStyles.signInButton}
        onPress={onReset}>
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

export default ActionLinks;
