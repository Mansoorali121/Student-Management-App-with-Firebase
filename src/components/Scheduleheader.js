import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s } from 'react-native-size-matters';
import theme from '../common/Theme';

const Scheduleheader = () => {
  return (
    <View style={styles.container}>
     <View style={styles.headercontainer}>
         <View>
        <Text style={styles.title}>Schedule</Text>
      </View>
      <View style={styles.searchbox}>
        <Image
          source={require('../assets/icons/search.png')}
          style={styles.image}
        />
      </View>
     </View>
    </View>
  );
};

export default Scheduleheader;

const styles = StyleSheet.create({
  container: { marginTop: s(15) },
  image: { height: s(30), width: s(30) },
  searchbox: {
    height: s(40),
    width: s(40),
    backgroundColor: theme.colors.background,
    borderRadius: theme.radius.round,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headercontainer:{flexDirection:"row",justifyContent:"space-between"},
  title:{fontSize:s(25),fontWeight
    :"500", fontFamily:theme.fonts.regular
  },
});
