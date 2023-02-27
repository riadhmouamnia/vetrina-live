/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function SectionOne() {
  return (
    <View style={styles.sectionContainer}>
      <Text>Section One</Text>
      <Text>Section One</Text>
      <Text>Section One</Text>
      <Text>Section One</Text>
      <Text>Section One</Text>
      <Text>Section One</Text>
      <Text>Section One</Text>
    </View>
  );
}
function SectionTwo() {
  return (
    <View style={styles.sectionContainer}>
      <Text>Section Two</Text>
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Feed" component={SectionOne} />
        <Drawer.Screen name="Article" component={SectionTwo} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
