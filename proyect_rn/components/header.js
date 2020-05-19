import {Text, View,StyleSheet} from "react-native";
import React from "react";
function Header() {
    return (
        <View style={styles.text}>
            <Text style={styles.fontText}>
                Cadaver Exquisito
            </Text>
        </View>
    )
}
const styles=StyleSheet.create({
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
        fontSize:25
    }
})
export default Header