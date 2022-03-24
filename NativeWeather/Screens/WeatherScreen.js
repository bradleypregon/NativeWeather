import React, {useEffect, useState} from 'react';
import { RefreshControl, StyleSheet, Text, View, ScrollView, StatusBar, SafeAreaView, Image, ImageBackground} from 'react-native';
import {OWM_KEY} from '@env';

import data from '../TestAPIData.json';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

import WeatherDetailComponent from '../components/WeatherDetailComponent';

import testImage from '../assets/04d.jpg';

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

  // uncomment when go live
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
    <ImageBackground source={testImage} resizeMode="cover" style={{flex: 1, justifyContent: 'center'}}>

    
    <ParallaxScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }

      backgroundColor="transparent"
      contentBackgroundColor="transparent"
      parallaxHeaderHeight={325}

      // small sticky header
      renderStickyHeader={() => (
        <View style={{flex: 0, alignItems: 'center', justifyContent: 'center', paddingTop: StatusBar.currentHeight+60}}>
          <Text style={styles.cityText}>Packwood</Text>
          <Text style={styles.detailText}>{Math.floor(data.current.temp)}° | {data.current.weather[0].description}</Text>
        </View>
      )}
      stickyHeaderHeight={200}

      // big parallax header
      renderForeground={() => (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: StatusBar.currentHeight+40}}>
          {
          isLoading ? <Text>Loading...</Text> : 
          <View style={styles.viewContainer}>
            <Text style={styles.cityText}>Packwood</Text>
            <Text style={styles.temperatureText}>{Math.floor(data.current.temp)}°</Text>
            <Text style={styles.detailText}>{data.current.weather[0].description}</Text>
            <Text style={styles.detailText}>H: {Math.floor(data.daily[0].temp.max)}° L: {Math.floor(data.daily[0].temp.min)}°</Text>
          </View>
          }
        </View>
      )} >
      
      <View style={{ width: '100%', padding: 20, flexDirection: 'row', flexWrap: 'wrap',  }}>
        <WeatherDetailComponent header={'UV Index'} data={data.current.uvi}/>
        <WeatherDetailComponent header={'Wind'} data={data.current.wind_speed}/>
        <WeatherDetailComponent header={'Feels Like'} data={data.current.feels_like}/>
      </View>

    </ParallaxScrollView>
    </ImageBackground>
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
      paddingTop: StatusBar.currentHeight + 30,
    },
    cityText: {
      fontSize: 40,
      color: 'white',
      paddingTop: 5,
      paddingBottom: 5,
      paddingLeft: 10,
      paddingRight: 10,
      textShadowColor: '#666',
      textShadowRadius: 8,
      textShadowOffset: {width: 0, height: 2},
      elevation: 3,
    },
    temperatureText: {
      fontSize: 100,
      fontWeight: '200',
      color: 'white',
      textShadowColor: '#666',
      textShadowRadius: 8,
      textShadowOffset: {width: 0, height: 1},
      elevation: 3
    },
    detailText: {
      color: 'white',
      fontSize: 20,
      fontWeight: '600',
      paddingTop: 5,
      paddingBottom: 5,
      paddingLeft: 10,
      paddingRight: 10,
      textShadowColor: '#666',
      textShadowRadius: 5,
      textShadowOffset: {width: 0, height: 1},
      elevation: 3
    },
  });