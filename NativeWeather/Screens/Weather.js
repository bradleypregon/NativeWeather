import { StyleSheet, Text, View } from 'react-native';

export default function Weather() {
  return (
    <View style={styles.container}>
      <Text>Weather Screen</Text>
    </View>
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