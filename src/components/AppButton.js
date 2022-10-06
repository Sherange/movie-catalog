import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, Icon} from '@rneui/themed';

const AppButton = () => {
  return (
    <Button radius={16} style={styles.searchButtonStyle} title="Solid Button">
      <Icon name="search" color="white" />
      Search Movie
    </Button>
  );
};

const styles = StyleSheet.create({
  searchButtonStyle: {
    marginHorizontal: 16,
  },
});

export default AppButton;
