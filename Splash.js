import React, { Component } from 'react'; 
import { View, Text, StyleSheet } from 'react-native';

export default class Splash extends Component{
    render(){
        return (
            <View style={styles.wrapper}>
                <Text style = {styles.title}>Hello World!</Text>
                <Text style = {styles.subtitle}>Agora Vai!</Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper:{
        backgroundColor:'green', 
        flex: 1, 
        justifyContent:'center', 
        alignItems: 'center'
    },

    title:{
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold'
    },
    subtitle:{
        color: "white",
        fontWeight: '200'

    }
});