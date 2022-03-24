import {  StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import WeatherScreen from './Screens/WeatherScreen';
import RadarScreen from './Screens/RadarScreen';
import SettingsScreen from './Screens/SettingsScreen';


import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen 
          name="Weather"
          options={{
            tabBarIcon: ({color}) => <Ionicons name="ios-partly-sunny-sharp" size={25} color={color}/>
          }} 
          component={WeatherScreen}
        />
        <Tab.Screen 
          name="Radar" 
          options={{
            tabBarIcon: ({color}) => <Ionicons name="map" size={25} color={color}/>
          }}
          component={RadarScreen} 
        />
        <Tab.Screen 
          name="Settings" 
          options={{
            tabBarIcon: ({color}) => <Ionicons name="settings" size={25} color={color}/>
          }}
          component={SettingsScreen} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
