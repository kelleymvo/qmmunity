import * as React from 'react';
import { StyleSheet } from 'react-native';
import { View, SafeAreaView, StatusBar, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function PicksForYou() {

  return (
    <SafeAreaView style={styles.container}>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
  item: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    paddingVertical: 20,
    marginVertical: 10,
    width: "90%",
    color: "#6518D3",
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#6518D3",
    borderRadius: 10
  }
});