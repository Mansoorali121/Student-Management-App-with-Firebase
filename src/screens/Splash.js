import { StyleSheet, View } from 'react-native';
import React from 'react';
import Splasheader from '../components/Splasheader';
import theme from '../common/Theme';
import SplashCard from '../components/SplashCard';
import Splashdots from '../components/Splashdots';

const Splash = () => {
  return (
    <View style={styles.container}>
      <Splasheader />

      <SplashCard />

      <Splashdots />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
  },
});
