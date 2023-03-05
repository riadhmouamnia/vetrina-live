import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {lightyGrey, white, primaryBlack} from 'theme/color';

type CardData = {
  link: string;
  icon?: any;
  title?: string;
  subTitle?: string;
  color?: string;
};

export default function SliderCard({
  link,
  icon,
  title,
  subTitle,
  color,
}: CardData) {
  return (
    <View style={styles.container}>
      <View
        style={{
          ...styles.card,
          backgroundColor: color ? color : lightyGrey,
        }}>
        <View style={styles.content}>
          {icon ? icon : null}
          {title ? <Text style={styles.title}>{title}</Text> : null}
          {subTitle ? <Text style={styles.subtitle}>{subTitle}</Text> : null}
        </View>
      </View>
      <Text style={styles.link}>{link}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 8,
    marginVertical: 20,
  },
  card: {
    justifyContent: 'center',
    width: 160,
    height: 160,
    borderRadius: 12,
  },
  content: {
    alignItems: 'center',
  },
  title: {
    fontFamily: 'SourceSansPro-SemiBold',
    textAlign: 'center',
    fontSize: 40,
    color: white,
  },
  subtitle: {
    fontFamily: 'SourceSansPro-SemiBold',
    fontSize: 25,
    color: white,
    textAlign: 'center',
  },
  link: {
    marginTop: 10,
    color: primaryBlack,
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 15,
    marginBottom: 18,
  },
});
