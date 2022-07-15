import React, { useEffect, useState } from 'react';
import { View, Button, Text, TitleText, TextInput, FlatList, StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import { storeData, getToken, logCurrentStorage, clearAll } from '../utils/storage/storage';
import { LoginUser } from '../services/ApiRequest'


export const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [error, setError] = useState('');

    // console.log("nav: " + JSON.stringify(navigation, null, 4));

    const login = () => {
        //navigation.params.onGoBack({ register: true });
        let token = getToken()
        LoginUser({ "email": email, "password": password }, token).then(item => {

            storeData({ "id": item.data.id.toString(), "email": email, "token": item.data.token, "expire": item.data.expire })
        })
        props.nav.navigate("BottomTabNav")

    }
    return (
        <View style={styles.container} >
            <Text style={styles.titleStyle}>Login</Text>
            <TextInput
                //defaultValue='test@test.b'
                style={styles.inputStyle}
                placeholder='email'
                placeholderTextColor="#a2b4dfad"
                onChangeText={value => setEmail(value)}
            />

            <TextInput
                //defaultValue='Test-123'
                style={styles.inputStyle}
                placeholder='password'
                placeholderTextColor="#a2b4dfad"
                onChangeText={value => setPass(value)}
                secureTextEntry={true}
            />

            {/* {password != password2 && <Text >Les mots de passe ne correspondent pas</Text>} */}
            <Button title='Login' disabled={
                !email && !password

            } onPress={() => login()}

            />



        </View >
    )

}




const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',

    },
    inputStyle: {
        borderRadius: 5,
        height: 40,
        paddingHorizontal: 5,
        backgroundColor: 'white',
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    container: {
        padding: 5,

    }, btnNoBox: {

        backgroundColor: "transparent",
        color: "#FF5733"
    },

});

