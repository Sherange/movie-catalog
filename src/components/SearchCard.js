import React from 'react';
import PropTypes from 'prop-types';
import {Image, Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {primaryTextColor, secondryColor} from '../constants/theme';

const SearchCard = ({item, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.movieCardStyle}>
        <Image style={styles.movieCardThumbnail} source={{uri: item.image}} />
        <View style={styles.contentContainer}>
          <Text style={styles.movieTitleStyle}>{item.title}</Text>
          <Text style={styles.movieSubtitleStyle}>{item.resultType}</Text>
          <Text style={styles.movieSubtitleStyle}>{item.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

SearchCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string,
    resultType: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  }),
  onPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  movieCardStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 16,
  },
  movieCardThumbnail: {
    // borderRadius: 16,
    width: 100,
    height: 150,
    backgroundColor: 'red',
  },
  movieTitleStyle: {
    fontSize: 18,
    fontWeight: '600',
    color: primaryTextColor,
    marginTop: 7,
  },
  movieSubtitleStyle: {
    fontSize: 16,
    fontWeight: '600',
    color: secondryColor,
    marginTop: 4,
  },
  ratingContainerStyle: {
    alignItems: 'flex-start',
    marginTop: 16,
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 16,
    justifyContent: 'center',
  },
});

export default SearchCard;
