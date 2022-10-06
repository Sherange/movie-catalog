import React from 'react';
import PropTypes from 'prop-types';
import {Image, Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {AirbnbRating} from '@rneui/themed';
import {primaryTextColor, secondryColor} from '../constants/theme';

const SearchCard = ({item, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.movieCardStyle}>
        <Image
          style={styles.movieCardThumbnail}
          source={{uri: item.image}}
          resizeMode={'contain'}
        />
        <View style={{flex: 1, flexDirection: 'column', marginLeft: 8}}>
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
      </View>
    </TouchableOpacity>
  );
};

SearchCard.propTypes = {
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
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 16,
  },
  movieCardThumbnail: {
    // borderRadius: 16,
    width: 170,
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
    color: secondryColor,
    marginTop: 4,
  },
  ratingContainerStyle: {
    alignItems: 'flex-start',
    marginTop: 16,
  },
});

export default SearchCard;
