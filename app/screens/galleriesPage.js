import { AppTitle } from "../components/AppTitle"
import { StatusBar, Text, View, Button, TextInput } from 'react-native';
import { PublicGallery } from "../components/PublicGallery";

export const GalleriesPage = ()=>{
return(
    <View  style={{ flex: 1}}>
        <AppTitle/> 
        <Text>Gestion des galleries</Text>  
       
    </View>
    )
}