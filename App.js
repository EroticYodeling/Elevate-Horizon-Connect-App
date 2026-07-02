import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import AnotherPage from './screens/AnotherPage';
import YetAnotherPage from './screens/YetAnotherPage'; 
import styles from './styles';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ navigation }) => ({
          headerStyle: styles.header,
          headerTitleStyle: styles.headerTitle,
        })}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AnotherPage" component={AnotherPage} />
        <Stack.Screen name="YetAnotherPage" component={YetAnotherPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
