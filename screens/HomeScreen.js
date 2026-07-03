import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../Styles';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Welcome to Elevate Horizons Connect</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('EventsList')}>
        <Text style={styles.buttonText}>Go to events!</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Settings')}>
        <Text style={styles.buttonText}>Go to settings</Text>
      </TouchableOpacity>
    </View>
  );
}
