import {StyleSheet, View} from 'react-native';
import React from 'react';

export default function BottomSpacer() {
  return <View style={styles.space} />;
}

const styles = StyleSheet.create({
  space: {
    width: '100%',
    height: 280,
    marginTop: 40,
  },
});
