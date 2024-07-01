import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header: React.FC<{ title: string }> = ({ title }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#cc8948',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default Header;
