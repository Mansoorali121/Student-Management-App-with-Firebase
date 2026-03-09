import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Splasheader from "../components/Splasheader";
import theme from '../common/Theme';

const Splash = () => {
  return (
    <View style={styles.container}>
      <Splasheader/>
    </View>
  )
}

export default Splash;

const styles = StyleSheet.create({
    container:{backgroundColor:theme.colors.background},
})