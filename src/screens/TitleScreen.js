import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  useColorScheme,
  StyleSheet,
  ImageBackground,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import {useSelector} from 'react-redux';
import {AirbnbRating} from '@rneui/themed';

import {
  backgroundColor,
  primaryTextColor,
  secondryColor,
  secondryTextColor,
} from '../constants/theme';
import useMovie from '../hooks/useMovie';
import CrewCard from '../components/CrewCard';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const TitleScreen = ({route}) => {
  const {params} = route;

  const isDarkMode = useColorScheme() === 'dark';

  const {fetchMovieTitle} = useMovie();

  //get state from redux-store
  const {movieTitle} = useSelector(state => state.movies);

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

      <ScrollView bounces={false}>
        <ImageBackground
          style={styles.coverImage}
          source={{uri: movieTitle.image}}
          resizeMode={'cover'}
        />
        <View style={styles.thumbnailContainer}>
          <Image
            style={styles.thumbnailImage}
            source={{uri: movieTitle.image}}
          />
          <View style={styles.titleScreenContainer}>
            <Text style={styles.titeStyle}>{movieTitle.fullTitle}</Text>
            <Text style={styles.movieDurationStyle}>
              {movieTitle.runtimeStr}
            </Text>
            <AirbnbRating
              count={5}
              defaultRating={parseInt(movieTitle.imDbRating, 10) / 2}
              isDisabled={true}
              reviews={[]}
              showRating={false}
              size={14}
              ratingContainerStyle={styles.ratingContainerStyle}
            />
          </View>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.subTitleStyle}>Synopsis</Text>
          <Text style={styles.captionStyle}>{movieTitle.plot}</Text>
        </View>

        <View style={styles.crewContainer}>
          <Text style={styles.subTitleStyle}>Cast & Crew</Text>
          <ScrollView nestedScrollEnabled>
            {movieTitle.actorList &&
              movieTitle.actorList.map((item, id) => (
                <CrewCard key={id} item={item} />
              ))}
          </ScrollView>
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.subTitleStyle}>Synopsis</Text>
          <Text style={styles.captionStyle}>{movieTitle.plot}</Text>
        </View>
      </ScrollView>
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: backgroundColor,
    marginHorizontal: 16,
    marginVertical: 16,
  },
  titeStyle: {
    fontSize: 24,
    fontWeight: '600',
    color: primaryTextColor,
    marginVertical: 8,
  },
  subTitleStyle: {
    fontSize: 18,
    fontWeight: '600',
    color: primaryTextColor,
    marginVertical: 16,
  },
  captionStyle: {
    fontSize: 14,
    color: secondryTextColor,
    lineHeight: 24,
  },
  movieDurationStyle: {
    fontSize: 16,
    fontWeight: '600',
    color: secondryColor,
    marginVertical: 8,
  },
  coverImage: {
    height: windowHeight * 0.3,
    width: windowWidth,
    opacity: 0.2,
  },
  thumbnailContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: windowHeight * -0.15,
    marginHorizontal: 20,
  },
  thumbnailImage: {
    height: 200,
    width: 150,
  },
  contentContainer: {
    flex: 1,
    marginHorizontal: 16,
  },
  crewContainer: {
    height: 400,
    marginHorizontal: 16,
  },
});

export default TitleScreen;
