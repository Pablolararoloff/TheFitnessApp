import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // Simulate a loading process, then navigate to the Home screen
    const timeout = setTimeout(() => {
      navigation.navigate('Home');
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timeout); // Cleanup timeout on unmount
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/artr')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100, // Adjust the size as needed
    height: 100, // Adjust the size as needed
    resizeMode: 'contain',
  },
});

export default SplashScreen;
