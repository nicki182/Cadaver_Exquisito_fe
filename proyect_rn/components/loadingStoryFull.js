import * as React from 'react';
import {Text, View,StyleSheet} from "react-native";
import {useQuery} from "@apollo/react-hooks";
import {STORY_UPDATE,STORY_FULL} from "./graphql/resolvers";
function LoadingStoryFull({navigation,route}){
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
return (
    <View style={style.text}>
        {
            navigation.navigate('StoryFull',{Story:data.StoryFull})
        }
    </View>)
}
export default LoadingStoryToCreate
const style=StyleSheet.create({
    text:{
        backgroundColor: '#EB8888',
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        height:30,
    },
    fontText:{
        color:'black',
        fontSize:10
    }
})