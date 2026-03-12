import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Toptabs from '../components/Toptabs';
import { s } from 'react-native-size-matters';
import Searchbox from '../components/Searchbox';
import Subjecttabs from '../components/Subjecttabs';
import Todolist from '../components/Todolist';

const data = [
  {
    id: 1,
    image: '',
    subject_name: 'basic Mathematics',
    time: 45,
    status: 'Done',
  },
  { id: 2, image: '', subject_name: 'Science', time: 40, status: 'Done' },
  { id: 2, image: '', subject_name: 'English', time: 50, status: 'To do' },
  { id: 4, image: '', subject_name: 'Computer', time: 60, status: 'Done' },
];

const Tasks = () => {
  return (
    <View style={styles.cotainer}>
      <Toptabs />
      <Searchbox />
      <Subjecttabs />
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          return <Todolist />;
        }}
      />
    </View>
  );
};

export default Tasks;

const styles = StyleSheet.create({
  cotainer: { marginTop: s(20), marginHorizontal: s(20) },
});
