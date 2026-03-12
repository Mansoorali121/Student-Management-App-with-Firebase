import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Splash from './src/screens/Splash';
import Tasks from "./src/screens/Tasks";
import theme from './src/common/Theme';
import Schedule from "./src/screens/Schedule";

const App = () => {
  return (
    <View style={styles.container}>
      {/* <Splash /> */}
      {/* <Tasks/> */}
      <Schedule/>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container:{backgroundColor:theme.colors.primaryLight,flex:1},
});
