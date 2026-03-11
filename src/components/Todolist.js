import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s } from 'react-native-size-matters';
import theme from '../common/Theme';

const Todolist = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={{flexDirection:"row"}}>
            <View>
            <Image
          source={require('../assets/icons/search.png')}
          style={styles.image}
        />
        </View>
        <View style={styles.cardtext}>
          <Text style={{ marginStart: s(10) }}>Basic Mathematics</Text>
          <Text style={{ marginStart: s(10) }}>45 Min</Text>
        </View>
        <View style={styles.donebtn}>
          <Text>Done</Text>
        </View>
        </View>
      </View>
    </View>
  );
};

export default Todolist;

const styles = StyleSheet.create({
  container: { marginTop: s(10) },
  image: { height: s(60), width: s(60), marginStart: s(10), marginTop: s(10) },
  card: {
    height: s(90),
    backgroundColor: theme.colors.background,
    borderRadius: theme.radius.md,
    flexDirection: 'row',
  },
  cardtext: { marginTop: s(15), gap: s(10) },
  donebtn: {
    height: s(20),
    backgroundColor: theme.colors.primary,
    width: s(40),
    borderRadius: theme.radius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
