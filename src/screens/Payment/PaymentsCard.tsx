import {Text, View} from 'react-native';
import React, {useState} from 'react';
import {CardStyles} from 'screens/Payment/PaymentStyles';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface Props {
  id: number;
  name: string;
  icon: JSX.Element;
}

export default function PaymentsCard({id, name, icon}: Props) {
  const [disabled, setIsDisabled] = useState(true);
  return (
    <View style={CardStyles.container}>
      <View style={CardStyles.header}>
        {icon}
        <TouchableOpacity
          onPress={() => setIsDisabled(!disabled)}
          style={
            disabled ? CardStyles.buttornDisabled : CardStyles.buttornEnabled
          }>
          <Text
            style={disabled ? CardStyles.textDisabled : CardStyles.textEnabled}>
            Disabled
          </Text>
        </TouchableOpacity>
      </View>
      <View style={CardStyles.footer}>
        <Text style={CardStyles.footerText}>{name}</Text>
      </View>
    </View>
  );
}
