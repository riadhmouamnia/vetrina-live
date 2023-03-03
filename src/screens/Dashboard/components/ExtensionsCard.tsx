import {Text, View} from 'react-native';
import React from 'react';
import CardContainer from 'components/CardContainer';
import {ArowRight, NewAppIcon} from 'components/Icons';
import {extentions} from 'data';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import SliderCard from 'screens/Dashboard/components/SliderCard';
import {BasicCardStyles} from 'styles/global';
import {ExtentionsCardStyles} from 'screens/Dashboard/styles/DashboardStyles';

export default function ExtensionsCard() {
  return (
    <CardContainer>
      <View style={BasicCardStyles.header}>
        <View style={BasicCardStyles.left}>
          <NewAppIcon />
          <Text style={BasicCardStyles.title}>{extentions.title}</Text>
        </View>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {extentions.cards.map(card => (
          <SliderCard data={card} key={card.key} />
        ))}
      </ScrollView>
      <TouchableOpacity style={ExtentionsCardStyles.linkContainer}>
        <Text style={ExtentionsCardStyles.link}>{extentions.link}</Text>
        <ArowRight />
      </TouchableOpacity>
    </CardContainer>
  );
}
