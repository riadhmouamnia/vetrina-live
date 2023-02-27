import {Text, View} from 'react-native';
import React from 'react';
import CardContainer from 'components/CardContainer';
import {ArowRight, ListIcon} from 'components/Icons';
import {ordersCard} from 'data';
import {SelectList} from 'react-native-dropdown-select-list';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {BasicCardStyles} from 'styles/global';
import {OrdersCardStyles} from 'screens/Dashboard/styles/DashboardStyles';

export default function OrdersCard() {
  const [selected, setSelected] = React.useState('');
  return (
    <CardContainer>
      <View style={BasicCardStyles.header}>
        <View style={BasicCardStyles.left}>
          <ListIcon />
          <Text style={BasicCardStyles.title}>{ordersCard.title}</Text>
        </View>
        <View style={BasicCardStyles.right}>
          <SelectList
            boxStyles={OrdersCardStyles.boxStyle}
            inputStyles={OrdersCardStyles.input}
            fontFamily="SourceSansPro-Regular"
            setSelected={(val: any) => setSelected(val)}
            data={ordersCard.duration}
            save="value"
            defaultOption={{key: 1, value: 'This month'}}
          />
        </View>
      </View>
      <View style={BasicCardStyles.body}>
        <View style={OrdersCardStyles.textContainer}>
          <Text style={OrdersCardStyles.text}>Order received:</Text>
          <Text style={OrdersCardStyles.numbers}>
            {ordersCard.ordersRecived}
          </Text>
        </View>
        <View style={OrdersCardStyles.textContainer}>
          <Text style={OrdersCardStyles.text}>Ernings:</Text>
          <Text style={OrdersCardStyles.numbers}>
            € {ordersCard.ernings.toFixed(2)}
          </Text>
        </View>
      </View>
      <TouchableOpacity style={BasicCardStyles.linkContainer}>
        <Text style={BasicCardStyles.link}>{ordersCard.link}</Text>
        <ArowRight />
      </TouchableOpacity>
    </CardContainer>
  );
}
