import {useState} from "react";
import {Button, StyleSheet, View,Text} from "react-native";
import * as React from "react";
import {FULL_STORY} from "./graphql/resolvers";
import {useQuery} from "@apollo/react-hooks";
import Header from "./header";
function StoryFull({navigation}) {
    const {loading,error,data}=useQuery(FULL_STORY)
    if(loading){
        return <View style={style.text}>
            <Text>Loading...</Text>
        </View>
    }
    if(error){
        console.error(error)
        return <View style={style.text}>
            <Text>Error!</Text>
        </View>
    }
    const handleNext=()=>{
        navigation.push('StoryFull')
    }
    const handleMenu=()=>{
       navigation.navigate('Menu')
    }
    return(
        <View style={style.full}>
            <Header></Header>
            <View style={style.text}>
            <Text>{data.storyFull}</Text>
                </View>
            <View style={style.buttons}>
            <Button
                onPress={handleNext}
                title="Next"
                color='#DD27D6'
            />
            <Button
                onPress={handleMenu}
                title="Menu"
                color='#74F368'
            />
            </View>
        </View>
    )
}
const style = StyleSheet.create({
    full: {
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
    text: {
        padding: 20,
        flex: 1,
        backgroundColor: 'yellow',
    }
})
export default StoryFull