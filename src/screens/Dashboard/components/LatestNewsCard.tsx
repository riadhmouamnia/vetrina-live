import {Text, View} from 'react-native';
import React from 'react';
import CardContainer from 'components/CardContainer';
import {ExternalLinkIcon, FileIcon} from 'components/Icons';
import {latestNews} from 'data';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CardImg from 'screens/Dashboard/components/CardImg';
import {BasicCardStyles} from 'styles/global';

export default function LatestNewsCard() {
  return (
    <CardContainer>
      <View style={BasicCardStyles.header}>
        <View style={BasicCardStyles.left}>
          <FileIcon />
          <Text style={BasicCardStyles.title}>{latestNews.title}</Text>
        </View>
      </View>
      <View style={BasicCardStyles.body}>
        {latestNews.eCommerceTips.map(tip => (
          <CardImg
            key={tip.key}
            title={tip.title}
            body={tip.body}
            author={tip.author}
            image={tip.image}
          />
        ))}
      </View>
      <TouchableOpacity style={BasicCardStyles.linkContainer}>
        <Text style={BasicCardStyles.link}>{latestNews.link}</Text>
        <ExternalLinkIcon />
      </TouchableOpacity>
    </CardContainer>
  );
}
