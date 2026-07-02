import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Bare Template</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AnotherPage')}>
        <Text style={styles.buttonText}>Go to Another Page</Text>
      </TouchableOpacity>
    </View>
  );
}
