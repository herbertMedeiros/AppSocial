import React, { Component } from "react";
import{
    View,
    Text,
    StyleSheet
} from "react-native";

import { createBottomTabNavigator } from 'react-navigation';

export class Principal extends Component{
    render(){
        return(
            <View>
                <Text>Faloooow</Text>
            </View>
        );
    }
}

export class Configuracao extends Component{
    render(){
        return(
            <View>
                <Text>Configuracao</Text>
            </View>
        );
    }
}

export default createBottomTabNavigator({
    Principal: Principal,
    Configuracao:Configuracao,
});