import * as React from 'react';
import {
    Button,
    View,
    TextInput,
    Text,
    StyleSheet,
    ScrollView,
    Alert,
    ImageBackground,
    Modal
} from 'react-native';
import {useEffect, useState} from "react";
import {pastel,cool} from './constants/colors'
import Constants from 'expo-constants'
import sizes from "./constants/buttons";
import {useQuery,useMutation} from "@apollo/react-hooks";
import {STORY_ADD,STORY_UPDATE} from "./graphql/resolvers";
function StoryCreate({navigation,route}) {
       const {Edit} =route.params
       let [edit,setEdit]=useState(Edit)
       const [add,setAdd]=useState('')
       const [storyLength,setStoryLength]=useState(0)
       const [show,setShow]=useState(true)
    const userId=Constants.sessionId
       const {loading, error, data}= useQuery(STORY_ADD,{variables:{userId:userId}})
       const [storyUpdate]=useMutation(STORY_UPDATE)
        if (loading) {
            return <View style={style.textLoading}>
                <Text>Loading...</Text>
            </View>
        }
        if (error) {
            Alert.alert('Currently we are experiencing server error ','posibly connection error,try again later' ,[{
                text: 'okay',
                style: 'default'
            }])
            console.error(error)
            navigation.navigate('Menu')
        }
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
        if(data.storyToAdd.sentence=='This is my story...' && show){
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
        const handleNext = () => {
            storyUpdate({variables:{type:{sentence:add,user:user,storyId:data.storyToAdd.storyId,storyMaxLength:storyLength}}})
            setEdit(edit++)
                if(add.length<10) {
                    Alert.alert('You didn\'t even write a sentence', 'You need to at least write 10 characters to be considered a sentence', [{
                        text: 'okay',
                        style: 'default'
                    }])
                }
               else {
                    navigation.push('StoryCreate', {Edit: edit})
                }
            }

        const handleCancel = () => {
            navigation.navigate('Menu')
        }
        const handleText=(text)=>{
                setAdd(text)
        }


        return (
            <View style={style.create}>
                <ImageBackground source={require('../assets/depositphotos_145755617-stock-illustration-notebook-paper-background-yellow-lined.png')} style={style.image}>
                <ScrollView>
                <View style={style.textStory}>
                    <Text numberOfLines={2}>
                        {data.storyToAdd.sentence}
                    </Text>

                    <View style={style.textInput}>
                    <TextInput multiline={true} maxLength={500}
                        onChangeText={handleText}
                    />
                    </View>
                </View>
                </ScrollView>
                <View style={style.buttons}>
                    <View style={style.button}>
                    <Button
                        onPress={handleNext}
                        title="Next"
                        color={cool.buttons}
                    />
                    </View>
                    <View style={style.button}>
                    <Button
                        onPress={handleCancel}
                        title="Cancel"
                        color={cool.buttons}
                    />
                    </View>
                </View>

                </ImageBackground>
            </View>
        )
    }

    const style = StyleSheet.create({
        create: {
            flex: 1,
            alignItems: 'center'
        },
        centeredView: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 22
        },
        buttonModal:{
          width:sizes.buttonsRest
        },
        modalView: {
            margin: 20,
            borderRadius:100,
            padding:20,
            alignItems: "center",
            elevation: 5,
            backgroundColor:pastel.backgroundColorModal
        },
        buttons: {
            flex: 1,
            justifyContent: 'space-around',
            flexDirection: 'row',
            position: 'absolute',
            bottom: 50,
            width:'80%',
            left: 40
        },
        textInput: {
            flex:1,
            width:240,
            maxWidth:320,
            height:200
        },
        textStory: {
            flex: 1,
            width:240,
            left:60,
            maxWidth:320,
            elevation:5,
            shadowColor:'black',
            alignSelf:'stretch',
            flexWrap:'wrap',
            zIndex:1
        },
        button:{
            width:sizes.buttonsRest
        },
        textLoading:{
            flex: 1,
            fontSize:25,
            justifyContent:'center',
            backgroundColor:cool.backgroundColorApp,
            alignItems: 'center'
        },
        image: {
            flex: 1,
            width:380,
            justifyContent: "center"
        },
        textInputModal:{
            borderBottomColor:'black',
            borderBottomWidth:3
        },
        newStoryModalView:{
            flex: 1,
            justifyContent:'center',
            backgroundColor:cool.backgroundColorApp,
            alignItems: 'center'
        }
    })
export default StoryCreate