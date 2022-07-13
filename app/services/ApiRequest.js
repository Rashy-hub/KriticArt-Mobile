import { getCreateAxios } from './http-common';
import { encode } from 'base64-arraybuffer';

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

export const AuthentificateUser = async () => {


}




