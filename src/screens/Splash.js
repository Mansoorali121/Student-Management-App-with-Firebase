import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Splasheader from "../components/Splasheader";
import theme from '../common/Theme';
import SplashCard from "../components/SplashCard";

const Splash = () => {
  return (
    <View style={styles.container}>
      <Splasheader/>
      <SplashCard/>
    </View>
  )
}

export default Splash;

const styles = StyleSheet.create({
    container:{backgroundColor:theme.colors.background},
})