import React, {Component, createContext} from 'react';
import {Text, View,Alert} from 'react-native';
import * as MediaLibrary from 'expo-media-library';


export const AudioContext = createContext();
export class AudioProvider extends Component{
    constructor(props){
        super(props)
        this.state={
            audioFiles : [],
            permissionError : false
        };
    }
    permissionAllert = () =>{
        Alert.alert("Permission Required", "This app needs to read audio files",
        [
            {
            text:'I am ready',
            onPress : () => this.getPermission(),
        },
    {
        text:'cancel', 
        onPress: () => this.permissionAllert(),
    },
]);
    };

    getAudioFiles = async () =>{
        let media = await MediaLibrary.getAssetsAsync({
            mediaType: MediaLibrary.MediaType.audio,
        });
        media = await MediaLibrary.getAssetsAsync({
            mediaType: MediaLibrary.MediaType.audio,
            first: media.totalCount,
        });

        this.setState({...this.state, audioFiles:media.assets});
        console.log(media.assets.length);

    };
    getPermission = async () => {
    //"accessPrivileges": "none", 
    //"canAskAgain": true, 
    // "expires": "never", 
    // "granted": false, 
    // "status": "undetermined"
        const permission = await MediaLibrary.getPermissionsAsync();
        if(permission.granted){
            // we want to get all the audio files
            this.getAudioFiles();
        }
        if(!permission.canAskAgain && !permission.granted){
            this.setState({...this.state, permissionError: true});
        }
        if(!permission.granted && permission.canAskAgain){
            const {status, canAskAgain} = await MediaLibrary.requestPermissionsAsync();
            // check for the permission status, we try to request!
            // 유저에게 권한 물어보는 팝업이 뜰것!
            if(status==='denied' && canAskAgain){
                // we are going to display alert that user must allow this permission to work this app
                this.permissionAllert();
            }
            if(status === 'granted'){
                // we want to get all the audio files
                this.getAudioFiles();
            }
            if(status==='denied' && !canAskAgain){
                // we want to display some error to the user
                this.setState({...this.state, permissionError: true});
            }
        }
    }

    componentDidMount(){
        this.getPermission();
    }

    render(){
        if(this.state.permissionError) return <View style={{
                flex:1,
                justifyContent:'center',
                alignItems:'center'
        }}>
            <Text style={{fontSize:25, textAlign:'center', color:'red'}}> It looks like you haven't accept the permission</Text>
        </View>

        return (<AudioContext.Provider value={{audioFiles:this.state.audioFiles}}>
            {this.props.children}
        </AudioContext.Provider>);
    }
}

export default AudioProvider;