import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles';

export default function AnotherPage({ navigation }) {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Another Page</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('YetAnotherPage')}>
        <Text style={styles.buttonText}>Go to yet ANOTHER page</Text>
      </TouchableOpacity>
    </View>
  );
}
