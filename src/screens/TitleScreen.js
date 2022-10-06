import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  useColorScheme,
  StyleSheet,
} from 'react-native';
import {useSelector} from 'react-redux';

import {backgroundColor, primaryTextColor} from '../constants/theme';
import useMovie from '../hooks/useMovie';

const TitleScreen = ({route}) => {
  const {params} = route;

  const isDarkMode = useColorScheme() === 'dark';

  const {fetchMovieTitle} = useMovie();

  //get state from redux-store
  const {movieTitle} = useSelector(state => state.movies);

  console.log('movieTitle', movieTitle);

  useEffect(() => {
    fetchMovieTitle(params.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar
        barStyle={!isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={styles.backgroundStyle.backgroundColor}
      />
      <View style={styles.titleScreenContainer}>
        <Text style={styles.titeStyle}>Title Screen</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    flexGrow: 1,
    backgroundColor: backgroundColor,
  },
  titleScreenContainer: {
    flex: 1,
    // justifyContent: 'center',
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
});

export default TitleScreen;
