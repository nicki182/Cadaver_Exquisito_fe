import React, {useState, useEffect,useRef} from "react"
import {Modal,View,Button,StyleSheet,Alert,TouchableOpacity} from "react-native";
import { Audio } from 'expo-av'
import {AppLoading} from "expo";
import { Feather } from '@expo/vector-icons';
import sizes from './constants/buttons'
import {pastel} from "./constants/colors";
function  Settings() {
    const isFirstRun = useRef(true);
    const [show,setShow]=useState(false)
    const [sound,setSound]=useState(undefined)
     useEffect(() => {
         async function playMusic() {
                 if(isFirstRun.current) {
                     const soundObject=new Audio.Sound()
                     try {
                         await soundObject.loadAsync(require('../assets/sounds/Men_I_Trust-Oncle_Jazz(Full_Album_HQ)(128_kbps).mp3'))
                         // Your sound is playing!
                     } catch (error) {
                         Alert.alert('Ups something went wrong', 'wasn\'t able to play music', [{
                             text: 'okay',
                             style: 'default'
                         }])
                     }
                     await soundObject.setIsLoopingAsync(true)
                     setSound(soundObject)
                     isFirstRun.current = false;
                 }
         }
         playMusic()
    },[])
    const OnPress=()=>{
        setShow(true)
    }
    const muteMusic=()=> {
        if(sound!=undefined) {
            sound.setIsMutedAsync(true)
        }
    }
    const startMusic=()=>{
        if(sound!=undefined) {
            sound.setIsMutedAsync(false)
        }
    }
    const leaveConfig=()=>{
        setShow(false)
    }
         return (
                 <View style={style.settings}>
                 <Feather name="settings" size={24} color="grey" onPress={OnPress} />
                 <Modal visible={show} transparent={true}>
                             <View style={style.centeredView}>
                                 <View style={style.modalView}>
                                     <View style={style.buttons}>
                                         <View style={style.buttonsStartMute}>
                         <View style={style.button}>
                             <Button title={"Mute"} onPress={muteMusic}/>
                         </View>
                         <View style={style.button}>
                             <Button title={"Start"} onPress={startMusic}/>
                         </View>
                             </View>
                             <View style={style.buttonOk}>
                                 <Button title={"Ok"} onPress={leaveConfig}/>
                                 </View>
                                     </View>
                             </View>
                             </View>
                 </Modal>
             </View>
         )
}
const style=StyleSheet.create({
        centeredView: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 22
        },
    button:{
    width:sizes.buttonsModal,
    },
    settings:{
        flex:1,
        marginTop:50,
        marginRight:30

    },
    buttons:{
      justifyContent:"space-around"
    },
    buttonsStartMute:{
        flexDirection: 'row',
        width:'80%'
    },
    buttonOk:{
    width:sizes.buttonsRest
    },
    modalView: {
        margin: 20,
        borderRadius: 200,
        padding:20,
        alignItems: "center",
        elevation: 5,
        backgroundColor:pastel.backgroundColorModal
    }
})
export default Settings