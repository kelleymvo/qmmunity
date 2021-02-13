import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import { SafeAreaView, FlatList, StatusBar } from 'react-native';


export default function TabOneScreen() {

  return (
    <SafeAreaView style={styles.container}>
      <Text>This is a profile</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});