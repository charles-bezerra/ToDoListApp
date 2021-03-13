import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import Styles from '../assets/styles';

import { AuthContext } from '../contexts';

const styleNav = {
    width: '100%',
    flexDirection: 'row',
    paddingLeft: 14,
    paddingRight: 14,
    paddingBottom: 16,
    paddingTop: 16,
    borderBottomWidth: 1,
    borderColor: "#DCDCDC",
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white'
}

class Nav extends Component {   
    render() {
        return (
            <View style={ styleNav }>
                <StatusBar backgroundColor="#FFFFFF" barStyle='dark-content'/>

                <TouchableOpacity style={{ width: 25}} onPress={ this.props.open }>
                    <Icon name='menuunfold' size={25} color="#000"/>
                </TouchableOpacity>

                <Text style={{ fontWeight: '700', fontSize: 20 }}>{ this.props.title }</Text>

                <TouchableOpacity style={{ width: 25}} onPress={ this.context.logout }>
                    <Icon name='logout' size={25} color="#FF0000"/>
                </TouchableOpacity>
            </View>
        );
    }
}

Nav.contextType=AuthContext;
export default Nav;