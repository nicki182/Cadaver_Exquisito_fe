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
} from 'react-native';
import NewStoryPopUp from "./newStoryPopUp";
import { useState} from "react";
import {pastel,cool} from './constants/colors'
import Constants from 'expo-constants'
import sizes from "./constants/buttons";
import {useQuery,useMutation} from "@apollo/react-hooks";
import {STORY_ADD,STORY_UPDATE} from "./graphql/resolvers";
function StoryCreate({navigation,route}) {
       const {Edit} =route.params
       let [edit,setEdit]=useState(Edit)
       const [add,setAdd]=useState('')
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

    if(data.storyToAdd.lastSentence==='This is my story...' && show){
        return(
           <NewStoryPopUp setShow={setShow} show={show}></NewStoryPopUp>
        )
    }
        const handleNext = () => {
            storyUpdate({variables:{type:{sentence:add,user:user,storyId:data.storyToAdd.storyId,storyMax:storyLength}}})
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
                        {data.storyToAdd.lastSentence}
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
        storyModalView:{
            flex: 1,
            justifyContent:'center',
            backgroundColor:cool.backgroundColorApp,
            alignItems: 'center'
        }
    })
export default StoryCreate