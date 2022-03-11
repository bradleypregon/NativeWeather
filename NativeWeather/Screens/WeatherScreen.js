import React, {useEffect, useState} from 'react';
import { RefreshControl, StyleSheet, Text, View, ScrollView, StatusBar, Button, SafeAreaView } from 'react-native';
import {OWM_KEY} from '@env';

import data from '../TestAPIData.json';

export default function WeatherScreen() {
  let lat = 41.0076;
  let long = -92.9637
  let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${OWM_KEY}`
  
  // temporarily setting useState to FALSE and commenting out [data, setData]
  const [isLoading, setLoading] = useState(false);
  //const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);


  // Temporarily Disabling for testing - no need to call API every time the app is saved!
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetchWeather()
  }, []);

  useEffect(() => {
    fetchWeather();
  }, []);

  const fetchWeather = () => {

    /*
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        setRefreshing(false);
        setLoading(false);
        setData(responseJson);
      })
      .catch((error) => {
        console.error(error)
      })
      */
  }

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView 
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      
      {
      isLoading ? <Text>Loading...</Text> : 
        <View style={styles.viewContainer}>
          <Text style={styles.cityText}>Packwood</Text>
          <Text style={styles.temperatureText}>{Math.floor(data.current.temp)}°</Text>
          
          <Text style={styles.detailText}>{data.current.weather[0].description}</Text>
          
          <Text style={styles.detailText}>H: {Math.floor(data.daily[0].temp.max)}° L: {Math.floor(data.daily[0].temp.min)}°</Text>
        </View>
      }
    </ScrollView>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#AAA',
    },
    viewContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: StatusBar.currentHeight + 20,
    },
    cityText: {
      fontSize: 40,
      color: 'white',
      textShadowColor: '#666',
      textShadowRadius: 3,
      textShadowOffset: {width: 0, height: 2}
    },
    temperatureText: {
      fontSize: 80,
      color: 'white',
      textShadowColor: '#666',
      textShadowRadius: 3,
      textShadowOffset: {width: 0, height: 2}
    },
    detailText: {
      color: 'white',
      fontSize: 17,
      fontWeight: '600'
    },
  });