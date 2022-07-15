import React from "react";
import { AppTitle } from "../components/AppTitle"
import { StatusBar, Text, View, Button, TextInput } from 'react-native';
import { PublicGallery } from "../components/PublicGallery";
import { ButtonSolid } from 'react-native-ui-buttons';

export const VisitorPage = ({ navigation }) => {
    //const navigation = React.useContext(NavigationContext);
    //console.log("nav "+ JSON.stringify(navigation,null,4));
    return (
        <View style={{ flex: 1 }}>

            <AppTitle />
            <View style={{ width: "60%", height: "20%", justifyContent: "flex-start", marginLeft: "20%" }}>
                <ButtonSolid
                    title={'Login'}
                    onPress={() => navigation.navigate("login")}
                    useColor={'darkblue'}
                    style={{
                        marginBottom: 5, borderBottomWidth: 1, shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowOpacity: 0.8,
                        elevation: 6,
                        shadowRadius: 15,
                        shadowOffset: { width: 1, height: 13 },
                    }}

                />

                <ButtonSolid
                    title={'Register'}
                    onPress={() => navigation.navigate("register")}
                    useColor={'gray'}
                    style={{
                        marginTop: 5, borderBottomWidth: 1, shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowOpacity: 0.8,
                        elevation: 6,
                        shadowRadius: 15,
                        shadowOffset: { width: 1, height: 13 },

                    }}

                />
            </View>
            <PublicGallery case={true} />

        </View>
    )


}

