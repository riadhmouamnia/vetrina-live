import {Text, View, Image} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ImageCardStyles} from 'screens/Dashboard/styles/DashboardStyles';

type Props = {
  title: string;
  subTitle: string;
  body: object;
  author: string;
  image: any;
  navigation: any;
};

export default function CardImg({
  title,
  subTitle,
  body,
  image,
  author,
  navigation,
}: Props) {
  const handlePress = () => {
    navigation.navigate('Latest news', {title, body, author, image, subTitle});
  };
  return (
    <TouchableOpacity style={ImageCardStyles.card} onPress={handlePress}>
      <View style={ImageCardStyles.imageContainer}>
        <Image source={image} style={ImageCardStyles.image} />
      </View>
      <View style={ImageCardStyles.contentContainer}>
        <Text style={ImageCardStyles.title}>{title}</Text>
        <Text numberOfLines={2} style={ImageCardStyles.body}>
          {subTitle}
        </Text>
        <Text style={ImageCardStyles.author}>{author}</Text>
      </View>
    </TouchableOpacity>
  );
}
