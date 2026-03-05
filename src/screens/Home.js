import React, { useState } from "react";
import { View, Text, TextInput, Button, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask, clearTasks } from "../redux/taskSlice";
import { s } from "react-native-size-matters";

const Home = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const tasks = useSelector(state => state.tasks.tasks);

  return (
    <View style={{ padding: 20 , gap:s(10)}}>

      <Text>Total Tasks: {tasks.length}</Text>

      <TextInput
        placeholder="Enter Task"
        value={text}
        onChangeText={setText}
        style={{ borderWidth: 1, marginVertical: 10 }}
      />

      <Button title="Add Task" onPress={() => {
        dispatch(addTask(text));
        setText("");
      }} />

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 5 }}>
            <Text>{item.title}</Text>
            <Button title="Delete" onPress={() => dispatch(deleteTask(item.id))} />
          </View>
        )}
      />

      <Button title="Clear All" onPress={() => dispatch(clearTasks())} />

    </View>
  );
};

export default Home;