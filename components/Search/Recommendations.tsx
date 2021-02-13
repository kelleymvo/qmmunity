import * as React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView, FlatList, StatusBar, Text, TouchableOpacity } from 'react-native';

const CATEGORIES = [ {key: "Hospitalists"},
  {key: "Pediatrics"}, {key: "Family Care"}];

export default function Recommendations() {

  return (
    <SafeAreaView style={styles.container}>
      <Text>Here is a recommendation</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});