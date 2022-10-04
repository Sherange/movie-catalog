import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  useColorScheme,
  StyleSheet,
} from 'react-native';

import {backgroundColor, primaryTextColor} from '../constants/theme';

const TitleScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';

  //
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
