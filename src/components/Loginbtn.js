import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { s } from 'react-native-size-matters';

const Loginbtn = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8} onPress={onPress}>
      <Text style={styles.btntext}>Loginbtn</Text>
    </TouchableOpacity>
  );
};

export default Loginbtn;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#68a3d7',
    padding: s(20),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: s(10),
    
  },
  btntext: { color: '#ffff', fontSize: s(14) },
});
