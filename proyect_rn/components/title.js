import React from "react";
import { useFonts } from '@use-expo/font'
import { AppLoading } from 'expo'
import {Text, View,StyleSheet} from "react-native";
function Title() {
    let [fontsLoaded] = useFonts({
        'AbhayabaLibre': require('../assets/fonts/AbhayaLibre-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return <AppLoading/>;
    } else {
        return (
            <View style={styles.header}>
                <View style={styles.text}>
                    <Text style={styles.fontText}>
                        Cadaver Exquisito
                    </Text>
                </View>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    header:{
        backgroundColor: '#EB8888',
        flex:1,
        alignItems:'center',
        justifyContent:'space-around'
    },
    text:{
        width:'100%',
        height:50,
        alignSelf:'center',
        justifyContent:'center',
        flex:1
    },
    fontText:{
        fontSize:40,
        fontFamily:'AbhayabaLibre'

    }
})
export default Title