import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import theme from '../common/Theme';
import { s, vs } from 'react-native-size-matters';

const tabsArr = ['Subjects', 'Homework', 'Library'];

const inActive_text = 'gray';

const Toptabs = () => {
  const [activetab, setActivetab] = useState('Homework');
  return (
    <View style={styles.container}>
      {tabsArr.map(tabName => {
        return (
          <TouchableOpacity
            onPress={() => setActivetab(tabName)}
            style={[
              styles.tabbutton,
              activetab === tabName && {
                backgroundColor: theme.colors.primary,
                borderRadius: theme.radius.round,
                height: vs(41),
              },
            ]}
          >
            <Text
              style={
                activetab === tabName
                  ? styles.activetabtext
                  : styles.inactivetabtext
              }
            >
              {tabName}
            </Text>
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
    height: vs(51),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: s(4),
  },
  tabbutton: {
    height: vs(32),
    flex: 1,
    borderRadius: s(8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  activetabtext: { color: 'white' },
  inactivetabtext: { color: inActive_text },
});
