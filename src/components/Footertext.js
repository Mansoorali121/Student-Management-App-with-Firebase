import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s } from 'react-native-size-matters';
import theme from '../common/Theme';

const Footertext = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        The ultimate{' '}
        <Text style={{ color: theme.colors.primaryDark }}>study app</Text>{' '}
        you'll ever require
      </Text>
      <Text style={styles.subtext}>
        Share your class study resources and design digital flashcards for
        effective studying.
      </Text>
    </View>
  );
};

export default Footertext;

const styles = StyleSheet.create({
  container: { marginHorizontal: s(30) },
  text: {
    fontFamily: theme.fonts.regular,
    fontSize: s(25),
    textAlign: 'center',
    marginTop: s(20),
    fontWeight: theme.fonts.bold,
    marginBottom: s(10),
  },
  subtext: {
    textAlign: 'center',
    color: theme.colors.textLight,
    padding: s(5),
    marginBottom: s(70),
  },
});
