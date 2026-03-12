import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s } from 'react-native-size-matters';
import theme from '../common/Theme';

const data = [
  { id: 1, name: 'Sun', day: 1 },
  { id: 2, name: 'Mun', day: 2 },
  { id: 3, name: 'Tue', day: 3 },
  { id: 4, name: 'Wed', day: 4 },
  { id: 5, name: 'Thu', day: 5 },
  { id: 6, name: 'Fri', day: 6 },
  { id: 7, name: 'Sat', day: 7 },
];

const Weeklist = () => {
  return (
    <View style={styles.container}>
      <View style={styles.weeksnames}>
        <View>
          <Text>Sun</Text>
          <Text>04</Text>
        </View>
        <View>
          <Text>Mon</Text>
          <Text>05</Text>
        </View>
        <View>
          <Text>Tue</Text>
          <Text>06</Text>
        </View>
        {/* More */}
        <View>
          <Text>Wed</Text>
          <Text>07</Text>
        </View>
        <View>
          <Text>Thu</Text>
          <Text>08</Text>
        </View>
        <View>
          <Text>Fri</Text>
          <Text>09</Text>
        </View>
        <View>
          <Text>Sat</Text>
          <Text>10</Text>
        </View>
      </View>
    </View>
  );
};

export default Weeklist;

const styles = StyleSheet.create({
  container: { marginTop: s(20) },
  weeksnames: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: theme.radius.md,
    padding: s(5),
    alignItems: 'center',
    backgroundColor:theme.colors.screenBackground
  },
});
