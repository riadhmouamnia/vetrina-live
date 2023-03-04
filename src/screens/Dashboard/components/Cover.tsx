import {StyleSheet, Text} from 'react-native';
import React, {useContext} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {LinkIcon} from 'components/Icons';
import {dashboardCoverlink} from 'data';
import LinearGradient from 'react-native-linear-gradient';
import color from 'theme/color';
import {AuthContext} from 'context/AuthContext';

export default function Cover() {
  const {user} = useContext<any>(AuthContext);
  const getUserName = () => {
    if (user) {
      const displayName = user?.displayName.split(' ');
      return displayName[0];
    } else {
      return null;
    }
  };
  return (
    <LinearGradient
      start={{x: 1, y: 0}}
      end={{x: 1, y: 1.3}}
      colors={[color.primaryBlue, color.primaryBlueOpacity]}
      style={styles.container}>
      <Text style={styles.title}>
        {user.displayName ? `Welcome ${getUserName()}!` : 'Welcome Luna!'}
      </Text>
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
    height: '8.1%', //8.8%
  },
  title: {
    fontFamily: 'SourceSansPro-SemiBold',
    color: color.white,
    fontSize: 35,
    marginVertical: 15,
  },
  link: {
    fontFamily: 'SourceSansPro-Regular',
    color: color.white,
    fontSize: 17,
    marginRight: 10,
  },
  linkContainer: {
    flexDirection: 'row',
  },
});
