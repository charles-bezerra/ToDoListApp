import React, { useState, useEffect } from 'react';
import { View, Text, Alert } from 'react-native';

import Input from './input';
import Btn from './button';
import API from '../services/api';

const styleFormTask = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
};

export default function FormTask (props) {
    const api = new API();
    const [name, setName] = useState('');
    const [details, setDetails] = useState('');

    async function handleSubmit(event){
        if (name === '' || details === '') {
            Alert.alert("Preencha todos os campos corretamente!");
        }
        else {        
            let task = {
                "name": name,
                "details": details,
                "status": "pendente"
            };

            const user = await api.getUser();
            task.id_user = user.id;

            console.log(task);

            const response = await api.registerTaskUser(task);
            
            if (response.success){

            }
            else {

            }
        }
    }   

    return (
        <View style={ styleFormTask }>
            <Input 
                value={name}
                onChangeText={ (text) => setName(text) }
                placeholder='Titulo da tarefa'/>
                
            <Input 
                multiline={true} 
                numberOfLines={3}
                value={ details }
                onChangeText={ (text) => setDetails(text) }
                placeholder='Descrição da tarefa'/>

            <Btn title='Adicionar' type='primary' onPress={ handleSubmit }/>
        </View>
    );
}