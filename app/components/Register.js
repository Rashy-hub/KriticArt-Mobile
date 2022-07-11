
import React, { useEffect, useState } from 'react';
import { View, Button, Text, TitleText, TextInput, FlatList, StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import { storeData, logCurrentStorage, clearAll } from '../utils/storage/storage';
import { registerNormalInfos } from '../hooks/queries-hook';
import { NavigationContext } from '@react-navigation/native';

export const Register = () => {
    const navigation = React.useContext(NavigationContext);
    const [email, setEmail] = useState('');
    const [pseudo, setPseudo] = useState('');
    const [password, setPass] = useState('');
    const [password2, setPass2] = useState('');
    const [error, setError] = useState('');

    console.log("nav: " + JSON.stringify(navigation, null, 4));

    const register = () => {
        //navigation.params.onGoBack({ register: true });
        registerNormalInfos({ "email": email, "pseudo": pseudo, "password": password })
            .then(item => {
                console.log("register done : " + JSON.stringify(item.data, null, 4));
                storeData({ "id": item.data.id.toString(), "email": item.data.email, "token": item.data.token, "expire": item.data.expire })
                navigation.navigate('user', { connected: true })
            })
            .catch(function (error) {
                console.log("Erreur a l'enregistrement: " + error);
            })
    }
    return (
        <View style={styles.container} >
            <Text style={styles.titleStyle}>Register</Text>
            <TextInput
                defaultValue='test@test.b'
                style={styles.inputStyle}
                placeholder='email'
                placeholderTextColor="#a2b4dfad"
                onChangeText={value => setEmail(value)}
            />
            <TextInput
                defaultValue='benohi'
                style={styles.inputStyle}
                placeholder='pseudo'
                placeholderTextColor="#a2b4dfad"
                onChangeText={value => setPseudo(value)}
            />
            <TextInput
                defaultValue='Test-123'
                style={styles.inputStyle}
                placeholder='password'
                placeholderTextColor="#a2b4dfad"
                onChangeText={value => setPass(value)}
            />
            <TextInput
                defaultValue='Test-123'
                style={styles.inputStyle}
                placeholder='confirm password'
                placeholderTextColor="#a2b4dfad"
                onChangeText={value => setPass2(value)}
            />
            {password != password2 && <Text >Les mots de passe ne correspondent pas</Text>}
            <Button title='Register' disabled={
                !email && !password && !password2 && (password === password2)

            } onPress={() => register()}

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

