import React, { Component } from "react";
import { View, ActivityIndicator } from "react-native";

import Styles from "../assets/styles";

export const MySpinner = (props) => (
    <View style={[Styles.center, {flex: 1}]}>
        <ActivityIndicator size="large" color="#0000ff" />
    </View>
);