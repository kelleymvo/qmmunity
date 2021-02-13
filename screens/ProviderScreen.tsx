import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { SafeAreaView, FlatList, StatusBar } from 'react-native';
import { Avatar, Badge, Icon, Rating, Header } from 'react-native-elements';

export default function ProviderScreen() {

  return (
    <SafeAreaView style={styles.container}>
     //Header
      <Header
      placement="left"
      leftComponent={{ fontSize: 16, text:'Dr. Jamie Robinson', color: '#aaa' }} />
      
     //Avatar Standard
      <Avatar
        rounded source={{
        uri:
        'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg', }}/>

    // Provider Name
    
    //Text Pronouns and Practice

    //Ratings
      <Text>Qmmunity Rating</Text>
      <Rating showRating fractions="{1}" startingValue="{5}" />

      <Text>Professionalism</Text>
      <Rating showRating fractions="{1}" startingValue="{5}" />
    
      <Text>Quality of Care</Text>
      <Rating showRating fractions="{1}" startingValue="{5}" />

      <Text>Friendliness</Text>
      <Rating showRating fractions="{1}" startingValue="{5}" />

      <Text>CMS Rating</Text>
      <Rating showRating fractions="{1}" startingValue="{5}" />

    //

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});