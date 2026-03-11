import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Toptabs from '../components/Toptabs';
import { s } from 'react-native-size-matters';

const Tasks = () => {
  return (
    <View style={styles.cotainer}>
      <Toptabs />
    </View>
  );
};

export default Tasks;

const styles = StyleSheet.create({
  cotainer: {  marginTop: s(20) ,marginHorizontal:s(20)},
});
