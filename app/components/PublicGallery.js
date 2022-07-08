import { View, Text, Image, SafeAreaView, } from "react-native"
import { ReactElement, useEffect, useMemo, useState } from "react";
import MasonryList from '@react-native-seoul/masonry-list';
import { getRandom } from "../services/unsplashService";

//  here call api service getImagesPublic



const ImageCard = (item) => {

    const randomBool = useMemo(() => Math.random() < 0.5, []);
    return (
        <View key={item.item.id} style={{ marginTop: 12, flex: 1 }}>

            <Image
                source={{ uri: item.item.imgPath }}
                style={{
                    height: randomBool ? 150 : 280,
                    alignSelf: 'stretch',
                }}
                resizeMode="cover"
            />

            <Text
                style={{
                    marginTop: 8,
                }}>
                {item.item.text}
            </Text>




        </View>
    )
}

const renderItem = ({ item }) => {


    return (
        <ImageCard item={item} />
    )
}

export const PublicGallery = (props) => {
    const [images, updateImages] = useState()
  //  const [data,setData]=useState([])
    //let dataApi=[]
   
    useEffect(()=>{
        
        getRandom(30).then(
                    
                value=>{                   
                    
                      // setData(data=> [...data,{id:photo.id,imgPath:photo.urls.small,text:photo.created_at}])
                      //dataApi.push({id:photo.id,imgPath:photo.urls.regular,text:photo.created_at})
                  
                   
                    updateImages(value);
                   
                }
            
           
        ).catch(
            (err)=>{
                console.log(err)
            }
        )
    },[])
    return (
        <SafeAreaView style={{ flex: 1 }}>
            {props.case ? <Text style={{ textDecorationLine: 'underline' }}>Preview : Please connect for more</Text> : <Text>gallery pour membre</Text>}
            {images&& 
             <MasonryList

             style={{ alignSelf: 'stretch' }}
             keyExtractor={(item) => item.id}
             contentContainerStyle={{
                 paddingHorizontal: 24,
                 alignSelf: 'stretch',
             }}
             numColumns={2}
             data={images}
             renderItem={renderItem}
         />
            
            }
           

        </SafeAreaView>
    )
}