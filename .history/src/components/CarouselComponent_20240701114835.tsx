import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

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

const CarouselComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const renderItem = ({ item }) => (
    <View style={styles.carouselItem}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  return (
    <View>
      <Carousel
        ref={carouselRef}
        data={carouselItems}
        renderItem={renderItem}
        sliderWidth={viewportWidth}
        itemWidth={viewportWidth}
        onSnapToItem={(index) => setActiveIndex(index)}
        layout={'default'} // You can use 'stack' or 'tinder' for different layouts
      />
      <Pagination
        dotsLength={carouselItems.length}
        activeDotIndex={activeIndex}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.paginationDot}
        inactiveDotStyle={styles.inactiveDot}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  carouselItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  paginationContainer: {
    paddingVertical: 8,
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: '#000',
  },
  inactiveDot: {
    backgroundColor: '#bbb',
  },
});

export default CarouselComponent;
