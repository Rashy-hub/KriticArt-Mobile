import React from "react";
import { AppTitle } from "../components/AppTitle"
import { StatusBar, Text, View, Button, TextInput } from 'react-native';
import { PublicGallery } from "../components/PublicGallery";
import {ButtonSolid} from 'react-native-ui-buttons';
import {Register} from '../components/Register'
import { NavigationContext } from '@react-navigation/native';





export const VisitorPage = ({navigation})=>{
    //const navigation = React.useContext(NavigationContext);
    //console.log("nav "+ JSON.stringify(navigation,null,4));
return(
    <View  style={{ flex: 1}}>

        <AppTitle />
        <View style={{width:"60%" , height :"20%",justifyContent:"flex-start",marginLeft:"20%"}}>
        <ButtonSolid
            title={'Login'}
            
            useColor={'darkblue'}
            
        /> 

        <ButtonSolid
            title={'Register'}
            onPress={()=>navigation.navigate("register")}
            useColor={'gray'}
            
        /> 
        </View> 
        <PublicGallery case={true}/>        
       
    </View>
    )

    
}

