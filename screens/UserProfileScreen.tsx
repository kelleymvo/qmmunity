import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { View } from '../components/Themed';
import { SafeAreaView, FlatList, StatusBar, ScrollView, Button, TouchableOpacity } from 'react-native';
import { Avatar, Badge, Icon, Rating, Header, Text, withBadge } from 'react-native-elements';

export default function UserProfileScreen() { 

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>


     {/* Standard Avatar */}
      <Avatar
        size="large"
        rounded source={{
        uri:
        'https://github.com/CNHCircleK/Images/blob/master/DBoard/OliviaChang.jpg?raw=true'}}/>

    {/* User Name*/}
      <Text h2>Olive Chang</Text>
      
    {/* Profile Edit Option */}
      <Text h4> Edit Profile</Text>
      <Text> put the options here idk how lol textinput box?</Text>
    
    

    {/* Badges */}
     <Text style={{fontWeight: "bold"}}>Badges</Text>
     <Text>Pioneer</Text> 
     <Text>Conversation Starter</Text> 
     <Text>Rising Star</Text> 
     <Text>Veteran Member</Text> 

    {/* Facility/Provider bookmarks*/}
     <Text style={{fontWeight: "bold"}}>Bookmarks</Text>

    
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