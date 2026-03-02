import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {store} from "./src/redux/store";
import { Provider } from "react-redux";
import CounterScreen from "./src/screens/CounterScreen";


const App = () => {
  return (
    <Provider store={store}>
      <CounterScreen />

    </Provider>
  )
}

export default App;

const styles = StyleSheet.create({})