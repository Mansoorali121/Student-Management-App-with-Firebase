import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const Main = () => {
    const counter = useSelector(state=>state.counter);
    console.log(counter);
  return (
    <View>
      <Text>Main</Text>
    </View>
  )
}

export default Main;

const styles = StyleSheet.create({})