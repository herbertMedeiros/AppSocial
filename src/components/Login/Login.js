import React, { Component } from 'react';
import { StyleSheet, View, Image, KeyboardAvoidingView } from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends Component {
    render(){
        return(
            
            <View style={styles.container}>
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.formContainer}>
                        <Image
                            style={styles.logo} 
                            source={require('../../images/BoaAcao.jpg')}/>
                    <LoginForm/>
                </View>
                </KeyboardAvoidingView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#008A8A'
    },

    formContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      
    },

    logoContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
    },

    logo:{
        width: 300,
        height: 300,
        opacity: 0.7
    }
});