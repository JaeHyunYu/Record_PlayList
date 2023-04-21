import React from 'react';
import { View, StyleSheet,Text } from 'react-native';
import * as MediaLibrary from 'expo-media-library';


const AudioList = () =>{
    
    return (
        <View style={styles.container}>
            <Text>AudioList</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default AudioList;