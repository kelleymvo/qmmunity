import * as React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView, FlatList, StatusBar, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const renderFacility = ({ item }) =>
  <LinearGradient
    colors={['#6518D3', '#3A2A53']}
    style={styles.item}>
    <Text style={{ color: 'white', fontSize: 18 }}>{item.name} ({item.location})</Text>
  </LinearGradient>

export default function SearchResult({search}) {

  const navigation = useNavigation();
  const facilitySource = (FACILITIES.filter(p => p.name.toLowerCase().includes(search.toLowerCase()) || p.location.toLowerCase().includes(search.toLowerCase()))); // TODO: Fuzzy search

  return (
    <SafeAreaView style={styles.container}>

      {facilitySource.length ? 
        <FlatList contentContainerStyle={{alignItems: 'center'}}
         extraData={facilitySource} data={facilitySource} renderItem={({item}) => <TouchableOpacity style={styles.itemContainer} onPress={() => {navigation.navigate('FacilityProfile', { name: item.name })}}  style={styles.item}>{renderFacility({item})}</TouchableOpacity>} keyExtractor={item => item.id} />
        :
        <Text>None found!</Text>}
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
    backgroundColor: "white"
  },
  itemContainer: {
    width: Dimensions.get('screen').width - 40,
    marginTop: 15,
    paddingVertical: 10
  },
  itemImg: {
    height: "100%"
  },
  item: {
    flex: 1,
    flexDirection: "row",
    paddingVertical: 10,
    borderRadius: 10,
  },
});