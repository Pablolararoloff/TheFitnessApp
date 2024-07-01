import React, { useEffect, useRef } from 'react';
import { View, Text, ImageBackground, StyleSheet, Animated, Easing } from 'react-native';

const SplashScreen = () => {
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const waveAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(animation, {
          toValue: 1,
          duration: 2000, // Total duration of one wave cycle
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(animation, {
          toValue: 0,
          duration: 2000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ])
    );

    waveAnimation.start();

    return () => waveAnimation.stop();
  }, [animation]);

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
                      scale: animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [1, 1.5],
                        extrapolate: 'clamp',
                        // Adjust the inputRange to create a wave effect
                      }),
                    },
                  ],
                  opacity: animation.interpolate({
                    inputRange: [0, 0.5, 1],
                    outputRange: [1, 0.5, 1],
                    extrapolate: 'clamp',
                  }),
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
