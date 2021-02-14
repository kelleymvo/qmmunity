import React, {useState} from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { SafeAreaView, FlatList, StatusBar } from 'react-native';
import { SearchBar } from 'react-native-elements';

export default function ExploreScreen({ navigation }) {

  const [searching, setSearching] = useState(false);

  return (
        <SafeAreaView style={styles.container}>
          <View style={styles.rectangle}></View>
          <SearchBar platform="ios" editable={false} onTouchStart={() => navigation.navigate("Search")}/>
          <View style={styles.picks}>
            <Text style={styles.sectionTitle}>Picks for You</Text>

          </View>
          <View style={styles.nearby}>
            <Text style={styles.sectionTitle}>Nearby Locations</Text>

          </View>
        </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  picks: {
    flex: 1,
    marginHorizontal: 10,
    maxHeight: "30%"
  },
  nearby: {
    flex: 1,
    marginHorizontal: 10,
    maxHeight: "30%"
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold"
  },
  rectangle: {
    width: "100%",
    height: 200,
    maxHeight: "30%",
    backgroundColor: "#cccccc"
  }
});