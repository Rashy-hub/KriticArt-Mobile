import React from 'react'
import { AppTitle } from "../components/AppTitle"
import { StatusBar, Text, View, Button, TextInput } from 'react-native';
import {Login } from "../components/Login"


export const LoginPage = ()=>{

return(
    <View style={{ flex: 1}}>
        
        <Login/>   
       
    </View>
    )
}