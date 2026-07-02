import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles';

export default function YetAnotherPage({ navigation }) {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>YetAnotherPage</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('HomePage')}>
        <Text style={styles.buttonText}>Go to Home Page</Text>
      </TouchableOpacity>
    </View>
  );
}
