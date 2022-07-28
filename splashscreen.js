import { StatusBar } from "expo-status-bar";
import { React } from "react"
import { StyleSheet, Text, View } from "react-native";

export default function app () {
    return (
        <View>
            <View style={styles.background}>
                <StatusBar style="inverted"/>
                
                <Text style={styles.texto}>NashBet</Text>
                <Text style={styles.texto}>Sua melhor aposta!</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create ({
    background: {
        flex: 1,      
        backgroundColor: '#006400',
        alignItems: 'Center',
        justifyContent: 'Center',                
    },

    texto: {
      fontSize: 20,
      fontWeight: 'bold',
      alignItems: 'center',
      justifyContent: 'center',

    }   
    

})