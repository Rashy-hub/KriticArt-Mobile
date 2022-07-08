import React, { useEffect, useState } from 'react';
import axios from 'axios';
//import { getToken, getExpiration } from '../utils/storage';

export const useFindAllBarAround = (coord = null) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);

        axios.get('http://10.0.2.2:8080/api/bar')
            .then(function (response) {
                // TODO Manage conflict a trier par zone ?
                //console.log(JSON.stringify(data, null, 4));
                setData(data => [/*...data,*/ ...response.data.result]);
            })
            .catch(function (error) {
                setError(error.message);
            })
            .finally(function () {
                setLoading(false);
            });
    }, [coord]);
    return { isLoading, data, error };
}

export const getAuthToStore = (email) => {
    return axios.post('http://10.0.2.2:8080/api/auth/refresh', email)
}

export const registerSocialInfos = (userInfos) => {
    return axios.post('http://10.0.2.2:8080/api/auth/register', userInfos)
}

export const registerNormalInfos = (userInfos) => {
    return axios.post('http://10.0.2.2:8080/api/auth/register', userInfos)
}


export const useGetToken = () => {
    const [token, setToken] = useState('');
    const [expireAt, setExpire] = useState('');
    const [error, setError] = useState(null);
    const [isAdmin, setIsAdmin] = useState(null);
    const getToken = (email) => {
        console.log("INTO getToken");
        axios.post('http://localhost:8080/api/auth/refresh', email)
            .then(function (response) {
                setIsAdmin(response.data.result.isadmin);
                setToken(response.data.result.token);
                setExpire(response.data.result.expire);
            })
            .catch(function (error) {
                setError(error.message);
            })
    }
    console.log("INTO useGetToken : " + token);
    return { getToken, token, expireAt, error, isAdmin };
}

export const useQueryLogin = () => {

    const [isLoading, setLoading] = useState(false);
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const [id, setId] = useState('');
    const [error, setError] = useState(null);

    const launch = (auth) => {
        setToken('');
        setLoading(true);
        setError(null);
        setExpire('');
        setId('');
        console.log("infos: " + JSON.stringify(auth, null, 4));
        axios.post('http://10.0.2.2:8080/api/auth/login', auth)
            .then(function (response) {
                console.log("then login: " + JSON.stringify(response.data));
                setId(response.data.id.toString());
                setExpire(response.data.expire);
                setToken(response.data.token);
            })
            .catch(function (error) {
                setError(error.message);
            })
            .finally(function () {
                setLoading(false);
            });
    }
    //console.log('return ' + isLoading + " " + token + " id: " + id);
    return [launch, isLoading, error, expire, id, token];
}