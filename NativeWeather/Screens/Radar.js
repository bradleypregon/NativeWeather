import MapView from 'react-native-maps';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

export default function Radar() {
    return (
        <MapView style={styles.map}/>
     );
}

const styles = StyleSheet.create({
	map: {
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height
	}
})