import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s } from 'react-native-size-matters';
import Scheduleheader from '../components/Scheduleheader';
import Weeklist from '../components/Weeklist';

const Schedule = () => {
  return (
    <View style={styles.container}>
      <Scheduleheader />
      {/* Week List Here */}
      <Weeklist />
    </View>
  );
};

export default Schedule;

const styles = StyleSheet.create({
  container: { marginHorizontal: s(15) },
});
