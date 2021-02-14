import React, {useState} from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Categories from '../components/Search/categories';
import SearchResult from '../components/Search/SearchResult';
import Recommendations from '../components/Search/Recommendations';

import { SafeAreaView, FlatList, StatusBar } from 'react-native';
import { SearchBar } from 'react-native-elements';

export default function ProviderDashScreen() {

  const [search, setSearch] = useState("");
  const [finishedSearch, setFinishSearch] = useState(false);

  const updateSearch = (text) => setSearch(text);

  const underSearch = (search, filter, finishedSearch) => {
    if (finishedSearch)
      return <SearchResult search={search}/>;
    else if (search == "")
      return <Categories selectCat={updateSearch}/>;
    else
      return <Recommendations/>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar placeholder="Type Here..." 
      onChangeText={updateSearch} 
      value={search}
      onSubmitEditing={() => setFinishSearch(true)}
      returnKeyType="search"
      />

      {underSearch(search, [], finishedSearch)}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});