import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Dashboard() {
  return (
    <View>
      <Text>Dashboard</Text>
      <Text style={{fontFamily: 'SourceSansPro-Bold', fontSize: 30}}>
        Custom Font
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
