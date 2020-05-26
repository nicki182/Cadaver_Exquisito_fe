import * as React from 'react';
import {Button, View, Touchable, Text, ScrollView, StyleSheet} from 'react-native';
import Header from "./header";
function Instructions({navigation}) {
    const onPressStart=(e)=>{
        navigation.navigate('StoryCreate')
    }
    const onPressFullStory=(e)=>{
        navigation.navigate('StoryFull')
    }
return(
    <View style={style.instructions}>
        <Header></Header>
        <View style={style.text}>
        <Text>
            Write Instructions
        </Text>
        </View>
        <View style={style.buttons}>
            <View style={style.button}>
        <Button
            onPress={onPressStart}
            title="Start"
            color="#80F8E2"
        />
            </View>
            <View style={style.button}>
        <Button
            onPress={onPressFullStory}
            title="Full Story"
            color="#BD73C9"
        />
            </View>
        </View>
    </View>
)
}
const style=StyleSheet.create({
    instructions: {
        flex:1,
        backgroundColor: '#EB8888',
        alignItems: 'center'
    },
    buttons:{
        flex: 1,
        justifyContent: 'space-around',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 50,
        width:'80%'
    },
    text:{
        padding:20,
        flex:2,
    },
    button:{
        width:120
    }
})
export default Instructions