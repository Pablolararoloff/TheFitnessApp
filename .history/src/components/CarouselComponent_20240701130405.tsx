import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList, Image } from 'react-native';

const { width: viewportWidth } = Dimensions.get('window');

const carouselItems = [
  {
    title: "Adapt your workout",
    text: "Tailor your workout plans to fit your specific needs.",
    image: require('../assets/images/workout.png'),
    backgroundColor: '#A3D5A1', // Light green
  },
  {
    title: "Track your progress",
    text: "Monitor your progress and stay motivated.",
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
    );
  }
}

const styles = StyleSheet.create({
  slide: {
    borderRadius: 5,
    height: 350,
    padding: 20,
    width: viewportWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '80%',
    height: 150,
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
