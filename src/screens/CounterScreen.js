import React from "react";
import { View, Text, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/counterSlice";


const CounterScreen = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View style={{ marginTop: 100 }}>
      <Text style={{ fontSize: 30 }}>{count}</Text>

      <Button
        title="Increase"
        onPress={() => dispatch(increment())}
      />

      <Button
        title="Decrease"
        onPress={() => dispatch(decrement())}
      />

    
    </View>
  );
};

export default CounterScreen;