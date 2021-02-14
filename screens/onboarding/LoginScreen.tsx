import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import { SafeAreaView, FlatList, StatusBar, Textinput } from 'react-native';

const UsernameInput = () => {
  const [value, onChangeText] = React.useState('Useless Placeholder');

export default function TabOneScreen() {

  return (
    <SafeAreaView style={styles.container}>
      <Text>Log in</Text>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});