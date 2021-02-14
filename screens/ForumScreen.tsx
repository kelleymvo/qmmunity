import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function ForumScreen ({ navigation }) {

  return (
    <View style={styles.containerView}>

            <View style={{ alignItems: 'center' }}>
                 <Image source={ require('../assets/images/Forum.png') } />
            </View>

  </View>)
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1, backgroundColor: '#FFFFFF'
  },
 item: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,

  },
  whole: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    zIndex: 10
  },
  buttons: {
    zIndex: 11
  }
});