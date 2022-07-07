import { getAxios } from './http-common';
//oauth required
//https://api.unsplash.com/photos/random


export const getRandom=(count) =>{

  return getAxios(false).get("/photos/random"+"?count="+count);

}

