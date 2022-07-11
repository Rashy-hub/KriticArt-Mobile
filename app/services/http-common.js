import axios from "axios";
import { UnsplashKeys } from '../utils/connection/unsplashConnection'



export const getAxios = (isMultiPart = false) => {




    const headers = {

        "Content-Type": isMultiPart ? "multipart/form-data" : "application/json",

        Authorization: `Client-ID ${UnsplashKeys.accessKey}`

    };


    return axios.create({

        baseURL: "https://api.unsplash.com",

        headers

    });

}


