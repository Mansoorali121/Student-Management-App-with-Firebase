import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s } from 'react-native-size-matters';
import theme from './src/common/Theme';
import Splash from "./src/screens/Splash";

const App = () => {
  return (
    <View>
      <Splash/>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: { alignItems: 'center', marginTop: s(20) },
});
