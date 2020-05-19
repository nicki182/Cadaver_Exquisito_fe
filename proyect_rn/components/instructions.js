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
        <Button
            onPress={onPressStart}
            title="Start"
            color="#80F8E2"
        />
        <Button
            onPress={onPressFullStory}
            title="FullStory"
            color="#BD73C9"
        />
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
        bottom: 35,
        width:'80%',
    },
    text:{
        padding:20,
        flex:2,
    }
})
export default Instructions