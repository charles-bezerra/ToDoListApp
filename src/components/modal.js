import React, { Component } from "react";
import { View, Modal, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import FormTask from './form-task';
import Styles from '../assets/styles';


//Styles
const modalTaskStyle = {
    flex: 1,
    width: '100%',
    marginTop: 350,
    borderTopWidth: 1,
    borderColor: '#FAFAFA',
    backgroundColor: '#F2F2F2',
    padding: 8,
};

const topModalStyle = {
    flexDirection: 'row',
    justifyContent: 'space-between'
};

const titleAddTask = {
    fontSize: 22,
    fontWeight: '600',
};


export function ModalTask (props) {
    return (
    <Modal
        animationType="slide"
        transparent={ true }
        visible={ props.visible } >

        <View style={[ modalTaskStyle, Styles.shadow ]}>
            <View style={ topModalStyle }>
                <TouchableOpacity onPress={ props.setVisible }>
                    <Icon name='close' size={30} color='#000'/>
                </TouchableOpacity>
            </View>
            
            <FormTask /> 
        </View>
    </Modal>
    );
}