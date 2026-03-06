import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { addValue, clearValue, calculate } from "../redux/calculatorSlice";

const CalcButton = ({ label }) => {
  const dispatch = useDispatch();

  const handlePress = () => {
    if (label === "C") {
      dispatch(clearValue());
    } 
    else if (label === "=") {
      dispatch(calculate());
    } 
    else {
      dispatch(addValue(label));
    }
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

export default CalcButton;

const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: "#333",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    height: 70,
    borderRadius: 10,
  },
  text: {
    color: "#fff",
    fontSize: 24,
  },
});