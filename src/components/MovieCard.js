import React from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {AirbnbRating} from '@rneui/themed';
import {primaryTextColor, secondryTextColor} from '../constants/theme';

const windowWidth = Dimensions.get('window').width;

const MovieCard = ({item, onPress}) => {
  return (
    <View style={styles.movieCardStyle}>
      <TouchableOpacity onPress={onPress}>
        <Image style={styles.movieCardThumbnail} source={{uri: item.image}} />
      </TouchableOpacity>

      <AirbnbRating
        count={5}
        defaultRating={parseInt(item.imDbRating, 10) / 2}
        isDisabled={true}
        reviews={[]}
        showRating={false}
        size={14}
        ratingContainerStyle={styles.ratingContainerStyle}
      />
      <Text style={styles.movieTitleStyle}>{item.title}</Text>
      <Text style={styles.movieSubtitleStyle}>
        {item.year} | {item.imDbRating}
      </Text>
    </View>
  );
};

MovieCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string,
    title: PropTypes.string.isRequired,
    year: PropTypes.string,
    imDbRating: PropTypes.string,
  }),
  onPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  movieCardStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginTop: 27,
    marginLeft: 8,
  },
  movieCardThumbnail: {
    width: (windowWidth - 48) / 2,
    height: 250,
  },
  movieTitleStyle: {
    fontSize: 16,
    fontWeight: '600',
    color: primaryTextColor,
    marginTop: 7,
  },
  movieSubtitleStyle: {
    fontSize: 12,
    fontWeight: '600',
    color: secondryTextColor,
    marginTop: 4,
  },
  ratingContainerStyle: {
    alignItems: 'flex-start',
    marginTop: 16,
  },
});

export default MovieCard;
