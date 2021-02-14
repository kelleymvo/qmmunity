import React, {useState} from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Categories from '../components/Search/Categories';
import SearchResult from '../components/Search/SearchResult';
import Recommendations from '../components/Search/Recommendations';

import { SafeAreaView, FlatList, StatusBar } from 'react-native';
import { SearchBar } from 'react-native-elements';

export default function SearchScreen({ fullView }) {

  const [search, setSearch] = useState("");
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
      <SearchBar placeholder="Type Here..." 
      platform="ios"
      onChangeText={updateSearch} 
      value={search}
      onFocus={() => fullView(true)}
      onBlur={() => fullView(false)}
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
  searchContainer: {
    flex: 1,
    position: 'absolute',
    backgroundColor: 'white',
    top: 0,
    left: 0,
    bottom: 0,
    zIndex: 100,
    elevation: 100
  }
});