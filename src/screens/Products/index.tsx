import {StyleSheet, Text, View, Button} from 'react-native';
import React, {useState} from 'react';
import {ProductsStyles} from 'screens/Products/ProductsStyles';
import CustomHeader from 'components/CustomHeader';
import {
  ScrollView,
  Switch,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {PlusIcon} from 'components/Icons';
import color from 'theme/color';
import TableCard from 'screens/Products/TableCard';

export default function Products({navigation}: any) {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  return (
    <View style={ProductsStyles.wrapper}>
      <CustomHeader title="Products" navigation={navigation} icons />
      <ScrollView>
        <View style={ProductsStyles.container}>
          <View style={ProductsStyles.header}>
            <View>
              <View style={ProductsStyles.left}>
                <Text style={ProductsStyles.headerText}>
                  Products ( 24 / 100 )
                </Text>
                <Text style={ProductsStyles.headerText}>
                  Featured products (7/10)
                </Text>
                <View
                  style={
                    isSwitchOn
                      ? ProductsStyles.switchOn
                      : ProductsStyles.switchOff
                  }>
                  <Switch
                    value={isSwitchOn}
                    trackColor={{false: 'transparent', true: 'transparent'}}
                    onValueChange={() => setIsSwitchOn(!isSwitchOn)}
                    thumbColor={color.diasbledGrey}
                    style={ProductsStyles.switch}
                  />
                </View>
              </View>
            </View>
            <TouchableOpacity
              style={ProductsStyles.button}
              onPress={() => navigation.navigate('Add Product')}>
              <PlusIcon />
            </TouchableOpacity>
          </View>
          <TableCard />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
