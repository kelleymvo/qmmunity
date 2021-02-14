import React, {useState} from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Categories from '../components/Search/Categories';
import SearchResult from '../components/Search/SearchResult';
import Recommendations from '../components/Search/Recommendations';

import { SafeAreaView, FlatList, StatusBar } from 'react-native';
import { SearchBar } from 'react-native-elements';

export default function SearchScreen() {

  const [search, setSearch] = useState("");
  const [searching, setSearching] = useState(false);
  const [filtering, setFiltering] = useState(false);
  const [finishedSearch, setFinishSearch] = useState(false);
  const [filters, setFilters] = useState([]);

  const updateSearch = (text) => (setSearch(text) && setFinishSearch(false));
  const filterSearch = (flt) => (setFilters(filters.push(flt)) && setFiltering(true));

  const underSearch = (search, filter, finishedSearch) => {
    if (finishedSearch)
      return <SearchResult search={search}/>;
    else if (search == "")
      return <Categories selectCat={filterSearch}/>;
    else
      return <Recommendations search={search}/>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar placeholder="Search" 
      platform="ios"
      autoFocus={true}
      onChangeText={updateSearch} 
      value={search}
      onFocus={() => setSearching(true)}
      onBlur={() => setSearching(false)}
      onSubmitEditing={() => setFinishSearch(true) && setFiltering(false)}
      returnKeyType="search"
      />

      {underSearch(search, [], finishedSearch)}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});