
import React from 'react';
import { View, Text, TouchableOpacity, Image, Switch } from 'react-native';
import styles from '../Styles';
import { getColors } from './theme';
import { Ionicons } from '@expo/vector-icons';

export default function Settings({ navigation, darkMode, setDarkMode }) {

  const colors = getColors(darkMode);

  return (
    <View style={[
      styles.mainContainer,
      { backgroundColor: colors.bg }
    ]}>

      <View style={{ width: '90%', alignSelf: 'center' }}>

        <Text style={[styles.title, { color: colors.text }]}>
          Settings
        </Text>

        <View style={styles.settingItem}>
          <Text style={[styles.settingText, { color: colors.text }]}>
            Screen Brightness (WIP):
          </Text>
          <TouchableOpacity>
            <Ionicons name="sunny" size={24} color={colors.text} />
          </TouchableOpacity>
       </View>

        <View style={styles.settingItem}>
          <Text style={[styles.settingText, { color: colors.text }]}>
            Adjust Text Size (WIP):
          </Text>
          <TouchableOpacity>
            <Ionicons name="text" size={24} color={colors.text} />
          </TouchableOpacity>
        </View>

        <View style={styles.settingItem}>
          <Text style={[styles.settingText, { color: colors.text }]}>
            Sound (WIP):
          </Text>
          <TouchableOpacity>
            <Ionicons name="volume-high" size={24} color={colors.text} />
          </TouchableOpacity>
        </View>

        <View style={styles.settingItem}>
          <Text style={[styles.settingText, { color: colors.text }]}>
            Dark Mode
          </Text>

          <Switch
            value={darkMode}
            onValueChange={setDarkMode}
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>RETURN HOME</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}
