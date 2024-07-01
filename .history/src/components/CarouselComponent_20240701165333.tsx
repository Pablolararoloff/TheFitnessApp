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
    /* backgroundColor: '#FFD700',  */
  },
  {
    title: "Achieve your goals",
    text: "Set and achieve your fitness goals efficiently.",
    image: require('../assets/images/bmi.png'),
    /* backgroundColor: '#FFB6C1',  */
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
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
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
  // Container for the entire carousel
  carouselContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Individual slide style
  slide: {
    borderRadius: 5,
    height: viewportHeight * 0.6,
    width: viewportWidth * 0.8,
    justifyContent: 'flex-start', // Align items to the top
    alignItems: 'center',
    padding: 10,
    marginHorizontal: viewportWidth * 0.1,
  },
  // Style for the image in each slide
  image: {
    width: '100%',
    height: '70%', // Adjust height to leave space for text
    resizeMode: 'cover',
    marginBottom: 10, // Space between image and text
  },
  // Container for text elements
  textContainer: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 10, // Vertical padding for the text container
  },
  // Style for the title text
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5, // Space between title and description
    textAlign: 'center', // Center align the title text
  },
  // Style for the description text
  text: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 20, // Horizontal padding for better readability
  },
});
