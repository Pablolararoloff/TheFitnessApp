import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const { width: viewportWidth } = Dimensions.get('window');

interface CarouselItem {
  title: string;
  image: any;
}

const carouselItems: CarouselItem[] = [
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

const CarouselComponent: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<Carousel<CarouselItem>>(null);

  const renderItem = ({ item }: { item: CarouselItem; index: number }) => (
    <View style={styles.carouselItem}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  return (
    <View>
      <Carousel
        layout={"default"}
        ref={carouselRef}
        data={carouselItems}
        renderItem={renderItem}
        sliderWidth={viewportWidth}
        itemWidth={viewportWidth}
        onSnapToItem={(index) => setActiveIndex(index)}
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
    backgroundColor: 'floralwhite',
    borderRadius: 5,
    height: 250,
    padding: 50,
    marginLeft: 25,
    marginRight: 25,
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
