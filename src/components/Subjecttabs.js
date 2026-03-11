import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s } from 'react-native-size-matters';
import theme from '../common/Theme';

const Subjecttabs = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxcontainer}>
        <View style={styles.bookbox}>
          <Image
            source={require('../assets/icons/book.png')}
            style={styles.image}
          />
          <Text>Subject:</Text>
          <Text style={{ fontWeight: '500' }}>All</Text>
          <Image
            source={require('../assets/icons/down-arrow.png')}
            style={styles.image}
          />
        </View>
        <View style={[styles.bookbox,{width:s(155)}]}>
          <Image
            source={require('../assets/icons/filter.png')}
            style={styles.image}
          />
          <Text>Sort by:</Text>
          <Text>Do first</Text>
          <Image
            source={require('../assets/icons/down-arrow.png')}
            style={styles.image}
          />
        </View>
      </View>
    </View>
  );
};

export default Subjecttabs;

const styles = StyleSheet.create({
  container: {
    marginTop: s(20),
  },
  bookbox: {
    backgroundColor: theme.colors.background,
    width: s(145),
    height: s(42),
    borderRadius: theme.radius.round,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: s(14),
  },
  image: { height: s(20), width: s(20) },
  boxcontainer:{ flexDirection: 'row', gap: s(5) }
});
