import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { s } from 'react-native-size-matters';
import { clearState, decrement, increment } from '../redux/counterSlice';

const Main = () => {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  console.log(counter);
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: s(25) }}>{counter.value}</Text>
      <Text style={styles.countertext} onPress={() => dispatch(increment())}>
        Increment
      </Text>
      <Text style={styles.countertext} onPress={() => dispatch(decrement())}>
        Decrement
      </Text>
      <Text style={styles.countertext} onPress={() => dispatch(clearState())}>
        Clear
      </Text>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  countertext: {
    fontSize: s(22),
    borderWidth: 1,
    padding: s(10),
    marginVertical: 10,
    marginBottom: s(10),
  },
});
