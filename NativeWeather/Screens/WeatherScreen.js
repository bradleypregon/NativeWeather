import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar, Button } from 'react-native';
import {OWM_KEY} from '@env';

export default function WeatherScreen() {
  let lat = 41.0076;
  let long = -92.9637
  let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${OWM_KEY}`
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    fetch(url)
    .then((response) => response.json())
    .then((json) => setData(json))
    .catch((error) => console.error(error))
    .finally(() => setLoading(false))
  }, []);

  return (
    <ScrollView style={styles.scrollView}>
      {
      isLoading ? <Text>Loading...</Text> : 
        <View style={styles.container}>
          <Text style={styles.cityText}>Packwood</Text>
          <Text style={styles.temperatureText}>{data.current.temp}</Text>
          <Text>{data.current.weather[0].description}</Text>
          <Text>H: {data.daily[0].temp.max} L: {data.daily[0].temp.min}</Text>
        </View>
      }
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#AAA',
      alignItems: 'center',
      justifyContent: 'center',
    },
    scrollView: {
      backgroundColor: '#AAA',
      paddingTop: StatusBar.currentHeight + 30,
    },
    cityText: {
      fontFamily: 'sans-serif-light',
      fontSize: 30,
      shadowColor: '#AAA',
      shadowRadius: 2
    },
    temperatureText: {
      fontSize: 60,
      shadowColor: '#AAA',
      shadowRadius: 2
    },
  });