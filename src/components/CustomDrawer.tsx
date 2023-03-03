import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import color from 'theme/color';
import {Icon} from 'react-native-elements';

export default function CustomDrawer(props: any) {
  return (
    <View style={{flex: 1}}>
      <LinearGradient
        start={{x: 0, y: 0.8}}
        end={{x: 1.2, y: 0.1}}
        colors={[color.primaryBlue, color.primaryBlueOpacity]}
        style={styles.container}>
        <Image
          source={require('../assets/images/avatar1.png')}
          style={styles.avatar}
        />
        <Text style={styles.userName}>John Doe</Text>
        <View style={styles.balanceContainer}>
          <Text style={styles.balance}>280 Coins</Text>
          <Icon
            name="wallet-outline"
            type="ionicon"
            size={16}
            color={color.white}
          />
        </View>
      </LinearGradient>
      <DrawerContentScrollView {...props}>
        <View style={{paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => {}} style={styles.signOutButton}>
          <View style={styles.signOut}>
            <Icon
              name="log-out-outline"
              type="ionicon"
              color={color.secondaryBlack}
              size={25}
            />
            <Text style={styles.text}>Sign Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 23,
    paddingVertical: 25,
  },
  avatar: {
    height: 80,
    width: 80,
    borderRadius: 40,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: color.primaryBlack,
  },
  userName: {
    color: color.white,
    fontSize: 28,
    fontFamily: 'SourceSansPro-SemiBold',
    marginBottom: 5,
  },
  balance: {
    color: color.white,
    fontFamily: 'SourceSansPro-Regular',
    marginRight: 5,
  },
  balanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    fontFamily: 'SourceSansPro-SemiBold',
    marginLeft: 5,
    color: color.secondaryBlack,
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: color.lightyGrey,
  },
  signOut: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  signOutButton: {
    paddingVertical: 15,
  },
});
