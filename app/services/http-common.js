import axios from "axios";
import { KriticArtToken } from '../utils/bearerToken'



export const getCreateAxios = (isMultiPart = false) => {




    const headers = {

        "Content-Type": isMultiPart ? "multipart/form-data" : "application/json",

        Authorization: `Bearer ${KriticArtToken.bearerToken}`

    };


    return axios.create({

        baseURL: "http://10.0.2.2:8080/api",

        headers

    });

}


