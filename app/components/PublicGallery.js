import { View ,Text,Image,SafeAreaView,} from "react-native"
import { ReactElement ,useMemo, useState} from "react";
import MasonryList from '@react-native-seoul/masonry-list';
import {getRandom} from "../services/unsplashService";

//  here call api service getImagesPublic

const data =[
    {
        id:'1',
        imgPath: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==' ,//require('../assets/splash.png'),
        text:'splash pîcture'

    },

    {
        id:'2',
        imgPath: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==' ,//require('../assets/splash.png'),
        text:'adaptative-icon'

    },
    {
        id:'3',
        imgPath:"https://images.unsplash.com/profile-1459605087239-77953bcaf042?ixlib=rb-1.2.1&crop=faces&fit=crop&w=64&h=64",
        text:'unsplash-random'

    }
    
]

const ImageCard=(item)=>{

   const randomBool = useMemo(() => Math.random() < 0.5, []);
    return(
        <View key={item.item.id} style = {{marginTop:12,flex:1}}>

            <Image
                source={{uri:item.item.imgPath}}
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

const renderItem=({item})=>{
    
    
    return(
    <ImageCard item={item}/>
    )
}

export const PublicGallery=(props)=>{

  const [data,setData]=useState();
  const image=[]
  getRandom(10).then((res)=>{
    for (const el of res) {

        
        image.push({id:el.id,imgPath:el.urls.regular,text:el.created_at})
       
    }
    setData(image)
  })
    return(
        <SafeAreaView style = {{flex:1}}>
            {props.case?<Text style={{textDecorationLine:'underline'}}>Preview : Please connect for more</Text>:<Text>gallery pour membre</Text>}
           <MasonryList

                style={{alignSelf: 'stretch'}}
                keyExtractor={(item)=>item.id}
                contentContainerStyle={{
                    paddingHorizontal: 24,
                    alignSelf: 'stretch',
                }}
                numColumns={2}
                data={data}
                renderItem={renderItem}
/>

</SafeAreaView>
    )
}