import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s } from 'react-native-size-matters';
import theme from '../common/Theme';

const data = [
  {
    id: 1,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPqEMAeGDnKmkGT2onCX5BRnIAaay5x-nVHw&s',
  },
  {
    id: 2,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWap-0jdoY0fV4lHJPh8iBNOpvELdYr2ZzB3GwDlAe8Go7mZ0iPonEczQ&s',
  },
  {
    id: 3,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6Fbdy6LN3Gsnup2VcAeoidfUT9WN3k06_yw&s',
  },
];

const SplashCard = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          return (
            <View style={styles.itemcontainer}>
              <Image source={{ uri: item.image }} style={styles.image} />
            </View>
          );
        }}
      />
    </View>
  );
};

export default SplashCard;

const styles = StyleSheet.create({
  container: { alignItems: 'center', marginTop: s(20) },
  image: {
    height: s(280),
    width: s(200),
    borderRadius: theme.radius.round,
    resizeMode: 'stretch',
  },
  itemcontainer: { marginHorizontal: s(5) , backgroundColor:theme.colors.background},
});
