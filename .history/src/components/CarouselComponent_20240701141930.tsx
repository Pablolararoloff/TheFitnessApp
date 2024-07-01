import React, { useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Animated,
  useWindowDimensions,
  ScrollView,
  SafeAreaView,
} from 'react-native';

const images = [
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
  const scrollX = useRef(new Animated.Value(0)).current;
  const { width: windowWidth } = useWindowDimensions();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scrollContainer}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={16}
        >
          {images.map((image, imageIndex) => (
            <View style={[styles.card, { width: windowWidth, height: 300 }]} key={imageIndex}>
              <ImageBackground source={image.image} style={styles.image} />
              <View style={styles.textContainer}>
                <Text style={styles.title}>{image.title}</Text>
                <Text style={styles.description}>{image.text}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
        <View style={styles.indicatorContainer}>
          {images.map((_, imageIndex) => {
            const width = scrollX.interpolate({
              inputRange: [
                windowWidth * (imageIndex - 1),
                windowWidth * imageIndex,
                windowWidth * (imageIndex + 1),
              ],
              outputRange: [8, 16, 8],
              extrapolate: 'clamp',
            });
            return <Animated.View key={imageIndex} style={[styles.normalDot, { width }]} />;
          })}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
      },
  scrollContainer: {
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
    height: undefined,
    justifyContent: 'flex-end',
    padding: 10,
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10, // Add margin to separate from the image
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginVertical: 5,
  },
  description: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
  },
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: 'silver',
    marginHorizontal: 4,
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
});

export default CarouselComponent;
