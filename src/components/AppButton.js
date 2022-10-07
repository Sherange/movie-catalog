import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, Icon} from '@rneui/themed';

const AppButton = ({onPress}) => {
  return (
    <Button
      radius={16}
      style={styles.searchButtonStyle}
      title="Solid Button"
      onPress={onPress}>
      <Icon name="search" color="white" />
      Search Movie
    </Button>
  );
};

const styles = StyleSheet.create({
  searchButtonStyle: {
    marginHorizontal: 16,
    marginVertical: 16,
  },
});

export default AppButton;
