import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import theme from '../common/Theme';
import { s, vs } from 'react-native-size-matters';

const tabsArr = ['Subjects', 'Homework', 'Library'];

const Active_Bg = 'blue';
const Active_text = 'White';

const inActive_text = 'gray';

const Toptabs = () => {
  return (
    <View style={styles.container}>
      {tabsArr.map(tabName => {
        return (
          <TouchableOpacity style={styles.tabbutton}>
            <Text style={styles.tabnametext}>{tabName}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Toptabs;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    borderRadius: theme.radius.md,
    height:vs(51),
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    padding:s(4)
  },
  tabbutton: {  height:vs(32), flex:1,
    borderRadius:s(8),
    justifyContent:"center",
    alignItems:"center"
   },
   tabnametext:{},
});
