import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

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
    
  },
  loadingText: {
    fontSize: 23,
    color: '#fff',
    padding: 10,
    borderRadius: 10,
  },
});

export default SplashScreen;
