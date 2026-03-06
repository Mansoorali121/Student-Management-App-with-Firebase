import { createSlice } from "@reduxjs/toolkit";

const calculatorSlice = createSlice({
  name: "calculator",
  initialState: {
    value: "",
  },
  reducers: {
    addValue: (state, action) => {
      state.value += action.payload;
    },

    clearValue: (state) => {
      state.value = "";
    },

    calculate: (state) => {
      try {
        state.value = eval(state.value).toString();
      } catch {
        state.value = "Error";
      }
    },
  },
});

export const { addValue, clearValue, calculate } =
  calculatorSlice.actions;

export default calculatorSlice.reducer;