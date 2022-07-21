import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

export default function App() {
  return (
    <KeyboardAvoidingView style={ styles.background }>
      <View>
        <StatusBar style="inverted" />
        <Text style={ styles.title }>NashBet APP. Sua melhor aposta!</Text>
        
        <View style={ styles.container }>               
          <TextInput
            style={ styles.input}
            placeholder='E-mail'
            keyboardType='email-address'
            placeholderTextColor={'#aaa'}
            autoCorrect={false}                             
          />

          <TextInput 
            style={styles.input }         
            placeholder='Senha'
            keyboardType='numeric'
            placeholderTextColor={'#aaa'}                                       
          />

          <TouchableOpacity style={ styles.btnSubmit }>
            <Text style={styles.submitText}>Acessar</Text>              
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnRegister}>
            <Text style={styles.registerText}>Cadastrar</Text>              
          </TouchableOpacity>

        </View>

      </View>
    </KeyboardAvoidingView>

  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#006400',
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  title: {
    flexDirection: 'column',
    color: '#FFD700',
    fontSize: 18,
    alignItems:'center',
    justifyContent:'center',
  },

  container: {        
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15

  },

  input:{
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: '90%',
    marginBottom: 15,
    fontSize: 16,
    borderRadius: 10,
    padding: 10

  },

  btnSubmit: {
    backgroundcolor: '#35AAFF',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,

  },
  submitText:{
    color: '#fff',
    fontSize: '16'
  },
  
  registerText: {
    color: '#fff'
  }

});
