import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux';
import Mainapp from "./src/screens/Mainapp";
import {store} from "./src/redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <Mainapp/>
    </Provider>
  )
}

export default App;

const styles = StyleSheet.create({})