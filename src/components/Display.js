import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

const Display = () => {
  const value = useSelector((state) => state.calculator.value);

  return (
    <View style={styles.display}>
      <Text style={styles.text}>
        {value || "0"}
      </Text>
    </View>
  );
};

export default Display;

const styles = StyleSheet.create({
  display: {
    height: 100,
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundColor: "#000",
    padding: 20,
  },
  text: {
    color: "#fff",
    fontSize: 40,
  },
});