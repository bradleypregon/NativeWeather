import MapView from 'react-native-maps';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

export default function RadarScreen() {
    return (
		<View>
        	<MapView style={styles.map} />
		</View>
     );
}

const styles = StyleSheet.create({
	map: {
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height,
	}
})