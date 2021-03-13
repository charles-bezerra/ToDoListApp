import axios from 'axios';
import Storege from '../components/storege';
import React, { Alert } from 'react-native';


const conf = require('./config.json');
const baseURL = conf.urlAPI;


export default class Auth {
    constructor(){
        this.storege = new Storege();    
    }
    

    async login (user) {
        const response = await axios.post(baseURL + '/auth/login', user );
        if (response.data.success){
            let response_user = await axios.post(baseURL + '/auth/user', 
                {token: response.data.access_token} );

            await this.storege.multiSetData([
                ['token', response.data.access_token],
                ['user', JSON.stringify(response_user.data)]
            ]);                    
        }
        return response.data.success;
    } 
    
    
    async register (newUser) { 
        const response = await axios.post(baseURL+'/auth/register', newUser );
        if (response.data.success){
            let response_user = await axios.post(baseURL+'/auth/user', 
                { token: response.data.access_token } 
            );

            await this.storege.multiSetData([
                ['token', response.data.access_token],
                ['user', JSON.stringify(response_user.data)]
            ]);
        }
        return response.data;
    };


    async logout () {
        await this.storege.clear();
        return true;
    }

    async isAuth () {
        const response = await this.storege.getData('token');
        
        if (response === null)
            return false;
        return true;
    }
}


