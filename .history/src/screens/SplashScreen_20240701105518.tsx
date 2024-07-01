import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Customize as per your design
  },
  logo: {
    width: 200, // Adjust the width and height as needed
    height: 200,
    marginBottom: 20,
  },
  loadingText: {
    fontSize: 18,
    color: '#000', // Customize as per your design
  },
});

export default SplashScreen;
