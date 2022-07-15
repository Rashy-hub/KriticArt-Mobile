import React from 'react'
import { AppTitle } from "../components/AppTitle"
import { StatusBar, Text, View, Button, TextInput } from 'react-native';
import { Register } from "../components/Register"


export const RegisterPage = ({ navigation }) => {

    return (
        <View style={{ flex: 1 }}>

            <Register nav={navigation} />

        </View>
    )
}