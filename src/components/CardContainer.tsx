import {StyleSheet, View} from 'react-native';
import React from 'react';
import color from 'theme/color';

export default function CardContainer({children, color}: any) {
  return (
    <View
      style={{...styles.container, backgroundColor: color ? color : '#fff'}}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 12,
    padding: 25,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    elevation: 3,
    shadowOffset: {width: 0, height: 2},
    shadowColor: color.shadow,
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
});
