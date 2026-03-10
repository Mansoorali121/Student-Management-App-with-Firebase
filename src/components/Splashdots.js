import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s } from 'react-native-size-matters';
import theme from '../common/Theme';

const Splashdots = () => {
  return (
    <View style={styles.container}>
    <View style={styles.dotscontainer}>
        <View style={styles.dot1}></View>
            <View style={styles.dot2}></View>
                        <View style={styles.dot2}></View>
            <View style={styles.dot2}></View>
    </View>


    </View>
  );
};

export default Splashdots;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: s(20),
  },
  dot1: {
    height: s(10),
    width: s(20),
    backgroundColor: theme.colors.secondary,
    borderRadius: theme.radius.round,
  },
  dot2: {
    height: s(6),
    width: s(10),
    backgroundColor: theme.colors.black,
    borderRadius: theme.radius.round,
  },
  dotscontainer:{flexDirection:"row",alignItems:"center", gap:s(6)},
});
