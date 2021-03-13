import React from 'react';
import { View, TextInput } from 'react-native';
import Styles from '../assets/styles';

const textInputStyle = {
    fontSize: 12,
    paddingLeft: 12
};

const viewInputStyle = {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 12
}

export default function Input (props) {
    return (
        <View style={[ viewInputStyle ]}>
            <TextInput {...props} style={ textInputStyle }/>
        </View>
    );
}