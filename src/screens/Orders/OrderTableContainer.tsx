import {Text, View} from 'react-native';
import React from 'react';
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from 'components/Icons';
import {Orders} from 'data';
import OrdersTable from 'screens/Orders/OrdersTable';
import {OrderTableContainerStyles} from 'screens/Orders/OrdersStyles';

export default function OrderTableContainer() {
  return (
    <View style={OrderTableContainerStyles.container}>
      <OrdersTable Orders={Orders} />
      <View style={OrderTableContainerStyles.footer}>
        <View style={OrderTableContainerStyles.flexRow}>
          <Text style={OrderTableContainerStyles.text}>p</Text>
          <Text style={OrderTableContainerStyles.text}>25</Text>
          <ChevronDownIcon />
        </View>
        <View style={OrderTableContainerStyles.flexRow}>
          <Text style={OrderTableContainerStyles.text}>1-25 of 25</Text>
        </View>
        <View style={OrderTableContainerStyles.flexRow}>
          <ChevronLeftIcon />
          <ChevronRightIcon />
        </View>
      </View>
    </View>
  );
}
