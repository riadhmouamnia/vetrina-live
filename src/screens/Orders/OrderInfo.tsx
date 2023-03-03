import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {orderDetailsStyles} from 'screens/Orders/OrdersStyles';
import {CloseIcon, StarFilledIcon} from 'components/Icons';

export default function OrderInfo({navigation}: any) {
  return (
    <View style={orderDetailsStyles.wrapper}>
      <ScrollView>
        <View style={orderDetailsStyles.header}>
          <Text style={orderDetailsStyles.title}>Orders: #1292</Text>
          <View style={orderDetailsStyles.linkContainer}>
            <StarFilledIcon />
            <Text style={orderDetailsStyles.link}>Stampa ordine</Text>
            <TouchableOpacity onPress={navigation.goBack}>
              <CloseIcon />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
