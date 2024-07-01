import React, { useEffect, useRef } from 'react';
import { View, Text, ImageBackground, StyleSheet, Animated, Easing } from 'react-native';

const SplashScreen = () => {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const pulse = Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.2,
          duration: 500,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 500,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    );
    pulse.start();

    return () => pulse.stop();
  }, [scaleAnim]);

  return (
    <ImageBackground source={require('../assets/images/logo.png')} style={styles.background}>
      <View style={styles.overlay}>
        <Animated.View style={[styles.textContainer, { transform: [{ scale: scaleAnim }] }]}>
          <Text style={styles.loadingText}>App is loading...</Text>
        </Animated.View>
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
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: 10,
    borderRadius: 10,
  },
  loadingText: {
    fontSize: 24, // Increased font size
    color: '#000',
  },
});

export default SplashScreen;
