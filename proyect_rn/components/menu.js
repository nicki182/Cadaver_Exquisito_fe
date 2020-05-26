import * as React from 'react';
import {Button,View,Touchable,StyleSheet} from 'react-native';
import Header from "./header";
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
            <Header></Header>
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
                <View style={style.button}>
        <Button
            onPress={onPressInstructions}
            title="Instructions"
            color="#F1D024"
        />
                </View>
            </View>
    </View>)
}
const style=StyleSheet.create({
    menu: {
        flex:1,
        backgroundColor: '#EB8888',
        alignItems: 'center',
    },
    buttons:{
        flex:1,
        justifyContent: 'space-between',
        bottom:35
    },
    button:{
        width:160
    }
})
export default Menu