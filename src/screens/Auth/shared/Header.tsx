import {Text, View} from 'react-native';
import React from 'react';
import {Logo} from 'components/Icons';
import {headerStyles} from 'screens/Auth/styles/AuthStyles';

type HeaderProps = {
  title: string;
  subTitle: string;
};

export default function Header({title, subTitle}: HeaderProps) {
  return (
    <View style={headerStyles.container}>
      <Logo />
      <View style={headerStyles.textContainer}>
        <Text style={headerStyles.title}>{title}</Text>
        <Text style={headerStyles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
}
