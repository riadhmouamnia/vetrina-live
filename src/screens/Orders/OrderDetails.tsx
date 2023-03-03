import {Text, View} from 'react-native';
import React from 'react';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {orderDetailsStyles, tabsStyle} from 'screens/Orders/OrdersStyles';
import {CloseIcon, StarFilledIcon} from 'components/Icons';
import {Tab} from '@rneui/themed';
import InfoOrders from 'screens/Orders/InfoOrders';

export default function OrderDetails({navigation}: any) {
  const [index, setIndex] = React.useState(0);
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
        <View>
          <Tab
            value={index}
            onChange={e => setIndex(e)}
            style={tabsStyle.tab}
            indicatorStyle={tabsStyle.indicatorStyle}>
            <Tab.Item
              title="Info orders"
              titleStyle={(active: boolean) =>
                active ? tabsStyle.tabItemActive : tabsStyle.tabItem
              }
            />
            <Tab.Item
              title="Products"
              titleStyle={(active: boolean) =>
                active ? tabsStyle.tabItemActive : tabsStyle.tabItem
              }
            />
            <Tab.Item
              title="Shipping"
              titleStyle={(active: boolean) =>
                active ? tabsStyle.tabItemActive : tabsStyle.tabItem
              }
            />
          </Tab>
          <View style={tabsStyle.devider} />
          {index === 0 && <InfoOrders />}
          {index === 1 && <Text style={tabsStyle.title}>Products</Text>}
          {index === 2 && <Text style={tabsStyle.title}>Shipping</Text>}
        </View>
      </ScrollView>
    </View>
  );
}
