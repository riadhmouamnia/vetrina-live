import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CardContainer from 'components/CardContainer';
import {
  checkboxStyles,
  InfoCardStyles,
} from 'screens/Products/AddProductStyles';
import CustomTextInput from 'screens/Products/CustomTextInput';
import {
  AvailabilityIcon,
  DetailsChevronDown,
  InfoIcon,
  WeightIcon,
} from 'components/Icons';
import {CheckBox} from '@rneui/themed';
import color from 'theme/color';

export default function DetailsForm() {
  const [checked, setChecked] = React.useState(false);
  const toggleCheckbox = () => setChecked(!checked);
  return (
    <CardContainer>
      <View style={InfoCardStyles.header}>
        <Text style={InfoCardStyles.title}>Details</Text>
      </View>
      <View style={InfoCardStyles.body}>
        <Text style={InfoCardStyles.subTitle}>Category</Text>
        <CustomTextInput
          endIcon={<DetailsChevronDown fill={color.primaryBlack} />}
          placeholder="Select category"
        />
      </View>
      <View style={InfoCardStyles.body}>
        <View style={InfoCardStyles.subTitleContainer}>
          <Text style={InfoCardStyles.subTitle}>Product code / SKU</Text>
          <InfoIcon />
        </View>
        <CustomTextInput placeholder="Leave empty to automatically generate" />
      </View>
      <View style={InfoCardStyles.body}>
        <Text style={InfoCardStyles.subTitle}>Weight</Text>
        <CustomTextInput
          startIcon={<WeightIcon />}
          placeholder="Select category"
        />
      </View>
      <View style={InfoCardStyles.body}>
        <Text style={InfoCardStyles.subTitle}>Availability</Text>
        <CustomTextInput
          startIcon={<AvailabilityIcon />}
          placeholder="Select category"
        />
      </View>
      <CheckBox
        checked={checked}
        onPress={toggleCheckbox}
        iconType="material-community"
        checkedIcon="checkbox-outline"
        uncheckedIcon={'checkbox-blank-outline'}
        title="This is a featured product"
        size={30}
        containerStyle={checkboxStyles.containerStyle}
        textStyle={checkboxStyles.textStyle}
      />
    </CardContainer>
  );
}

const styles = StyleSheet.create({});
