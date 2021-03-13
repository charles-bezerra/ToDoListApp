import React, { Component } from 'react';
import { View, ScrollView, Image, StatusBar, Alert, ActivityIndicator } from 'react-native';
import { Text, Button } from "react-native-elements";

//Styles
import Styles from "../../assets/styles"; //Styles of the components

//Components
import Input from "../../components/input";
import Btn from "../../components/button";

//Contexts
import { AuthContext } from "../../contexts"; 


class RegisterScreen extends Component {
    constructor(props){
        super(props);

        this.state = {             
            name: '',
            email: '', 
            password: '',
            rpassword: '',

            error: null, 
        };
        
        this.signUp = this.signUp.bind(this);
    }

    signUp (){
        const user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password 
        };

        if (user.name === '') {
            Alert.alert('Preencha todos os campos');
        }

        else if (user.email === ''){
            Alert.alert('Preencha todos os campos');
        }

        else if (user.password == ''){
            Alert.alert('Preencha todos os campos');
        }

        else if (user.password !== this.state.rpassword) {
            Alert.alert('As senhas não batem!');
        }

        else {
            this.context
            .register(user) //Return data { seccess: true/false, error: string}
            .then( (response) => {
                if (!response.success)
                    this.setState({ error:  response.error });
                else
                    this.context.setIsAuth(response.seccess);
            });
        }

    }

    render() {
        return(
            <View style={[Styles.body, Styles.center]}>
                <View style={{ width: '100%', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{ marginBottom: 16, fontSize: 16, fontWeight: '600' }}>Cadastre-se</Text>
                                
                    <Input 
                        keyboardType="default"
                        autoCompleteType='username'
                        placeholder="Nome completo" 
                        onChangeText={ text => this.setState({name: text}) }
                        value={ this.state.name }
                        name='name'/>

                    <Input 
                        keyboardType="default"
                        autoCompleteType="email"
                        placeholder="Seu email" 
                        onChangeText={ text => this.setState({email: text}) }
                        value={ this.state.email }
                        name='email'/>
                                
                    <Input
                        secureTextEntry={true}
                        autoCompleteType="password"
                        placeholder="Uma senha" 
                        onChangeText={ text => this.setState({password: text}) }
                        value={ this.state.password }
                        name='password'/>          

                    <Input
                        secureTextEntry={true}
                        autoCompleteType="password"
                        placeholder="Confirme sua senha" 
                        onChangeText={ text => this.setState({rpassword: text}) }
                        value={ this.state.rpassword }
                        name='rpassword'/>                        
                    
                    <Btn onPress={ this.signUp } type='primary' title='Registrar' />

                    { 
                        this.state.error !== null ?

                            (<Text style={{ color: "red" }}>
                                { this.state.error }
                            </Text>) 
                            
                            : 
                            
                            <></> 
                    }
                </View>

                <Btn 
                    title='Já tenho uma conta'
                    type='link'
                    onPress={ () => this.props.navigation.goBack() } 
                />

            </View>
        );
    }
}

RegisterScreen.contextType = AuthContext;
export default RegisterScreen;