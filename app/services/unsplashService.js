import { getAxios } from './http-common';
//oauth required
//https://api.unsplash.com/photos/random


export const getRandom = async (count) => {

    const result = await getAxios(false).get("/photos/random" + "?count=" + count);

    let data = [];
    for (const photo of result.data) {

        data.push({ id: photo.id, imgPath: photo.urls.thumb, text: photo.created_at })
    }


    return data


}

