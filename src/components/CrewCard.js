import React from 'react';
import {StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {ListItem, Avatar} from '@rneui/themed';
import {backgroundColor, primaryTextColor} from '../constants/theme';

const CrewCard = ({item}) => (
  <ListItem bottomDivider containerStyle={styles.containerStyle}>
    <Avatar
      rounded
      title={item.name[0]}
      source={item.image && {uri: item.image}}
    />
    <ListItem.Content>
      <ListItem.Title style={styles.crewTitle}>{item.name}</ListItem.Title>
      <ListItem.Subtitle style={styles.crewTitle}>
        {item.asCharacter}
      </ListItem.Subtitle>
    </ListItem.Content>
  </ListItem>
);

CrewCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    asCharacter: PropTypes.string,
  }),
};

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: backgroundColor,
  },
  crewTitle: {color: primaryTextColor},
  crewCast: {color: primaryTextColor},
});

export default CrewCard;
