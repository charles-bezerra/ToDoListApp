import React from 'react';
import { TouchableOpacity, Text } from 'react-native';


//Styles
const btnStyle = {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    padding: 14,
};

const btnDark = {
    color: 'white',
    fontWeight: '500'
};

const btnLight = {
    color: 'rgb(27,123,255)',
    fontWeight: '700'
};

const btnStyleLink = {
    color: 'black',
    backgroundColor: 'rgba(0,0,0,0)',
};

const btnStylePrimary = {
    color: 'white',
    backgroundColor: 'rgb(27,123,255)',
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.84,
    elevation: 4,
};


export default function Btn ({ title, type, ...rest }) {
    let selfStyle = null; 
    let textStyle = null;

    switch (type) {
        case 'link':
            textStyle = btnLight;
            selfStyle = btnStyleLink;
            break;
        
        case 'primary':
            textStyle = btnDark;
            selfStyle = btnStylePrimary;
            break;

        default:
            textStyle = btnDark;
            selfStyle =  btnStylePrimary;
            break;
    }

    return(
        <TouchableOpacity {...rest} style={[btnStyle, selfStyle]}>
            <Text style={ textStyle }>{ title }</Text>
        </TouchableOpacity>
    );
}