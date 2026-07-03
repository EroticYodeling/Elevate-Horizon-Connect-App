import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';

import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import ListScreen from './screens/ListScreen';
import ViewScreen from './screens/ViewScreen';
import styles from './Styles';

const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Trebuchet: require('./assets/fonts/TREBUC.TTF'),
  });


  const [darkMode, setDarkMode] = React.useState(false);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ navigation }) => ({
          headerStyle: styles.header,
          headerTitleStyle: styles.headerTitle,
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Image
                source={require('./assets/Elevate_Horizon_Logo_Only.png')}
                style={styles.logo}
              />
            </TouchableOpacity>
          ),
        })}>        
        <Stack.Screen name="Home">
          {(props) => (
            <HomeScreen {...props} darkMode={darkMode} />
          )}
        </Stack.Screen>

        <Stack.Screen name="Settings">
          {(props) => (
            <SettingsScreen
              navigation={props.navigation}
              route={props.route}
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            />
          )}
        </Stack.Screen>       
        <Stack.Screen name="TaskList">
          {(props) => (
            <ListScreen {...props} darkMode={darkMode} />
          )}
        </Stack.Screen>       
        <Stack.Screen name="ViewScreen">
          {(props) => (
            <ViewScreen {...props} darkMode={darkMode} />
          )}
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
