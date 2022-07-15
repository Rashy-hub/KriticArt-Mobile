import { AppTitle } from "../components/AppTitle"
import { StatusBar, Text, View, Button, TextInput, StyleSheet } from 'react-native';
import { useAtom } from 'jotai'
import { themeAtom } from "../atom";
import themes from '../styles/theme'
import Bouton from "../components/Bouton";

export const ComptePage = ({ navigation }) => {
    const [theme, updateTheme] = useAtom(themeAtom)

    function LogoutUser() {

        navigation.navigate("visitor")
    }
    return (
        <View style={styles.container}>
            <AppTitle />
            <Text>Gestion de votre compte</Text>
            <Bouton style={styles.myButtons} title='Changer de thème (Dark <=> Light)'
                onPress={() => { updateTheme(theme === themes.Dark ? themes.Light : themes.Dark) }} />
            <Bouton onPress={() => LogoutUser()} title='Logout/admin' />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
})
