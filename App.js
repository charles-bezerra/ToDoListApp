import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { Alert, StatusBar, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

//Services
import Auth from './src/services/auth';

//Routes
import { UserRoutes, AuthRoutes } from './src/routes';

//Contexts
import { AuthContext } from './src/contexts';

//Screens
import LoadingScreen from './src/screens/loading';


export default function App (props) {
    const [isAuth, setIsAuth] = useState(null);
    const auth = new Auth();

    function bootstrap () {
        auth.isAuth()
        .then( 
            (response) => { setIsAuth(response); }
        );
    }

    const authContext = {
        login: async (user) => {
            try {                
                const response = await auth.login(user);
                return response;
            } 
            catch (error) {
                Alert.alert("Error ao conectar o servidor, tente novamente mais tarde.");
                setIsAuth(false);    
            }           
        },
        
        register: async (user) => {
            try {
                const response = await auth.register(user);
                return response;
            } 
            catch (error) {
                Alert.alert("Error ao conectar o servidor, tente novamente mais tarde.");
                setIsAuth(false);
            }
        },
        
        logout: async () => {
            setIsAuth(null);
            const response = await auth.logout();
            
            setIsAuth(false);
            return response;
        },

        setIsAuth: (value) => {
            setIsAuth(value);
        }
    };


    useEffect(() => {
        bootstrap();
    }, []);


    return (
    <>
        <StatusBar backgroundColor="#F2F2F2" barStyle='dark-content'/>

        {  (isAuth === null) ? 
                
            (<LoadingScreen/>) 
                
            : 
                
            (<AuthContext.Provider value={ authContext }> 
                <NavigationContainer>
                    { (isAuth) ? (<UserRoutes />) : (<AuthRoutes /> ) }
                </NavigationContainer>
            </AuthContext.Provider>) 
        }

        <SafeAreaView style={{ flex: 0, backgroundColor: "#F2F2F2" }} />
    </>
    );
}