import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Feather } from "@expo/vector-icons"
import { Audio } from 'expo-av';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './app/navigation/AppNavigator'
import { AudioProvider } from './app/context/AudioProvider';
const icons={
  "icon1":"thumbs-up"
}

export default function App() {

  return (
    <AudioProvider>
      <NavigationContainer>
        <AppNavigator/>
     </NavigationContainer>
    </AudioProvider>
  );
}
