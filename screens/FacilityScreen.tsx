import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { View } from '../components/Themed';
import { SafeAreaView, FlatList, StatusBar, ScrollView, Button, TouchableOpacity, Animated } from 'react-native';
import { Avatar, Badge, Icon, Rating, Header, Text, withBadge, Slider } from 'react-native-elements';

export default function FacilityScreen() { 

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>


     {/* Standard Avatar with mini badge */}
     
      <Avatar
       rounded source={{
      uri: 'https://github.com/CNHCircleK/Images/blob/master/DBoard/OliviaChang.jpg?raw=true', }} size="large" />
        <Badge
      status="success"
      containerStyle={{ position: 'absolute', top: -4, right: -4 }} />

    {/* Facil Name*/}
      <Text h1>Kaiser Permanente Downey</Text>
      
     {/* Facility Info */}
      <Text h4> -Hours and accepted payments, insurance providers- </Text>
    
    {/* Ratings */}
     <Text h3>Ratings</Text>

      <Text>Qmmunity Rating</Text>

      <Rating imageSize={20} readonly startingValue={5} style={styles.rating} />

      <Text>CMS Rating</Text>
      <Rating imageSize={20} readonly startingValue={5} style={styles.rating} />

    {/* Badges */}
     <Text style={{fontWeight: "bold"}}>Badges</Text>
     <Text>Trans Friendly</Text> 
     <Text>Trauma Informed</Text> 
     <Text>Caring</Text> 
     <Text>Welcoming</Text> 

    {/* Affiliated Providers*/}
     <Text style={{fontWeight: "bold"}}>Affiliated Providers</Text>

    {/* Contact */}
      <Button title="Make an appointment"/>
      <Button title="Website"/>
   
    {/* Location*/}
     <Text style={{fontWeight: "bold"}}>Location</Text>


      {/* Detailed Ratings */}
     <Text h3> Detailed Ratings</Text>

      <Text>Qmmunity Rating</Text>

      <Rating imageSize={20} readonly startingValue={5} style={styles.rating} />

      <Text>Professionalism</Text>
     
      <Rating imageSize={20} readonly startingValue={5} style={styles.rating} />
    
      <Text>Quality of Care</Text>
      <Rating imageSize={20} readonly startingValue={5} style={styles.rating} />

      <Text>Friendliness</Text>
      <Rating imageSize={20} readonly startingValue={5} style={styles.rating} />

      <Text>CMS Rating</Text>
      <Rating imageSize={20} readonly startingValue={5} style={styles.rating} />

      {/* Scores Sliders */}
     <Text h4> Detailed Ratings</Text>
     <Text>Scores based on CMS national average</Text>

    {/* User Preview */}
     <Text style={{fontWeight: "bold"}}>What Users Are Saying</Text>
      
      <Text>Very friendly and made me feel heard.</Text> 
      <Text>Professional and very nice.</Text>
      <Text>See More {/* insert icon right chevron */}</Text>

     {/* Rate Button */}
      <Button title="RATE KAISER"/>

    </ScrollView>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  scrollView: {
    alignItems: 'center',
  }
});