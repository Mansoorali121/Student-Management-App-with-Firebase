import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import theme from '../common/Theme';
import { s } from 'react-native-size-matters';

const Footerbox = ({subject, time}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.normal}>{subject } </Text>
            <Text style={[styles.normal,{color:"gray"}]}> {time} </Text>

    </View>
  );
};

export default Footerbox;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    height: s(45),
    borderRadius: theme.radius.round,
    flexDirection:"row",
    justifyContent:"space-evenly",
    alignItems:"center",
        paddingHorizontal: s(12),

  },
  normal:{fontSize:s(10)},
});
