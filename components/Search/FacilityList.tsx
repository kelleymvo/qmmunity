import * as React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView, FlatList, StatusBar, View, Text, TouchableOpacity } from 'react-native';

const renderFacility = ({ item }) =>
  <View style={styles.container}>
    <Text style={{ fontSize: 18 }}>{item.name} ({item.location})</Text>
  </View>

export default function SearchResult({search}) {

  const facilitySource = (FACILITIES.filter(p => p.name.toLowerCase().includes(search.toLowerCase()) || p.location.toLowerCase().includes(search.toLowerCase()))); // TODO: Fuzzy search

  return (
    <SafeAreaView style={styles.container}>

      facilitySource.length ? 
        <FlatList extraData={facilitySource} data={facilitySource} renderItem={({item}) => <TouchableOpacity onPress={() => {navigation.navigate('Facility')}}  style={styles.item}>{renderFacility({item})}</TouchableOpacity>} keyExtractor={item => item.id} />
        :
        <Text>None found!</Text>
    </SafeAreaView>
  );
}

const FACILITIES = [
  {
    name: "Kaiser",
    location: "Downey",
    id: "sda90",
  },
  {
    name: "Kaiser",
    location: "Anaheim",
    id: "sdjks",
  },
  {
    name: "Anaheim Regional Medical Center",
    location: "Anaheim",
    id: "dnsja",
  },
  {
    name: "Huntington Memorial Hospital",
    location: "Huntington Beach",
    id: "dsjds",
  },
  {
    name: "Bakersfield Memorial Hospital",
    location: "Bakersfield",
    id: "sdhsa",
  },
  {
    name: "Torrance Memorial Hospital",
    location: "Torrance",
    id: "sys90",
  },
  {
    name: "Kaiser",
    location: "Vallejo",
    id: "isdns",
  },
  {
    name: "Coast Plaza Hospital",
    location: "Norwalk",
    id: "jsja8",
  },
  {
    name: "Adventist Health Hanford",
    location: "Hanford",
    id: "djs9a",
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});