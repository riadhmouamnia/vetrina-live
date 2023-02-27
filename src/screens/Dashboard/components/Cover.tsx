import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {LinkIcon} from 'components/Icons';
import {dashboardCoverlink} from 'data';
import LinearGradient from 'react-native-linear-gradient';

export default function Cover() {
  return (
    <LinearGradient
      start={{x: 1, y: 0}}
      end={{x: 1, y: 1.3}}
      colors={['#21B8F9', '#21B8F910']}
      style={styles.container}>
      <Text style={styles.title}>Welcome Mario!</Text>
      <TouchableOpacity style={styles.linkContainer}>
        <Text style={styles.link}>{dashboardCoverlink.link}</Text>
        <LinkIcon />
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    width: '100%',
    height: '8.3%', //8.8%
  },
  title: {
    fontFamily: 'SourceSansPro-SemiBold',
    color: '#FFF',
    fontSize: 35,
    marginVertical: 15,
  },
  link: {
    fontFamily: 'SourceSansPro-Regular',
    color: '#FFF',
    fontSize: 17,
    marginRight: 10,
  },
  linkContainer: {
    flexDirection: 'row',
  },
});
