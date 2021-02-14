import React, { Component, useState, useEffect } from 'react';
import { Alert, Button, TextInput, SafeAreaView, FlatList, StatusBar, StyleSheet } from 'react-native';
import EditScreenInfo from '../../components/EditScreenInfo';
import { View } from '../../components/Themed';
import { Text } from 'react-native-elements'
import * as GoogleSignIn from 'expo-google-sign-in';


export default LoginScreen = ({ navigation }) => {
  const [login, onChangeLogin] = React.useState('');
  const [password, onChangePass] = React.useState('');
  const [user, setUser] = React.useState(null);
  
  useEffect (() => {initAsync()}, []) 
  const initAsync = async () => {
    await GoogleSignIn.initAsync({
      // You may ommit the clientId when the firebase `googleServicesFile` is configured
      clientId: '979012396422-tr8cce4tpuomf7cmghiep8j8b0ireb6e.apps.googleusercontent.com',
    });
    _syncUserWithStateAsync();
  };

  const _syncUserWithStateAsync = async () => {
    const user = await GoogleSignIn.signInSilentlyAsync();
    setUser( user );
  };

  const signOutAsync = async () => {
    await GoogleSignIn.signOutAsync();
    setUser( null );
  };

  const signInAsync = async () => {
    try {
      await GoogleSignIn.askForPlayServicesAsync();
      const { type, user } = await GoogleSignIn.signInAsync();
      if (type === 'success') {
        _syncUserWithStateAsync();
      }
    } catch ({ message }) {
      alert('login: Error:' + message);
    }
  };

  const onPress = () => {
    if (user) {
      signOutAsync();
    } else {
      signInAsync();
      navigation.navigate("Root");
    }
  };

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
   <Button
        title="Sign in with Google"
        onPress={onPress}
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
