import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { s } from 'react-native-size-matters';
import theme from '../common/Theme';

const Scheduleheader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headercontainer}>
        <View>
          <Text style={styles.title}>Schedule</Text>
        </View>
        <TouchableOpacity style={styles.searchbox} activeOpacity={0.6}>
          <Image
            source={require('../assets/icons/search.png')}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.subheader}>
        <Text style={styles.subheadertext}>This Week </Text>
        <Text
          style={[styles.subheadertext, { fontSize: s(16), marginTop: s(6) }]}
        >
          See all{' '}
        </Text>
      </View>
    </View>
  );
};

export default Scheduleheader;

const styles = StyleSheet.create({
  container: { marginTop: s(15) },
  image: { height: s(25), width: s(25) },
  searchbox: {
    height: s(40),
    width: s(40),
    backgroundColor: theme.colors.background,
    borderRadius: theme.radius.round,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headercontainer: { flexDirection: 'row', justifyContent: 'space-between' },
  title: {
    fontSize: s(25),
    fontWeight: '500',
    fontFamily: theme.fonts.bold,
  },
  subheader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: s(10),
  },
  subheadertext: { fontSize: s(18), fontWeight: '500' },
});
