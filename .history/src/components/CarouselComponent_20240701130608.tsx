import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CarouselComponent from '../components/CarouselComponent';

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <CarouselComponent />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.accountText}>I have already an account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  button: {
    width: '80%',
    padding: 15,
    backgroundColor: '#000',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  accountText: {
    color: '#000',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});

export default HomeScreen;
