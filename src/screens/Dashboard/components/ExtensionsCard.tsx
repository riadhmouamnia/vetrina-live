import {Text, View} from 'react-native';
import React from 'react';
import CardContainer from 'components/CardContainer';
import {ArowRight, DomainIcon, NewAppIcon} from 'components/Icons';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import SliderCard from 'screens/Dashboard/components/SliderCard';
import {BasicCardStyles} from 'styles/global';
import {ExtentionsCardStyles} from 'screens/Dashboard/styles/DashboardStyles';
import {blueTint, orange, primaryBlue, primaryGreen, white} from 'theme/color';
import {Icon} from 'react-native-elements';

export interface CardData {
  key: number;
  link: string;
  icon?: any;
  title?: string;
  subTitle?: string;
  color?: string;
}

export interface ExtensionsData {
  title: string;
  link: string;
  cards: CardData[];
}

const extentions: ExtensionsData = {
  title: 'Extensions Marketplace',
  link: 'Discover all extensions',
  cards: [
    {key: 1, link: 'Custom Domain', icon: <DomainIcon />, color: orange},
    {
      key: 2,
      link: '+ 50 Products',
      title: '+50',
      subTitle: 'Prodotti',
      color: primaryGreen,
    },
    {
      key: 3,
      link: 'Gaming',
      icon: (
        <Icon
          name="game-controller-outline"
          type="ionicon"
          size={80}
          color={white}
        />
      ),
      color: blueTint,
    },
    {
      key: 4,
      icon: <Icon name="gift-outline" type="ionicon" size={35} color={white} />,
      link: '+ 100 gifts',
      subTitle: 'Gifts',
      color: primaryBlue,
    },
  ],
};

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
          <SliderCard {...card} key={card.key} />
        ))}
      </ScrollView>
      <TouchableOpacity style={ExtentionsCardStyles.linkContainer}>
        <Text style={ExtentionsCardStyles.link}>{extentions.link}</Text>
        <ArowRight />
      </TouchableOpacity>
    </CardContainer>
  );
}
