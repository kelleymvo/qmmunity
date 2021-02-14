import * as React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView, FlatList, StatusBar, View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';



const renderProvider = ({ item }) =>
  <LinearGradient
    colors={['#6518D3', '#3A2A53']}
    style={styles.item}>
    <Image style={styles.itemImg} source={{ uri: 'https://github.com/CNHCircleK/Images/blob/master/DBoard/OliviaChang.jpg?raw=true' }} />
    <View style={{ marginLeft: 20}}>
      <Text style={{ color: 'white', fontSize: 18 }}>{item.name} ({item.gender})</Text>
      <Text style={{ color: 'white', fontSize: 12 }}>{item.prac}</Text>
    </View>
  </LinearGradient>

export default function ProviderList({search}) {

  const navigation = useNavigation();
  const providerSource = (PROVIDERS.filter(p => p.name.toLowerCase().includes(search.toLowerCase()) || p.prac.toLowerCase().includes(search.toLowerCase()))); // TODO: Fuzzy search

  return (
    <SafeAreaView style={styles.container}>
      {providerSource.length ? 
        <FlatList contentContainerStyle={{alignItems: 'center'}}
          extraData={providerSource} data={providerSource}
          renderItem={({item}) => <TouchableOpacity style={styles.itemContainer} onPress={() => {navigation.navigate('ProviderProfile', {name: item.name})}}>{renderProvider({item})}</TouchableOpacity>} keyExtractor={item => item.id} />
        :
        <Text style={{alignSelf: "center"}}>No providers found!</Text>}
    </SafeAreaView>
  );
}

const PROVIDERS = [
  {
    name: "John Smith",
    gender: "NB",
    id: "jeryy",
    // medical credentials
    prac: "General Surgery", // practice
  },
  {
    name: "Jane Smith",
    gender: "F",
    id: "4343h",
    // medical credentials
    prac: "Hematology", // practice
  },
  {
    name: "Kim Tabias",
    gender: "M",
    id: "reo49",
    // medical credentials
    prac: "Physical Medicine and Rehabilitation", // practice
  },
  {
    name: "Joe Mama",
    gender: "F",
    id: "g984k",
    // medical credentials
    prac: "Psychology", // practice
  },
  {
    name: "Kevin Ru",
    gender: "M",
    id: "skl23",
    // medical credentials
    prac: "Clinical Social Worker", // practice
  },
  {
    name: "Pramod Batra",
    gender: "M",
    id: "dkl38",
    // medical credentials
    prac: "Neurology", // practice
  },
  {
    name: "Kamalesh Sankhala",
    gender: "M",
    id: "jk980",
    // medical credentials
    prac: "General", // practice
  },
  {
    name: "Glenn Johnson",
    gender: "M",
    id: "yu762",
    // medical credentials
    prac: "Neurosurgery", // practice
  },
  {
    name: "Ebram Abdelmalak",
    gender: "F",
    id: "ko456",
    // medical credentials
    prac: "General Practice", // practice
  },
  {
    name: "Kimberly Lyons",
    gender: "F",
    id: "r2q3s",
    // medical credentials
    prac: "Optometry", // practice
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