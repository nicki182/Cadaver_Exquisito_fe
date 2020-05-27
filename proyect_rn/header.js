import {Text, View,StyleSheet} from "react-native";
import React from "react";
import { useFonts } from '@use-expo/font'
import { AppLoading } from 'expo'
import Settings from "./settings";
import Title from "./title";
function Header() {
        return (
            <View style={styles.header}>
                <Settings></Settings>
            <Title></Title>
            </View>
        )
}
const styles=StyleSheet.create({
    header:{
        backgroundColor: '#EB8888',
        flex:1,
        alignItems:'center',
        justifyContent:'space-around'
    }
})
export default Header