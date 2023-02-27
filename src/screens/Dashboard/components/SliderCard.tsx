import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function SliderCard({data}: any) {
  return (
    <View style={styles.container}>
      <View
        style={{
          ...styles.card,
          backgroundColor: data.color ? data.color : '#EEE',
        }}>
        <View style={styles.content}>
          {data.icon ? data.icon : null}
          {data.title ? <Text style={styles.title}>{data.title}</Text> : null}
          {data.subTitle ? (
            <Text style={styles.subtitle}>{data.subTitle}</Text>
          ) : null}
        </View>
      </View>
      <Text style={styles.link}>{data.link}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 8,
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
    color: '#FFF',
  },
  subtitle: {
    fontFamily: 'SourceSansPro-SemiBold',
    fontSize: 25,
    color: '#FFF',
    textAlign: 'center',
  },
  link: {
    marginTop: 10,
    color: '#103B66',
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 15,
    marginBottom: 18,
  },
});
