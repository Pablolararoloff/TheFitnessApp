import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { Card } from 'react-native-paper';

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
    <Card style={styles.card}>
      <Card.Cover source={item.image} style={styles.image} />
      <Card.Content>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.text}</Text>
      </Card.Content>
    </Card>
  );

  return (
    <View style={styles.container}>
      <Carousel
        data={carouselItems}
        renderItem={renderItem}
        sliderWidth={viewportWidth}
        itemWidth={viewportWidth - 60}
        layout={'default'}
        autoplay={true}
        autoplayInterval={3000}
        loop={true}
        useScrollView={true}
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
    borderRadius: 8,
    height: 400,
    marginLeft: 10,
    marginRight: 10,
  },
  image: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    height: 200,
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
