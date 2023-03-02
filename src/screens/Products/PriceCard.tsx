import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CardContainer from 'components/CardContainer';
import {InfoCardStyles} from 'screens/Products/AddProductStyles';
import CustomTextInput from 'screens/Products/CustomTextInput';
import {CurrencyDisabledIcon, CurrencyIcon} from 'components/Icons';
import {RadioButton} from 'react-native-paper';
import {Checkbox} from 'react-native-paper';
export default function PriceCard() {
  const [checked, setChecked] = React.useState(false);
  return (
    <CardContainer>
      <View style={InfoCardStyles.header}>
        <Text style={InfoCardStyles.title}>Price</Text>
        <View style={InfoCardStyles.body}>
          <Text style={InfoCardStyles.subTitle}>Original Price</Text>
          <CustomTextInput
            startIcon={<CurrencyIcon />}
            // disabled
            placeholder="Price"
          />
        </View>
        <View style={InfoCardStyles.body}>
          <Text style={InfoCardStyles.subTitle}>Discounted price</Text>
          <CustomTextInput
            startIcon={<CurrencyDisabledIcon />}
            disabled
            placeholder="Price"
          />
        </View>
        <View>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
          />
        </View>
      </View>
    </CardContainer>
  );
}

const styles = StyleSheet.create({});
