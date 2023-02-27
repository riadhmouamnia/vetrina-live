import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';

export default function Products({navigation}: any) {
  return (
    <View>
      <Text>Products</Text>
      <Button
        title="see details"
        onPress={() => navigation.navigate('Add Product')}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
