import React, {FC, useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {FacebookIcon, Googleicon, Headphones} from 'components/Icons';
import {AuthContext} from 'context/AuthContext';
import {
  deviderStyles,
  methodsStyles,
  supportButtonStyles,
} from 'screens/Auth/styles/AuthStyles';

interface Props {
  navigation: any;
}

const LoginMethods: FC<Props> = ({navigation}) => {
  const {googleLogin} = useContext<any>(AuthContext);
  return (
    <View style={methodsStyles.container}>
      <View style={deviderStyles.container}>
        <View style={deviderStyles.divider} />
        <Text style={deviderStyles.text}>OR</Text>
        <View style={deviderStyles.divider} />
      </View>
      <View style={methodsStyles.buttonsContainer}>
        <TouchableOpacity style={methodsStyles.buttonStyle}>
          <FacebookIcon />
          <Text style={methodsStyles.buttonText}>Sign in with Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={methodsStyles.buttonStyle}
          onPress={() => googleLogin()}>
          <Googleicon />
          <Text style={methodsStyles.buttonText}>Sign in with Google</Text>
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
