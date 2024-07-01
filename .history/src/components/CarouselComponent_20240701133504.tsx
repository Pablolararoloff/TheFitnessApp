import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList, Image } from 'react-native';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const carouselItems = [
  {
    title: "Adapt your workout",
    text: "Tailor your workout plans to fit your specific needs.",
    image: require('../assets/images/workout.png'),
    backgroundColor: '#A3D5A1', // Light green
  },
  {
    title: "Track your calories",
    text: "Keep track of your daily calorie intake and burn.",
    image: require('../assets/images/diet.png'),
    backgroundColor: '#FFD700', // Gold
  },
  {
    title: "Achieve your goals",
    text: "Set and achieve your fitness goals efficiently.",
    image: require('../assets/images/bmi.png'),
    backgroundColor: '#FFB6C1', // Light pink
  },
];

export default class CarouselComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: carouselItems,
    };
  }

  _renderItem = ({ item }) => {
    return (
      <View style={[styles.slide, { backgroundColor: item.backgroundColor }]}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.carouselContainer}>
        <FlatList
          data={this.state.entries}
          renderItem={this._renderItem}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          snapToInterval={viewportWidth * 0.9}
          decelerationRate="fast"
          bounces={false}
          contentContainerStyle={styles.flatListContent}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatListContent: {
    alignItems: 'center',
  },
  slide: {
    borderRadius: 5,
    height: viewportHeight * 0.6,
    padding: 20,
    width: viewportWidth * 0.9,
    marginHorizontal: viewportWidth * 0.05,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '90%',
    height: viewportHeight * 0.3,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});
