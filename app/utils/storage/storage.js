import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (props) => {
    try {
        console.log("storing " + JSON.stringify(props));
        await AsyncStorage.setItem('id', props.id)
        await AsyncStorage.setItem('email', props.email)
        await AsyncStorage.setItem('token', props.token)
        await AsyncStorage.setItem('expire', props.expire)
    } catch (e) {
        console.log(e);
    }
}
export const storeToken = async (props) => {
    try {
        console.log("storing token: " + JSON.stringify(props));
        await AsyncStorage.setItem('token', props.token)
        await AsyncStorage.setItem('expire', props.expire)
    } catch (e) {
        console.log(e);
    }
}

export const clearAll = async () => {
    try {
        AsyncStorage.clear();
    } catch (e) {
        console.log(e);
    }
}

export const getToken = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('token');
        //console.log("jsonValue: " + jsonValue);
        return jsonValue;
    } catch (e) {
        console.log("get error: " + e);
    }
}

export const getEmail = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('email');
        //console.log("jsonValue: " + jsonValue);
        return jsonValue;
    } catch (e) {
        console.log("get error: " + e);
    }
}

export const getId = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('id');
        //console.log("jsonValue: " + jsonValue);
        return jsonValue;
    } catch (e) {
        console.log("get error: " + e);
    }
}

export const getExpiration = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('expire')
        return jsonValue;
    } catch (e) {
        console.log(e);
    }
}

export const getAll = async () => {
    try {
        const values = await AsyncStorage.multiGet(['token', 'expire', 'email', 'id']);
        return values;
    } catch (e) {
        console.log(e);
    }
    console.log(values)
    // example console.log output:
    // [ ['MyApp_user', 'myUserValue'], ['MyApp_key', 'myKeyValue'] ]
}



export function logCurrentStorage() {
    AsyncStorage.getAllKeys().then((keyArray) => {
        AsyncStorage.multiGet(keyArray).then((keyValArray) => {
            let myStorage = {};
            for (let keyVal of keyValArray) {
                myStorage[keyVal[0]] = keyVal[1]
            }

            console.log('CURRENT STORAGE: ', myStorage);
        })
    });
}