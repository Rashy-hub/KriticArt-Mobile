import { View ,Text,Image,SafeAreaView,} from "react-native"
import { ReactElement ,useMemo} from "react";
import MasonryList from '@react-native-seoul/masonry-list';

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

export const PublicGallery=()=>{

   

 
    return(
        <SafeAreaView style = {{flex:1}}>
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