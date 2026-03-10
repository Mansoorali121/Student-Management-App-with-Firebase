import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { s } from 'react-native-size-matters';
import theme from '../common/Theme';

const Splashdots = () => {
  return (
    <View>
        <View>
      <Text>Splashdots</Text>
    </View>
    </View>
  )
}

export default Splashdots;

const styles = StyleSheet.create({
    container:{marginTop:s(20), backgroundColor:theme.colors.background},
})