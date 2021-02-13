import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { SafeAreaView, FlatList, StatusBar } from 'react-native';
import { Avatar, Badge, Icon, Rating } from 'react-native-elements';


export default function FacilityScreen() {

  return (
    <SafeAreaView style={styles.container}>
      <Text>This is a profile for a Facility</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});