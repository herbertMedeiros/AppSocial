import React, { Component } from "react";
import{
    View,
    Text,
    StyleSheet
} from "react-native";

import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

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
    Principal: { screen: Principal,
                navigationOptions:{
                    tabBarLabel: 'Principal',
                    tabBarIcon: ({tintColor}) => (
                      <Icon name="layers" color={tintColor} size={25} />
                    )
                }},
    Configuracao: { screen: Configuracao,
                  navigationOptions:{
                      tabBarLabel: 'Configurações',
                      tabBarIcon: ({tintColor}) => (
                        <Icon name="diamond" color={tintColor} size={25} />
                      )
                  }},
},{
  initialRouteName: 'Principal',
  order: ['Principal', 'Configuracao'],

  navigationOptions: {
    tabBarVisible: true
  },

  tabBarOptions: {
    activeTintColor: 'green',
    inactiveTintColor: 'gray'
  }
});
