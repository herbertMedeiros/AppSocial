import React, { Component } from 'react';
import { StyleSheet,
         View,
         Image,
         KeyboardAvoidingView,
         TouchableOpacity,
         Text,
         Alert,
         TextInput
} from 'react-native';
import  LoginForm  from './LoginForm';

export default class Login extends Component {

    //static navigationOptions = {
    //  header: null
    //}

    render(){
        return(

            <View style={styles.container}>
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.formContainer}>
                        <Image
                            style={styles.logo}
                            source={require('../../images/BoaAcao.jpg')}/>

                        <View Style={styles.container2}>

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

                            <Text style={styles.texto} >Ainda não tem cadastro? Click nessa!</Text>


                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('Principal')}
                                style={styles.buttonContainer}>
                                <Text style={styles.buttonText}>ENTRAR</Text>

                            </TouchableOpacity>

                        </View>

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

    container2:{
        alignSelf: 'stretch',
        paddingLeft:20,
        paddingRight:20
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

    texto:{
        textAlign: 'center',
        color:'#FFFFFF',
        fontWeight:'700',
        marginBottom: 10
    },

    buttonText:{
        textAlign: 'center',
        color:'#FFFFFF',
        fontWeight:'700'
    }
});
