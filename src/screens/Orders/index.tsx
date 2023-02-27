import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';

export default function Orders({navigation}: any) {
  return (
    <View>
      <Text>Orders</Text>
      <Button
        title="see details"
        onPress={() => navigation.navigate('Order details')}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
