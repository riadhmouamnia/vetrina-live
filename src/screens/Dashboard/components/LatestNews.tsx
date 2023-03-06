import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {
  diasbledGrey,
  primaryBlack,
  primaryBlue,
  primaryGrey,
  secondaryBlack,
  white,
} from 'theme/color';
import {RouteProp, useRoute} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';

type Params = {
  title: string;
  body: {head: string; body: string; footer: string};
  author: string;
  image: any;
};

export default function LatestNews() {
  const route = useRoute<RouteProp<Record<string, Params>, string>>();
  const {title, body, author, image} = route.params;
  return (
    <ScrollView>
      <View style={styles.cover}>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.author}>Created by: {author}</Text>
        <View style={styles.devider} />
        <Text style={styles.head}>{body.head}</Text>
        <Text style={styles.body}>{body.body}</Text>
        <Text style={styles.body}>{body.footer}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingBottom: 100,
    backgroundColor: white,
  },
  devider: {
    width: 200,
    borderBottomWidth: 1,
    borderBottomColor: diasbledGrey,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  title: {
    fontFamily: 'SourceSansPro-SemiBold',
    color: primaryBlue,
    fontSize: 28,
    marginTop: 20,
  },
  author: {
    color: primaryGrey,
    fontSize: 12,
    marginVertical: 10,
  },
  head: {
    fontFamily: 'SourceSansPro-Regular',
    textAlign: 'left',
    color: secondaryBlack,
    fontSize: 14,
  },
  body: {
    fontFamily: 'SourceSansPro-Regular',
    textAlign: 'left',
    color: secondaryBlack,
    fontSize: 14,
  },
  cover: {
    width: '100%',
    height: 250,
    backgroundColor: 'pink',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
