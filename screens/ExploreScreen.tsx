import React, {useState} from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { SafeAreaView, ScrollView, Image, ImageBackground, StatusBar, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';

export default function ExploreScreen({ navigation }) {

  const [searching, setSearching] = useState(false);

  return (
        <SafeAreaView style={styles.container}>
          <Image style={styles.rectangle} source={require('../assets/images/HomeBanner.png')}/>
          <TouchableOpacity onPress={() => navigation.navigate("Search")}>
            <SearchBar placeholder="Search" platform="ios" editable={false} />
          </TouchableOpacity>
          <View style={styles.picks}>
            <Text style={styles.sectionTitle}>Picks for You</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <ImageBackground style={styles.image} imageStyle={{borderRadius: 20}} source={require('../assets/images/kaiser1.png')}>
                <Text style={styles.imageText}>Kaiser Permanente Downey</Text>
              </ImageBackground>
              <ImageBackground style={styles.image} imageStyle={{borderRadius: 20}} source={require('../assets/images/kaiser2.png')}>
                <Text style={styles.imageText}>Dr. Kevin Ru Medical Office</Text>
              </ImageBackground>
            </ScrollView>
          </View>
          <View style={styles.nearby}>
            <Text style={styles.sectionTitle}>Nearby Locations</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <ImageBackground style={styles.image} imageStyle={{borderRadius: 20}} source={require('../assets/images/kaiser3.png')}>
                <Text style={styles.imageText}>Canyon Dental Implant Center</Text>
              </ImageBackground>
              <ImageBackground style={styles.image} imageStyle={{borderRadius: 20}} source={require('../assets/images/kaiser4.png')}>
                <Text style={styles.imageText}>Star Accupuncture Medical Center</Text>
              </ImageBackground>
            </ScrollView>
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
    fontWeight: "bold",
    marginTop: 15
  },
  image: {
    flex: 1,
    marginRight: 20,
    resizeMode: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageText: {
    paddingTop: 5,
    margin: 30,
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold'
  },
  rectangle: {
    width: "100%",
    height: 200,
    maxHeight: "30%",
    backgroundColor: "#cccccc"
  }
});