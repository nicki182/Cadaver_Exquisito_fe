import React, {useState, useEffect, useLayoutEffect} from "react"
import {Modal,View,Button,StyleSheet,Alert,TouchableOpacity} from "react-native";
import { Audio } from 'expo-av'
import {AppLoading} from "expo";
import { Feather } from '@expo/vector-icons';
function  Settings() {
    const [show,setShow]=useState(false)
     const [mute,setMute]=useState(1.0)
     useLayoutEffect(() => {
         async function playMusic(mute,show) {
             const soundObject = new Audio.Sound();
             if (show == false) {
                 try {
                     await soundObject.loadAsync(require('../assets/sounds/Men_I_Trust-Oncle_Jazz(Full_Album_HQ)(128_kbps).mp3'));
                     await soundObject.playAsync();
                     // Your sound is playing!
                 } catch (error) {
                     Alert.alert('Ups something went wrong', 'wasnt able to play music', [{
                         text: 'okay',
                         style: 'default'
                     }])
                 }
                 await soundObject.getStatusAsync({shouldPlay: true, isLooping: true, isMuted: 1.0})
             }
             else{
                 await soundObject.getStatusAsync({isMuted:mute})
             }
         }

         playMusic(mute,show)

         // Return the function to unsubscribe from the event so it gets removed on unmount;
     }, [])
    const OnPress=()=>{
        setShow(true)
    }
    const muteMusic=()=> {
        setMute(0.0)
    }
    const startMusic=()=>{
        setMute(1.0)
    }
    const leaveConfig=()=>{
        setShow(false)
    }
         return (
                 <View style={style.settings}>
                 <Feather name="settings" size={24} color="grey" onPress={OnPress} />
                 <Modal visible={show}>//necesito cambiar el diseño del modal
                     <View style={style.settingMenu}>
                         <View style={style.button}>
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
    settingMenu:{
        alignItems:'center',
        flex:1,
        justifyContent: 'space-around',
        width:'80%',
        backgroundColor:'white',
        zIndex:1
    },
    button:{
    width:120,
    },
    settings:{
        flex:1,
        marginTop:40,
        alignSelf:'flex-end'

    },
    buttonOk:{
    width:120
    }
})
export default Settings
