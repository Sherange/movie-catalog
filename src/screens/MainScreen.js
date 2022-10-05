import React, {useEffect, useState} from 'react';
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
import {useSelector} from 'react-redux';

import MovieCard from '../components/MovieCard';
import {
  backgroundColor,
  primaryTextColor,
  secondryColor,
} from '../constants/theme';
import useMovie from '../hooks/useMovie';

const MainScreen = ({navigation}) => {
  const [tabIndex, setTabIndex] = useState(0);

  const isDarkMode = useColorScheme() === 'dark';

  const {fetchPopularMovies, fetchUpComingMovies} = useMovie();

  //get state from redux-store
  const {popularList, upComingList} = useSelector(state => state.movies);

  const renderItem = ({item}) => {
    return (
      <MovieCard
        item={item}
        onPress={() => navigation.navigate('TitleScreen')}
      />
    );
  };

  useEffect(() => {
    fetchPopularMovies();
    fetchUpComingMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
              data={popularList}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              numColumns={2}
              // extraData={selectedId}
            />
          </TabView.Item>
          <TabView.Item style={styles.tabViewContainerStyle}>
            <FlatList
              data={upComingList}
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
