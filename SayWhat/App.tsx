// Install required libraries
// npm install @react-navigation/native @react-navigation/bottom-tabs react-native-reanimated

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Screen Components for each Tab
function HomeScreen() {
  return (
    <View style={styles.center}>
      <Text>Home Screen</Text>
    </View>
  );
}

function DiscoverScreen() {
  return (
    <View style={styles.center}>
      <Text>Discover Screen</Text>
    </View>
  );
}

function FavoritesScreen() {
  return (
    <View style={styles.center}>
      <Text>Favorites Screen</Text>
    </View>
  );
}

function SearchScreen() {
  return (
    <View style={styles.center}>
      <Text>Search Screen</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Discover" component={DiscoverScreen} />
        <Tab.Screen name="Favorites" component={FavoritesScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
