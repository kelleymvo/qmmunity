import * as React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView, FlatList, StatusBar, View, Text, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import ProviderList from './ProviderList';
import FacilityList from './FacilityList';

const Tab = createMaterialTopTabNavigator();

export default function SearchResult({search}) {

  return (
    <SafeAreaView style={styles.container}>
      <Tab.Navigator>
        <Tab.Screen name="Facility" children={()=><FacilityList search={search}/>} />
        <Tab.Screen name="Provider" children={()=><ProviderList search={search}/>} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});