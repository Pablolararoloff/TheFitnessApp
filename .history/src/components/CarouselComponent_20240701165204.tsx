import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const carouselItems = [
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

export default class CarouselComponent extends React.Component {
  _renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    </View>
  );

  render() {
    return (
      <View style={styles.carouselContainer}>
        <Carousel
          data={carouselItems}
          renderItem={this._renderItem}
          sliderWidth={viewportWidth}
          itemWidth={viewportWidth * 0.8}
          loop={true}
        />
      </View>
    );
  }
}
