import { AppTitle } from "../components/AppTitle"
import { StatusBar, Text, View, Button, TextInput, StyleSheet } from 'react-native';
import { PublicGallery } from "../components/PublicGallery";


export const HomePage = () => {
    return (
        <View style={{ flex: 1 }}>
            <AppTitle />

            {<PublicGallery case={false} />}

        </View>
    )


}
