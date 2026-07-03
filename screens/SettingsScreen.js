import React from 'react';
import { View, Text, TouchableOpacity, Image, Switch } from 'react-native';
import styles from '../Styles';
import { getColors } from './theme';


export default function Settings({ navigation, darkMode, setDarkMode }) {

  const colors = getColors(darkMode);

  return (
    <View style={[
      styles.mainContainer,
      { backgroundColor: colors.bg }
    ]}>
      <Text style={styles.title}>Settings</Text>

      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Screen Brightness: </Text>
        <Image
          source={require('../assets/brightnessSlider.png')}
          style={styles.icon}
        />
      </View>

      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Adjust Text Size: </Text>
        <Image
          source={require('../assets/fontSizer.png')} 
          style={styles.icon}
        />
      </View>

      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Sound:</Text>
        <Image
          source={require('../assets/soundControl.png')}
          style={styles.icon}
        />
      </View>

      <View>

        <Text style={{ color: colors.text }}>
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
        <Text style={styles.buttonText}> RETURN HOME </Text>
      </TouchableOpacity>
    </View>
  );
}
