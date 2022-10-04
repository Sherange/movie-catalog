import React from 'react';
import PropTypes from 'prop-types';
import {Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {primaryTextColor, secondryTextColor} from '../constants/theme';

const MovieCard = ({item}) => {
  return (
    <TouchableOpacity style={styles.movieCardStyle} onPress={() => {}}>
      <Image style={styles.movieCardThumbnail} source={{uri: item.image}} />
      <Text style={styles.movieTitleStyle}>{item.title}</Text>
      <Text style={styles.movieSubtitleStyle}>
        {item.year} | {item.imDbRating}
      </Text>
    </TouchableOpacity>
  );
};

MovieCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.string,
    imDbRating: PropTypes.string,
  }),
};

const styles = StyleSheet.create({
  movieCardStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginTop: 27,
  },
  movieCardThumbnail: {
    width: 164,
    height: 250,
  },
  movieTitleStyle: {
    fontSize: 16,
    color: primaryTextColor,
    marginTop: 7,
  },
  movieSubtitleStyle: {
    fontSize: 12,
    color: secondryTextColor,
    marginTop: 4,
  },
});

export default MovieCard;
