import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  FlatList,
  View,
  Text,
  useColorScheme,
  StyleSheet,
} from 'react-native';
import {Tab, TabView} from '@rneui/themed';

import MovieCard from '../components/MovieCard';
import {
  backgroundColor,
  primaryTextColor,
  secondryColor,
} from '../constants/theme';

const MainScreen = ({navigation}) => {
  const [tabIndex, setTabIndex] = useState(0);

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
    {
      id: 'tt15474916',
      rank: '7',
      rankUpDown: '+29',
      title: 'Smile',
      fullTitle: 'Smile (2022)',
      year: '2022',
      image:
        'https://m.media-amazon.com/images/M/MV5BODJkNDY0MDgtYzFmYy00YzMyLThiNGUtOGI3ZjcyNjk0MWFiXkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_Ratio0.6716_AL_.jpg',
      crew: 'Parker Finn (dir.), Sosie Bacon, Jessie T. Usher',
      imDbRating: '7.0',
      imDbRatingCount: '8098',
    },
  ];

  const comingSoon = [
    {
      id: 'tt10751150',
      title: 'Pardoned by Grace',
      fullTitle: 'Pardoned by Grace (2022)',
      year: '2022',
      releaseState: '04 October 2022',
      image: 'https://imdb-api.com/images/128x176/nopicture.jpg',
      runtimeMins: null,
      runtimeStr: null,
      plot: null,
      contentRating: null,
      imDbRating: null,
      imDbRatingCount: null,
      metacriticRating: null,
      genres: null,
      genreList: [],
      directors: null,
      directorList: [],
      stars: null,
      starList: [],
    },
    {
      id: 'tt19770238',
      title: 'Aftersun',
      fullTitle: 'Aftersun (2022)',
      year: '2022',
      releaseState: '05 October 2022',
      image: 'https://imdb-api.com/images/128x176/nopicture.jpg',
      runtimeMins: null,
      runtimeStr: null,
      plot: null,
      contentRating: null,
      imDbRating: null,
      imDbRatingCount: null,
      metacriticRating: null,
      genres: null,
      genreList: [],
      directors: null,
      directorList: [],
      stars: null,
      starList: [],
    },
  ];

  const renderItem = ({item}) => {
    return (
      <MovieCard
        item={item}
        onPress={() => navigation.navigate('TitleScreen')}
      />
    );
  };

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar
        barStyle={!isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={styles.backgroundStyle.backgroundColor}
      />
      <View style={styles.mainContainer}>
        <Tab
          value={tabIndex}
          onChange={tab => setTabIndex(tab)}
          variant="primary"
          indicatorStyle={{backgroundColor: secondryColor}}>
          <Tab.Item containerStyle={{backgroundColor: backgroundColor}}>
            <Text style={styles.titeStyle}>Most Popular Movies</Text>
          </Tab.Item>
          <Tab.Item containerStyle={{backgroundColor: backgroundColor}}>
            <Text style={styles.titeStyle}>Coming Soon</Text>
          </Tab.Item>
        </Tab>

        <TabView value={tabIndex} onChange={setTabIndex}>
          <TabView.Item style={styles.tabViewContainerStyle}>
            <FlatList
              data={items}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              numColumns={2}
              // extraData={selectedId}
            />
          </TabView.Item>
          <TabView.Item style={styles.tabViewContainerStyle}>
            <FlatList
              data={comingSoon}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              numColumns={2}
              // extraData={selectedId}
            />
          </TabView.Item>
        </TabView>
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
    marginVertical: 8,
  },
  tabViewContainerStyle: {
    flex: 1,
  },
});

export default MainScreen;
