import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CardContainer from 'components/CardContainer';
import {
  checkboxStyles,
  InfoCardStyles,
} from 'screens/Products/AddProductStyles';
import CustomTextInput from 'screens/Products/CustomTextInput';
import {CurrencyDisabledIcon, CurrencyIcon} from 'components/Icons';
import {CheckBox} from '@rneui/themed';

export default function PriceForm() {
  const [checked, setChecked] = React.useState(false);
  const toggleCheckbox = () => setChecked(!checked);
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
            startIcon={!checked ? <CurrencyDisabledIcon /> : <CurrencyIcon />}
            disabled={!checked}
            placeholder="Price"
          />
        </View>
        <View>
          <CheckBox
            checked={checked}
            onPress={toggleCheckbox}
            iconType="material-community"
            checkedIcon="checkbox-outline"
            uncheckedIcon={'checkbox-blank-outline'}
            title="Activate discounted price"
            size={30}
            containerStyle={checkboxStyles.containerStyle}
            textStyle={checkboxStyles.textStyle}
            right={true}
          />
        </View>
      </View>
    </CardContainer>
  );
}

const styles = StyleSheet.create({});
