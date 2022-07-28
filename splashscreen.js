import { StatusBar } from "expo-status-bar";
import { StyleSheet, text, view } from "react-native";
import { React } from "react"

export default function app () {
    return (
        <view>
            <view style={styles.background}>
                <StatusBar style="inverted"/>
                
                <Text style={styles.text}>NashBet</Text>
                <Text style={styles.text}>Sua melhor aposta!</Text>
            </view>
        </view>
    )
}


const styles = StyleSheet.create ({
    background: {
        backgroundColor: '#006400',
        alignItems: 'Center',
        justifyContent: 'Center',
                
    }


    
    

})