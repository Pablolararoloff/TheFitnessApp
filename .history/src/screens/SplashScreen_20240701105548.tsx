import React from 'react';
import { View, Text, ImageBack, StyleSheet } from 'react-native';

const SplashScreen = () => {
  return (
    <ImageBackground source={require('../assets/images/logo.png')} style={styles.background}>
    <View style={styles.overlay}>
      <Text style={styles.loadingText}>App is loading...</Text>
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
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Optional: to add an overlay effect
  },
  loadingText: {
    fontSize: 18,
    color: '#000',
  },
});

export default SplashScreen;
