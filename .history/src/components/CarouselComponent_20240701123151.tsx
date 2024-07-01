import * as React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Carousel, { Pagination, CarouselProperties } from 'react-native-snap-carousel';

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

interface AppState {
  activeIndex: number;
  carouselItems: CarouselItem[];
}

export default class App extends React.Component<{}, AppState> {
  private carouselRef = React.createRef<Carousel<CarouselItem>>();

  constructor(props: {}) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: carouselItems,
    };
  }

  _renderItem = ({ item }: { item: CarouselItem; index: number }) => (
    <View style={styles.carouselItem}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Carousel
            layout={"default"}
            ref={this.carouselRef}
            data={this.state.carouselItems}
            sliderWidth={viewportWidth}
            itemWidth={viewportWidth}
            renderItem={this._renderItem}
            onSnapToItem={(index) => this.setState({ activeIndex: index })}
          />
          <Pagination
            dotsLength={this.state.carouselItems.length}
            activeDotIndex={this.state.activeIndex}
            containerStyle={styles.paginationContainer}
            dotStyle={styles.paginationDot}
            inactiveDotStyle={styles.inactiveDot}
          />
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
