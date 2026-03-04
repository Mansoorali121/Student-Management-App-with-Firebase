import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({
        id: Date.now(),
        title: action.payload,
      });
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(
        task => task.id !== action.payload
      );
    },
    clearTasks: (state) => {
      state.tasks = [];
    },
  },
});

export const { addTask, deleteTask, clearTasks } = taskSlice.actions;
export default taskSlice.reducer;