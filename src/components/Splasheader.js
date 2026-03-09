import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s } from 'react-native-size-matters';
import theme from '../common/Theme';

const Splasheader = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/icons/logo.png')}
        style={styles.image}
      />
      <Text style={styles.title}>Tech</Text>
    </View>
  );
};

export default Splasheader;

const styles = StyleSheet.create({
  image: {
    height: s(50),
    width: s(50),
    backgroundColor: theme.colors.background,
    borderRadius: theme.radius.round,
  },
  container: {
    marginTop: s(40),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: s(10),
  },
  title:{fontSize:s(20),fontFamily:theme.fonts.normal},
});
