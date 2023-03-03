import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CustomHeader from 'components/CustomHeader';
import {ProductsStyles} from 'screens/Products/ProductsStyles';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {BackIcon} from 'components/Icons';
import {AddProductStyles} from 'screens/Products/AddProductStyles';
import {Tab} from '@rneui/themed';
import InfoTab from 'screens/Products/InfoTab';

export default function AddProduct({navigation}: any) {
  const [index, setIndex] = useState(0);
  return (
    <View style={ProductsStyles.wrapper}>
      <CustomHeader title="Products" navigation={navigation} icons />
      <ScrollView>
        <View style={ProductsStyles.container}>
          <View style={AddProductStyles.header}>
            <TouchableOpacity
              style={AddProductStyles.button}
              onPress={navigation.goBack}>
              <BackIcon />
              <Text style={AddProductStyles.buttonText}>All Products</Text>
            </TouchableOpacity>
            <Text style={AddProductStyles.title}>New Product</Text>
          </View>
          <View>
            <Tab
              value={index}
              onChange={e => setIndex(e)}
              style={AddProductStyles.tab}
              indicatorStyle={AddProductStyles.indicatorStyle}>
              <Tab.Item
                title="info"
                titleStyle={(active: boolean) =>
                  active
                    ? AddProductStyles.tabItemActive
                    : AddProductStyles.tabItem
                }
              />
              <Tab.Item
                title="variants"
                titleStyle={(active: boolean) =>
                  active
                    ? AddProductStyles.tabItemActive
                    : AddProductStyles.tabItem
                }
              />
            </Tab>
            {index === 0 && <InfoTab />}
            {index === 1 && (
              <Text style={AddProductStyles.title}>variants</Text>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
