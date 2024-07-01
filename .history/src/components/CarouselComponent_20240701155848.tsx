import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const { width: viewportWidth } = Dimensions.get('window');

interface CarouselItem {
  title: string;
  text: string;
  image: any;
}

const carouselItems: CarouselItem[] = [
  {
    title: "Adapt your workout",
    text: "Tailor your workout plans to fit your specific needs.",
    image: require('../assets/images/workout.png'),
  },
  {
    title: "Track your calories",
    text: "Keep track of your daily calorie intake and burn.",
    image: require('../assets/images/diet.png'),
  },
  {
    title: "Achieve your goals",
    text: "Set and achieve your fitness goals efficiently.",
    image: require('../assets/images/bmi.png'),
  },
];

const CarouselComponent: React.FC = () => {
  const renderItem = ({ item }: { item: CarouselItem }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.text}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Carousel
        data={carouselItems}
        renderItem={renderItem}
        sliderWidth={viewportWidth}
        itemWidth={viewportWidth}
        layout={'default'}
        autoplay={true}
        autoplayInterval={3000}
        loop={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    height: 400,
    padding: 20,
    marginLeft: 25,
    marginRight: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: '60%',
    borderRadius: 8,
    marginBottom: 20,
  },
  textContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});

export default CarouselComponent;
