import * as React from 'react';
import { StyleSheet } from 'react-native';
import { View, SafeAreaView, FlatList, StatusBar, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const RECOMMENDATIONS = [ {key: "Insurance"},
  {key: "Pediatrics"}, {key: "Family Care"}];

export default function Recommendations({ search }) {
  const renderCategory = ({item}) =>
    <TouchableOpacity onPress={() => selectCat(item.key)}  style={styles.item}>
      <View style={{ marginHorizontal: 10 }}>
        <Ionicons size={32} name="search" color="#6518D3" />
      </View>
      <Text style={{ color: "#6518D3"}}>Results with {search} {item.key}</Text>
    </TouchableOpacity>

  return (
    <SafeAreaView style={styles.container}>
      <FlatList style={styles.list} data={RECOMMENDATIONS} renderItem={renderCategory} keyExtractor={item => item.key} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
  item: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    paddingVertical: 20,
    marginVertical: 10,
    width: "90%",
    color: "#6518D3",
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#6518D3",
    borderRadius: 10
  }
});