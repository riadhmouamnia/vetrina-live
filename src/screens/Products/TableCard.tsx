import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {tableCardStyles} from 'screens/Products/ProductsStyles';
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from 'components/Icons';

export default function TableCard() {
  return (
    <View style={tableCardStyles.container}>
      <Text>TableCard</Text>
      <View style={tableCardStyles.footer}>
        <View style={tableCardStyles.flexRow}>
          <Text style={tableCardStyles.text}>p</Text>
          <Text style={tableCardStyles.text}>25</Text>
          <ChevronDownIcon />
        </View>
        <View style={tableCardStyles.flexRow}>
          <Text style={tableCardStyles.text}>1-25 of 25</Text>
        </View>
        <View style={tableCardStyles.flexRow}>
          <ChevronLeftIcon />
          <ChevronRightIcon />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
