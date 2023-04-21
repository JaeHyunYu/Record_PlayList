import React, {Component} from 'react';
import { Text, View,Alert } from 'react-native';
import * as MediaLibrary from 'expo-media-library';

export class AudioProvider extends Component{


    constructor(props){
        super(props)
    }

    permissionAllert = () =>{
        Alert.alert("Permission Required", "This app needs to read audio files",[{
            text:'I am ready',
            onPress : () => this.getPermission()
        },
    {
        text:'cancel', 
        onPress: () => this.permissionAllert()
    }])
    }

    getPermission = async () => {
            //"accessPrivileges": "none", 
    //"canAskAgain": true, 
    // "expires": "never", 
    // "granted": false, 
    // "status": "undetermined"
        const permission = await MediaLibrary.getPermissionsAsync()
        if(permission.granted){
            // we want to get all the audio files

        }
        if(!permission.granted && permission.canAskAgain){
            const {status, canAskAgain} = await MediaLibrary.requestPermissionsAsync()
            // check for the permission status, we try to request!
            // 유저에게 권한 물어보는 팝업이 뜰것!

            if(status==='denied' && canAskAgain){
                // we are going to display alert that user must allow this permission to work this app
                this.permissionAllert()
            }

            if(status === 'granted'){
                // we want to get all the audio files

            }
            if(status==='denied' && !canAskAgain){
                // we want to display some error to the user
            }
        }
    }

    componentDidMount(){
        getPermissions()
    }

    render(){
        return(
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}