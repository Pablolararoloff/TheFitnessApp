import React, { useEffect, useRef } from 'react';
import { View, Text, ImageBackground, StyleSheet, Animated, Easing } from 'react-native';

const SplashScreen = () => {
  const animations = useRef(
    Array.from({ length: 17 }).map(() => new Animated.Value(0))
  ).current;

  useEffect(() => {
    const createWaveAnimation = (animation, index) => {
      return Animated.loop(
        Animated.sequence([
          Animated.timing(animation, {
            toValue: 1,
            duration: 1300,
            delay: index * 100,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
          Animated.timing(animation, {
            toValue: 0,
            duration: 1300,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
        ])
      );
    };

    const waves = animations.map((animation, index) =>
      createWaveAnimation(animation, index)
    );

    waves.forEach(wave => wave.start());

    return () => waves.forEach(wave => wave.stop());
  }, [animations]);

  const text = "App is loading...";

  return (
    <ImageBackground source={require('../assets/images/logo.png')} style={styles.background}>
      <View style={styles.overlay}>
        <View style={styles.textContainer}>
          {text.split('').map((char, index) => (
            <Animated.Text
              key={index}
              style={[
                styles.loadingText,
                {
                  transform: [
                    {
                      scale: animations[index].interpolate({
                        inputRange: [0, 1],
                        outputRange: [1, 1.5], // Scale effect range
                      }),
                    },
                  ],
                },
              ]}
            >
              {char}
            </Animated.Text>
          ))}
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: 10,
    borderRadius: 10,
  },
  loadingText: {
    fontSize: 24,
    color: '#000',
  },
});

export default SplashScreen;
