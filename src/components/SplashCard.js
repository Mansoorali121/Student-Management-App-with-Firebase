import { FlatList, Image, StyleSheet, View, Text } from 'react-native';
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
    <FlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ gap: s(2) }}
      keyExtractor={item => item.id}
      renderItem={({ item }) => {
        return (
          <View style={styles.container}>
            <Image source={{ uri: item.image }} style={styles.image} />
          </View>
        );
      }}
    />
  );
};

export default SplashCard;

const styles = StyleSheet.create({
  image: {
    height: s(300),
    width: s(200),
    borderRadius: theme.radius.round,
    // resizeMode: 'stretch',
  },
  container: { marginTop: s(25), marginHorizontal: s(10) },
});
