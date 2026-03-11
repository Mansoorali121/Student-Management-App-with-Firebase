import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { s } from 'react-native-size-matters';

const Todolist = () => {
  return (
    <View style={styles.container}>
      <Text>Todolist</Text>
    </View>
  )
}

export default Todolist;

const styles = StyleSheet.create({
    container:{marginTop:s(10)},
})