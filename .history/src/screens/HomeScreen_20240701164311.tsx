import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';
import CarouselComponent from '../components/CarouselComponent';

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <CarouselComponent />
      <Button
        mode="contained"
        onPress={() => console.log('Continue pressed')}
        style={styles.button}
        labelStyle={styles.buttonText}
      >
        Continue
      </Button>
      <Button
        onPress={() => console.log('Login pressed')}
        style={styles.link}
        labelStyle={styles.accountText}
      >
        I already have an account
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#fff',
  },
  button: {
    width: '80%',
    marginVertical: 20,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
  accountText: {
    fontSize: 16,
    color: '#000',
    textDecorationLine: 'underline',
  },
  link: {
    marginVertical: 10,
  },
});

export default HomeScreen;
