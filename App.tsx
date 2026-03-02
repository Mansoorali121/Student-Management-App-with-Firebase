import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import CounterScreen from "./src/screens/CounterScreen";

export default function App() {
  return (
    <Provider store={store}>
      <CounterScreen />
    </Provider>
  );
}