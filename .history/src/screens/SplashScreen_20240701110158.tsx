import React, { useEffect, useRef } from 'react';
import { View, Text, ImageBackground, StyleSheet, Animated, Easing } from 'react-native';

const SplashScreen = () => {
  const dot1Anim = useRef(new Animated.Value(0)).current;
  const dot2Anim = useRef(new Animated.Value(0)).current;
  const dot3Anim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const createDotAnimation = (dotAnim, delay) => {
      return Animated.loop(
        Animated.sequence([
          Animated.timing(dotAnim, {
            toValue: 1,
            duration: 500,
            delay: delay,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
          Animated.timing(dotAnim, {
            toValue: 0,
            duration: 500,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
        ])
      );
    };

    const dot1Pulse = createDotAnimation(dot1Anim, 0);
    const dot2Pulse = createDotAnimation(dot2Anim, 500);
    const dot3Pulse = createDotAnimation(dot3Anim, 1000);

    dot1Pulse.start();
    dot2Pulse.start();
    dot3Pulse.start();

    return () => {
      dot1Pulse.stop();
      dot2Pulse.stop();
      dot3Pulse.stop();
    };
  }, [dot1Anim, dot2Anim, dot3Anim]);

  return (
    <ImageBackground source={require('../assets/images/logo.png')} style={styles.background}>
      <View style={styles.overlay}>
        <View style={styles.textContainer}>
          <Text style={styles.loadingText}>
            App is loading
            <Animated.Text style={[styles.dot, { opacity: dot1Anim }]}>.</Animated.Text>
            <Animated.Text style={[styles.dot, { opacity: dot2Anim }]}>.</Animated.Text>
            <Animated.Text style={[styles.dot, { opacity: dot3Anim }]}>.</Animated.Text>
          </Text>
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
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: 10,
    borderRadius: 10,
  },
  loadingText: {
    fontSize: 24,
    color: '#000',
  },
  dot: {
    fontSize: 24,
    color: '#000',
  },
});

export default SplashScreen;
