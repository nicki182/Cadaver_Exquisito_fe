import {Text, View,StyleSheet} from "react-native";
import React from "react";
import { useFonts } from '@use-expo/font'
import { AppLoading } from 'expo'
import Settings from "./settings";
import Title from "./title";
import {pastel,cool} from "./constants/colors";
function Header() {
        return (
            <View style={styles.header}>
                <View style={{flex:1,alignSelf:"flex-end"}}>
                <Settings></Settings>
                </View>
                <View style={{flex:2}}>
            <Title></Title>
                </View>
            </View>
        )
}
const styles=StyleSheet.create({
    header:{
        backgroundColor:cool.backgroundColorApp,
        flex:1,
        alignItems:'center',
        justifyContent:'space-around'
    }
})
export default Header