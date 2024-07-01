import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const { width: viewportWidth } = Dimensions.get('window');

const carouselItems = [
  {
    title: "Adapt your workout",
  },
  {
    title: "Track your progress",
  },
  {
    title: "Achieve your goals",
  },
];

const sliderWidth = viewportWidth;
const itemWidth = viewportWidth;

export class CarouselComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: carouselItems,
    };
  }

  _renderItem = ({ item, index }) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
  };

  render() {
    return (
      <Carousel
        ref={(c) => { this._carousel = c; }}
        data={this.state.entries}
        renderItem={this._renderItem}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
      />
    );
  }
}

const styles = StyleSheet.create({
  slide: {
    backgroundColor: 'floralwhite',
    borderRadius: 5,
    height: 250,
    padding: 50,
    marginLeft: 25,
    marginRight: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
  },
});

export default CarouselComponent;
