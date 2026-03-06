import React from "react";
import { View, StyleSheet } from "react-native";
import Display from "./Display";
import CalcButton from "./CalcButton";

const buttons = [
  ["7","8","9","/"],
  ["4","5","6","*"],
  ["1","2","3","-"],
  ["0","C","=","+"]
];

const Calculator = () => {
  return (
    <View style={styles.container}>
      <Display />

      {buttons.map((row, i) => (
        <View key={i} style={styles.row}>
          {row.map((btn, index) => (
            <CalcButton key={index} label={btn} />
          ))}
        </View>
      ))}

    </View>
  );
};

export default Calculator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  row: {
    flexDirection: "row",
  },
});