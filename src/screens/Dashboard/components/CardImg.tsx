import {Text, View, Image} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ImageCardStyles} from 'screens/Dashboard/styles/DashboardStyles';

type Props = {
  title: string;
  body: string;
  author: string;
  image: any;
};

export default function CardImg({title, body, image, author}: Props) {
  return (
    <TouchableOpacity style={ImageCardStyles.card}>
      <View style={ImageCardStyles.imageContainer}>
        <Image source={image} style={ImageCardStyles.image} />
      </View>
      <View style={ImageCardStyles.contentContainer}>
        <Text style={ImageCardStyles.title}>{title}</Text>
        <Text numberOfLines={2} style={ImageCardStyles.body}>
          {body}
        </Text>
        <Text style={ImageCardStyles.author}>{author}</Text>
      </View>
    </TouchableOpacity>
  );
}
