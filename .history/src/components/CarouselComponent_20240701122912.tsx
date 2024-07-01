import * as React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  Dimensions
} from 'react-native';

import Carousel from 'react-native-snap-carousel';

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

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: carouselItems
    };
  }

  _renderItem({ item, index }) {
    return (
      <View style={styles.carouselItem}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Carousel
            layout={"default"}
            ref={ref => this.carousel = ref}
            data={this.state.carouselItems}
            sliderWidth={viewportWidth}
            itemWidth={viewportWidth}
            renderItem={this._renderItem}
            onSnapToItem={index => this.setState({ activeIndex: index })} />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'rebeccapurple',
    paddingTop: 50,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  carouselItem: {
    backgroundColor: 'floralwhite',
    borderRadius: 5,
    height: 250,
    padding: 50,
    marginLeft: 25,
    marginRight: 25,
    justifyContent: 'center',
    alignItems: 'center',
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
});
