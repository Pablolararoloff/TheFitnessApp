import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList } from 'react-native';

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

export default class CarouselComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: carouselItems,
    };
  }

  _renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
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
    backgroundColor: 'floralwhite',
    borderRadius: 5,
    height: 250,
    padding: 50,
    width: viewportWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
  },
});
