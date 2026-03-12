import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s } from 'react-native-size-matters';
import theme from '../common/Theme';
import Footerbox from "../components/Footerbox";

const Footeritems = ({time}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.time}>{time}</Text>
    </View>
  );
};

export default Footeritems;

const styles = StyleSheet.create({
  container: { },
  time: { color: theme.colors.secondary },
});
