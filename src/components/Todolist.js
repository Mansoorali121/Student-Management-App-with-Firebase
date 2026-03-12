import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s } from 'react-native-size-matters';
import theme from '../common/Theme';

const Todolist = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View>
          <Image
            source={require('../assets/icons/search.png')}
            style={styles.image}
          />
        </View>
        <View>
          <Text style={styles.basictext}>Basic mathematics</Text>
          <Text style={styles.mintstext}>45 min</Text>
        </View>
        <View style={styles.donebtn}>
          <Text>Done</Text>
        </View>
      </View>
    </View>
  );
};

export default Todolist;

const styles = StyleSheet.create({
  container: { marginTop: s(10) },
  image: { height: s(70), width: s(70), marginTop: s(5) },
  card: {
    height: s(90),
    backgroundColor: theme.colors.background,
    borderRadius: theme.radius.md,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: s(7),
  },
  donebtn: {
    height: s(20),
    backgroundColor: theme.colors.done,
    width: s(40),
    borderRadius: theme.radius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  basictext: { marginBottom: s(10), fontWeight: '500' },
  mintstext: { fontSize: s(10) },
});
