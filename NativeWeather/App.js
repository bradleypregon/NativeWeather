import { StyleSheet, View } from 'react-native';
import Weather from './Screens/Weather';
import Radar from './Screens/Radar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const tab = createBottomTabNavigator;

export default function App() {
  return (
    <NavigationContainer >
      <tab.Navigator screenOptions={{headerShown: false}}>
        <tab.Screen name="Weather" component={Weather} />
        <tab.Screen name="Radar" component={Radar} />
      </tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
