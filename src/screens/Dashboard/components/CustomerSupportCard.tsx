import {Text, View, TouchableOpacity} from 'react-native';
import {Avatar} from 'react-native-elements';
import React from 'react';
import CardContainer from 'components/CardContainer';
import {CustomurSupportIcon} from 'components/Icons';
import {customerSupport} from 'data';
import {CustomerSupportCardStyles} from 'screens/Dashboard/styles/DashboardStyles';
import {BasicCardStyles} from 'styles/global';

export default function CustomerSupportCard() {
  return (
    <CardContainer>
      <View style={BasicCardStyles.header}>
        <View style={BasicCardStyles.left}>
          <CustomurSupportIcon />
          <Text style={BasicCardStyles.title}>{customerSupport.title}</Text>
        </View>
      </View>
      <View style={CustomerSupportCardStyles.body}>
        <Avatar
          containerStyle={CustomerSupportCardStyles.avatar}
          size={38}
          rounded
          source={require('../../../assets/images/avatar1.png')}
        />
        <Text style={CustomerSupportCardStyles.bodyText}>
          {customerSupport.body}
        </Text>
      </View>
      <TouchableOpacity style={CustomerSupportCardStyles.button}>
        <Text style={CustomerSupportCardStyles.buttonText}>Contact us</Text>
      </TouchableOpacity>
    </CardContainer>
  );
}
