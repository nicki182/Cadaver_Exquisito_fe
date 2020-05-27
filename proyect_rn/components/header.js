import {Text, View,StyleSheet} from "react-native";
import React from "react";
import { useFonts } from '@use-expo/font'
import { AppLoading } from 'expo'
import Configuration from "./configuration";
function Header() {
    let [fontsLoaded] = useFonts({
        'AbhayabaLibre': require('../assets/fonts/AbhayaLibre-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return <AppLoading/>;
    } else {
        return (
            <View style={styles.header}>
               // <Configuration></Configuration> 
            //todavia en proceso de desarrollo todavia no pude agrega la musica que tenia pensado en assets ya que es un archivo demasiado grande para agregar en git
            //voy a cambiar el archivo mp3 y subirlo, tambien tengo problemas para ubicarlo donde quiero configuration que es en la esquina derecha este componente es un boton con un modal pop up
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
        justifyContent:'center'
    },
    text:{
        flex:1,
        width:'100%',
        height:60,
        alignSelf:'center',
        justifyContent:'center'
    },
    fontText:{
        fontSize:40,
        fontFamily:'AbhayabaLibre'

    }
})
export default Header
