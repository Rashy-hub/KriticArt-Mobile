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
    //const [images, updateImages] = useState()
    const [page,setPage]=useState(10)
    const [limit] = useState(5);  
    const [clientData, setClientData] = useState([]);
    const [serverData, serverDataLoaded] = useState([]);
    const [pending_process, setPending_process] = useState(true);
    const [loadmore, setLoadmore] = useState(false);
    const [refresh, setRefresh] = useState(false);

 /*    const ApiRequest = async thePage => {
        await setTimeout(() => {}, 1500);
        return itemList.slice((thePage - 1) * limit, thePage * limit);
      }; */
    
      const requestToServer = async thePage => {
        getRandom(thePage).then(                    
            value=>serverDataLoaded(value)        
    ).catch(
        (err)=>{
            console.log(err)
        }
    )
}
     
    
      useEffect(() => {
        console.log('requestToServer');
        requestToServer(page);
      }, []);
    
      useEffect(() => {
        //console.log('obtained serverData', serverData);
        if (serverData.length > 0) {
          setRefresh(false);
          setClientData([...clientData, ...serverData]);
          setLoadmore(serverData.length == limit ? true : false);
          setPending_process(false);
        } else {
          setLoadmore(false);
        }
      }, [serverData]);
    
      useEffect(() => {
        console.log('load more with page', page);
        
          setPending_process(true);
          requestToServer(10);
        
      }, [page]);
    
      const handleLoadMore = () => {
        console.log('loadmore', loadmore);
        console.log('pending_process', pending_process);
       // requestToServer(page);
       // if (loadmore && !pending_process) {
          setPage(page + 1);
        
      };
    
      const onRefresh = () => {
        setClientData([]);
        setPage(1);
        setRefresh(true);
        setPending_process(false);
      };
    

/*     useEffect(()=>{
        
        getRandom(page).then(                    
                value=>updateImages(value)        
        ).catch(
            (err)=>{
                console.log(err)
            }
        )
    },[]) */
    return (
        <SafeAreaView style={{ flex: 1 }}>
            {props.case ? <Text style={{ textDecorationLine: 'underline' }}>Preview : Please connect for more</Text> : <Text>gallery pour membre</Text>}
            
             <MasonryList

             style={{ alignSelf: 'stretch' }}
             keyExtractor={(item) => item.id}
             contentContainerStyle={{
                 paddingHorizontal: 24,
                 alignSelf: 'stretch',
             }}
             numColumns={2}
             data={clientData}
             renderItem={renderItem}
             onEndReached={handleLoadMore}
             onEndReachedThreshold= {0}
             onRefresh={() => onRefresh()}
             refreshing={refresh}
             
         />  
            
            
           

        </SafeAreaView>
    )
}