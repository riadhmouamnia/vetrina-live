import {Text, View} from 'react-native';
import React from 'react';
import {configCard} from 'data';
import {ArowRight, ToolIcon} from 'components/Icons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CardContainer from 'components/CardContainer';
import {configCardStyles} from 'screens/Dashboard/styles/DashboardStyles';
import {BasicCardStyles} from 'styles/global';

export default function ConfigCard() {
  return (
    <CardContainer>
      <View style={BasicCardStyles.header}>
        <View style={BasicCardStyles.left}>
          <ToolIcon />
          <Text style={BasicCardStyles.title}>{configCard.title}</Text>
        </View>
      </View>
      <View style={BasicCardStyles.body}>
        <Text
          style={{
            ...configCardStyles.red,
            ...configCardStyles.big,
          }}>
          {configCard.progress}%
        </Text>
        <Text style={configCardStyles.red}>completato</Text>
        <Text style={configCardStyles.description as any}>
          {configCard.description}
        </Text>
      </View>
      <TouchableOpacity style={BasicCardStyles.linkContainer}>
        <Text style={BasicCardStyles.link as any}>{configCard.linkText}</Text>
        <ArowRight />
      </TouchableOpacity>
    </CardContainer>
  );
}
