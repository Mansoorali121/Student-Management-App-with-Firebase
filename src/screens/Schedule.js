import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s } from 'react-native-size-matters';
import Scheduleheader from '../components/Scheduleheader';
import Weeklist from '../components/Weeklist';
import Footeritems from '../components/Footeritems';
import Footerbox from '../components/Footerbox';

const Schedule = () => {
  return (
    <View style={styles.container}>
      <Scheduleheader />
      {/* Week List Here */}
      <Weeklist />
      {/* Footer Items and Timing */}
      <View style={styles.footerbox}>
        <Footeritems time="08:AM" />
        <Footerbox subject="Basic Mathematics Subject " time=" 08:AM - 09AM "  />
      </View>
      <View style={styles.footerbox}>
        <Footeritems time="09:AM" />
      </View>

<View style={styles.footerbox}>
        <Footeritems time="10:AM" />
                <Footerbox subject="English Grammer & Tenses" time="10:AM - 11AM " />

      </View>
      <View style={styles.footerbox}>
        <Footeritems time="12:PM" />

      </View>
      <View style={styles.footerbox}>
        <Footeritems time="01:PM" />

      </View>
      <View style={styles.footerbox}>
        <Footeritems time="02:PM" />
                <Footerbox subject="World History" time="02:PM - 03PM " />

      </View>
        <View style={styles.footerbox}>
        <Footeritems time="02:PM" />

      </View>  <View style={styles.footerbox}>
        <Footeritems time="02:PM" />
                <Footerbox subject="Science" time="02:PM - 03PM " />

      </View>
        <View style={styles.footerbox}>
        <Footeritems time="02:PM" />
                <Footerbox subject="Programming Fundamentals " time="02:PM - 03PM " />

      </View>
        <View style={styles.footerbox}>
        <Footeritems time="02:PM" />

      </View>
        <View style={styles.footerbox}>
        <Footeritems time="02:PM" />
                <Footerbox subject="English one" time="02:PM - 03PM " />

      </View>
      {/* Dynamic Items with Data  */}
    </View>
  );
};

export default Schedule;

const styles = StyleSheet.create({
  container: { marginHorizontal: s(15) },
  footerbox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: s(10),
  },
});
