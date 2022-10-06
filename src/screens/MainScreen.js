import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  FlatList,
  View,
  Text,
  useColorScheme,
  StyleSheet,
} from 'react-native';

import {useSelector} from 'react-redux';

import MovieCard from '../components/MovieCard';
import {backgroundColor, primaryTextColor} from '../constants/theme';
import useMovie from '../hooks/useMovie';

const MainScreen = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const {fetchPopularMovies} = useMovie();

  //get state from redux-store
  const {popularList} = useSelector(state => state.movies);

  const renderItem = ({item}) => {
    return (
      <MovieCard
        item={item}
        onPress={() => navigation.navigate('TitleScreen', {id: item.id})}
      />
    );
  };

  useEffect(() => {
    fetchPopularMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar
        barStyle={!isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={styles.backgroundStyle.backgroundColor}
      />
      <View style={styles.mainContainer}>
        <Text style={styles.titeStyle}>Most Popular Movies</Text>
        <FlatList
          data={popularList}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={2}
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
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: backgroundColor,
    marginHorizontal: 16,
    marginVertical: 16,
  },
  titeStyle: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'left',
    color: primaryTextColor,
    marginVertical: 8,
  },
  tabViewContainerStyle: {
    flex: 1,
  },
});

export default MainScreen;
