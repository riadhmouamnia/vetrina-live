import {Text, View} from 'react-native';
import React from 'react';
import CustomHeader from 'components/CustomHeader';
import {OrderStyles} from 'screens/Orders/OrdersStyles';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {ExternalLinkDisabledIcon} from 'components/Icons';
import OrderTableContainer from 'screens/Orders/OrderTableContainer';
import {ordersData} from 'data';

export default function Orders({navigation}: any) {
  return (
    <View style={OrderStyles.wrapper}>
      <CustomHeader title="Orders" navigation={navigation} icons />
      <ScrollView>
        <View style={OrderStyles.container}>
          <View style={OrderStyles.header}>
            <Text style={OrderStyles.headerText}>
              Orders: {ordersData.length}
            </Text>
            <TouchableOpacity style={OrderStyles.button}>
              <Text style={OrderStyles.buttonText}>Ship order</Text>
              <ExternalLinkDisabledIcon />
            </TouchableOpacity>
          </View>
          <OrderTableContainer navigation={navigation} />
        </View>
      </ScrollView>
    </View>
  );
}
