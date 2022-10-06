import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
  StyleSheet,
  ScrollView,
} from 'react-native';

import AppButton from '../components/AppButton';
import {backgroundColor, primaryTextColor} from '../constants/theme';

const SearchScreen = ({route}) => {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar
        barStyle={!isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={styles.backgroundStyle.backgroundColor}
      />
      <ScrollView bounces={false}>
        <Text style={styles.subTitleStyle}>Search Screen</Text>
        <AppButton />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    flexGrow: 1,
    backgroundColor: backgroundColor,
  },
  subTitleStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: backgroundColor,
    color: primaryTextColor,
    marginHorizontal: 16,
    marginVertical: 16,
  },
});

export default SearchScreen;
