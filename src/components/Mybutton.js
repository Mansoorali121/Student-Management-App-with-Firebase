import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';
import theme from '../common/Theme';

const Mybutton = () => {
  return (
    <View style={styles.container} >
      <TouchableOpacity style={styles.button}  activeOpacity={0.7}>
        <View style={styles.circle}>
          <Image
            source={require('../assets/icons/check.png')}
            style={styles.image}
          />
        </View>
        <Text style={styles.btntext}>Let's Start</Text>
        <View>
          <Image
            source={require('../assets/icons/three-arrows.png')}
            style={styles.image2}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.topview} />
    </View>
  );
};

export default Mybutton;

const styles = StyleSheet.create({
  container: { alignItems: 'center', marginTop: 'auto' },
  button: {
    backgroundColor: theme.colors.primary,
    height: s(60),
    width: '70%',
    borderRadius: theme.radius.round,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: s(10),
  },
  circle: {
    height: s(50),
    width: s(50),
    backgroundColor: theme.colors.background,
    borderRadius: theme.radius.round,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: { height: s(24), width: s(24) },
  btntext: { color: theme.colors.border, fontFamily: theme.fonts.normal },
  topview:{marginTop:s(20)},
    image2: { height: s(30), width: s(30) },

});
