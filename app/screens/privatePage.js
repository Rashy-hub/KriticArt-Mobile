import { AppTitle } from "../components/AppTitle"
import { StatusBar, Text, View, Button, TextInput } from 'react-native';
import { PrivateGallery } from "../components/PrivatesGallery";


export const PrivatePage = () => {
    return (
        <View style={{ flex: 1 }}>
            <AppTitle />
            <PrivateGallery />

        </View>
    )
}