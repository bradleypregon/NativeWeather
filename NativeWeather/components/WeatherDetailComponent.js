import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const WeatherDetailComponent = (props) => {
    return (
         <View style={styles.box}>
             <View style={styles.boxInner}>
                <Text style={styles.headerText}>{props.header}</Text>
                <Text style={styles.contentText}>{props.data}</Text>
             </View>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        width: '50%',
        aspectRatio: 1,
        padding: 5,
    },
    boxInner: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 10, 
        backgroundColor: 'rgba(1,1,1, 0.1)',
    },
    headerText: {
      padding: 10,
      color: 'black',
    },
    contentText: {
      padding: 10,
      fontSize: 40,
    }
})

export default WeatherDetailComponent;