import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Alert} from 'react-native';

const aperta = () =>{
    Alert.alert('Seja bem vindo!');
}

export default class LoginForm extends Component{
    render(){
        return(
           
                <View Style={styles.container}>
                 
                    <TextInput 
                        placeholder="Nome ou e-mail"
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        style={styles.input}
                    />
                    
                    <TextInput 
                        placeholder="Senha"
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        secureTextEntry
                        style={styles.input}
                    />

                    <TouchableOpacity 
                        onPress={aperta}
                        style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>ENTRAR</Text>
                       
                    </TouchableOpacity>
                   
                </View>
           
        );
    }
}

const styles = StyleSheet.create({
    container:{
        alignSelf: 'stretch',
        paddingLeft:20,
        paddingRight:20
    },

    input:{
    
        height:48,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 10,
        color:'#FFF',
        paddingHorizontal: 10,
        width: 300,
        marginBottom:10,
        borderRadius:8
    
    },

    buttonContainer:{
        
        backgroundColor: '#16a085',
        paddingVertical: 15,
        marginBottom: 150,
        borderRadius: 8,
       
    },

    buttonText:{
        textAlign: 'center',
        color:'#FFFFFF',
        fontWeight:'700'
    }

});