import * as React from 'react';
import {Button, View, Touchable, TextInput, Text, StyleSheet, ScrollView} from 'react-native';
import {useState} from "react";
import Header from "./header";
import {useQuery,useMutation} from "@apollo/react-hooks";
import {STORY_ADD,STORY_UPDATE} from "./graphql/resolvers";
import {Updates} from "expo/build/deprecated.web";

function StoryCreate({navigation,route}) {
        const {Edit} =route.params
       let [edit,setEdit]=useState(Edit)
       const [add,setAdd]=useState('')
        const {loading, error, data}= useQuery(STORY_ADD,{variables:{edit:edit}})
        const [storyUpdate]=useMutation(STORY_UPDATE)
        if (loading) {
            return <View style={style.text}>
                <Text>Loading...</Text>
            </View>
        }
        if (error) {
            console.error(error)
            return <View style={style.text}>
                <Text>Error!</Text>
            </View>
        }
        const handleNext = () => {
            setEdit(edit++)
            storyUpdate({variables:{type:{story:data.storyToAdd,add:add,edit:edit}}})
            if(edit<3) {
                navigation.push('StoryCreate', {Edit: edit})
            }
            else {
                navigation.navigate('StoryFull',{Story:Story+add})
            }
        }
        const handleCancel = () => {
            navigation.navigate('Menu')
        }
        const handleText=(text)=>{
            if(add.length<500){
                setAdd(text)
            }
        }
        return (
            <View style={style.create}>
                <Header></Header>
                <View style={style.text}>
                    <Text>
                        {data.storyToAdd}
                    </Text>
                    <TextInput
                        onChangeText={handleText}
                    />
                </View>
                <View style={style.buttons}>
                    <Button
                        onPress={handleNext}
                        title="Next"
                        color='#DD27D6'
                    />
                    <Button
                        onPress={handleCancel}
                        title="Cancel"
                        color='red'
                    />
                </View>
            </View>
        )
    }

    const style = StyleSheet.create({
        create: {
            flex: 1,
            backgroundColor: '#EB8888',
            alignItems: 'center'
        },
        buttons: {
            flex: 1,
            justifyContent: 'space-around',
            flexDirection: 'row',
            position: 'absolute',
            bottom: 35,
            width:'80%'
        },
        textInput: {
            padding: 20,
            flex: 1,
            width:'90%',
            backgroundColor: 'yellow',
            borderColor: 'black',
        },
        text: {
            padding: 20,
            height:70,
            flex: 1,
            width:'90%',
            backgroundColor: 'yellow',
        }
    })
export default StoryCreate