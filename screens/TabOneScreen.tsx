import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import { SafeAreaView, FlatList, StatusBar, TouchableOpacity } from 'react-native';

const renderProvider = ({ item }) =>
  <View style={styles.container}>
    <Text style={{ fontSize: 18 }}>{item.name} ({item.gender})</Text>
    <Text style={{ color: "#aaa", fontSize: 12 }}>{item.hospital_affliated} | {item.assgn} </Text>
  </View>

export default function TabOneScreen({navigation}) {

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={DATA} renderItem={({item}) => <TouchableOpacity onPress={() => {navigation.navigate('Provider')}}  style={styles.item}>{renderProvider({item})}</TouchableOpacity>} keyExtractor={item => item.id} />
    </SafeAreaView>
  );
}


const DATA = [
  {
    name: "John Smith",
    gender: "NB",
    id: "jeryy",
    // medical credentials
    hospital_affliated: "Sutter",
    assgn: "Primary Care" // insurance
  },
  {
    name: "Jane Smith",
    gender: "F",
    id: "4343h",
    // medical credentials
    hospital_affliated: "Kaiser",
    assgn: "Medicare" // insurance
  },
  {
    name: "Kim Tabias",
    gender: "M",
    id: "reo49",
    // medical credentials
    hospital_affliated: "Kaiser",
    assgn: "Premium Care" // insurance
  },
  {
    name: "Joe Mama",
    gender: "F",
    id: "g984k",
    // medical credentials
    hospital_affliated: "Anaheim Regional",
    assgn: "Kaiser" // insurance
  },
  {
    name: "Kevin Ru",
    gender: "M",
    id: "skl23",
    // medical credentials
    hospital_affliated: "UCLA Health",
    assgn: "UCSHIP" // insurance
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#5F2EEA',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});