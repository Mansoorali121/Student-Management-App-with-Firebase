import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { s } from 'react-native-size-matters';
import { clear, decrement, increment } from '../redux/counterSlice';

const Main = () => {
  const counter = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  return (
    <View
      style={{
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        gap: s(20),
      }}
    >
      <Text style={{ fontSize: s(30) }}>{counter}</Text>

      <Text style={{ fontSize: s(30), borderWidth: 1, padding: s(10) }}
      onPress={()=>dispatch(increment())}
      >
        Increment
      </Text>
      <Text style={{ fontSize: s(30), borderWidth: 1, padding: s(10) }}
      onPress={()=>dispatch(decrement())}
      >
        Decrement
      </Text>
      <Text style={{ fontSize: s(30), borderWidth: 1, padding: s(10) }}
      onPress={()=>dispatch(clear())}
      >
        Clear
      </Text>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({});
