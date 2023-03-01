import {ScrollView, Text, View} from 'react-native';
import React from 'react';
import PaymentsCard from 'screens/Payment/PaymentsCard';
import CustomHeader from 'components/CustomHeader';
import {PaymentStyles} from 'screens/Payment/PaymentStyles';
import {
  AlipayIcon,
  CashIcon,
  PaypallIcon,
  PaystackIcon,
  RazoplayIcon,
  StripeIcon,
  WireTransferIcon,
} from 'components/Icons';

const paymentMethods = [
  {id: 1, name: 'Cash', icon: <CashIcon />},
  {id: 2, name: 'Wire Transfer', icon: <WireTransferIcon />},
  {id: 3, name: 'Stripe', icon: <StripeIcon />},
  {id: 4, name: 'Paypall', icon: <PaypallIcon />},
  {id: 5, name: 'Razoplay', icon: <RazoplayIcon />},
  {id: 6, name: 'AliPay', icon: <AlipayIcon />},
  {id: 7, name: 'Paystack', icon: <PaystackIcon />},
];

export default function Payment({navigation}: any) {
  return (
    <View style={PaymentStyles.wrapper}>
      <CustomHeader title="Payment" navigation={navigation} />
      <ScrollView>
        <View style={PaymentStyles.container}>
          <View style={PaymentStyles.titleContainer}>
            <Text style={PaymentStyles.title}>Payment Methods</Text>
          </View>
          {paymentMethods.map(method => (
            <PaymentsCard key={method.id} {...method} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
