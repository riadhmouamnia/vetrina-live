import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import CardContainer from 'components/CardContainer';
import {InfoCardStyles} from 'screens/Products/AddProductStyles';
import {TextInput} from 'react-native-gesture-handler';
import {
  BoldIcon,
  ItalicizeIcon,
  LineThroughIcon,
  LinkTextIcon,
  MenuTextIcon,
  UnderLineIcon,
} from 'components/Icons';

import color from 'theme/color';

const icons = [
  {id: 1, elemnt: <BoldIcon />},
  {id: 2, elemnt: <ItalicizeIcon />},
  {id: 3, elemnt: <LineThroughIcon />},
  {id: 4, elemnt: <UnderLineIcon />},
  {id: 5, elemnt: <MenuTextIcon />},
  {id: 6, elemnt: <LinkTextIcon />},
];

const RenderToggleButton = ({icon}: any) => {
  return (
    <TouchableOpacity style={InfoCardStyles.toggleButtons}>
      {icon}
    </TouchableOpacity>
  );
};

export default function GeneralInformationForm() {
  return (
    <CardContainer>
      <View style={InfoCardStyles.header}>
        <Text style={InfoCardStyles.title}>General Information</Text>
      </View>
      <View style={InfoCardStyles.body}>
        <View style={InfoCardStyles.inputWrapper}>
          <Text style={InfoCardStyles.subTitle}>Product name</Text>
          <TextInput
            placeholder="Lorem ipsum"
            placeholderTextColor={color.lightyGrey}
            style={InfoCardStyles.textInput}
          />
        </View>
        <View style={InfoCardStyles.inputWrapper}>
          <Text style={InfoCardStyles.subTitle}>Description</Text>
          <View style={InfoCardStyles.textInputMultilineWrapper}>
            <View style={InfoCardStyles.renderToggleButtons}>
              {icons.map(icon => (
                <RenderToggleButton key={icon.id} icon={icon.elemnt} />
              ))}
            </View>
            <TextInput
              placeholder="Description (0 / 5000)"
              multiline
              placeholderTextColor={color.lightyGrey}
              textAlignVertical="top"
              style={InfoCardStyles.textInputMultiline}
            />
          </View>
        </View>
      </View>
    </CardContainer>
  );
}
