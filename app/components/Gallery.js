import React,{useReducer,useRef} from "react";
import { Text, StyleSheet ,View,SafeAreaView,Image,ScrollView} from "react-native";


import { useFetch, useInfiniteScroll, useLazyLoading } from '../hooks/customHooks'




export const Gallery =()=>{

    const imgReducer = (state, action) => {
        switch (action.type) {
          case 'STACK_IMAGES':
            return { ...state, images: state.images.concat(action.images) }
          case 'FETCHING_IMAGES':
            return { ...state, fetching: action.fetching }
          default:
            return state;
        }
      }
    
      const pageReducer = (state, action) => {
        switch (action.type) {
          case 'ADVANCE_PAGE':
            return { ...state, page: state.page + 1 }
          default:
            return state;
        }
      }
    
      const [pager, pagerDispatch] = useReducer(pageReducer, { page: 0 })
      const [imgData, imgDispatch] = useReducer(imgReducer, { images: [], fetching: true, })
    
      let bottomBoundaryRef = useRef(null);
      useFetch(pager, imgDispatch);
      useLazyLoading('.cardimgtop', imgData.images)
      useInfiniteScroll(bottomBoundaryRef, pagerDispatch);
    
      return (
        <ScrollView style="styles.container">
 
	          <View style={styles.row}>
			
			{imgData.images.map((image, index) => {
                const { author, download_url } = image
                console.log(image)
                return (
                  <View key={index} style={styles.card}>
                    <View style={styles.cardbody}>
                      <Image
                        alt={author}
                        data-src={download_url}                        
                        source={{uri:download_url}}
                        style={{
                            height:  280,
                            alignSelf: 'stretch',
                        }}
                        resizeMode="cover"
                      />
                    </View>
                    <View style={styles.cardfooter}>
                      <Text style={styles.cardfootertext}>Shot by: {author}</Text>
                    </View>
                  </View>

                  
                )
            })}
			
            {imgData.fetching && (
        <View >
          <Text >Getting images</Text>
        </View>
      )}
			</View>           
            
            
           

    



</ScrollView>
      );

}

const styles = StyleSheet.create({

    card: {
        margin: 5,
        width: 300,
        height: 300,
      
    },

    cardimg :{

        width:"100%",
        height: "100%"

    }

  });


/* 
  .card img {
    width: 100%;
    height: 100%;
  }
  
  .card > .card-body {
    height: 100%;
    overflow: auto;
  } */