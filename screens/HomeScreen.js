
import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import styles from '../Styles';
import { getColors } from './theme';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({ navigation, darkMode }) {
  const colors = getColors(darkMode);

  return (
    <View style={[
      styles.mainContainer,
      { backgroundColor: colors.bg }
    ]}>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 80 }}
        showsVerticalScrollIndicator={true}
      >

        <View style={{ width: '90%', alignSelf: 'center' }}>
          <View style={styles.eventPreviews}>

            <View style={[
              styles.eventCard,
              { backgroundColor: colors.card }
            ]}>
              <Image
                source={require('../assets/Woodworking_Pexels_SD.jpg')}
                style={styles.eventImage}
              />
              <Text style={[styles.eventTitle, { color: colors.text }]}>
                Men's woodworking session
              </Text>
              <Text style={[styles.eventTime, { color: colors.text }]}>
                03:00 PM · 01/01/2026
              </Text>
            </View>

            <View style={[
              styles.eventCard,
              { backgroundColor: colors.card }
            ]}>
              <Image
                source={require('../assets/Yoga_Pexels_SD.jpg')}
                style={styles.eventImage}
              />
              <Text style={[styles.eventTitle, { color: colors.text }]}>
                Yoga in the park
              </Text>
              <Text style={[styles.eventTime, { color: colors.text }]}>
                05:00 PM · 01/01/2026
              </Text>
            </View>

            <View style={[
              styles.eventCard,
              { backgroundColor: colors.card }
            ]}>
              <Image
                source={require('../assets/Hide_And_Seek_Pexels_SD.jpg')}
                style={styles.eventImage}
              />
              <Text style={[styles.eventTitle, { color: colors.text }]}>
                Hide & seek session featuring Wally
              </Text>
              <Text style={[styles.eventTime, { color: colors.text }]}>
                07:00 AM · 01/01/2026
              </Text>
            </View>

          </View>
        </View>

      </ScrollView>

      <View style={[
        styles.navBar,
        { backgroundColor: colors.card }
      ]}>

        <TouchableOpacity
          style={[
            styles.navButton,
            {
              backgroundColor: darkMode ? '#2a2a2a' : '#ffffff',
              borderColor: darkMode ? '#555' : '#000',
            }
          ]}
          onPress={() => navigation.navigate('Home')}>
          
          <View style={{ alignItems: 'center' }}>
            <Ionicons name="home" size={20} color={colors.text} />
            <Text style={[styles.navText, { color: colors.text }]}>
              Home
            </Text>
          </View>

        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.navButton,
            {
              backgroundColor: darkMode ? '#2a2a2a' : '#ffffff',
              borderColor: darkMode ? '#555' : '#000',
            }
          ]}
          onPress={() => navigation.navigate('TaskList')}>
          
          <View style={{ alignItems: 'center' }}>
            <Ionicons name="calendar-outline" size={20} color={colors.text} />
            <Text style={[styles.navText, { color: colors.text }]}>
              Events
            </Text>
          </View>

        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.navButton,
            {
              backgroundColor: darkMode ? '#2a2a2a' : '#ffffff',
              borderColor: darkMode ? '#555' : '#000',
            }
          ]}
          onPress={() => navigation.navigate('Settings')}>
            <View style={{ alignItems: 'center' }}>
            <Ionicons name="settings" size={20} color={colors.text} />
            <Text style={[styles.navText, { color: colors.text }]}>
              Settings
            </Text>
          </View>
        </TouchableOpacity>

      </View>

    </View>
  );
}
``
