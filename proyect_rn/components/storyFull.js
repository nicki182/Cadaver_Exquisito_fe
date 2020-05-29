import {useState} from "react";
import {Button, StyleSheet, View, Text, ScrollView, ImageBackground} from "react-native";
import * as React from "react";
import {STORY_FULL} from "./graphql/resolvers";
import {useQuery} from "@apollo/react-hooks";
import {pastel,cool} from "./constants/colors";
import sizes from "./constants/buttons";
function StoryFull({navigation,route}) {
    const {Call}=route.params
    let [call,setCall]=useState(Call)
    const {loading,error,data}=useQuery(STORY_FULL,{variables:{call:Call}})
    if(loading){
        return <View style={style.textLoading}>
            <Text>Loading...</Text>
        </View>
    }
    if(error){
        console.error(error)
        return <View style={style.textLoading}>
            <Text>Error!</Text>
        </View>
    }
    const handleNext=()=>{
        setCall(call++)
        navigation.push('StoryFull',{Call:call})
    }
    const handleMenu=()=>{
       navigation.navigate('Menu')
    }
    return(
        <View style={style.full}>
            <ImageBackground source={require('../assets/depositphotos_145755617-stock-illustration-notebook-paper-background-yellow-lined.png')} style={style.image}>
            <View style={style.textStory}>
                <ScrollView>
            <Text>{data.storyFull}</Text>
                </ScrollView>
                </View>
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
                onPress={handleMenu}
                title="Menu"
                color={cool.buttons}
            />
                </View>
            </View>
            </ImageBackground>
        </View>
    )
}
const style = StyleSheet.create({
    full: {
        flex: 1,
        backgroundColor:cool.backgroundColorApp,
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
    textStory: {
        flex: 1,
        elevation:5,
        shadowColor:'black',
        alignSelf:'stretch',
        flexWrap:'wrap',
        zIndex:1,
        width:240,
        left:60,
        maxWidth:320,
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
    }
})
export default StoryFull