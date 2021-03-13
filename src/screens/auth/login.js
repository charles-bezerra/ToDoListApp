import React, { Component } from 'react';
import { Text, View } from 'react-native';

//Styles
import Styles from "../../assets/styles"; //Styles of the components

//Components
import { AlertRed } from "../../components/alerts";
import Input from "../../components/input";
import Btn from "../../components/button";

//Contexts
import { AuthContext } from "../../contexts";


class LoginScreen extends Component {
    constructor(props){
        super(props);

        this.state = {            
            email: '', 
            password: '',
            button: <></>,
            errorLogin: null,
        };

        this.signIn = this.signIn.bind(this);
    }


    signIn (){
        const user = {
            email: this.state.email,
            password: this.state.password 
        };

        if ( user.email === '' )
            this.setState({ errorLogin: 'Por favor digite seu email.' });
        
        else if ( user.password === '')
            this.setState({ errorLogin: 'Por favor digite sua senha.' });

        else {
            this.context
            .login(user)
            .then( (login) => {
                if(!login)
                    this.setState({ errorLogin: 'Email ou senha está incorreto.' });
                else
                    this.context.setIsAuth(login);
            });
        }
    };

    
    render() {
        return(
            <View style={[Styles.body, Styles.center]}>

                <View style={{ width: '100%', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    
                    <Text style={{ marginBottom: 16, fontSize: 16, fontWeight: '600' }}>Realize seu login</Text>

                    { (this.state.errorLogin !== null) ? 
                    
                        <AlertRed msg={this.state.errorLogin} /> 
                        
                        : 
                     
                        <></> 
                    }
                    
                    <Input
                        label='Endereço de Email'
                        autoCompleteType='email'
                        placeholder="Email" 
                        onChangeText={ (text) => this.setState({email: text}) }
                        value={ this.state.email }
                        name='email'
                        errorMessage={ this.state.errorEmail } />

                    <Input
                        label='Sua Senha'
                        autoCompleteType='password'
                        secureTextEntry={true} 
                        placeholder="Senha" 
                        onChangeText={ (text) => this.setState({password: text}) }                                    
                        value={ this.state.password }
                        name='password'
                        errorPassword={ this.state.errorPassword } />
                                    
                    <Btn 
                        title='Entrar' 
                        type='primary' 
                        onPress={ this.signIn } 
                    />             
                
                </View>

                <Btn title='Não tenho conta' type='link' onPress={ () => this.props.navigation.navigate('Register') }/>            
            </View>
        );
    }
}

LoginScreen.contextType = AuthContext;
export default LoginScreen;