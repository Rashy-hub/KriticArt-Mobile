import { getCreateAxios } from './http-common';
import { encode } from 'base64-arraybuffer';
import axios from 'axios'
import { getToken } from '../utils/storage/storage';

//oauth required
//https://api.unsplash.com/photos/random


export const getRandomPictures = async (limit, offset) => {

    const result = await getCreateAxios(false, true).get("/photo/getpublics" + "?limit=" + limit + "&offset=" + offset);
    console.log("received limit : " + limit)
    console.log("received offset : " + offset)
    let data = [];
    console.log(result.data.length)
    if (result.data === 0) {
        console.log("data nul")
        data = []
        return data
    }
    for (const photo of result.data) {

        let title = "Title :" + photo.photo_desc
        let base64 = encode(photo.image.data.data)
        let src = 'data:image/png;charset=utf-8;base64,' + base64
        data.push({ id: photo._id, uri: src, author: title })
        //console.log(photo._id)
    }


    return data


}

export const getPrivatePictures = async (limit, offset) => {

    let token = await getToken()
    console.log(token)
    const result = await getCreateAxios(false, true, token).get("/photo/getprivates" + "?limit=" + limit + "&offset=" + offset);
    console.log("received limit : " + limit)
    console.log("received offset : " + offset)
    let data = [];
    console.log(result.data.length)
    if (result.data === 0) {
        console.log("data nul")
        data = []
        return data
    }
    for (const photo of result.data) {

        let title = "Title :" + photo.photo_desc
        let base64 = encode(photo.image.data.data)
        let src = 'data:image/png;charset=utf-8;base64,' + base64
        data.push({ id: photo._id, uri: src, author: title })
        //console.log(photo._id)
    }


    return data
}

export const RegisterUser = async (data) => {


    //const result = await getCreateAxios(false, false).post("/auth/register", data);
    const result = await axios.post('http://10.0.2.2:8080/api/auth/register', data)
    console.log(result.data)
    return result

}

export const LoginUser = async (data, token) => {


    const headers = {

        "Content-Type": "application/json",

        Authorization: `Bearer ${token}`,

    };

    const request = axios.create({

        baseURL: "http://10.0.2.2:8080/api",

        headers

    });

    const result = await request.post("/auth/login", data);
    //const result = await axios.post('http://10.0.2.2:8080/api/auth/login', data)
    //console.log(result.data)
    return result
}




