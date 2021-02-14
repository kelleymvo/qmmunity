import React, { Component, useState } from 'react';
import { Alert, Button, TextInput, SafeAreaView, FlatList, StatusBar, StyleSheet } from 'react-native';
import EditScreenInfo from '../../components/EditScreenInfo';
import { View } from '../../components/Themed';
import { Text } from 'react-native-elements'



export default LoginScreen = ({ navigation }) => {
  const [login, onChangeLogin] = React.useState('');
  const [password, onChangePass] = React.useState('');
  
  const tryLogin = () => {
    if (login=="abc" && password=="123")
      navigation.navigate("Root");
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text h2>Log in</Text>
    <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => onChangeLogin(text)}
      value={login}
      placeholder="Username"
    />
    <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => onChangePass(text)}
      value={password}
      placeholder="Password"
      autoCompleteType ="off"
      secureTextEntry={true}
    />
    {/*errorState && <Text>WRONG</Text>*/}
   <Button
        title="Sign in"
        onPress={tryLogin}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});
