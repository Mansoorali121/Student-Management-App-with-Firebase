import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import Calculator from "./src/components/Calculator";

export default function App() {
  return (
    <Provider store={store}>
      <Calculator />
    </Provider>
  );
}