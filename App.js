import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Feather } from "@expo/vector-icons"

const icons={
  "icon1":"thumbs-up"
}
export default function App() {
  return (
    <View style={styles.container}>
     <Feather name="thumbs-up" size={80} color="black" />
      <Text style={styles.text}> Test </Text>
      <StatusBar style="auto" />
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
  text:{
    fontSize:28
  }
});
