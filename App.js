import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Feather } from "@expo/vector-icons"
import { Audio } from 'expo-av';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './app/navigation/AppNavigator'
const icons={
  "icon1":"thumbs-up"
}
export default function App() {

  return (
    <NavigationContainer>
      <AppNavigator/>
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
  text:{
    fontSize:28
  }
});
