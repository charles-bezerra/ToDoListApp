import React from 'react';
import { View, ActivityIndicator } from 'react-native';

//App style 
import Styles from '../assets/styles';


const LoadingScreen = (props) => (
    <View style={[Styles.body, Styles.center]}>
        <ActivityIndicator size="large" color="#0000ff" />
    </View> 
);

export default LoadingScreen;