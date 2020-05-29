import * as React from 'react';
import {Button, View, Touchable, Text, ScrollView, StyleSheet} from 'react-native';
import Header from "./header";
import sizes from "./constants/buttons";
import {pastel} from "./constants/colors";
function Instructions({navigation}) {
    const onPressStart=(e)=>{
        navigation.navigate('StoryCreate')
    }
    const onPressFullStory=(e)=>{
        navigation.navigate('StoryFull')
    }
return(
    <View style={style.instructions}>
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
            color={pastel.start}
        />
            </View>
            <View style={style.button}>
        <Button
            onPress={onPressFullStory}
            title="Read"
            color={pastel.read}
        />
            </View>
        </View>
    </View>
)
}
const style=StyleSheet.create({
    instructions: {
        flex:1,
        backgroundColor:pastel.backgroundColorApp,
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
        width:sizes.buttonsRest
    }
})
export default Instructions