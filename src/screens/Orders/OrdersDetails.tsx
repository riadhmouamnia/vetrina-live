import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';

export default function OrdersDetails({navigation}: any) {
  return (
    <View>
      <Text>OrdersDetails</Text>
      <Button title="Go back" onPress={navigation.goBack} />
    </View>
  );
}

const styles = StyleSheet.create({});
