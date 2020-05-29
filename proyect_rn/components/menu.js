import * as React from 'react';
import {Button, View, Touchable, StyleSheet, Alert} from 'react-native';
import sizes from "./constants/buttons";
import {pastel} from "./constants/colors";
import {cool} from './constants/colors'
function Menu({navigation}){
    const onPressStart=()=>{
        navigation.navigate('StoryCreate')
    }
    const onPressFullStory=()=>{
        navigation.navigate('StoryFull')
    }
    const onPressInstructions=()=>{
        navigation.navigate('Instructions')
    }
    return(
        <View style={style.menu}>
            <View style={style.buttons}>
                <View style={style.button}>
        <Button
            onPress={onPressStart}
            title="Start"
            color={cool.buttons}
        />
                </View>
                <View style={style.button}>
        <Button
            onPress={onPressFullStory}
            title="Read"
            color={cool.buttons}
        />
                </View>
                <View style={style.button}>
        <Button
            onPress={onPressInstructions}
            title="Instructions"
            color={cool.buttons}
        />
                </View>
            </View>
    </View>)
}
const style=StyleSheet.create({
    menu: {
        flex:1,
        backgroundColor: cool.backgroundColorApp,
        alignItems: 'center',
    },
    buttons:{
        flex:1,
        justifyContent: 'space-around',
        bottom:35,
    },
    button:{
        width:sizes.buttonsMenu,
        borderColor:'white',
        borderRadius:5
    }
})
export default Menu