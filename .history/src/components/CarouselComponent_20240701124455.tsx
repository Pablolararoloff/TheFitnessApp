import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const { width: viewportWidth } = Dimensions.get('window');

const carouselItems = [
  {
    title: "Adapt your workout",
    image: require('../assets/images/workout.png'),
  },
  {
    title: "Track your progress",
    image: require('../assets/images/diet.png'),
  },
  {
    title: "Achieve your goals",
    image: require('../assets/images/bmi.png'),
  },
];

const BasicCarousel = () => {
  const renderItem = ({ item }: { item: { title: string; image: any } }) => (
    <View style={styles.carouselItem}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  return (
    <Carousel
      data={carouselItems}
      renderItem={renderItem}
      sliderWidth={viewportWidth}
      itemWidth={viewportWidth}
    />
  );
};

const styles = StyleSheet.create({
  carouselItem: {
    backgroundColor: 'floralwhite',
    borderRadius: 5,
    height: 250,
    padding: 50,
    marginLeft: 25,
    marginRight: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 30,
    marginTop: 20,
  },
});

export default Carouselcomponent;
