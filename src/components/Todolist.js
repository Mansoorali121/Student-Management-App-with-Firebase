import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s } from 'react-native-size-matters';
import theme from '../common/Theme';

const Todolist = ({ image, subject_name, time, status }) => {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.card,
          {
            backgroundColor:
              status === 'Done'
                ? theme.colors.background
                : theme.colors.primaryLight,
          },
        ]}
      >
        <View>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
        <View>
          <Text style={styles.basictext}>{subject_name}</Text>
          <Text style={styles.mintstext}>{time} min</Text>
        </View>
        <View style={styles.donebtn}>
          <Text>{status}</Text>
        </View>
      </View>
    </View>
  );
};

export default Todolist;

const styles = StyleSheet.create({
  container: { marginTop: s(10) },
  image: {
    height: s(70),
    width: s(70),
    marginTop: s(5),
    borderRadius: theme.radius.md,
  },
  card: {
    height: s(90),
    backgroundColor: theme.colors.background,
    borderRadius: theme.radius.md,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: s(7),
    borderWidth: s(1),
    borderColor: theme.colors.screenBackground,
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
