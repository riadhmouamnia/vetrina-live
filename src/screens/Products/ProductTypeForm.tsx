import {View, Text} from 'react-native';
import React from 'react';
import CardContainer from 'components/CardContainer';
import {
  checkboxStyles,
  InfoCardStyles,
} from 'screens/Products/AddProductStyles';
import {CheckBox} from '@rneui/themed';
import {Icon} from 'react-native-elements';
import color from 'theme/color';

export default function ProductTypeForm() {
  const [selectedIndex, setIndex] = React.useState(0);
  return (
    <CardContainer>
      <View style={InfoCardStyles.header}>
        <Text style={InfoCardStyles.title}>Product type</Text>
      </View>
      <View style={InfoCardStyles.radioButtonsContainer}>
        <CheckBox
          checked={selectedIndex === 0}
          onPress={() => setIndex(0)}
          containerStyle={{marginLeft: 0, paddingLeft: 0, marginBottom: 0}}
          title="Physical"
          textStyle={checkboxStyles.textStyle}
          checkedIcon={
            <Icon
              name="radio-button-on-outline"
              type="ionicon"
              color={color.primaryBlue}
              size={25}
            />
          }
          uncheckedIcon={
            <Icon
              name="radio-button-off-outline"
              type="ionicon"
              color={color.lightyGrey}
              size={25}
            />
          }
        />
        <CheckBox
          checked={selectedIndex === 1}
          onPress={() => setIndex(1)}
          containerStyle={{marginLeft: 0, paddingLeft: 0, marginBottom: 0}}
          title="Digital"
          textStyle={checkboxStyles.textStyle}
          checkedIcon={
            <Icon
              name="radio-button-on-outline"
              type="ionicon"
              color={color.primaryBlue}
              size={25}
            />
          }
          uncheckedIcon={
            <Icon
              name="radio-button-off-outline"
              type="ionicon"
              color={color.lightyGrey}
              size={25}
            />
          }
        />
      </View>
    </CardContainer>
  );
}
