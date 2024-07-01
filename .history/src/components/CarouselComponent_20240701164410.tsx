import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList, Image } from 'react-native';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const carouselItems = [
  {
    title: "Adapt your workout",
    text: "Tailor your workout plans to fit your specific needs.",
    image: require('../assets/images/workout.png'),
    /* backgroundColor: '#A3D5A1',  */
  },
  {
    title: "Track your progress",
    text: "Monitor your progress and stay motivated.",
    image: require('../assets/images/diet.png'),
    backgroundColor: '#FFD700', 
  },
  {
    title: "Achieve your goals",
    text: "Set and achieve your fitness goals efficiently.",
    image: require('../assets/images/bmi.png'),
    backgroundColor: '#FFB6C1', 
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
          snapToInterval={viewportWidth}
          decelerationRate="fast"
          bounces={false}
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
  slide: {
    borderRadius: 5,
    height: viewportHeight * 0.5,
    width: viewportWidth * 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginHorizontal: viewportWidth * 0.1,
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
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
