import React,{useState,useEffect} from "react"
import {Modal,View,Button,StyleSheet,Alert,TouchableOpacity} from "react-native";
import { Audio } from 'expo-av'
import {AppLoading} from "expo";
async function _loadNewPlaybackInstance() {
    const soundObject = new Audio.Sound();
      const load= await soundObject.loadAsync(require('../assets/sounds/Men_I_Trust-Oncle_Jazz(Full_Album_HQ)(128_kbps).mp3'));
        // Your sound is playing!
    if(!load){
        return <AppLoading/>
    }
    await soundObject.playAsync();
    const initialStatus = {
//        Play by default
        shouldPlay: true,
//        Control the speed
        rate: 1.0,
//        Correct the pitch
        shouldCorrectPitch: true,
//        Control the Volume
        volume: 1.0,
//        mute the Audio
        isMuted: false
    };
//  Save the response of sound in playbackInstance
//  Play the Music
}
 function  Configuration() {
    const [show,setShow]=useState(false)
    useEffect(()=>{
        _loadNewPlaybackInstance(true)
    })
    const OnPress=()=>{
     console.log('aca estoy')
        setShow(true)
    }
    const muteMusic=()=> {
    }
    const startMusic=()=>{
    }
    const leaveConfig=()=>{
        setShow(false)
    }
         return (
             <View style={style.config}>
                 <View style={style.buttonConfig}>
                     <Button onPress={OnPress} color={'grey'} title={""}/>
                 </View>
                 <Modal visible={show} transparent={true}>
                     <View style={style.config}>
                         <View style={style.buttonConfig}>
                             <Button title={"Mute"} onPress={muteMusic}/>
                         </View>
                         <View style={style.button}>
                             <Button title={"Re Start"} onPress={startMusic}/>
                             <View>
                                 <Button title={"Ok"} onPress={leaveConfig}/>
                             </View>
                         </View>
                     </View>
                 </Modal>
             </View>
         )
}
const style=StyleSheet.create({
buttonConfig:{
    width: 20,
    height: 20,
    borderRadius: 20/2
},
    configMenu:{
        alignItems:'center',
        flex:1,
        justifyContent: 'space-around',
        width:'80%',
    },
    button:{
    width:10
    },
    config:{
        flex:1,
        alignSelf:'flex-end',
        position:'absolute',
        backgroundColor:'grey'
    },
    buttonOk:{
    width:20
    }
})
export default Configuration