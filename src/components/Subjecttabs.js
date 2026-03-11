import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s } from 'react-native-size-matters';
import theme from '../common/Theme';

const Subjecttabs = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxcontainer}>
        <View style={styles.bookbox}>
          <Image
            source={require('../assets/icons/book.png')}
            style={styles.image}
          />
          <Text style={styles.subjectname}>Subject:</Text>
          <Text style={{ fontWeight: '500', fontSize: s(10) }}>All</Text>
          <Image
            source={require('../assets/icons/down-arrow.png')}
            style={styles.image}
          />
        </View>
        <View style={[styles.bookbox, { width: s(155) }]}>
          <Image
            source={require('../assets/icons/filter.png')}
            style={styles.image}
          />
          <Text style={styles.subjectname}>Sort by:</Text>
          <Text style={{ fontSize: s(10) }}>Do first</Text>
          <Image
            source={require('../assets/icons/down-arrow.png')}
            style={styles.image}
          />
        </View>
      </View>
      {/* Footer  */}
      <View style={styles.footer}>
        <Text style={styles.footertitle}>Wednesdday</Text>
        <View style={styles.datecontainer}>
          <Text>6 tasks</Text>
          <View style={styles.datebox}>
            <Image
              source={require('../assets/icons/calendar.png')}
              style={styles.image}
            />
            <Text style={[styles.subjectname, { fontWeight: '500' }]}>
              18,Jan 25
            </Text>
            <Image
              source={require('../assets/icons/down-arrow.png')}
              style={styles.image}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Subjecttabs;

const styles = StyleSheet.create({
  container: {
    marginTop: s(20),
  },
  bookbox: {
    backgroundColor: theme.colors.background,
    width: s(145),
    height: s(42),
    borderRadius: theme.radius.round,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: s(14),
  },
  image: { height: s(20), width: s(20) },
  boxcontainer: { flexDirection: 'row', gap: s(5) },
  subjectname: { fontSize: s(12) },
  footer: { marginTop: s(20) },
  footertitle: { fontSize: s(20), fontWeight: '500' },
  datecontainer: { flexDirection: 'row', justifyContent: 'space-between' },
  datebox: {
    backgroundColor: theme.colors.background,
    width: s(130),
    height: s(32),
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: theme.radius.round,
    paddingHorizontal: s(10),
  },
});
