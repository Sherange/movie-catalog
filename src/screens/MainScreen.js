import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  FlatList,
  View,
  Text,
  useColorScheme,
  StyleSheet,
} from 'react-native';

import MovieCard from '../components/MovieCard';
import {backgroundColor, primaryTextColor} from '../constants/theme';

const MainScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const items = [
    {
      id: 'tt1655389',
      rank: '1',
      rankUpDown: '+6',
      title: 'Blonde',
      fullTitle: 'Blonde (2022)',
      year: '2022',
      image:
        'https://m.media-amazon.com/images/M/MV5BNDk2YTA1MGYtMGNjMi00YTJlLWI1YjItMjBjOGJlZGIwZmYzXkEyXkFqcGdeQXVyODA0MjgyNzM@._V1_Ratio0.6716_AL_.jpg',
      crew: 'Andrew Dominik (dir.), Ana de Armas, Lily Fisher',
      imDbRating: '5.6',
      imDbRatingCount: '24907',
    },
    {
      id: 'tt10731256',
      rank: '2',
      rankUpDown: '-1',
      title: "Don't Worry Darling",
      fullTitle: "Don't Worry Darling (2022)",
      year: '2022',
      image:
        'https://m.media-amazon.com/images/M/MV5BMzFkMWUzM2ItZWFjMi00NDY0LTk2MDMtZDhkMDE2MjRlYmZlXkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_Ratio0.6716_AL_.jpg',
      crew: 'Olivia Wilde (dir.), Florence Pugh, Harry Styles',
      imDbRating: '6.2',
      imDbRatingCount: '23573',
    },
  ];

  const renderItem = ({item}) => {
    return <MovieCard item={item} />;
  };

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar
        barStyle={!isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={styles.backgroundStyle.backgroundColor}
      />
      <View style={styles.mainContainer}>
        <Text style={styles.titeStyle}>Main Scren</Text>
        <FlatList
          data={items}
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
    // alignItems: 'center',
    backgroundColor: backgroundColor,
    marginHorizontal: 16,
    marginVertical: 16,
  },
  titeStyle: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'left',
    color: primaryTextColor,
  },
});

export default MainScreen;
