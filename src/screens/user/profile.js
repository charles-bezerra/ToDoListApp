import React, { Component } from 'react';
import { View } from 'react-native';
import Nav from '../../components/nav';

function ProfileScreen (props) {
    return (
    <>
        <Nav 
            title="Perfil" 
            open={ () => props.navigation.openDrawer() } 
        />
    </>
    );
}

export default ProfileScreen;