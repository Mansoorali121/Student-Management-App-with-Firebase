import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';
import theme from '../common/Theme';

const Searchbox = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.box} activeOpacity={0.7}>
        <Image
          source={require('../assets/icons/search.png')}
          style={styles.image}
        />
        <Text style={styles.searchtext}>Search mathematics</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Searchbox;

const styles = StyleSheet.create({
  container: { marginTop: s(20) },
  box: {
    height: vs(49),
    borderRadius: theme.radius.round,
    backgroundColor: theme.colors.background,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: { height: s(24), width: s(24), marginStart: s(20) },
  searchtext:{marginStart:s(10),fontFamily:theme.fonts.regular,color:theme.colors.secondary},
});
