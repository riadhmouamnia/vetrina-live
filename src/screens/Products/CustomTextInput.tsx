import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import color from 'theme/color';
import {CustomTextInputStyles} from 'screens/Products/AddProductStyles';

interface Props {
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  placeholder: string;
  disabled?: boolean;
  rest?: any;
}

export default function CustomTextInput({
  startIcon,
  endIcon,
  placeholder,
  disabled,
  ...rest
}: Props) {
  return (
    <View
      style={
        disabled
          ? CustomTextInputStyles.disabled
          : CustomTextInputStyles.container
      }>
      <View style={CustomTextInputStyles.Icon}>
        {startIcon ? startIcon : null}
      </View>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={color.lightyGrey}
        style={CustomTextInputStyles.textInput}
        editable={disabled ? false : true}
        {...rest}
      />
      <View style={CustomTextInputStyles.Icon}>{endIcon ? endIcon : null}</View>
    </View>
  );
}

const styles = StyleSheet.create({});
