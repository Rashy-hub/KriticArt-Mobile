import { AppTitle } from "../components/AppTitle"
import { StatusBar, Text, View, Button, TextInput } from 'react-native';
import { PublicGallery } from "../components/PublicGallery";
import { ButtonSolid } from 'react-native-ui-buttons';


export const VisitorPage = () => {
    return (
        <View style={{ flex: 1 }}>

            <AppTitle />
            <View style={{ width: "60%", height: "20%", justifyContent: "flex-start", marginLeft: "20%" }}>
                <ButtonSolid
                    title={'Login'}
                    useColor={'darkblue'}

                />

                <ButtonSolid
                    title={'Register'}
                    useColor={'gray'}

                />
            </View>
            <PublicGallery case={true} />

        </View>
    )


}

