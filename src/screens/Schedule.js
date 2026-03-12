import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s } from 'react-native-size-matters';
import Scheduleheader from "../components/Scheduleheader";

const Schedule = () => {
  return (
    <View style={styles.container}>
      <Scheduleheader/>
    </View>
  );
};

export default Schedule;

const styles = StyleSheet.create({
  container: { marginHorizontal: s(15) },
});
