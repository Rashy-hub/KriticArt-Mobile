import { View, Text, Image, SafeAreaView, Pressable, Modal, StyleSheet } from "react-native"
import { ReactElement, useEffect, useMemo, useState } from "react";
import MasonryList from '@react-native-seoul/masonry-list';
import { getRandomPictures } from "../services/ApiRequest"



//  here call api service getImagesPublic



const ImageCard = (item) => {

    const [modalVisible, setModalVisible] = useState(false);
    const randomBool = useMemo(() => Math.random() < 0.5, []);
    return (

        <View key={item.item.id} style={{ marginTop: 8, flex: 1 }}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}

            >
                <Pressable
                    onPress={() => setModalVisible(!modalVisible)}
                    onPressOut={() => setModalVisible(!modalVisible)}>
                    <Image
                        source={{ uri: item.item.uri }}
                        style={{
                            height: 650,
                            alignSelf: 'stretch',
                            marginRight: 10,
                            marginLeft: 10,
                            borderWidth: 2,

                        }}
                        resizeMode="cover"
                    />
                </Pressable>

                <Text
                    style={{
                        marginTop: 8,
                        fontSize: 24,
                        fontFamily: 'Courgette'

                    }}>
                    {item.item.author}
                </Text>

            </Modal>


            <Pressable onPress={() => setModalVisible(!modalVisible)}>
                <Image
                    source={{ uri: item.item.uri }}
                    style={{
                        height: randomBool ? 150 : 280,
                        alignSelf: 'stretch',
                        marginRight: 10,
                        marginLeft: 10,
                        borderWidth: 2,


                    }}
                    resizeMode="cover"
                />
            </Pressable>
            <Text
                style={{
                    marginTop: 8,
                    fontSize: 18,
                    fontFamily: 'Courgette',
                    marginLeft: 10
                }}>
                {item.item.author}
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
    const [page, setPage] = useState(0)
    const [limit] = useState(5);
    const [noMore, setNoMore] = useState(false)
    const [clientData, setClientData] = useState([]);
    const [serverData, serverDataLoaded] = useState([]);
    const [pending_process, setPending_process] = useState(true);
    const [loadmore, setLoadmore] = useState(false);
    const [refresh, setRefresh] = useState(false);

    /*    const ApiRequest = async thePage => {
           await setTimeout(() => {}, 1500);
           return itemList.slice((thePage - 1) * limit, thePage * limit);
         }; */

    const requestToServer = async (limit, page) => {
        getRandomPictures(limit, page).then(

            value => {
                if (value.length === 0)
                    setNoMore(true)
                else
                    serverDataLoaded(value)
            }
        ).catch(
            (err) => {
                console.log(err)
            }
        )
    }


    /*    useEffect(() => {
           console.log('requestToServer');
           requestToServer(limit, page);
           // setPage(page + 5)
       }, []); */

    useEffect(() => {
        //console.log('obtained serverData', serverData);
        //if (serverData.length > 0) {
        // setRefresh(false);
        setClientData([...clientData, ...serverData]);
        //setLoadmore(serverData.length == limit ? true : false);
        // setPending_process(false);
        //} /* else {
        //  setLoadmore(false);
        //} */
    }, [serverData]);

    useEffect(() => {
        console.log('load more with page', page);

        setPending_process(true);
        //setPage(page+1)
        requestToServer(limit, page);

    }, [page]);

    const handleLoadMore = () => {
        console.log('loadmore', loadmore);
        console.log('pending_process', pending_process);
        // requestToServer(page);
        // if (loadmore && !pending_process) {
        if (noMore)
            console.log("No more to load")
        else
            setPage(page + limit);

    };

    const onRefresh = () => {
        setClientData([]);
        setPage(0);
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
            {props.case ? <Text style={{ textDecorationLine: 'underline' }}>Preview : Please connect for more</Text> : <Text></Text>}

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
                onEndReachedThreshold={0.1}

                //onRefresh={() => onRefresh()}
                refreshing={refresh}

            />

        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    }
});