
import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import styles from '../Styles';
import { getColors } from './theme';
import { Ionicons } from '@expo/vector-icons';

export default function ViewTask({ route, darkMode }) {
  const colors = getColors(darkMode);
  const { task } = route.params;

  return (
    <View style={[
      styles.mainContainer,
      { backgroundColor: colors.bg }
    ]}>

      <ScrollView contentContainerStyle={{ paddingTop: 20 }}>

        <View style={{ width: '90%', alignSelf: 'center' }}>

          <Text style={[styles.title, { color: colors.text }]}>
            Event Details
          </Text>

          <View style={[
            styles.eventCard,
            { backgroundColor: colors.card }
          ]}>

            <Image
              source={require('../assets/boardRoom-unsplash.jpg')}
              style={styles.eventImage}
            />

            <Text style={[styles.eventTitle, { color: colors.text }]}>
              {task.eventName}
            </Text>

            <Text style={[styles.eventTime, { color: colors.text }]}>
              {task.eventDate}
            </Text>

            <Text style={[styles.taskText, { color: colors.text }]}>
              ID: {task.id}
            </Text>

            <Text style={[styles.taskText, { color: colors.text }]}>
              {task.description}
            </Text>

          </View>

        </View>

      </ScrollView>
    </View>
  );
}
