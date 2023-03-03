import React, {FC} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Headphones} from 'components/Icons';
import {
  formStyles,
  methodsStyles,
  supportButtonStyles,
} from 'screens/Auth/styles/AuthStyles';

interface Props {
  navigation: any;
}

const ActionLinks: FC<Props> = ({navigation}) => {
  return (
    <View style={formStyles.container}>
      <TouchableOpacity
        style={methodsStyles.footerTextContainer}
        onPress={() => navigation.navigate('Login')}>
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

export default ActionLinks;
