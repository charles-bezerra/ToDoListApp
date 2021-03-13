import React, { Component, useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

//Style
import Styles from '../../assets/styles';

//Components    
import ListTasks from '../../components/tasks';
import Nav from '../../components/nav';
import Btn from '../../components/button';
import { ModalTask } from '../../components/modal';


const styleFloatingButtonAdd = {
    backgroundColor: 'white', 
    borderRadius: 29, 
    borderWidth: 0,
    padding: 0,
    alignItems: 'center',
    resizeMode: 'contain', 
    position: 'absolute',
    left: 12,
    bottom: 12
};


function FloatingButtonAdd (props) {
    return (
        <TouchableOpacity style={[ styleFloatingButtonAdd , Styles.shadow]} onPress={ props.onPress }>
            <Icon name='pluscircle' size={58} color='rgb(27,123,255)'/>
        </TouchableOpacity>
    );
} 


export default function HomeScreen (props) {
    const [visibleModal, handleVisibleModal] = useState(false);

    return (
        <>
            <Nav title='Tarefas' open={ () => props.navigation.openDrawer() }/>

            <View style={Styles.body}>
                <ListTasks/>

                <FloatingButtonAdd 
                    onPress={ () => handleVisibleModal(!visibleModal) }
                />
                
                <ModalTask 
                    visible={ visibleModal } 
                    setVisible={ () => handleVisibleModal(!visibleModal) }
                />  
            </View>
        </>        
    );
}