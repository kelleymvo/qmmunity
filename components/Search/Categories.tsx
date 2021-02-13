import * as React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView, FlatList, StatusBar, Text, TouchableOpacity } from 'react-native';

const CATEGORIES = [ {key: "Hospitalists"},
  {key: "Pediatrics"}, {key: "Family Care"}];

export default function Categories({ selectCat }) {
  const renderCategory = ({item}) => <TouchableOpacity onPress={() => selectCat(item.key)}  style={styles.item}><Text>{item.key}</Text></TouchableOpacity>

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={CATEGORIES} renderItem={renderCategory} keyExtractor={item => item.key} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});