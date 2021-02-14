import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { View } from '../components/Themed';
import { SafeAreaView, FlatList, StatusBar, ScrollView, Button, TouchableOpacity } from 'react-native';
import { Avatar, Badge, Icon, Rating, Header, Text, withBadge } from 'react-native-elements';

export default function ProviderScreen() { 

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>


     {/* Standard Avatar */}
     <View style={{backgroundColor: 'transparent'}}>
      <Avatar
       rounded source={{
      uri: 'https://github.com/CNHCircleK/Images/blob/master/DBoard/OliviaChang.jpg?raw=true', }} size="large" />
        <Icon type="ionicon" name="checkmark-circle" color="#77D1C5"
      containerStyle={{ position: 'absolute', bottom: 0, right: 0}} />
      </View>
      <Avatar
        size="large"
        rounded source={{
        uri:
        'https://github.com/CNHCircleK/Images/blob/master/DBoard/OliviaChang.jpg?raw=true'}}/>

    {/* Provider Name*/}
      <Text h1>Dr. Jamie Robinson</Text>
      
    {/* Pronouns and Practice */}
      <Text h4>She/Her</Text>
      <Text h4 style={{fontWeight: "bold"}}>Cardiologist</Text>
    
    {/* About me */}
      <Text h4> About me: I am LGBTQ+ friendly and culturally informed. </Text>
    
    {/* Ratings */}
     <Text h3>Ratings</Text>

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
    
    {/* User Preview */}
     <Text style={{fontWeight: "bold"}}>What Users Are Saying</Text>
      
      <Text>Very friendly and made me feel heard.</Text> 
      <Text>Professional and very nice.</Text>
      <Text>See More {/* insert icon right chevron */}</Text>
    {/* Rate Button */}
      <Button title="Rate Dr. Jamie Robinson"/>

    {/* Badges */}
     <Text style={{fontWeight: "bold"}}>Badges</Text>
     <Text>Trans Friendly</Text> 
     <Text>Trauma Informed</Text> 
     <Text>Caring</Text> 
     <Text>Welcoming</Text> 

    {/* Affiliated Facilities*/}
     <Text style={{fontWeight: "bold"}}>Affiliated Facilities</Text>

    {/* Contact */}
      <Button title="Call me"/>
      <Button title="Website"/>

    
    </ScrollView>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  scrollView: {
    alignItems: 'center',
    paddingTop: StatusBar.currentHeight || 0,
  }
});