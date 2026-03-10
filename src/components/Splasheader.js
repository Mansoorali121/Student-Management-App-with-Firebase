import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s } from 'react-native-size-matters';
import theme from '../common/Theme';

const Splasheader = () => {
  return (
    <View  >
      <View style={styles.itemcontainer}>
        <Image
          source={require('../assets/icons/logo.png')}
          style={styles.image}
        />
        <Text style={styles.title}>Tech</Text>
      </View>
    </View>
  );
};

export default Splasheader;

const styles = StyleSheet.create({
  image: {
    height: s(50),
    width: s(50),
    borderRadius: theme.radius.round,
    alignItems: 'center',
    justifyContent: 'center',
  },
 
  itemcontainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: s(10),
    marginTop:s(20)

  },
  title: { fontSize: s(20), fontFamily: theme.fonts.semiBold },
});
