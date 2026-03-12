import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { s } from 'react-native-size-matters';
import theme from '../common/Theme';

const data = [
  { id: 1, name: 'Sun', day: '04' },
  { id: 2, name: 'Mon', day: '05' },
  { id: 3, name: 'Tue', day: '06' },
  { id: 4, name: 'Wed', day: '07' },
  { id: 5, name: 'Thu', day: '08' },
  { id: 6, name: 'Fri', day: '09' },
  { id: 7, name: 'Sat', day: '10' },
];

const Weeklist = () => {

  const [selectedId, setSelectedId] = useState(5);

  return (
    <View style={styles.container}>
      <View style={styles.weeksnames}>

        {data.map((item) => {

          const isSelected = item.id === selectedId;

          return (
            <TouchableOpacity
              key={item.id}
              onPress={() => setSelectedId(item.id)}
              style={isSelected ? styles.selected : styles.common}
            >
              <Text style={isSelected ? styles.selectedtext : null}>
                {item.name}
              </Text>

              <Text style={isSelected ? styles.selectedtext : null}>
                {item.day}
              </Text>

            </TouchableOpacity>
          );

        })}

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
  },
  selected: {
    backgroundColor: theme.colors.primaryDark,
    padding: s(5),
    borderRadius: theme.radius.md,
    alignItems: 'center',
  },
  selectedtext: { color: theme.colors.screenBackground },
  common:{alignItems: 'center'}
});
