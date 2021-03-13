import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const conf = require('./config.json');

export default class API{
    async getUser(){
        try{
            const user = await AsyncStorage.getItem('user');         
            return JSON.parse(user);
        }
        catch(error){
            console.log(error);
        }       
    }

    async getTasksUser(){
        try{
            const token = await AsyncStorage.getItem('token');
            const user = await this.getUser();
            const url = `${ conf.urlAPI }/user/task/${ user.id }`;

            const response = await axios.post(url, 
                {"token": String(token) } 
            );

            return response.data.tasks;
        }
        catch(error){ 
            console.log(error); 
        }
    }

    async registerTaskUser(task) {
        try {
            const token = await AsyncStorage.getItem('token');
            const response = await axios.post(
                `${conf.urlAPI}/task`, 
                { 
                    "token": String(token), 
                    "task": task 
                }
            );
            
            return response.data;
        } 
        catch (error){
            console.log(error);
        }
    }
} 
