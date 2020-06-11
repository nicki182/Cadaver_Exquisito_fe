import {Alert, Button, Modal, Text, TextInput, View,StyleSheet} from "react-native";
import * as React from "react";
import {cool, pastel} from "./constants/colors";
import sizes from "./constants/buttons";
import {useState} from "react";
function NewStoryPopUp({setShow,show}){
    const [storyLength,setStoryLength]=useState(0)
const handleNumber=(number)=>{
    setStoryLength(number)
}
const handleModal=()=> {
    if (3 < storyLength < 15)
        setShow(false)
    else {
        Alert.alert('You need to put a number between 3 and 15', 'A story needs to have beetwen 3 to 15 sentences', [{
            text: 'okay',
            style: 'default'
        }])
    }
}
    return(
        <View style={style.newStoryModalView}>
            <Modal visible={show} transparent={true}>
                <View style={style.centeredView}>
                    <View style={style.modalView}>
                        <Text>
                            How long do you wish this new story to be?
                        </Text>
                        <View style={style.textInputModal}>
                            <TextInput maxLength={2} keyboardType={"number-pad"}
                                       onChangeText={handleNumber}/>
                        </View>
                        <View style={style.buttonModal}>
                            <Button title={'Okay'} onPress={handleModal}/>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}
const style=StyleSheet.create({
    textInputModal:{
        borderBottomColor:'black',
        borderBottomWidth:3
    },
    newStoryModalView:{
        flex: 1,
        justifyContent:'center',
        backgroundColor:cool.backgroundColorApp,
        alignItems: 'center'
    },
    modalView: {
        margin: 20,
        borderRadius:100,
        padding:20,
        alignItems: "center",
        elevation: 5,
        backgroundColor:pastel.backgroundColorModal
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    buttonModal:{
        width:sizes.buttonsRest
    }
})
export default NewStoryPopUp