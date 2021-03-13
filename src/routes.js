import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

//User Screens
import HomeScreen from './screens/user/home';
import ProfileScreen from './screens/user/profile';

//Auth Screens
import LoginScreen from './screens/auth/login';
import RegisterScreen from './screens/auth/register';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


export function UserRoutes (props) {
    return(
        <Drawer.Navigator initialRouteName='Home'>
            <Drawer.Screen name='Home' component={HomeScreen}/>
            <Drawer.Screen name='Profile' component={ProfileScreen}/>
        </Drawer.Navigator> 
    );
}


export function AuthRoutes (props) {
    const configRouteAuth = { 
        headerShown: false, 
        gestureEnable: false 
    };
    
    return(
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen name='Login' options={ configRouteAuth } component={LoginScreen}/>
            <Stack.Screen name='Register' options={ configRouteAuth } component={RegisterScreen}/>
        </Stack.Navigator>
    );
}
