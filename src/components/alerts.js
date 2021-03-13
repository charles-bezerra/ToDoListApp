import React, { Component } from 'react';
import { Text, View, } from 'react-native';

import Styles from '../assets/styles';

export const AlertRed = (props) => (
    <View style={[Styles.alertRed]}> 
        <Text style={{ color: '#ff6666' }}>{ props.msg }</Text>
    </View>
);

export const AlertGreen = (props) => (
    <View style={[Styles.alertGreen]}> 
        <Text style={{ color: '#ff6666' }}>{ props.msg }</Text>
    </View>
);

export const AlertOrange = (props) => (
    <View style={[Styles.alertOrange]}> 
        <Text style={{ color: '#ff6666' }}>{ props.msg }</Text>
    </View>
);