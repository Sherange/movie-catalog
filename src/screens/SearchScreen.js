import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
  StyleSheet,
  View,
  FlatList,
} from 'react-native';
import {Input} from '@rneui/themed';
import {useSelector} from 'react-redux';
import AppButton from '../components/AppButton';
import {backgroundColor, primaryTextColor} from '../constants/theme';
import useMovie from '../hooks/useMovie';
import SearchCard from '../components/SearchCard';

const SearchScreen = ({navigation, route}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const {fetchPopularMovies} = useMovie();

  useEffect(() => {
    fetchPopularMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //get state from redux-store
  const {popularList} = useSelector(state => state.movies);

  const renderItem = ({item}) => {
    return (
      <SearchCard
        item={item}
        onPress={() => navigation.navigate('TitleScreen', {id: item.id})}
      />
    );
  };

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar
        barStyle={!isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={styles.backgroundStyle.backgroundColor}
      />
      <View style={styles.scrollViewStyle} bounces={false}>
        <Text style={styles.screnTitleStyle}>Search Screen</Text>
        <Input placeholder="Search title, ex lost 2004" />
        <AppButton />
        <FlatList
          data={popularList}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          // extraData={selectedId}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    flexGrow: 1,
    backgroundColor: backgroundColor,
  },
  scrollViewStyle: {
    backgroundColor: backgroundColor,
    color: primaryTextColor,
    marginHorizontal: 16,
    marginVertical: 16,
  },
  screnTitleStyle: {
    fontSize: 18,
    fontWeight: '600',
    color: primaryTextColor,
    marginVertical: 16,
  },
});

export default SearchScreen;
